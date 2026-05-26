export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  coverImage: string;
  category: 'company' | 'industry' | 'notice';
  publishDate: string;
  viewCount: number;
}

export interface ServiceItem {
  id: number;
  name: string;
  icon: string;
  summary: string;
  category: string;
}

export interface ServiceDetail extends ServiceItem {
  bannerImage: string;
  description: string;
  specs: { label: string; value: string }[];
  cases: { title: string; image: string; desc: string }[];
}

export interface InquiryFormData {
  serviceType: string;
  projectName: string;
  projectLocation: string;
  description: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}
