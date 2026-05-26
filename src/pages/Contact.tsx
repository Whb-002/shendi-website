import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Map as MapIcon, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionTitle from '@/components/ui/SectionTitle'
import { fetchContactInfo, submitContactMessage } from '@/utils/api'
import { companyData } from '@/utils/mockData'

interface ContactInfo {
  address: string
  phone: string
  email: string
  workHours: string
}

const fallbackInfo: ContactInfo = {
  address: companyData.address,
  phone: companyData.phone,
  email: companyData.email,
  workHours: '周一至周五 9:00 - 18:00',
}

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(fallbackInfo)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', company: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    let cancelled = false
    fetchContactInfo()
      .then((data) => { if (!cancelled) setContactInfo(data) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.email || !formData.message) return
    setIsSubmitting(true)
    setSubmitError('')
    try {
      await submitContactMessage({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      })
      setSubmitted(true)
    } catch {
      setSubmitError('提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formFields = [
    { label: '姓名 *', name: 'name', placeholder: '请输入您的姓名' },
    { label: '电话 *', name: 'phone', placeholder: '请输入联系电话' },
    { label: '邮箱 *', name: 'email', placeholder: '请输入邮箱地址', type: 'email' },
    { label: '公司名称', name: 'company', placeholder: '请输入公司名称' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <SectionTitle title="联系我们" subtitle="无论是产品咨询、技术支持还是合作洽谈，我们都期待与您交流" />
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="hover:text-gray-300 cursor-pointer transition-colors">首页</span>
              <ChevronRight size={14} />
              <span className="text-gray-300">联系我们</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: MapPin, title: '公司地址', value: contactInfo.address },
              { icon: Phone, title: '联系电话', value: contactInfo.phone },
              { icon: Mail, title: '电子邮箱', value: contactInfo.email },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 flex items-start gap-4 hover:border-[#00d4ff]/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] group-hover:bg-[#00d4ff]/20 transition-colors">
                  <card.icon size={22} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass rounded-xl overflow-hidden mb-12">
            <div className="aspect-[21/9] bg-surface-dark flex flex-col items-center justify-center relative">
              <MapIcon size={48} className="text-[#00d4ff]/30 mb-4" />
              <p className="text-gray-400 text-sm mb-2">四川省成都市高新区天府大道中段688号</p>
              <p className="text-gray-500 text-xs">点击查看百度地图</p>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-dark/80 pointer-events-none" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-xl p-8">
                <h2 className="text-xl font-bold mb-6">在线留言</h2>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle size={32} className="text-success" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">留言提交成功</h3>
                      <p className="text-gray-400 mb-6">我们将在24小时内与您联系，感谢您的关注</p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', company: '', message: '' }) }}
                        className="px-6 py-3 rounded-lg glass text-gray-300 hover:text-white transition-all"
                      >
                        继续留言
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {formFields.map((field) => (
                          <div key={field.name}>
                            <label className="block text-sm font-medium mb-2">{field.label}</label>
                            <input
                              type={field.type || 'text'}
                              name={field.name}
                              value={formData[field.name as keyof typeof formData]}
                              onChange={handleChange}
                              required={field.label.includes('*')}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
                              placeholder={field.placeholder}
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">留言内容 *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                          placeholder="请输入您的咨询内容..."
                        />
                      </div>
                      {submitError && <p className="text-red-400 text-sm">{submitError}</p>}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 text-base font-medium rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          '提交中...'
                        ) : (
                          <>
                            <Send size={18} /> 提交留言
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="glass rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-bold">工作时间</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-medium">{contactInfo.workHours}</p>
                  <p className="text-sm text-gray-400 mt-1">法定节假日除外</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-success/10 text-success">
                    <CheckCircle size={22} />
                  </div>
                  <div>
                    <p className="font-medium">响应时效承诺</p>
                    <p className="text-sm text-gray-400 mt-1">
                      工作日提交的咨询，我们将在4小时内响应；周末及节假日提交的留言，将在下一个工作日优先处理。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
