import React from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { useThemeStore } from '../store/themeStore';
import { translations } from '../translations';

const Testimonials = () => {
  const { language } = useThemeStore();
  const t = translations[language];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      text: "SomDesk transformed our IT infrastructure. Their 24/7 support is unmatched in the industry.",
    },
    {
      name: "Michael Chen",
      role: "IT Director, GlobalTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      text: "The team's expertise in CCTV systems helped us implement state-of-the-art security solutions.",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, InnovateCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Their remote support capabilities have saved us countless hours of downtime.",
    },
  ];

  return (
    <div className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-900 to-gray-900">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.testimonials.title}
          </h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xl text-gray-300">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-400/30" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-blue-400/50"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">{testimonial.text}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;