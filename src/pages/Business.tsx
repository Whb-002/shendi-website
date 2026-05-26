import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Download, FileText, CheckCircle, ChevronRight, ArrowRight,
  Globe, Cpu, Wrench, BarChart3, Lightbulb, GraduationCap,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionTitle from '@/components/ui/SectionTitle'
import { servicesMock, downloadsMock } from '@/utils/mockData'
import { submitInquiry, fetchDownloads } from '@/utils/api'

const STEP_LABELS = ['选择服务', '填写信息', '提交成功']
const CATEGORIES = ['全部', '企业资料', '技术资料', '业务资料']

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, Cpu, Wrench, BarChart3, Lightbulb, GraduationCap,
}

export default function Business() {
  const [activeTab, setActiveTab] = useState<'appointment' | 'download'>('appointment')
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    projectName: '', projectLocation: '', description: '',
    contactName: '', contactPhone: '', contactEmail: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [downloadCategory, setDownloadCategory] = useState('全部')
  const [downloads, setDownloads] = useState(downloadsMock)
  const [downloadsLoading, setDownloadsLoading] = useState(false)

  const loadDownloads = useCallback(async (category: string) => {
    setDownloadsLoading(true)
    try {
      const cat = category === '全部' ? undefined : category
      const data = await fetchDownloads(cat)
      setDownloads(data)
    } catch {
      setDownloads(
        category === '全部'
          ? downloadsMock
          : downloadsMock.filter((d) => d.category === category)
      )
    } finally {
      setDownloadsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeTab === 'download' && downloads.length === downloadsMock.length) {
      loadDownloads('全部')
    }
  }, [activeTab, loadDownloads, downloads.length])

  const handleCategoryChange = (cat: string) => {
    setDownloadCategory(cat)
    loadDownloads(cat)
  }

  const handleServiceSelect = (name: string) => {
    setSelectedService(name)
  }

  const handleNextStep = () => {
    if (step === 1 && !selectedService) return
    if (step === 2) {
      if (!formData.projectName || !formData.contactName || !formData.contactPhone || !formData.contactEmail) return
    }
    if (step === 2) {
      handleSubmit()
      return
    }
    setStep((prev) => Math.min(prev + 1, 3) as 1 | 2 | 3)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')
    try {
      const inquiryData = {
        serviceType: selectedService,
        projectName: formData.projectName,
        projectLocation: formData.projectLocation,
        description: formData.description,
        contactName: formData.contactName,
        contactPhone: formData.contactPhone,
        contactEmail: formData.contactEmail,
      }
      await submitInquiry(inquiryData)
      setStep(3)
    } catch {
      setSubmitError('提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const filteredDownloads = downloadsMock.filter(
    (d) => downloadCategory === '全部' || d.category === downloadCategory
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <SectionTitle
              title="在线业务"
              subtitle="便捷的在线服务预约与资料下载，随时随地获取专业支持"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="flex gap-2 mb-10">
          {['appointment', 'download'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'appointment' | 'download')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {tab === 'appointment' ? '服务预约' : '资料下载'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'appointment' ? (
            <motion.div
              key="appointment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
                {STEP_LABELS.map((label, index) => (
                  <div key={label} className="flex items-center">
                    <div
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        step >= index + 1
                          ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white shadow-lg shadow-[#0066ff]/20'
                          : 'glass text-gray-500'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        step >= index + 1 ? 'bg-white/20' : 'bg-white/5'
                      }`}>
                        {index + 1}
                      </span>
                      {label}
                    </div>
                    {index < STEP_LABELS.length - 1 && (
                      <ChevronRight size={20} className="text-gray-600 mx-1" />
                    )}
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                    >
                      <h3 className="text-xl font-bold mb-6">选择您需要的服务类型</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {servicesMock.services.map((service) => {
                          const IconComp = ICON_MAP[service.icon]
                          const isSelected = selectedService === service.name
                          return (
                            <motion.button
                              key={service.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleServiceSelect(service.name)}
                              className={`p-5 rounded-xl text-left transition-all duration-300 ${
                                isSelected
                                  ? 'bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/10 border border-[#00d4ff]/50 shadow-lg shadow-[#00d4ff]/10'
                                  : 'glass border border-[#00d4ff]/10 hover:border-[#00d4ff]/25'
                              }`}
                            >
                              <div className="flex items-start gap-4">
                                <div className={`p-2.5 rounded-lg ${
                                  isSelected ? 'bg-[#00d4ff]/20 text-[#00d4ff]' : 'bg-white/5 text-gray-400'
                                }`}>
                                  {IconComp && <IconComp size={22} />}
                                </div>
                                <div>
                                  <h4 className="font-medium mb-1">{service.name}</h4>
                                  <p className="text-sm text-gray-400">{service.summary}</p>
                                </div>
                              </div>
                            </motion.button>
                          )
                        })}
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={handleNextStep}
                          disabled={!selectedService}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-medium hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          下一步 <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                    >
                      <h3 className="text-xl font-bold mb-6">填写项目信息</h3>
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <FormField label="项目名称 *" name="projectName" value={formData.projectName} onChange={handleFormChange} placeholder="请输入项目名称" />
                          <FormField label="项目地点" name="projectLocation" value={formData.projectLocation} onChange={handleFormChange} placeholder="请输入项目地点" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">需求描述</label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleFormChange}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                            placeholder="请描述您的项目需求..."
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <FormField label="联系人姓名 *" name="contactName" value={formData.contactName} onChange={handleFormChange} placeholder="请输入姓名" />
                          <FormField label="联系电话 *" name="contactPhone" value={formData.contactPhone} onChange={handleFormChange} placeholder="请输入电话" />
                          <FormField label="联系邮箱 *" name="contactEmail" value={formData.contactEmail} onChange={handleFormChange} placeholder="请输入邮箱" type="email" />
                        </div>
                      </div>
                      {submitError && (
                        <p className="text-red-400 text-sm mt-3">{submitError}</p>
                      )}
                      <div className="flex justify-between mt-8">
                        <button
                          onClick={() => setStep(1)}
                          className="px-6 py-3 rounded-lg glass text-gray-300 hover:text-white transition-all"
                        >
                          上一步
                        </button>
                        <button
                          onClick={handleNextStep}
                          disabled={isSubmitting || !formData.projectName || !formData.contactName || !formData.contactPhone || !formData.contactEmail}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-medium hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? '提交中...' : '提交预约'}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle size={40} className="text-success" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3">提交成功</h3>
                      <p className="text-gray-400 mb-8">我们将在24小时内与您联系，请保持电话畅通</p>
                      <button
                        onClick={() => { setStep(1); setSelectedService(''); setFormData({ projectName: '', projectLocation: '', description: '', contactName: '', contactPhone: '', contactEmail: '' }) }}
                        className="px-6 py-3 rounded-lg glass text-gray-300 hover:text-white transition-all"
                      >
                        返回首页
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="download"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">资料下载</h3>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        downloadCategory === cat
                          ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white'
                          : 'glass text-gray-300 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                {downloadsLoading ? (
                  <div className="text-center py-12 text-gray-400">加载中...</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b border-white/10">
                          <th className="pb-3 text-sm font-medium text-gray-400">文件名</th>
                          <th className="pb-3 text-sm font-medium text-gray-400">分类</th>
                          <th className="pb-3 text-sm font-medium text-gray-400">大小</th>
                          <th className="pb-3 text-sm font-medium text-gray-400">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDownloads.map((file, index) => (
                          <motion.tr
                            key={file.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                          >
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <FileText size={18} className="text-[#00d4ff]" />
                                <span className="text-sm">{file.name}</span>
                              </div>
                            </td>
                            <td className="py-4">
                              <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                                {file.category}
                              </span>
                            </td>
                            <td className="py-4 text-sm text-gray-400">{file.fileSize}</td>
                            <td className="py-4">
                              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] text-sm hover:bg-[#00d4ff]/20 transition-colors">
                                <Download size={14} /> 下载
                              </button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function FormField({ label, name, value, onChange, placeholder, type = 'text' }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
        placeholder={placeholder} />
    </div>
  )
}
