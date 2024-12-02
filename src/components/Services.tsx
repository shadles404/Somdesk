import React from 'react';
import { Monitor, Printer, Camera, WrenchIcon } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { useThemeStore } from '../store/themeStore';
import { translations } from '../translations';

const Services = () => {
  const { language } = useThemeStore();
  const t = translations[language];

  const services = [
    {
      icon: <Monitor className="h-12 w-12 text-blue-600 mb-6" />,
      title: t.services.computer.title,
      image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=800",
      features: t.services.computer.features,
    },
    {
      icon: <Printer className="h-12 w-12 text-blue-600 mb-6" />,
      title: t.services.printer.title,
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
      features: t.services.printer.features,
    },
    {
      icon: <Camera className="h-12 w-12 text-blue-600 mb-6" />,
      title: t.services.cctv.title,
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800",
      features: t.services.cctv.features,
    },
  ];

  return (
    <div id="services" className="relative py-20 bg-gradient-to-b from-gray-900 to-blue-900 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.services.title}</h2>
          <p className="text-xl text-gray-300">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 rounded-xl z-10"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl z-20">
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {service.icon}
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <ul className="space-y-3 text-gray-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <WrenchIcon className="h-5 w-5 mr-2 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;