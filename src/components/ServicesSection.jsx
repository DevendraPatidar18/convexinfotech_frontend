// src/components/ServicesSection.jsx
import React from 'react';
import { Code, Smartphone, Globe, Bot, Zap, Users } from 'lucide-react';
import { servicesData } from '../data/staticData';

const ServicesSection = () => {
    const getIcon = (iconName) => {
        const iconMap = {
            Smartphone: <Smartphone className="w-8 h-8" />,
            Globe: <Globe className="w-8 h-8" />,
            Bot: <Bot className="w-8 h-8" />,
            Zap: <Zap className="w-8 h-8" />,
            Code: <Code className="w-8 h-8" />,
            Users: <Users className="w-8 h-8" />
        };
        return iconMap[iconName];
    };

    return (
        <section id="services" className="py-20 bg-white/5 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We deliver comprehensive technology solutions tailored to your business needs.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div 
                            key={service.id} 
                            style={{animationDelay: `${index * 100}ms`}} 
                            className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                {getIcon(service.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6 line-clamp-3">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech) => (
                                    <span 
                                        key={tech} 
                                        className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;