export const companyData = {
  name: '深维地信科技（四川）有限公司',
  tagline: '精准探测 · 智慧未来',
  description:
    '承担基础性公益性、战略性地质调查和矿产勘查任务，向全社会提供水文地质、工程地质、环境地质、灾害地质、城市地质、旅游地质、农业地质、生态地质、遥感地质、地理信息、生态修复、国土空间规划、自然资源调查监测评价、自然资源及环境样品检验检测等地质技术支撑与服务，并依托专业技术优势积极参与地质类综合科学技术等研究。',
  founded: '2015年',
  employees: '200+',
  projects: '500+',
  clients: '150+',
  address: '四川省成都市高新区天府大道88号',
  phone: '18011072793',
  email: 'contact@deepgeospace.com',
  social: { wechat: '深维地信', weibo: '@深维地信科技' },
  services: [
    '水文地质', '工程地质', '环境地质', '灾害地质', '城市地质',
    '旅游地质', '农业地质', '生态地质', '遥感地质', '地理信息',
    '生态修复', '国土空间规划', '自然资源调查监测评价', '自然资源及环境样品检验检测',
  ],
  highlights: [
    { value: '500+', label: '已完成项目' },
    { value: '150+', label: '合作客户' },
    { value: '50+', label: '发明专利' },
    { value: '10+', label: '行业经验' },
  ],
  team: [
    { id: 't1', name: '张明远', position: '创始人兼CEO', bio: '中国地质大学博士，深耕物探行业20年', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { id: 't2', name: '李静怡', position: '技术总监', bio: '北京大学地球物理硕士，主导多款物探设备研发', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
    { id: 't3', name: '王建国', position: '研发部经理', bio: '清华大学软件工程硕士，专注地质软件平台开发', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
    { id: 't4', name: '陈思琳', position: '市场总监', bio: '丰富的能源勘探行业资源整合经验', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  ],
  timeline: [
    { year: '2015', event: '公司成立，推出首款物探数据采集系统' },
    { year: '2017', event: '完成A轮融资，产品进入规模化生产' },
    { year: '2019', event: '发布GeoTech Cloud云平台服务' },
    { year: '2021', event: '获得国家高新技术企业认证' },
    { year: '2023', event: '物探设备销量突破1000台套' },
    { year: '2024', event: '发布新一代智能探测解决方案' },
  ],
  certifications: [
    { name: '国家高新技术企业', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&h=200&fit=crop' },
    { name: 'ISO9001质量管理体系', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop' },
    { name: '软件企业认定', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop' },
    { name: '四川省高新技术企业', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop' },
  ],
};

export const timelineMock = [
  { year: '2015', title: '公司成立', desc: '深维地信科技在四川成都成立' },
  { year: '2017', title: '技术突破', desc: '自主研发的地球物理数据处理系统上线' },
  { year: '2019', title: '业务拓展', desc: '服务项目覆盖西南五省' },
  { year: '2021', title: '国家级资质', desc: '获得多项国家级资质认证' },
  { year: '2023', title: 'AI赋能', desc: '推出AI智能物探解译平台' },
  { year: '2025', title: '行业标杆', desc: '成为地信行业技术领军企业' },
];

export interface NewsMockItem {
  id: number;
  title: string;
  summary: string;
  coverImage: string;
  category: 'company' | 'industry' | 'notice';
  categoryLabel: string;
  publishDate: string;
  viewCount: number;
  content: string;
}

export const newsDetailMock: NewsMockItem[] = [
  {
    id: 1,
    title: '深维地信科技发布新一代AI智能物探解译平台',
    summary: '经过三年潜心研发，深维地信科技正式推出基于深度学习的AI智能物探解译平台，实现地质异常体智能识别与分类。',
    coverImage: '',
    category: 'company',
    categoryLabel: '公司新闻',
    publishDate: '2025-05-20',
    viewCount: 1280,
    content: '<p>2025年5月20日，深维地信科技在成都正式发布了新一代"DeepGeo AI"智能物探解译平台。该平台基于深度学习技术，能够自动识别和分类地质异常体，将传统物探数据解译效率提升了300%。</p><p>平台核心功能包括：</p><ul><li>多源物探数据智能融合处理</li><li>地质异常体自动检测与分类</li><li>三维地质模型智能构建</li><li>勘探靶区智能优选</li></ul><p>目前，该平台已在国内多个大型勘探项目中成功应用，获得业界广泛好评。</p>',
  },
  {
    id: 2,
    title: '公司中标国家地质调查局西南地区深地探测项目',
    summary: '深维地信科技凭借雄厚技术实力成功中标国家地质调查局西南地区深地资源探测技术装备研发重大项目。',
    coverImage: '',
    category: 'company',
    categoryLabel: '公司新闻',
    publishDate: '2025-04-15',
    viewCount: 956,
    content: '<p>近日，深维地信科技成功中标国家地质调查局"西南地区深地资源探测技术装备研发"重大项目，项目总投资额达1.2亿元。</p><p>该项目将围绕深地探测关键技术展开攻关，重点突破：</p><ul><li>大深度高精度电磁探测技术</li><li>深部地球物理数据智能处理系统</li><li>三维地质建模与可视化平台</li></ul><p>项目的成功中标标志着公司在地质探测领域的综合实力获得国家级认可。</p>',
  },
  {
    id: 3,
    title: '2025年全国矿产资源勘查形势分析报告发布',
    summary: '自然资源部发布2025年全国矿产资源勘查形势分析报告，指出AI+物探技术将成为未来矿产资源勘查的核心驱动力。',
    coverImage: '',
    category: 'industry',
    categoryLabel: '行业资讯',
    publishDate: '2025-03-28',
    viewCount: 2340,
    content: '<p>自然资源部近日发布了《2025年全国矿产资源勘查形势分析报告》。报告指出，随着人工智能技术的快速发展，AI+物探已成为矿产资源勘查的核心技术趋势。</p><p>报告强调，未来五年，国家将重点支持：</p><ul><li>智能化物探装备研发</li><li>地质大数据分析与应用</li><li>深地资源探测技术创新</li></ul><p>这为地质勘查行业的智能化转型提供了明确的政策导向和市场机遇。</p>',
  },
  {
    id: 4,
    title: '关于2025年安全生产月活动安排的通知',
    summary: '为贯彻落实国家安全生产方针，公司决定于6月开展安全生产月系列活动，请各部门提前做好准备。',
    coverImage: '',
    category: 'notice',
    categoryLabel: '通知公告',
    publishDate: '2025-05-25',
    viewCount: 450,
    content: '<p>各部门：</p><p>为深入贯彻落实国家安全生产方针政策，根据上级主管部门要求，公司决定于2025年6月开展"安全生产月"系列活动。</p><p>活动安排如下：</p><ul><li>6月1日-7日：安全生产知识培训周</li><li>6月8日-14日：野外作业安全演练周</li><li>6月15日-21日：设备安全专项检查周</li><li>6月22日-30日：安全隐患排查整改周</li></ul><p>请各部门高度重视，提前做好工作安排，确保安全生产月活动取得实效。</p>',
  },
  {
    id: 5,
    title: '深维地信科技荣获2025年度地质科技十大进展奖',
    summary: '公司自主研发的"智能化深地电磁探测系统"荣获2025年度地质科技十大进展奖，技术达到国际先进水平。',
    coverImage: '',
    category: 'company',
    categoryLabel: '公司新闻',
    publishDate: '2025-02-10',
    viewCount: 1876,
    content: '<p>在刚刚揭晓的2025年度地质科技十大进展评选中，深维地信科技自主研发的"智能化深地电磁探测系统"成功入选，获得评审专家组高度评价。</p><p>该系统突破了多项关键技术瓶颈：</p><ul><li>探测深度突破3000米</li><li>数据采集精度提升至0.01nV/m</li><li>智能噪声抑制算法达到国际领先水平</li></ul><p>此次获奖是公司继2023年获得省级科技进步奖后的又一重要里程碑。</p>',
  },
  {
    id: 6,
    title: '我国地球物理勘查行业市场规模预计突破500亿元',
    summary: '据行业研究报告显示，2025年我国地球物理勘查行业市场规模预计突破500亿元，年复合增长率达15%。',
    coverImage: '',
    category: 'industry',
    categoryLabel: '行业资讯',
    publishDate: '2025-01-18',
    viewCount: 3100,
    content: '<p>根据中国地球物理学会发布的《2025中国地球物理勘查行业发展报告》，我国地球物理勘查行业市场规模预计在2025年突破500亿元大关。</p><p>报告指出，行业增长主要得益于：</p><ul><li>国家战略性矿产资源勘查投入持续加大</li><li>城市地下空间开发利用需求快速增长</li><li>AI技术赋能传统物探行业转型升级</li></ul><p>预计到2028年，行业市场规模将突破800亿元。</p>',
  },
  {
    id: 7,
    title: '关于公司办公系统升级维护的通知',
    summary: '为提升信息化服务水平，公司将于2025年5月30日进行办公系统升级维护，届时部分功能将暂停使用。',
    coverImage: '',
    category: 'notice',
    categoryLabel: '通知公告',
    publishDate: '2025-05-22',
    viewCount: 320,
    content: '<p>全体员工：</p><p>为进一步提升公司信息化服务水平，信息中心定于2025年5月30日（周六）8:00至18:00进行办公系统升级维护。</p><p>维护期间影响范围：</p><ul><li>OA办公系统暂停使用</li><li>项目管理系统暂停使用</li><li>文件共享平台暂停使用</li></ul><p>请各部门提前做好工作安排，如有紧急事务请联系信息中心值班人员。维护完成后系统将恢复正常运行。</p>',
  },
  {
    id: 8,
    title: '深维地信与西南石油大学签署产学研合作协议',
    summary: '深维地信科技与西南石油大学正式签署产学研战略合作协议，双方将在物探技术研发、人才培养等领域深度合作。',
    coverImage: '',
    category: 'company',
    categoryLabel: '公司新闻',
    publishDate: '2024-12-05',
    viewCount: 756,
    content: '<p>12月5日，深维地信科技与西南石油大学在成都签署产学研战略合作协议。双方将在地球物理探测技术研发、高层次人才培养、科技成果转化等领域开展全面合作。</p><p>合作协议主要内容包括：</p><ul><li>共建"智能物探联合实验室"</li><li>设立研究生联合培养基地</li><li>联合申报国家和省部级科研项目</li><li>定期举办学术交流与技术研讨会</li></ul><p>此次合作将进一步提升公司的技术创新能力和核心竞争力。</p>',
  },
];
export const newsMock = newsDetailMock;

export const downloadsMock = [
  { name: '深维地信企业宣传册.pdf', category: '企业资料', fileSize: '12.5MB' },
  { name: '地球物理探测技术手册.pdf', category: '技术资料', fileSize: '8.3MB' },
  { name: '服务项目价格参考表.pdf', category: '业务资料', fileSize: '2.1MB' },
  { name: '地质勘查技术规范(2024版).pdf', category: '技术资料', fileSize: '15.8MB' },
  { name: '公司资质证书汇编.pdf', category: '企业资料', fileSize: '5.2MB' },
  { name: '项目合作指南.pdf', category: '业务资料', fileSize: '3.7MB' },
];

export const solutionsData = {
  solutions: [
    { id: 's1', title: '能源勘探解决方案', industry: '能源勘探', coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop', description: '综合运用地震、电磁、重力等多种物探方法，为油气、煤炭、地热等能源勘探提供全方位技术支撑', features: ['多方法联合勘探，提高探测精度', '智能数据处理，快速识别异常体', '3D地质建模，可视化展示结果', '钻井优化建议，降低开发成本'], cases: [{ title: '西北某油田勘探', result: '优选井位12处，钻探成功率提升35%' }, { title: '内蒙古煤炭勘查', result: '查明可采煤层厚度及分布范围' }] },
    { id: 's2', title: '矿业调查解决方案', industry: '矿业调查', coverImage: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&h=800&fit=crop', description: '针对金属矿、非金属矿等矿产资源勘查，提供从区域调查到矿山开发全生命周期解决方案', features: ['大深度探测技术，找矿效率高', '多参数综合分析，定位精准', '环境友好型勘探方案', '矿山安全监测预警系统'], cases: [{ title: '云南铜矿勘探', result: '发现深部隐伏铜矿体，资源量超预期' }, { title: '新疆金矿调查', result: '圈定金矿化带3条，指导钻探部署' }] },
    { id: 's3', title: '地质灾害监测方案', industry: '地质灾害', coverImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&h=800&fit=crop', description: '针对滑坡、泥石流、地面塌陷等地质灾害，提供监测预警与风险评估一体化解决方案', features: ['实时监测，自动预警', '多传感器融合，数据可靠', '预警信息及时推送', '应急指挥决策支持'], cases: [{ title: '三峡库区滑坡监测', result: '成功预警滑坡险情2次，避免人员伤亡' }, { title: '广东尾矿库监测', result: '建立全方位安全监测体系' }] },
    { id: 's4', title: '工程地质勘察方案', industry: '工程地质', coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop', description: '为铁路、公路、桥梁、隧道等大型基础设施建设提供工程地质勘察服务', features: ['综合物探手段，探测全面', '高精度定位，误差＜5cm', '三维地质建模可视化', '工程场地适宜性评价'], cases: [{ title: '川藏铁路勘察', result: '完成300公里线路地质勘察任务' }, { title: '粤港澳大湾区跨江通道', result: '精确查明水下地质条件' }] },
    { id: 's5', title: '城市地质调查方案', industry: '城市地质', coverImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop', description: '为城市地下空间开发利用、地下管网探测等提供城市地质调查综合服务', features: ['地下空间精细化探测', '三维地质模型构建', '城市灾害风险评估', '地下资源环境评价'], cases: [{ title: '成都城市地质调查', result: '完成核心城区地质建模' }, { title: '深圳地下空间开发', result: '查明50米以内地下地质条件' }] },
    { id: 's6', title: '水文地质调查方案', industry: '水文地质', coverImage: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=800&fit=crop', description: '针对地下水调查与评价、水资源管理、水环境监测等需求提供综合水文地质解决方案', features: ['多方法联合调查', '地下水动态监测', '水资源评价与规划', '水环境风险评估'], cases: [{ title: '华北平原地下水调查', result: '查明了地下水分布及资源量' }, { title: '新疆干旱区找水', result: '成功定位多个地下水富集区' }] },
  ],
};

export const newsData = {
  news: [
    { id: 'n1', title: 'GeoTech 发布新一代智能探测平台 GeoTech AI 3.0', category: '公司新闻', date: '2024-12-15', author: '市场部', coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop', content: '今日，GeoTech正式发布全新一代智能探测平台GeoTech AI 3.0。新版本采用先进的深度学习算法，能够自动识别和分析地质异常体，将探测效率提升50%以上。同时，新平台支持多任务并行处理，可同时管理1000+台探测设备。', tags: ['新品发布', '人工智能', '技术创新'] },
    { id: 'n2', title: '我司中标国家地质调查局重大项目', category: '公司新闻', date: '2024-11-28', author: '商务一部', coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop', content: '经过激烈竞标，我司凭借雄厚的技术实力和丰富的项目经验，成功中标国家地质调查局"深地资源探测技术装备研发"项目，中标金额达8000万元。该项目将为我国深层矿产资源开发提供关键技术支撑。', tags: ['中标', '重大项目', '国家级'] },
    { id: 'n3', title: '2024年中国国际矿业大会 GeoTech 展位亮点纷呈', category: '行业资讯', date: '2024-10-20', author: '市场部', coverImage: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&h=500&fit=crop', content: '2024中国国际矿业大会在天津召开，GeoTech携最新产品亮相展会。展位现场人气火爆，吸引了来自全球30多个国家的专业观众。我司推出的无人化探测系统成为本届展会最受关注的技术亮点。', tags: ['展会', '矿业大会', '国际交流'] },
    { id: 'n4', title: '物探技术在水文地质调查中的应用指南', category: '技术博客', date: '2024-09-15', author: '技术研发部', coverImage: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&h=500&fit=crop', content: '本文系统介绍了瞬变电磁法、可控源音频大地电磁法等物探技术在水文地质调查中的应用。结合实际案例，详细阐述了如何选择合适的物探方法、数据采集注意事项以及资料解释要点，为水文地质工作者提供实用参考。', tags: ['技术分享', '水文地质', '物探方法'] },
    { id: 'n5', title: 'GeoTech 亮相 ASEAN 矿业论坛，布局东南亚市场', category: '公司新闻', date: '2024-08-10', author: '国际业务部', coverImage: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=500&fit=crop', content: '应主办方邀请，GeoTech代表团赴印度尼西亚参加ASEAN矿业论坛，与多国矿业企业签署合作协议。这标志着公司正式开启国际化战略，未来将深耕东南亚矿业市场，为区域客户提供优质的地质探测服务。', tags: ['国际市场', '东南亚', '战略布局'] },
    { id: 'n6', title: '地质灾害监测预警系统建设方案详解', category: '技术博客', date: '2024-07-22', author: '系统集成部', coverImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=500&fit=crop', content: '本文从系统架构、传感器选型、通信方案、软件平台等方面，全面介绍了地质灾害监测预警系统的建设流程。重点分析了不同类型灾害的监测方法选择、阈值设定标准以及预警信息发布机制，为各地开展地质灾害防治工作提供参考。', tags: ['地灾监测', '技术方案', '系统集成'] },
  ],
};

export const servicesMock = {
  services: [
    { id: 1, name: '矿产资源勘查', icon: 'Mountain', summary: '运用综合物探方法进行固体矿产与能源矿产的勘查评价，提供从预查到勘探阶段的全流程技术服务', category: '地质勘查' },
    { id: 2, name: '区域地质调查', icon: 'Globe', summary: '开展区域性基础地质调查工作，查明区域地质背景、构造格架和成矿条件', category: '地质勘查' },
    { id: 3, name: '地震勘探服务', icon: 'Waves', summary: '提供二维/三维地震数据采集、处理与解释服务，适用于深部构造研究和能源勘探', category: '地球物理' },
    { id: 4, name: '电磁法探测', icon: 'Zap', summary: '采用CSAMT、MT、TEM等多种电磁法进行深部地质结构探测与矿产资源定位', category: '地球物理' },
    { id: 5, name: '重力与磁法测量', icon: 'Globe', summary: '高精度重磁数据采集与处理，适用于区域构造划分、隐伏岩体圈定等任务', category: '地球物理' },
    { id: 6, name: '工程测量服务', icon: 'MapPin', summary: '提供控制测量、地形测量、规划测量等各类工程测量技术服务', category: '测绘地理信息' },
    { id: 7, name: '遥感与GIS应用', icon: 'Globe', summary: '利用多源遥感影像进行地质解译、生态环境监测与地理信息系统建设', category: '测绘地理信息' },
    { id: 8, name: '地质数据管理平台', icon: 'Code', summary: '基于云架构的地质大数据管理与分析平台，支持多源异构数据整合与可视化', category: '信息系统' },
    { id: 9, name: '智能监测预警系统', icon: 'Code', summary: '集传感器网络、数据传输与AI分析于一体的地质灾害实时监测预警平台', category: '信息系统' },
    { id: 10, name: '矿山地质环境评估', icon: 'Droplets', summary: '开展矿山地质环境调查、影响评价与生态修复方案编制', category: '环境地质' },
    { id: 11, name: '地下水环境调查', icon: 'Droplets', summary: '查明区域水文地质条件，评价地下水资源量、水质及环境风险', category: '环境地质' },
    { id: 12, name: '岩土工程检测', icon: 'Building2', summary: '提供地基承载力检测、桩基完整性检测、隧道衬砌质量检测等服务', category: '工程检测' },
    { id: 13, name: '工程物探检测', icon: 'Building2', summary: '运用地质雷达、超声波、高密度电法等手段进行工程结构无损检测', category: '工程检测' },
  ] as import('@/types').ServiceItem[],
  getDetail: (id: number): import('@/types').ServiceDetail | undefined => {
    const details: Record<number, import('@/types').ServiceDetail> = {
      1: { id: 1, name: '矿产资源勘查', icon: 'Mountain', summary: '运用综合物探方法进行固体矿产与能源矿产的勘查评价，提供从预查到勘探阶段的全流程技术服务', category: '地质勘查', bannerImage: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&h=600&fit=crop', description: '深维地信凭借多年的矿产勘查经验，构建了以地球物理探测为核心、地质与地球化学相结合的综合性矿产勘查技术体系。\n\n我们的服务覆盖矿产勘查全生命周期：从区域矿产远景评价、勘查靶区优选，到矿区详查与勘探，直至矿山开发过程中的资源储量核实。公司拥有国内领先的深部探测装备和数据处理能力，能够有效识别500-2000米深度的隐伏矿体。\n\n我们先后在云南、新疆、内蒙古、西藏等地区成功实施了多个大中型矿产勘查项目，累计发现矿产地30余处，探获资源量价值超百亿元。', specs: [{ label: '探测深度', value: '0-2000m' }, { label: '分辨率', value: '米级至亚米级' }, { label: '方法组合', value: '重磁电震综合' }, { label: '数据处理', value: '3D反演建模' }, { label: '报告周期', value: '30-90个工作日' }], cases: [{ title: '云南某铜多金属矿勘查', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop', desc: '查明深部隐伏铜矿体，探获铜资源量50万吨，伴生金20吨' }, { title: '新疆某金矿深部勘探', image: 'https://images.unsplash.com/photo-1569168769913-4cf2db7e08fe?w=600&h=400&fit=crop', desc: '圈定3条金矿化带，指导钻探部署，见矿率超过80%' }, { title: '内蒙古煤炭资源勘查', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop', desc: '查明可采煤层10余层，新增煤炭资源储量20亿吨' }] },
      2: { id: 2, name: '区域地质调查', icon: 'Globe', summary: '开展区域性基础地质调查工作，查明区域地质背景、构造格架和成矿条件', category: '地质勘查', bannerImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop', description: '区域地质调查是地质工作的基础，深维地信拥有一支由资深地质工程师和青年技术骨干组成的专业队伍，具备承担1:5万至1:25万比例尺区域地质调查的综合能力。\n\n我们采用数字化地质填图技术，结合遥感解译、地球物理和地球化学等多种手段，对调查区的地层、构造、岩浆岩、矿产等进行系统调查与研究，形成完整的区域地质图件和调查报告。\n\n近年来，公司先后承担了多个国家重点区域的1:5万地质调查项目，累计完成调查面积超过10万平方公里，为地方经济发展和资源勘查提供了坚实的地质基础资料。', specs: [{ label: '调查比例尺', value: '1:5万 / 1:25万' }, { label: '技术手段', value: '数字化填图+遥感解译' }, { label: '调查要素', value: '地层/构造/岩浆岩/矿产' }, { label: '成果形式', value: '地质图+数据库+报告' }], cases: [{ title: '川西高原1:5万区域地质调查', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop', desc: '完成4个图幅联测，系统建立了区域构造格架' }, { title: '大兴安岭成矿带地质调查', image: 'https://images.unsplash.com/photo-1569168769913-4cf2db7e08fe?w=600&h=400&fit=crop', desc: '圈定找矿靶区12处，后经勘查发现多处矿产地' }, { title: '滇东南岩溶区地质环境调查', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop', desc: '查明了岩溶发育规律与地下水资源分布特征' }] },
      3: { id: 3, name: '地震勘探服务', icon: 'Waves', summary: '提供二维/三维地震数据采集、处理与解释服务，适用于深部构造研究和能源勘探', category: '地球物理', bannerImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop', description: '地震勘探是深部地质结构探测精度最高的物探方法。深维地信拥有多套先进的地震数据采集系统和高性能计算集群，能够提供从野外采集到室内处理解释的一站式地震勘探服务。\n\n我们的技术团队具备丰富的复杂地形施工经验，在高海拔、山地、沙漠等恶劣环境下均能高效完成地震数据采集任务。数据处理采用先进的去噪、偏移和反演技术，能够清晰成像地下数千米深度的地质结构。\n\n公司已完成二维地震测线超过5000公里、三维地震面积超过800平方公里，为油气勘探、煤炭勘查和深部地热资源评价提供了关键支撑。', specs: [{ label: '采集系统', value: '24位高精度A/D' }, { label: '覆盖次数', value: '30-120次' }, { label: '探测深度', value: '100-8000m' }, { label: '分辨率', value: '10-50m' }, { label: '处理周期', value: '15-60个工作日' }], cases: [{ title: '塔里木盆地深层油气地震勘探', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop', desc: '完成三维地震500km²，发现多个有利圈闭构造' }, { title: '鄂尔多斯盆地致密气勘探', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop', desc: '高精度成像技术有效识别薄储层分布范围' }, { title: '青海共和盆地干热岩调查', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop', desc: '查明深部热储构造，为地热开发提供依据' }] },
      4: { id: 4, name: '电磁法探测', icon: 'Zap', summary: '采用CSAMT、MT、TEM等多种电磁法进行深部地质结构探测与矿产资源定位', category: '地球物理', bannerImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop', description: '电磁法探测是深维地信的核心技术优势之一。公司配备了多套国际先进的电磁法探测设备，包括可控源音频大地电磁测深系统（CSAMT）、大地电磁测深系统（MT）、瞬变电磁系统（TEM）等。\n\n我们能够根据不同地质条件和探测目标，灵活选择或组合电磁法技术方案，实现对地下不同深度电性结构的精细探测。电磁法勘查在金属矿产勘查、地下水调查、地热资源评价和工程地质勘察等领域发挥着不可替代的作用。\n\n技术团队在电磁法数据采集、处理和解释方面积累了丰富的经验，自主研发了多套数据处理和反演成像软件，能够有效提高探测结果的可靠性和精度。', specs: [{ label: '方法类型', value: 'CSAMT/MT/TEM/AMT' }, { label: '频率范围', value: '0.001Hz-100kHz' }, { label: '探测深度', value: '10-3000m' }, { label: '分辨率', value: '视电阻率±5%' }, { label: '适用场景', value: '矿产/水文/地热/工程' }], cases: [{ title: '西藏冈底斯成矿带电磁法勘查', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop', desc: 'CSAMT测量圈定深部低阻异常带，指导钻探验证' }, { title: '华北平原深层地下水探测', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop', desc: 'MT方法查明500-2000米深度含水层分布' }, { title: '川藏铁路隧道超前预报', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop', desc: 'TEM法提前发现前方断裂破碎带，保障施工安全' }] },
      5: { id: 5, name: '重力与磁法测量', icon: 'Globe', summary: '高精度重磁数据采集与处理，适用于区域构造划分、隐伏岩体圈定等任务', category: '地球物理', bannerImage: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&h=600&fit=crop', description: '重力测量与磁法测量是最基础且应用最广泛的物探方法。深维地信拥有多套高精度重力仪和磁力仪设备，能够开展各种比例尺的地面和航空重磁测量。\n\n重磁方法具有探测范围广、效率高、成本相对较低的优势，特别适合区域性地质构造研究、隐伏岩体圈定和成矿远景区预测。我们开发的重磁数据处理与解释系统，支持多尺度边缘检测、3D密度/磁性反演等先进处理技术。\n\n公司累计完成重力测量面积超过5万平方公里、磁法测量面积超过10万平方公里，为多个国家级成矿带和盆地的基础地质研究提供了宝贵的地球物理资料。', specs: [{ label: '重力精度', value: '±0.01mGal' }, { label: '磁力精度', value: '±0.1nT' }, { label: '测量方式', value: '地面/航空/井中' }, { label: '测量比例尺', value: '1:1万至1:20万' }, { label: '数据处理', value: '3D密度/磁性反演' }], cases: [{ title: '长江中下游成矿带重磁调查', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop', desc: '1:5万重磁测量圈定隐伏岩体分布范围' }, { title: '渤海湾盆地基底构造研究', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop', desc: '重磁资料解释厘定了盆地构造单元划分' }, { title: '大兴安岭火山岩区磁法填图', image: 'https://images.unsplash.com/photo-1569168769913-4cf2db7e08fe?w=600&h=400&fit=crop', desc: '航空磁测数据识别出多个隐伏火山机构' }] },
      6: { id: 6, name: '工程测量服务', icon: 'MapPin', summary: '提供控制测量、地形测量、规划测量等各类工程测量技术服务', category: '测绘地理信息', bannerImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=600&fit=crop', description: '深维地信的测绘团队拥有丰富的工程测量经验和先进的测量装备，包括高精度GNSS接收机、全站仪、水准仪、无人机航测系统等。\n\n我们能够承担各类工程控制测量、地形图测绘、规划测量、竣工测量、变形监测等任务，为工程建设提供全过程的测绘保障。技术团队严格执行国家测量规范和标准，确保测量成果的精度和可靠性。\n\n近年来，公司先后完成了多个大型工程项目测量任务，涵盖高速公路、铁路、水利枢纽、城市规划等领域，累计完成各种比例尺地形图测绘面积超过3000平方公里。', specs: [{ label: '控制测量等级', value: 'C级-D级' }, { label: '地形图比例尺', value: '1:500-1:10000' }, { label: '航测装备', value: '固定翼+多旋翼无人机' }, { label: '平面精度', value: '±1cm至±5cm' }, { label: '高程精度', value: '±2cm至±10cm' }], cases: [{ title: '成兰铁路控制测量', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', desc: '完成200公里线路精密控制网布设与复测' }, { title: '天府新区1:500地形图测绘', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', desc: '无人机航测完成80平方公里地形图制作' }, { title: '雅砻江两河口电站变形监测', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop', desc: '建立三维变形监测网，保障大坝安全运行' }] },
      7: { id: 7, name: '遥感与GIS应用', icon: 'Globe', summary: '利用多源遥感影像进行地质解译、生态环境监测与地理信息系统建设', category: '测绘地理信息', bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop', description: '遥感技术是实现大范围快速地质调查的重要手段。深维地信拥有专业的遥感数据处理中心，能够处理和分析多光谱、高光谱、雷达等多源遥感数据。\n\n我们利用遥感影像进行地质构造解译、蚀变信息提取、生态环境监测、土地利用分类等工作，为区域地质调查、矿产勘查和国土空间规划提供宏观信息支撑。GIS方面，我们具备地理空间数据库建设、专题图制作和空间分析等综合服务能力。\n\n公司已建成覆盖多个省区的遥感影像数据库，开发了多套专业GIS应用系统，为政府部门和企业提供了高效的空间信息服务。', specs: [{ label: '遥感数据源', value: '多光谱/高光谱/雷达' }, { label: '空间分辨率', value: '0.5m-30m' }, { label: 'GIS平台', value: 'ArcGIS/QGIS/自研' }, { label: '解译精度', value: '优于90%' }, { label: '成果格式', value: 'GIS数据库+专题图+报告' }], cases: [{ title: '四川省矿山地质环境遥感监测', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', desc: '利用多时相遥感数据监测矿山开发占地变化' }, { title: '云南三江地区遥感地质解译', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop', desc: '编制1:25万遥感地质解译图，新发现线性构造200余条' }, { title: '成都市国土空间规划GIS平台', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', desc: '建成集数据管理、分析与可视化于一体的GIS平台' }] },
      8: { id: 8, name: '地质数据管理平台', icon: 'Code', summary: '基于云架构的地质大数据管理与分析平台，支持多源异构数据整合与可视化', category: '信息系统', bannerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop', description: '深维地信自主研发的地质数据管理平台（GeoData Platform）是基于云原生架构的大数据管理平台，致力于解决地质行业多源异构数据的管理、整合与分析难题。\n\n平台支持结构化与非结构化数据的一体化存储，提供从数据采集、清洗、标准化到可视化的全链路数据治理能力。系统内置专业的地质数据处理算法库，支持地质建模、储量计算、统计分析等专业功能。\n\n目前平台已在多个省级地质调查院和大型矿山企业成功部署，管理地质数据量超过100TB，日均处理数据请求超过10万次，显著提升了用户的数据管理效率和分析决策水平。', specs: [{ label: '数据存储', value: '分布式存储，PB级扩展' }, { label: '支持格式', value: 'GIS/CAD/Table/Image/Doc' }, { label: '并发用户', value: '1000+' }, { label: '部署方式', value: '私有云/混合云/本地' }, { label: '安全等级', value: '等保三级' }], cases: [{ title: '四川省地质大数据中心平台建设', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', desc: '建成省级地质数据共享服务平台，整合50余年地质资料' }, { title: '攀钢矿山地质数据管理系统', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', desc: '实现矿山勘探、开采、储量全流程数字化管理' }, { title: '长江流域水文地质信息系统', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop', desc: '建立流域水文地质数据库与动态分析平台' }] },
      9: { id: 9, name: '智能监测预警系统', icon: 'Code', summary: '集传感器网络、数据传输与AI分析于一体的地质灾害实时监测预警平台', category: '信息系统', bannerImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&h=600&fit=crop', description: '深维地信的智能监测预警系统（GeoAlert）是一套面向地质灾害、工程安全和环境监测的综合预警平台，融合了物联网、大数据和人工智能技术。\n\n系统集成多种传感器（位移计、裂缝计、GNSS、雨量计、地下水位计、测斜仪等），通过4G/5G/北斗卫星等多信道实时传输数据，后台AI算法自动分析数据趋势并预警潜在的灾害风险。\n\n平台已在三峡库区、四川地震灾区、云南高边坡等地质灾害高发区部署运行，成功预警滑坡、泥石流等灾害险情20余次，切实保障了人民生命财产安全。', specs: [{ label: '传感器类型', value: '位移/倾斜/降雨/水位/应力' }, { label: '通信方式', value: '4G/5G/北斗/LoRa' }, { label: '数据采集频率', value: '1秒-24小时可调' }, { label: '预警时效', value: '秒级响应' }, { label: 'AI算法', value: '深度学习异常检测' }], cases: [{ title: '三峡库区地质灾害监测预警', image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&h=400&fit=crop', desc: '部署300余处监测点，成功预警滑坡险情5次' }, { title: '汶川地震灾区泥石流监测', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop', desc: '建立12条泥石流沟的实时监测预警系统' }, { title: '深圳城市边坡安全监测', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', desc: '布设200+传感器实现城市边坡智能体检' }] },
      10: { id: 10, name: '矿山地质环境评估', icon: 'Droplets', summary: '开展矿山地质环境调查、影响评价与生态修复方案编制', category: '环境地质', bannerImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop', description: '绿色矿山建设是国家生态文明建设的重要组成部分。深维地信在矿山地质环境领域拥有一支由地质工程师、环境工程师和生态学专家组成的综合团队。\n\n我们提供矿山地质环境调查、环境影响评价、矿山地质环境治理与生态修复方案编制、矿山地质环境监测等全链条技术服务。技术方案注重因地制宜，将工程治理与生态恢复有机结合。\n\n公司已完成80余座矿山的环评与治理方案编制，参与了多个国家级绿色矿山示范项目，在矿山地质环境恢复治理领域积累了丰富的实践经验。', specs: [{ label: '评估类型', value: '现状评价/影响预测/治理方案' }, { label: '调查精度', value: '1:2000至1:10000' }, { label: '监测指标', value: '地形/水质/土壤/植被/生物多样性' }, { label: '治理技术', value: '边坡稳固/覆土复绿/水处理' }, { label: '方案周期', value: '30-90个工作日' }], cases: [{ title: '攀西钒钛矿区环境治理方案', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop', desc: '编制矿山地质环境保护与土地复垦方案，通过自然资源部评审' }, { title: '陕西某煤矿区生态修复', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop', desc: '治理采煤沉陷区1200亩，恢复耕地与生态用地' }, { title: '江西稀土矿山地质环境调查', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop', desc: '全面查明了离子型稀土开采的环境影响特征' }] },
      11: { id: 11, name: '地下水环境调查', icon: 'Droplets', summary: '查明区域水文地质条件，评价地下水资源量、水质及环境风险', category: '环境地质', bannerImage: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=600&fit=crop', description: '深维地信在水文地质调查领域具有扎实的技术积累和丰富的实践经验，拥有水文地质、环境地质专业团队和先进的调查设备。\n\n我们提供地下水资源调查评价、地下水环境监测与评价、地下水污染防治、水文地质参数试验等专业服务。服务对象涵盖政府部门、矿山企业和大型工程建设项目。\n\n公司先后承担了多个重要水源地的水文地质勘查和水资源评价任务，在干旱半干旱地区找水、地下水污染调查与修复等方面形成了独特的技术优势。', specs: [{ label: '调查方法', value: '综合水文地质测绘+物探+钻探' }, { label: '试验类型', value: '抽水/注水/压水/弥散试验' }, { label: '监测指标', value: '水位/水质/水温/水量' }, { label: '模拟技术', value: 'MODFLOW/GMS/FEFLOW' }, { label: '评价深度', value: '浅层-深层含水层系统' }], cases: [{ title: '鄂尔多斯盆地地下水勘查', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop', desc: '查明深层地下淡水分布区，为能源基地供水提供依据' }, { title: '华北某地下水污染调查', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop', desc: '精细刻画污染羽分布，制定修复治理方案' }, { title: '西北干旱区找水定井工程', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop', desc: '综合物探方法定井30口，成功率超过90%' }] },
      12: { id: 12, name: '岩土工程检测', icon: 'Building2', summary: '提供地基承载力检测、桩基完整性检测、隧道衬砌质量检测等服务', category: '工程检测', bannerImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop', description: '深维地信拥有专业的工程检测实验室和现场检测团队，具备多项岩土工程检测资质，可承担各类建设工程的质量检测任务。\n\n检测服务范围涵盖地基基础检测（静载试验、高应变、低应变、声波透射法等）、主体结构检测、隧道工程检测、道路工程检测等。我们严格遵循国家检测标准和规程，确保检测结果的客观、公正和准确。\n\n公司已完成200余个工程项目的检测任务，包括高速铁路、城市地铁、高层建筑、大型桥梁等重点工程，以严谨的工作作风和可靠的技术能力赢得了客户的广泛信任。', specs: [{ label: '桩基检测方法', value: '静载/高应变/低应变/声波/取芯' }, { label: '最大静载吨位', value: '30000kN' }, { label: '检测精度', value: '优于规范要求' }, { label: '隧道检测', value: '地质雷达/超声/取芯' }, { label: '报告周期', value: '3-15个工作日' }], cases: [{ title: '成自宜高铁桩基检测', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop', desc: '完成全线路基与桥梁桩基完整性检测' }, { title: '成都地铁18号线隧道检测', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', desc: '盾构隧道管片背后空洞与注浆质量检测' }, { title: '天府国际机场地基处理检测', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop', desc: '完成大面积强夯地基处理效果检测评估' }] },
      13: { id: 13, name: '工程物探检测', icon: 'Building2', summary: '运用地质雷达、超声波、高密度电法等手段进行工程结构无损检测', category: '工程检测', bannerImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop', description: '工程物探检测是一种高效、无损的工程检测手段。深维地信将地球物理技术成功应用于工程检测领域，形成了以地质雷达、超声波、高密度电法为核心的技术体系。\n\n我们的工程物探检测服务涵盖隧道衬砌质量检测、混凝土结构缺陷检测、道路结构层厚度与病害检测、堤坝隐患探测、地下管线探测等。检测结果以图像化方式呈现，直观反映工程内部缺陷情况。\n\n公司拥有多套当前最先进的工程物探检测设备，技术团队具备国家注册岩土工程师和物探高级工程师资质，累计完成各类工程物探检测项目300余项。', specs: [{ label: '地质雷达天线频率', value: '16MHz-2.6GHz' }, { label: '超声检测精度', value: '可识别0.1mm裂隙' }, { label: '高密度电法电极数', value: '120道' }, { label: '探测深度范围', value: '0-50m（视方法而定）' }, { label: '成果形式', value: '二维/三维成像+检测报告' }], cases: [{ title: '京张高铁隧道衬砌检测', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop', desc: '地质雷达+超声法全面检测衬砌厚度与缺陷' }, { title: '都江堰水利工程隐患探测', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop', desc: '高密度电法查明古堰体内部渗漏通道' }, { title: '成都高新区地下管线探测', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', desc: '综合物探方法精确探测地下管线位置与埋深' }] },
    };
    return details[id];
  },
};

export const productsData = {
  products: [
    { id: 'p1', name: 'GT-5000 地震仪', category: '物探设备', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop', description: '高精度地震数据采集系统，适用于深部地质结构探测', specs: [{ key: '通道数', value: '24通道' }, { key: '采样率', value: '24-bit ADC' }, { key: '动态范围', value: '144dB' }, { key: '工作温度', value: '-40°C ~ +70°C' }, { key: '防水等级', value: 'IP67' }], applications: ['能源勘探', '矿产资源调查', '工程地质勘察'], features: ['智能噪声监测', '实时数据质量评估', '云端同步'] },
    { id: 'p2', name: 'GeoProbe 电磁探测仪', category: '物探设备', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop', description: '多功能电磁法探测设备，支持多种电磁法测量模式', specs: [{ key: '频率范围', value: '0.1Hz ~ 100kHz' }, { key: '发射功率', value: '1kW' }, { key: '接收灵敏度', value: '0.01nV/m' }, { key: '重量', value: '15kg' }], applications: ['地下水调查', '隧道超前预报', '文物考古'], features: ['多频同时测量', '自适应干扰抑制', '3D数据可视化'] },
    { id: 'p3', name: 'GeoTech Explorer 地理信息系统', category: '软件产品', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', description: '专业地质数据管理与可视化分析平台', specs: [{ key: '支持格式', value: 'GIS/CAD/影像' }, { key: '处理能力', value: 'TB级数据' }, { key: '可视化', value: '2D/3D' }], applications: ['数据管理', '专题制图', '空间分析'], features: ['分布式存储', '智能插值', '报告自动生成'] },
    { id: 'p4', name: 'Smart Drilling 智能钻探系统', category: '软件产品', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop', description: '钻探参数实时监控与优化控制系统', specs: [{ key: '监控参数', value: '钻压/转速/流量' }, { key: '控制精度', value: '0.1%' }, { key: '通信方式', value: '4G/卫星' }], applications: ['岩土工程', '矿山开采', '科学钻探'], features: ['AI钻进优化', '故障预警', '远程操控'] },
  ],
};

export const heroMock = {
  subtitle: '深维地信科技(四川)有限公司',
  title: '深空地信 · 智探未来',
  tagline: '深度探索地球，智能解读地下',
};

export const statsMock = [
  { value: 200, suffix: '+', label: '服务项目' },
  { value: 50, suffix: '万+', label: '累计勘查面积', unit: ' 平方公里' },
  { value: 500, suffix: '+', label: '服务客户' },
  { value: 80, suffix: '+', label: '专利技术' },
];

export const newsCardsMock = [
  {
    category: 'company',
    categoryLabel: '公司新闻',
    items: [
      { id: 1, title: '深维地信发布新一代智能探测平台 GeoTech AI 3.0', date: '2024-12-15' },
      { id: 2, title: '我司中标国家地质调查局重大项目', date: '2024-11-28' },
      { id: 3, title: '深维地信亮相 ASEAN 矿业论坛，布局东南亚市场', date: '2024-08-10' },
    ],
  },
  {
    category: 'industry',
    categoryLabel: '行业资讯',
    items: [
      { id: 4, title: '2024年中国国际矿业大会圆满落幕', date: '2024-10-20' },
      { id: 5, title: '国家发布新一轮找矿突破战略行动方案', date: '2024-09-05' },
      { id: 6, title: '绿色勘查技术标准体系正式发布', date: '2024-07-18' },
    ],
  },
  {
    category: 'notice',
    categoryLabel: '通知公告',
    items: [
      { id: 7, title: '关于启用新版官方网站的通知', date: '2025-01-10' },
      { id: 8, title: '深维地信2025年度校园招聘正式启动', date: '2024-12-20' },
      { id: 9, title: '2025年春节放假通知', date: '2024-12-18' },
    ],
  },
];

export const casesMock = [
  {
    id: 1,
    title: '西北某油田地震勘探',
    location: '新疆维吾尔自治区',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: '云南铜矿深部勘查',
    location: '云南省昆明市',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: '川藏铁路地质勘察',
    location: '四川省甘孜州',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: '三峡库区滑坡监测',
    location: '湖北省宜昌市',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: '成都城市地质调查',
    location: '四川省成都市',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: '华北平原地下水调查',
    location: '河北省石家庄市',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop',
  },
];

export const partnersMock = [
  { name: '中国地质调查局', id: 'cgs' },
  { name: '中国石油天然气集团', id: 'cnpc' },
  { name: '中国矿业大学', id: 'cumt' },
  { name: '中国地质大学', id: 'cug' },
  { name: '中科院地球物理研究所', id: 'igcas' },
  { name: '四川省地质矿产局', id: 'scgem' },
  { name: '中国有色金属工业协会', id: 'cnmia' },
  { name: '成都理工大学', id: 'cdut' },
];
