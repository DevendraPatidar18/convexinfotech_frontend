// src/components/TestimonialsSection.jsx
import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/staticData';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 bg-white/5 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Trusted By <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Innovators</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Hear what our clients have to say about our work.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col"
                        >
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => 
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                )}
                            </div>
                            <p className="text-gray-300 flex-grow">"{testimonial.comment}"</p>
                            <div className="mt-6 flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-xl mr-4">
                                    {testimonial.avatarInitial}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;