import React from 'react';
import { ArrowRight, Clock, Shield, HeadsetIcon } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useThemeStore();
  const t = translations[language];

  return (
    <div className="pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
            {t.hero.title}
            <span className="block text-blue-400">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition group">
              {t.hero.getStarted}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400/10 transition">
              {t.hero.viewServices}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors">
            <Clock className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t.hero.features.support}</h3>
            <p className="text-gray-400">{t.hero.features.supportDesc}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors">
            <Shield className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t.hero.features.security}</h3>
            <p className="text-gray-400">{t.hero.features.securityDesc}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors">
            <HeadsetIcon className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t.hero.features.remote}</h3>
            <p className="text-gray-400">{t.hero.features.remoteDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;