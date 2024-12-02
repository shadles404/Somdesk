import React from 'react';
import { Monitor, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useThemeStore();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SomDesk</span>
            </div>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.services.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {t.footer.services.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {t.footer.company.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.connect.title}</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SomDesk. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;