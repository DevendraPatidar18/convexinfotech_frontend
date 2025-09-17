// src/components/WorkSection.jsx
import React, { useState } from 'react';
import { projectsData, projectFilters } from '../data/staticData';

const WorkSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filteredProjects = projectsData.filter(p => activeFilter === 'All' || p.category === activeFilter);

    return (
        <section id="work" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Work</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A selection of projects that showcase our commitment to excellence.
                    </p>
                </div>
                
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {projectFilters.map(filter => (
                        <button 
                            key={filter} 
                            onClick={() => setActiveFilter(filter)} 
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                activeFilter === filter 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.title} 
                            style={{animationDelay: `${index * 100}ms`}} 
                            className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm font-semibold text-blue-400 mb-2">{project.category}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;