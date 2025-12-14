import React from 'react';
import { Lock, Unlock, ExternalLink } from 'lucide-react';

interface HeaderProps {
  isDevMode?: boolean;
  onToggleDevMode?: () => void;
}

const PORTAL_DEV_URL = "https://aistudio.google.com/apps/drive/1NSB5Ctf4Hlf1csirEZHQNUitFSTJlSQ2?showAssistant=true&showPreview=true&resourceKey=";

const Header: React.FC<HeaderProps> = ({ isDevMode = false, onToggleDevMode }) => {
  return (
    <header className="sticky top-0 z-[100] flex items-center gap-4 bg-[#009a3e] text-white py-3 px-4 shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
      <img 
        src="https://maxterrenal-hash.github.io/justculture/osmak-logo.png" 
        alt="OsMak Logo" 
        className="h-[48px] w-auto"
      />
      <div className="flex flex-col">
        <h1 className="m-0 text-[1.05rem] tracking-[0.04em] font-bold uppercase leading-tight">
          OSPITAL NG MAKATI
        </h1>
        {isDevMode ? (
          <a 
            href={PORTAL_DEV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.8rem] opacity-90 hover:opacity-100 hover:text-yellow-300 transition-colors flex items-center gap-1 w-fit"
            title="Open Portal in AI Studio"
          >
            <span>Web App Portal</span>
            <ExternalLink size={12} />
          </a>
        ) : (
          <span className="text-[0.8rem] opacity-90">
            Web App Portal
          </span>
        )}
      </div>

      <button 
        onClick={onToggleDevMode}
        className={`ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          isDevMode 
            ? 'bg-red-600 hover:bg-red-700 text-white shadow-inner' 
            : 'bg-white/10 hover:bg-white/20 text-green-50'
        }`}
        title={isDevMode ? "Exit Developer Mode" : "Enter Developer Mode"}
      >
        {isDevMode ? (
          <>
            <Unlock size={14} />
            <span>Dev Mode</span>
          </>
        ) : (
          <>
            <Lock size={14} />
            <span className="hidden sm:inline">Admin</span>
          </>
        )}
      </button>
    </header>
  );
};

export default Header;