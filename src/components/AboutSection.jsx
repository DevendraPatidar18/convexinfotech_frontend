// src/components/AboutSection.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Lottie from "lottie-react";
import aboutAnimationData from '../assets/about-animation.json';

const AboutSection = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Us</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-6">
                        We are a forward-thinking software solutions company dedicated to helping businesses thrive in the digital age. 
                        With expertise spanning mobile, web, and AI, we deliver cutting-edge solutions that drive growth and efficiency.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            <span>Expert team with proven track record</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            <span>Agile development methodology</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            <span>Transparent and collaborative process</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <Lottie animationData={aboutAnimationData} loop={true} />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;