# C盘清理脚本 - 将可移动文件夹迁移到D盘
# 必须以管理员身份运行!

param(
    [switch]$DryRun,
    [switch]$SkipSystemFolders,
    [switch]$SkipToolCaches
)

$ErrorActionPreference = "Stop"
$UserProfile = $env:USERPROFILE
$UserName = $env:USERNAME
$DPrefix = "D:\"

function Write-Step {
    param([string]$Message, [string]$Color = "Cyan")
    Write-Host "`n============================================================" -ForegroundColor $Color
    Write-Host "  $Message" -ForegroundColor $Color
    Write-Host "============================================================" -ForegroundColor $Color
}

function Test-Admin {
    $isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
    if (-not $isAdmin) {
        Write-Host "[错误] 请以管理员身份运行此脚本!" -ForegroundColor Red
        Write-Host "右键点击 PowerShell → 以管理员身份运行，然后重新执行此脚本。" -ForegroundColor Yellow
        exit 1
    }
    Write-Host "[OK] 管理员权限检查通过" -ForegroundColor Green
}

function Move-And-Junction {
    param(
        [string]$Source,
        [string]$Dest,
        [string]$Description
    )

    if (-not (Test-Path $Source)) {
        Write-Host "[跳过] $Description - 源路径不存在: $Source" -ForegroundColor Yellow
        return $false
    }

    if (Test-Path $Dest) {
        Write-Host "[跳过] $Description - 目标已存在: $Dest" -ForegroundColor Yellow
        return $false
    }

    if ($Source.TrimEnd('\') -eq $Dest.TrimEnd('\')) {
        Write-Host "[错误] $Description - 源和目标路径相同!" -ForegroundColor Red
        return $false
    }

    $sourceSize = (Get-ChildItem -Path $Source -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    $sourceSizeGB = [math]::Round($sourceSize / 1GB, 2)
    Write-Host "[移动] $Description ($sourceSizeGB GB)" -ForegroundColor Green
    Write-Host "  源: $Source" -ForegroundColor Gray
    Write-Host "  目标: $Dest" -ForegroundColor Gray

    if ($DryRun) {
        Write-Host "  [模拟模式] 跳过实际移动" -ForegroundColor DarkYellow
        return $true
    }

    $parentDest = Split-Path $Dest -Parent
    if (-not (Test-Path $parentDest)) {
        New-Item -ItemType Directory -Path $parentDest -Force | Out-Null
    }

    $exitCode = 0
    $robocopyCmd = "robocopy `"$Source`" `"$Dest`" /E /MOVE /R:3 /W:5 /NP /NDL /NFL"
    $result = cmd /c $robocopyCmd 2>&1
    $exitCode = $LASTEXITCODE

    if ($exitCode -ge 8) {
        Write-Host "  [错误] robocopy 失败，退出码: $exitCode" -ForegroundColor Red
        Write-Host "  $result" -ForegroundColor Red
        return $false
    }

    if (Test-Path $Source) {
        Remove-Item -Path $Source -Recurse -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
    }

    if (Test-Path $Source) {
        Write-Host "  [警告] 源目录残留，可能有文件被占用" -ForegroundColor Yellow
    }

    $cmdMklink = "cmd /c mklink /J `"$Source`" `"$Dest`""
    Invoke-Expression $cmdMklink | Out-Null

    if (Test-Path $Source) {
        Write-Host "  [OK] 目录链接创建成功" -ForegroundColor Green
        Write-Host "  $Source --> $Dest" -ForegroundColor Gray
        return $true
    } else {
        Write-Host "  [失败] 符号链接创建失败" -ForegroundColor Red
        return $false
    }
}

function Move-SystemUserFolder {
    param(
        [string]$FolderName,
        [string]$DestFolder,
        [string]$Description
    )

    $sourcePath = Join-Path $UserProfile $FolderName

    if (-not (Test-Path $sourcePath)) {
        Write-Host "[跳过] $Description - 源路径不存在" -ForegroundColor Yellow
        return $false
    }

    if (Test-Path $DestFolder) {
        Write-Host "[警告] $Description - 目标路径已存在，将合并内容" -ForegroundColor Yellow
    }

    $sourceSize = (Get-ChildItem -Path $sourcePath -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    $sourceSizeGB = [math]::Round($sourceSize / 1GB, 2)
    Write-Host "[迁移] $Description ($sourceSizeGB GB)" -ForegroundColor Green
    Write-Host "  旧位置: $sourcePath" -ForegroundColor Gray
    Write-Host "  新位置: $DestFolder" -ForegroundColor Gray

    if ($DryRun) {
        Write-Host "  [模拟模式] 跳过实际迁移" -ForegroundColor DarkYellow
        return $true
    }

    if (-not (Test-Path $DestFolder)) {
        New-Item -ItemType Directory -Path $DestFolder -Force | Out-Null
    }

    $items = Get-ChildItem -Path $sourcePath
    $totalItems = ($items | Measure-Object).Count
    $current = 0
    foreach ($item in $items) {
        $current++
        $destItem = Join-Path $DestFolder $item.Name
        Write-Progress -Activity "迁移 $Description" -Status "$current / $totalItems" -PercentComplete (($current / $totalItems) * 100)
        try {
            if ($item.PSIsContainer) {
                if (Test-Path $destItem) {
                    robocopy $item.FullName $destItem /E /MOVE /R:1 /W:2 /NP /NDL /NFL 2>&1 | Out-Null
                } else {
                    Move-Item -Path $item.FullName -Destination $destItem -Force -ErrorAction Stop
                }
            } else {
                if (Test-Path $destItem) {
                    Remove-Item $destItem -Force -ErrorAction SilentlyContinue
                }
                Move-Item -Path $item.FullName -Destination $DestFolder -Force -ErrorAction Stop
            }
        } catch {
            Write-Host "  [警告] 移动 $($item.Name) 失败: $_" -ForegroundColor Yellow
        }
    }
    Write-Progress -Activity "迁移 $Description" -Completed

    $regPath = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders"
    $regValue = Get-ItemProperty -Path $regPath -Name $FolderName -ErrorAction SilentlyContinue
    if ($regValue) {
        Set-ItemProperty -Path $regPath -Name $FolderName -Value $DestFolder
        Write-Host "  [OK] 注册表已更新" -ForegroundColor Green
    }

    $restartExplorer = $true
    if ($restartExplorer) {
        Write-Host "  [提示] 建议重启资源管理器或注销后重新登录使更改生效" -ForegroundColor Yellow
    }

    return $true
}

# ============================================================
# 主流程
# ============================================================

Write-Host @"
╔══════════════════════════════════════════════╗
║          C盘清理迁移脚本 v1.0                ║
║  将用户文件夹迁移到D盘并创建符号链接         ║
╚══════════════════════════════════════════════╝
"@ -ForegroundColor Magenta

Test-Admin

if ($DryRun) {
    Write-Host "[模拟模式] 不会进行实际修改，仅展示将要执行的操作" -ForegroundColor DarkYellow
}

# ---- 第1步: 迁移非系统大文件夹 ----

Write-Step "第1步: 迁移 knowledge-base (15.6 GB)" -Color Green
Move-And-Junction `
    -Source "$UserProfile\knowledge-base" `
    -Dest "$DPrefix\knowledge-base" `
    -Description "knowledge-base"

# ---- 第2步: 迁移 VirtualBox VMs ----

Write-Step "第2步: 迁移 VirtualBox VMs (837 MB)" -Color Green
$vmSource = "$UserProfile\VirtualBox VMs"
if (Test-Path $vmSource) {
    $runningVMs = Get-Process -Name "VirtualBox*" -ErrorAction SilentlyContinue
    if ($runningVMs) {
        Write-Host "[警告] VirtualBox 正在运行，请先关闭所有虚拟机!" -ForegroundColor Yellow
        Write-Host "  如果继续，虚拟磁盘文件可能因被锁定而无法移动" -ForegroundColor Yellow
    }
}
Move-And-Junction `
    -Source $vmSource `
    -Dest "$DPrefix\VMs\VirtualBox VMs" `
    -Description "VirtualBox VMs"

# ---- 第3步: 迁移 IDE 和工具缓存 ----

if (-not $SkipToolCaches) {
    Write-Step "第3步: 迁移 IDE 和工具缓存 (~2.1 GB)" -Color Green

    $cacheFolders = @(
        @{Name=".trae-cn";      Desc="Trae IDE 缓存";       Size="707 MB"},
        @{Name=".workbuddy";    Desc="WorkBuddy 缓存";      Size="419 MB"},
        @{Name=".qoderwork";    Desc="Qoder 工作区";        Size="415 MB"},
        @{Name=".paddlex";      Desc="PaddleX AI 模型";     Size="209 MB"},
        @{Name=".claude";       Desc="Claude AI 缓存";      Size="144 MB"},
        @{Name=".lingma";       Desc="Lingma 缓存";         Size="95 MB"},
        @{Name=".ai_completion"; Desc="AI 补全缓存";        Size="5 MB"},
        @{Name=".qoder";        Desc="Qoder 配置";          Size="<1 MB"},
        @{Name=".Trash";        Desc="回收站缓存";          Size="<15 MB"}
    )

    foreach ($folder in $cacheFolders) {
        $src = Join-Path $UserProfile $folder.Name
        $dst = "$DPrefix\ToolCaches\$($folder.Name)"
        Move-And-Junction -Source $src -Dest $dst -Description $folder.Desc
    }
}

# ---- 第4步: 迁移系统用户文件夹 ----

if (-not $SkipSystemFolders) {
    Write-Step "第4步: 迁移系统用户文件夹到 D:\UserFolders\" -Color Green

    $systemFolders = @(
        @{Name="Documents";  Dest="$DPrefix\UserFolders\Documents";  Desc="文档"},
        @{Name="Downloads";  Dest="$DPrefix\UserFolders\Downloads";  Desc="下载"},
        @{Name="Desktop";    Dest="$DPrefix\UserFolders\Desktop";    Desc="桌面"}
    )

    foreach ($folder in $systemFolders) {
        Move-SystemUserFolder -FolderName $folder.Name -DestFolder $folder.Dest -Description $folder.Desc
    }

    Write-Host "`n[提示] 系统文件夹迁移完成后，建议:" -ForegroundColor Yellow
    Write-Host "  1. 注销当前用户并重新登录" -ForegroundColor Yellow
    Write-Host "  2. 验证文件是否在 D:\UserFolders\ 下" -ForegroundColor Yellow
    Write-Host "  3. 确认 C:\Users\$UserName\ 下对应的文件夹内文件已清空" -ForegroundColor Yellow
}

# ---- 第5步: 清理临时文件 ----

Write-Step "第5步: 清理临时文件" -Color Green

$tempPaths = @(
    "$env:TEMP",
    "$env:SystemRoot\Temp",
    "$env:LOCALAPPDATA\Temp"
)

foreach ($tempPath in $tempPaths) {
    if (Test-Path $tempPath) {
        try {
            $beforeItems = (Get-ChildItem $tempPath -Recurse -ErrorAction SilentlyContinue | Measure-Object).Count
            if ($beforeItems -gt 0) {
                if (-not $DryRun) {
                    Get-ChildItem $tempPath -Recurse -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
                }
                Write-Host "  清理: $tempPath (约 $beforeItems 个项目)" -ForegroundColor Gray
            }
        } catch {
            Write-Host "  [警告] 清理 $tempPath 时出错: $_" -ForegroundColor Yellow
        }
    }
}

# 磁盘清理工具
Write-Host "`n  运行系统磁盘清理..." -ForegroundColor Gray
if (-not $DryRun) {
    cleanmgr /sagerun:1 2>$null
}

# ---- 第6步: 汇总报告 ----

Write-Step "汇总报告" -Color Magenta

Write-Host @"

迁移操作总结:
--------------------------------------------------
| 项目                       | 大小       | 状态
--------------------------------------------------
| knowledge-base            | 15.6 GB   | → D:\knowledge-base
| VirtualBox VMs            | 837 MB    | → D:\VMs\
| IDE/工具缓存 (.trae-cn等) | ~2.1 GB   | → D:\ToolCaches\
| Documents                 | 12.6 GB   | → D:\UserFolders\Documents
| Downloads                 | 1.4 GB    | → D:\UserFolders\Downloads
| Desktop                   | 336 MB    | → D:\UserFolders\Desktop
--------------------------------------------------
| 预计释放空间               | ~32 GB
--------------------------------------------------

"@ -ForegroundColor White

Write-Host "[完成] 脚本执行完毕!" -ForegroundColor Green
Write-Host "如果使用了 --DryRun 参数，请移除该参数后重新运行以实际执行迁移。" -ForegroundColor Yellow
