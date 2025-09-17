// src/components/BackgroundWrapper.jsx
import React from 'react';

const BackgroundWrapper = ({ children }) => {
    return (
        <div className="bg-slate-900 text-white relative">
            {/* Background Grid */}
            <div 
                className="absolute inset-0 z-0 opacity-20" 
                style={{
                    backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', 
                    backgroundSize: '2rem 2rem'
                }}
            ></div>
            
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundWrapper;