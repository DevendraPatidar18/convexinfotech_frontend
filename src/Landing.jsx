// src/LandingPage.jsx
import React from 'react';
import BackgroundWrapper from './components/BackgroundWrapper';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

const LandingPage = () => {
    return (
        <BackgroundWrapper>
            <Navbar />
            
            <main>
                <HeroSection />
                <ServicesSection />
                <WorkSection />
                <TestimonialsSection />
                <AboutSection />
                <ContactSection />
            </main>

            <AIChatbot />
            <Footer />
        </BackgroundWrapper>
    );
};

export default LandingPage;