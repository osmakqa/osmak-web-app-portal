import React, { useState } from 'react';
import Header from './components/Header';
import AppCard from './components/AppCard';
import { APP_DATA } from './constants';
import { CategoryType } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isDevMode, setIsDevMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const qmsApps = APP_DATA.filter(app => app.category === CategoryType.QMS);
  const qaApps = APP_DATA.filter(app => app.category === CategoryType.QA);

  const handleToggleDevMode = () => {
    if (isDevMode) {
      setIsDevMode(false);
    } else {
      setShowLoginModal(true);
      setPassword('');
      setError(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'maxterrenal') {
      setIsDevMode(true);
      setShowLoginModal(false);
    } else {
      setError(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Header isDevMode={isDevMode} onToggleDevMode={handleToggleDevMode} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-7xl relative">
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-green-100 text-[#007530] text-xs font-bold uppercase tracking-widest mb-2">
            System Navigation
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Welcome to the <span className="text-[#009a3e]">OsMak Web App Portal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light">
            Access all critical Quality Management and Assurance tools from a single, unified dashboard.
          </p>
          {isDevMode && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mt-4 px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-md border border-blue-200"
            >
              Developer Mode Active: AI Studio Links Visible
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* QMS Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-1 bg-[#009a3e] rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-800">
                Quality Management System (QMS)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {qmsApps.map(app => (
                <motion.div key={app.id} variants={itemVariants}>
                  <AppCard app={app} isDevMode={isDevMode} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* QA Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-1 bg-[#dc2626] rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-800">
                Quality Assurance Apps
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {qaApps.map(app => (
                <motion.div key={app.id} variants={itemVariants}>
                  <AppCard app={app} isDevMode={isDevMode} />
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>

      <footer className="mt-auto py-8 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">
        <p>© {new Date().getFullYear()} Ospital ng Makati. All rights reserved.</p>
        <p className="mt-1 opacity-75">Dedicated to Quality Healthcare & Service Excellence</p>
      </footer>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-xl shadow-2xl z-[201] overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 text-[#009a3e]">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Lock size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Admin Access</h3>
                  </div>
                  <button 
                    onClick={() => setShowLoginModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError(false);
                        }}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:ring-[#009a3e]/20 outline-none transition-all ${
                          error ? 'border-red-500 bg-red-50 text-red-900' : 'border-gray-200 text-gray-900 focus:border-[#009a3e]'
                        }`}
                        placeholder="Enter admin password"
                        autoFocus
                      />
                      {error && (
                        <div className="flex items-center gap-1.5 mt-2 text-red-600 text-sm">
                          <AlertCircle size={14} />
                          <span>Incorrect password</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#009a3e] hover:bg-[#007530] text-white font-medium rounded-lg transition-colors shadow-sm active:scale-[0.98]"
                    >
                      Unlock Developer Mode
                    </button>
                  </div>
                </form>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 text-center">
                Restricted area for authorized personnel only.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;