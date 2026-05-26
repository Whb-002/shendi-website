import { InquiryFormData } from '@/types';

const API_BASE = '/api';

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: '请求失败' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

export async function fetchNewsList(category?: string, page = 1, pageSize = 10) {
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  params.set('page', String(page));
  params.set('pageSize', String(pageSize));
  return request<{
    list: import('@/types').NewsItem[];
    total: number;
  }>(`/news?${params.toString()}`);
}

export async function fetchNewsDetail(id: number) {
  return request<import('@/types').NewsItem & { content: string }>(`/news/${id}`);
}

export async function fetchServices() {
  return request<import('@/types').ServiceItem[]>('/services');
}

export async function fetchServiceDetail(id: number) {
  return request<import('@/types').ServiceDetail>(`/services/${id}`);
}

export async function submitInquiry(data: InquiryFormData) {
  return request<{ success: boolean; message: string }>('/inquiry', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function fetchDownloads(category?: string) {
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  return request<{
    id: number;
    name: string;
    fileUrl: string;
    fileSize: string;
    category: string;
  }[]>(`/downloads?${params.toString()}`);
}

export async function submitContactMessage(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  return request<{ success: boolean; message: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function fetchContactInfo() {
  return request<{
    address: string;
    phone: string;
    email: string;
    workHours: string;
  }>('/contact/info');
}
