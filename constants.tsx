import { 
  AlertTriangle, 
  ClipboardCheck, 
  LayoutDashboard, 
  GraduationCap, 
  Pill, 
  FileText,
  Heart
} from 'lucide-react';
import { AppLink, CategoryType } from './types';

export const APP_DATA: AppLink[] = [
  // QMS Apps
  {
    id: 'qms-risk',
    title: 'Risk & Opportunities',
    description: 'Registry for tracking organizational risks and strategic opportunities.',
    url: 'https://osmakroregistry.vercel.app/',
    devUrl: 'https://aistudio.google.com/apps/drive/1d7AZS9lsksM1eKTNXVJpl42nrLHBVgHO?showAssistant=true&showPreview=true',
    icon: AlertTriangle,
    category: CategoryType.QMS,
    color: 'text-amber-600'
  },
  {
    id: 'qms-car',
    title: 'Corrective Action Request',
    description: 'Manage and track corrective actions for quality improvement.',
    url: 'https://osmakcar.vercel.app/',
    devUrl: 'https://aistudio.google.com/apps/drive/1vnxn8nxSnMOYi_dhgM3PqH_WZbe4qzqf?showAssistant=true&appParams=%252Frecent-activity&showPreview=true',
    icon: ClipboardCheck,
    category: CategoryType.QMS,
    color: 'text-blue-600'
  },
  {
    id: 'qms-dashboard',
    title: 'QMS Dashboard',
    description: 'Real-time analytics and visualization of Quality Management metrics.',
    url: 'https://osmakqmsdashboard.vercel.app/',
    devUrl: 'https://aistudio.google.com/apps/drive/1TBOSqcBfpxD0AHQcVllmuaRDobQZ7gV2?showAssistant=true&showPreview=true',
    icon: LayoutDashboard,
    category: CategoryType.QMS,
    color: 'text-purple-600'
  },
  // QA Apps
  {
    id: 'qa-training',
    title: 'Training Portal',
    description: 'Onboarding and continuous learning resources for staff.',
    url: 'https://osmakqaonboarding.vercel.app/',
    devUrl: 'https://aistudio.google.com/apps/drive/17mYGkzwMgoF_qjmJsDn1VykWZicYsSaQ?showAssistant=true&resourceKey=&showPreview=true',
    icon: GraduationCap,
    category: CategoryType.QA,
    color: 'text-emerald-600'
  },
  {
    id: 'qa-ams',
    title: 'Antimicrobial Stewardship',
    description: 'Monitoring and guidelines for antimicrobial usage.',
    url: 'https://osmakams.vercel.app/',
    devUrl: 'https://aistudio.google.com/apps/drive/1yaV-P7gk7N8e5GZ8gyRYQK_buAmAJHb-?showAssistant=true&showCode=true',
    icon: Pill,
    category: CategoryType.QA,
    color: 'text-rose-600'
  },
  {
    id: 'qa-ptb',
    title: 'PTB Registry',
    description: 'Pulmonary Tuberculosis patient registry and tracking system.',
    url: 'https://osmakptbregistry.vercel.app/',
    devUrl: 'https://aistudio.google.com/apps/drive/1G2wZIhvoAlFkxxeOxOEzvGoPr2o_V8Nh?showAssistant=true&resourceKey=&showCode=true',
    icon: FileText,
    category: CategoryType.QA,
    color: 'text-cyan-600'
  },
  // Other Apps
  {
    id: 'other-health',
    title: 'Employee Health & Wellness',
    description: 'Track and monitor employee health status and wellness initiatives.',
    url: 'https://osmakhealthtracker.vercel.app',
    devUrl: 'https://aistudio.google.com/apps/drive/1AkKdhscmZYbJ-zBJ7ktd2IjcXpTjqmoR?showAssistant=true&resourceKey=&showPreview=true',
    icon: Heart,
    category: CategoryType.OTHERS,
    color: 'text-pink-600'
  }
];