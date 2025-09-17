// src/data/staticData.js
// --- Static Data ---
export const servicesData = [
    { id: 'mobile', icon: 'Smartphone', title: 'Mobile App Development', description: 'Native iOS and Android applications with cutting-edge UI/UX design.', technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { id: 'web', icon: 'Globe', title: 'Web Development', description: 'Responsive, scalable web applications built with modern frameworks.', technologies: ['React', 'Next.js', 'Vue.js', 'Node.js'] },
    { id: 'ai', icon: 'Bot', title: 'AI & Machine Learning', description: 'Intelligent solutions to automate processes and gain valuable insights.', technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Vision'] },
    { id: 'automation', icon: 'Zap', title: 'Agentic AI Automation', description: 'Advanced AI agents to perform complex tasks autonomously.', technologies: ['LangChain', 'AutoGPT', 'CrewAI', 'Agents'] },
    { id: 'powerapp', icon: 'Code', title: 'Microsoft Power Apps', description: 'Low-code business applications that streamline your operations.', technologies: ['Power Platform', 'Automate', 'Power BI', 'SharePoint'] },
    { id: 'website', icon: 'Users', title: 'Static & Dynamic Websites', description: 'Fast, SEO-optimized websites from simple pages to complex apps.', technologies: ['Gatsby', 'Next.js', 'WordPress', 'Headless'] }
];

export const projectsData = [
    { title: 'AI-Powered Dashboard', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop', description: 'Real-time analytics with machine learning insights.' },
    { title: 'E-Commerce Mobile App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop', description: 'React Native app with AI-powered recommendations.' },
    { title: 'Corporate Website', category: 'Web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop', description: 'Modern responsive website with CMS integration.' },
    { title: 'Automation Platform', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=400&fit=crop', description: 'Intelligent workflow automation system.' }
];

export const testimonialsData = [
    { name: 'Sarah L.', company: 'Innovate Inc.', comment: "TechSolutions Pro delivered a flawless mobile app ahead of schedule. Their team's expertise in AI integration was a game-changer for our business.", avatarInitial: 'S' },
    { name: 'Michael B.', company: 'Quantum Dynamics', comment: "The AI automation platform they built for us has increased our operational efficiency by 40%. Truly a professional and visionary team.", avatarInitial: 'M' },
    { name: 'Jessica P.', company: 'Creative Hub', comment: "Our new website is not only beautiful but also incredibly fast. The attention to detail and user experience is second to none.", avatarInitial: 'J' },
];

export const projectFilters = ['All', 'Web', 'Mobile', 'AI/ML'];

export const navLinks = [
    { href: '#home', label: 'Home' }, 
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Our Work' }, 
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
];