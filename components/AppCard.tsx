import React from 'react';
import { ExternalLink, Bot, ArrowRight } from 'lucide-react';
import { AppLink } from '../types';
import { motion } from 'framer-motion';

interface AppCardProps {
  app: AppLink;
  isDevMode?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ app, isDevMode = false }) => {
  const Icon = app.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#009a3e]/30"
    >
      {/* Top accent line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-gray-200 to-gray-100 group-hover:from-[#009a3e] group-hover:to-[#007530] transition-colors duration-500" />
      
      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-green-50 transition-colors duration-300 ${app.color}`}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
          {/* Main App Link Icon */}
          <a 
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#009a3e] transition-colors p-1"
            title="Open Application"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <a 
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group-hover:text-[#009a3e] transition-colors"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors">
            {app.title}
          </h3>
        </a>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
          {app.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-2">
          {/* Default Access Link */}
          <a 
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-[#009a3e] transition-colors py-1"
          >
            Access Portal
            <ArrowRight size={14} />
          </a>

          {/* Developer Mode Link */}
          {isDevMode && app.devUrl && (
            <a 
              href={app.devUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded-md hover:bg-blue-100 transition-colors mt-2"
            >
              <div className="flex items-center gap-2">
                <Bot size={16} />
                <span>AI Studio</span>
              </div>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
      
      {/* Abstract circle decoration */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gray-50 rounded-full transition-transform duration-500 group-hover:scale-150 group-hover:bg-green-50/50 -z-0" />
    </motion.div>
  );
};

export default AppCard;