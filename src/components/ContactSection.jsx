// src/components/ContactSection.jsx
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-white/5 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's Build <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Together</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to start your next project? We're here to help.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;