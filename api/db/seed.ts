import jsonDb from './database.js'

function seedNews(): void {
  const existing = jsonDb.getAll('news')
  if (existing.length > 0) return

  const news = [
    {
      title: '我公司顺利完成川藏铁路某段地质勘察项目',
      summary: '近日，深维地信科技顺利完成川藏铁路某重点区段的地质勘察工作，为铁路建设提供了坚实的技术支撑。',
      content: '<p>近日，深维地信科技（四川）有限公司顺利完成川藏铁路某重点区段的地质勘察工作。该项目地处高山峡谷地带，地质条件复杂，海拔落差大，施工难度极高。</p><p>公司技术团队采用地质雷达、高密度电法、瞬变电磁等多种物探方法，结合钻探验证，查明了线路沿线的地层结构、断层分布及不良地质体发育情况，为铁路设计提供了可靠的地质依据。</p>',
      cover_image: '',
      category: 'company',
      publish_date: '2025-06-15 10:00:00',
      view_count: 328,
    },
    {
      title: '深维地信科技荣获四川省高新技术企业认定',
      summary: '我公司正式通过四川省高新技术企业认定，标志着公司在技术创新方面迈上新台阶。',
      content: '<p>近日，深维地信科技（四川）有限公司正式通过四川省高新技术企业认定。这是对公司在地质勘查、地球物理探测、遥感测绘及GIS系统开发等领域技术创新能力的高度肯定。</p><p>自成立以来，公司始终坚持"技术立企、创新驱动"的发展理念，持续加大研发投入，已获得多项软件著作权和专利技术。此次高新技术企业认定将进一步推动公司在地学领域的技术创新和业务拓展。</p>',
      cover_image: '',
      category: 'company',
      publish_date: '2025-05-20 14:30:00',
      view_count: 215,
    },
    {
      title: '公司与四川大学地球物理学院达成产学研合作协议',
      summary: '深维地信科技与四川大学地球物理学院签署产学研合作协议，共同推动地球物理勘探技术研发和人才培养。',
      content: '<p>2025年4月，深维地信科技（四川）有限公司与四川大学地球物理学院正式签署产学研合作协议。双方将在地球物理勘探新技术研究、研究生联合培养、科研成果转化等方面开展深度合作。</p>',
      cover_image: '',
      category: 'company',
      publish_date: '2025-04-10 09:00:00',
      view_count: 187,
    },
    {
      title: '2025年地学人工智能技术发展前沿论坛在成都举办',
      summary: '第五届地学人工智能技术发展前沿论坛在成都举行，深维地信科技应邀参加并作主题报告。',
      content: '<p>2025年3月，第五届地学人工智能技术发展前沿论坛在成都成功举办。深维地信科技技术总监在会上作了题为"深度学习在地球物理反演中的应用探索"的主题报告，引起了与会专家的广泛关注。</p>',
      cover_image: '',
      category: 'industry',
      publish_date: '2025-03-22 16:00:00',
      view_count: 456,
    },
    {
      title: '关于开展2025年度内部技术培训的通知',
      summary: '公司将于7月开展年度内部技术培训，涵盖地质雷达、高密度电法、无人机航测等技术内容。',
      content: '<p>各部门：</p><p>为进一步提升公司技术人员专业水平，公司决定于2025年7月开展内部技术培训。培训内容：地质雷达技术、高密度电法、无人机航测、GIS数据处理。请各部门于6月30日前将参训人员名单报送至技术质量部。</p>',
      cover_image: '',
      category: 'notice',
      publish_date: '2025-06-01 08:00:00',
      view_count: 98,
    },
    {
      title: '关于2025年端午节放假安排的通知',
      summary: '根据国家节假日安排，公司2025年端午节放假时间为6月8日至6月10日，共3天。',
      content: '<p>全体员工：</p><p>根据国家节假日安排，2025年端午节放假时间为6月8日至6月10日，共3天。请各部门做好工作安排，野外项目组请注意安全生产。祝全体员工端午安康！</p>',
      cover_image: '',
      category: 'notice',
      publish_date: '2025-06-05 17:00:00',
      view_count: 73,
    },
  ]

  for (const item of news) {
    jsonDb.insert('news', item)
  }
  console.log('News seed data inserted')
}

function seedServices(): void {
  const existing = jsonDb.getAll('services')
  if (existing.length > 0) return

  const services = [
    {
      name: '地质矿产勘查',
      icon: 'Mountain',
      summary: '提供矿产资源勘查、储量评估、矿山地质服务等一站式解决方案',
      description: '<p>深维地信科技在地质矿产勘查领域拥有丰富经验，可提供从区域地质调查、矿产普查、详查到勘探的全流程技术服务。</p><h3>服务内容</h3><ul><li>区域地质调查与矿产远景评价</li><li>固体矿产勘查（金属矿、非金属矿）</li><li>矿产资源储量核实与评估</li><li>矿山地质环境监测与恢复治理</li><li>地质勘查报告编制</li></ul>',
      banner_image: '',
      specs_json: JSON.stringify([{ name: '勘查资质', value: '固体矿产勘查' }, { name: '技术手段', value: '地质填图、化探、物探、钻探、坑探' }, { name: '报告类型', value: '普查报告、详查报告、勘探报告、储量核实报告' }]),
      cases_json: JSON.stringify([{ title: '四川省甘孜州某铜矿普查项目', desc: '完成1:10000地质填图20km²，圈定矿化带3条' }, { title: '攀西地区某钒钛磁铁矿储量核实', desc: '完成储量核实报告编制并通过评审' }]),
      category: '地质勘查',
    },
    {
      name: '地球物理探测',
      icon: 'Radio',
      summary: '运用重力、磁法、电法、地震等多种物探方法解决地质问题',
      description: '<p>公司拥有国内外先进的地球物理探测设备，技术团队经验丰富，可独立完成各类地球物理勘探项目。</p><h3>主要方法</h3><ul><li>高精度重力测量</li><li>地面高精度磁法测量</li><li>高密度电法与激电测量</li><li>瞬变电磁法（TEM）</li><li>地质雷达探测</li><li>浅层地震勘探</li><li>大地电磁测深（MT/AMT）</li></ul>',
      banner_image: '',
      specs_json: JSON.stringify([{ name: '仪器设备', value: 'CG-5重力仪、GSM-19T磁力仪、GDP-32电法仪、SIR-4000地质雷达' }, { name: '探测深度', value: '地表至2000m' }, { name: '适用范围', value: '矿产勘查、工程勘察、水文地质、地热勘查' }]),
      cases_json: JSON.stringify([{ title: '川藏铁路某隧道物探勘察', desc: '采用地雷达和高密度电法查明隧道围岩完整性' }, { title: '四川某地热田物探勘查', desc: '综合采用重力、磁法、MT方法圈定地热异常区' }]),
      category: '地球物理',
    },
    {
      name: '遥感与测绘',
      icon: 'Satellite',
      summary: '提供卫星遥感解译、无人机航测、三维激光扫描等空间信息采集服务',
      description: '<p>公司配备专业无人机航测系统、三维激光扫描仪等先进设备，具备多源遥感数据处理能力。</p><h3>服务内容</h3><ul><li>无人机航空摄影测量</li><li>卫星遥感影像处理与解译</li><li>三维激光扫描与建模</li><li>工程测量与地形测绘</li><li>地质遥感找矿与灾害遥感监测</li><li>实景三维建模</li></ul>',
      banner_image: '',
      specs_json: JSON.stringify([{ name: '无人机系统', value: '大疆M300 RTK、飞马D2000' }, { name: '航测精度', value: '1:500比例尺' }, { name: '数据处理', value: 'Pix4D、ContextCapture、TerraSolid' }]),
      cases_json: JSON.stringify([{ title: '某矿山尾矿库三维建模', desc: '采用无人机航测完成尾矿库三维实景建模' }, { title: '某县地质灾害遥感调查', desc: '利用InSAR和高分遥感影像开展地质灾害隐患识别' }]),
      category: '测绘地理信息',
    },
    {
      name: 'GIS系统开发',
      icon: 'Map',
      summary: '定制开发地质矿产信息系统、灾害监测预警平台等GIS应用软件',
      description: '<p>公司拥有一支专业的GIS开发团队，可为客户定制开发各类地理信息系统和地质专业应用软件。</p><h3>开发能力</h3><ul><li>矿产资源管理与储量动态监管系统</li><li>地质灾害监测预警信息平台</li><li>三维地质建模与可视化系统</li><li>矿山安全生产管理信息系统</li><li>地质资料数字化与数据库建设</li><li>WebGIS与移动端GIS应用开发</li></ul>',
      banner_image: '',
      specs_json: JSON.stringify([{ name: '技术栈', value: 'Cesium、Leaflet、GeoServer、PostGIS、Three.js' }, { name: '开发平台', value: 'Web端、桌面端、移动端' }, { name: '数据格式', value: 'Shapefile、GeoJSON、KML、GeoTIFF、DXF' }]),
      cases_json: JSON.stringify([{ title: '某市地质灾害监测预警平台', desc: '集成实时监测数据和气象预报的地灾预警系统' }, { title: '某矿山三维可视化管理系统', desc: '基于Cesium的矿山三维场景展示与管理平台' }]),
      category: '信息系统',
    },
    {
      name: '环境地质评价',
      icon: 'Leaf',
      summary: '开展环境影响评价、地下水评价、土壤污染调查等环境地质服务',
      description: '<p>公司具备环境地质调查评价能力，可为工程建设和资源开发提供环境地质技术支撑。</p><h3>服务内容</h3><ul><li>建设项目环境影响评价</li><li>地下水环境影响评价</li><li>土壤污染状况调查与风险评估</li><li>矿山地质环境保护与土地复垦方案</li><li>地质灾害危险性评估</li><li>地质遗迹与地质公园调查评价</li></ul>',
      banner_image: '',
      specs_json: JSON.stringify([{ name: '评价类型', value: '环境影响评价、地质灾害评估、场地调查' }, { name: '资质标准', value: '地质灾害评估、环评从业能力' }, { name: '覆盖区域', value: '四川省及周边地区' }]),
      cases_json: JSON.stringify([{ title: '某工业园区规划环评', desc: '完成环境影响评价报告书编制并通过专家评审' }, { title: '某矿山地质环境保护与土地复垦方案', desc: '编制矿山恢复治理方案并通过自然资源部门审查' }]),
      category: '环境地质',
    },
    {
      name: '工程检测监测',
      icon: 'HardHat',
      summary: '提供工程物探检测、桩基检测、隧道超前预报、变形监测等技术服务',
      description: '<p>公司具备工程检测监测综合能力，可为基础设施建设提供全过程检测监测技术服务。</p><h3>服务内容</h3><ul><li>桩基完整性检测与承载力检测</li><li>隧道超前地质预报</li><li>边坡与基坑变形监测</li><li>建（构）筑物沉降观测</li><li>桥梁结构检测与监测</li><li>地基基础检测</li></ul>',
      banner_image: '',
      specs_json: JSON.stringify([{ name: '检测方法', value: '声波透射法、低应变法、高应变法、静载试验' }, { name: '监测手段', value: 'GNSS、全站仪、测斜仪、沉降仪、分布式光纤' }, { name: '适用工程', value: '铁路、公路、水利、市政、矿山' }]),
      cases_json: JSON.stringify([{ title: '某高速公路隧道超前预报', desc: '采用TSP和地质雷达进行隧道超前地质预报' }, { title: '某大桥桩基检测', desc: '完成全部桩基的声波透射法完整性检测' }]),
      category: '工程检测',
    },
  ]

  for (const item of services) {
    jsonDb.insert('services', item)
  }
  console.log('Services seed data inserted')
}

function seedDownloads(): void {
  const existing = jsonDb.getAll('downloads')
  if (existing.length > 0) return

  const downloads = [
    {
      name: '深维地信科技公司介绍手册',
      category: '公司资料',
      file_path: '/downloads/company-brochure.pdf',
      file_size: '5.2 MB',
      download_count: 156,
      created_at: '2025-01-01 00:00:00',
    },
    {
      name: '地质矿产勘查技术指南',
      category: '技术资料',
      file_path: '/downloads/mineral-exploration-guide.pdf',
      file_size: '12.8 MB',
      download_count: 89,
      created_at: '2025-01-01 00:00:00',
    },
    {
      name: '地球物理探测方法简介',
      category: '技术资料',
      file_path: '/downloads/geophysical-methods-intro.pdf',
      file_size: '8.6 MB',
      download_count: 67,
      created_at: '2025-01-01 00:00:00',
    },
  ]

  for (const item of downloads) {
    jsonDb.insert('downloads', item)
  }
  console.log('Downloads seed data inserted')
}

export function seed(): void {
  seedNews()
  seedServices()
  seedDownloads()
  console.log('All seed data initialized')
}
