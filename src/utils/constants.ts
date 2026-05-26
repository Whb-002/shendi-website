export const COMPANY = {
  name: '深维地信',
  fullName: '深维地信科技(四川)有限公司',
  shortName: '深维地信',
  slogan: '深耕地下空间，赋能智慧地球',
  description: '专注于地质探测、物探设备研发与软件开发的高新技术企业，为能源勘探、矿业、地质调查等领域提供专业解决方案',
  address: '四川省成都市高新区天府大道888号',
  phone: '18011072793',
  email: 'contact@deepgeotech.com',
  workHours: '周一至周五 9:00 - 18:00',
  year: 2025,
} as const;

export interface NavMenuItem {
  path: string;
  label: string;
}

export const NAV_ITEMS: NavMenuItem[] = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于我们' },
  { path: '/news', label: '新闻中心' },
  { path: '/services', label: '产品与服务' },
  { path: '/online-business', label: '在线业务' },
  { path: '/contact', label: '联系我们' },
];

export const SERVICE_CATEGORIES = [
  { id: 'geophysical', name: '地球物理探测' },
  { id: 'software', name: '软件产品' },
  { id: 'equipment', name: '物探设备' },
  { id: 'data-processing', name: '数据处理' },
  { id: 'consulting', name: '技术咨询' },
  { id: 'training', name: '培训服务' },
];

export const SERVICE_LINKS = [
  { label: '地球物理探测', path: '/services/geophysical' },
  { label: '软件产品', path: '/services/software' },
  { label: '物探设备', path: '/services/equipment' },
  { label: '数据处理', path: '/services/data-processing' },
  { label: '技术咨询', path: '/services/consulting' },
  { label: '培训服务', path: '/services/training' },
];

export const PARTNER_LOGOS = [
  { name: '中国地质调查局', id: 'cgs' },
  { name: '中国石油天然气集团', id: 'cnpc' },
  { name: '中国矿业大学', id: 'cumt' },
  { name: '中国地质大学', id: 'cug' },
  { name: '中科院地球物理研究所', id: 'igcas' },
  { name: '四川省地质矿产局', id: 'scgem' },
  { name: '中国有色金属工业协会', id: 'cnmia' },
  { name: '成都理工大学', id: 'cdut' },
];

export const QUICK_LINKS = [
  { label: '关于我们', path: '/about' },
  { label: '新闻中心', path: '/news' },
  { label: '产品与服务', path: '/services' },
  { label: '在线业务', path: '/online-business' },
];
