
// src/components/HeroSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Lottie from "lottie-react";
import heroAnimationData from '../assets/hero-animation.json';

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Build The Future With Intelligent Code
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
                            We architect and engineer scalable, high-performance digital solutions that drive innovation and growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a 
                                href="#contact" 
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 inline-flex items-center justify-center"
                            >
                                Start Your Project <ArrowRight className="inline ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <Lottie animationData={heroAnimationData} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
