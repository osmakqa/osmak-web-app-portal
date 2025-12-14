import { LucideIcon } from 'lucide-react';

export enum CategoryType {
  QMS = 'Quality Management System',
  QA = 'Quality Assurance Apps'
}

export interface AppLink {
  id: string;
  title: string;
  description: string;
  url: string;
  devUrl?: string;
  icon: LucideIcon;
  category: CategoryType;
  color?: string;
}

export interface SectionProps {
  title: string;
  apps: AppLink[];
  delay?: number;
}