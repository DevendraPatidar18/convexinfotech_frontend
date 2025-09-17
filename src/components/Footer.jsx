// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TechSolutions Pro. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;