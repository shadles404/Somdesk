import React from 'react';
import { Menu, X, Monitor, Sun, Moon, Languages } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { translations } from '../translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleDarkMode, language, setLanguage } = useThemeStore();
  const t = translations[language];

  return (
    <nav className={`fixed w-full z-50 transition-colors ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">SomDesk</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-blue-600">{t.nav.services}</a>
            <a href="#how-it-works" className="hover:text-blue-600">{t.nav.howItWorks}</a>
            <a href="#pricing" className="hover:text-blue-600">{t.nav.pricing}</a>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <button
                onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
                className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Languages className="h-5 w-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              {t.nav.getSupport}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 hover:text-blue-600">{t.nav.services}</a>
            <a href="#how-it-works" className="block px-3 py-2 hover:text-blue-600">{t.nav.howItWorks}</a>
            <a href="#pricing" className="block px-3 py-2 hover:text-blue-600">{t.nav.pricing}</a>
            <button
              onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
              className="flex items-center space-x-1 px-3 py-2 w-full text-left hover:text-blue-600"
            >
              <Languages className="h-5 w-5" />
              <span>{language === 'en' ? 'Somali' : 'English'}</span>
            </button>
            <a href="#contact" className="block px-3 py-2 text-blue-600 font-medium">
              {t.nav.getSupport}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;