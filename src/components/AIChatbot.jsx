// // src/components/AIChatbot.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { MessageCircle, Bot, X, Send } from 'lucide-react';

// const AIChatbot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([{ type: 'bot', text: 'Hello! Ask me about our services.' }]);
//     const [inputValue, setInputValue] = useState('');
//     const chatEndRef = useRef(null);

//     useEffect(() => {
//         chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     const handleSendMessage = () => {
//         if (!inputValue.trim()) return;
//         const userMessage = { type: 'user', text: inputValue };
//         setMessages(prev => [...prev, userMessage]);
        
//         setTimeout(() => {
//             const lowerCaseMessage = inputValue.toLowerCase();
//             let botResponse = 'Great question! Our team can provide more details. Could you fill out the contact form?';
//             if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
//                 botResponse = 'Our pricing is project-based. For a detailed quote, please use our contact form.';
//             } else if (lowerCaseMessage.includes('mobile') || lowerCaseMessage.includes('app')) {
//                 botResponse = 'We build high-performance iOS and Android apps. What kind of app are you thinking of?';
//             } else if (lowerCaseMessage.includes('ai') || lowerCaseMessage.includes('automation')) {
//                 botResponse = 'Our AI automation services can streamline your workflows. What process do you want to improve?';
//             }
            
//             setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
//         }, 1200);

//         setInputValue('');
//     };

//     if (!isOpen) {
//         return (
//             <button 
//                 onClick={() => setIsOpen(true)} 
//                 className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-transform" 
//                 aria-label="Open Chat"
//             >
//                 <MessageCircle className="w-6 h-6" />
//             </button>
//         );
//     }
    
//     return (
//         <div className="fixed bottom-6 right-6 z-50 w-80 h-[28rem] bg-white rounded-2xl shadow-2xl border flex flex-col">
//             <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
//                 <div className="flex items-center gap-2">
//                     <Bot className="w-6 h-6" /> 
//                     <span className="font-semibold">AI Assistant</span>
//                 </div>
//                 <button onClick={() => setIsOpen(false)} aria-label="Close Chat">
//                     <X className="w-5 h-5" />
//                 </button>
//             </header>
//             <main className="flex-1 overflow-y-auto p-4 space-y-3">
//                 {messages.map((msg, index) => (
//                     <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
//                         <div className={`max-w-[80%] p-3 rounded-lg ${
//                             msg.type === 'user' 
//                                 ? 'bg-blue-600 text-white rounded-br-none' 
//                                 : 'bg-gray-100 text-gray-800 rounded-bl-none'
//                         }`}>
//                             {msg.text}
//                         </div>
//                     </div>
//                 ))}
//                 <div ref={chatEndRef} />
//             </main>
//             <footer className="p-2 border-t">
//                 <div className="flex gap-2">
//                     <input 
//                         type="text" 
//                         value={inputValue} 
//                         onChange={e => setInputValue(e.target.value)} 
//                         onKeyPress={e => e.key === 'Enter' && handleSendMessage()} 
//                         placeholder="Ask a question..." 
//                         className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-800" 
//                     />
//                     <button 
//                         onClick={handleSendMessage} 
//                         className="bg-blue-600 text-white p-2 rounded-lg" 
//                         aria-label="Send Message"
//                     >
//                         <Send className="w-4 h-4" />
//                     </button>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default AIChatbot;
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Bot, X, Send } from 'lucide-react';
import { useGroqChat } from '../hooks/chatbot'; // adjust path

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ type: 'bot', text: 'Hello! Ask me about our services.' }]);
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef(null);

    const { sendMessage, loading } = useGroqChat();

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = { type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        const botResponse = await sendMessage(inputValue);
        setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    };

    if (!isOpen) {
        return (
            <button 
                onClick={() => setIsOpen(true)} 
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-transform" 
                aria-label="Open Chat"
            >
                <MessageCircle className="w-6 h-6" />
            </button>
        );
    }
    
    return (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-[28rem] bg-white rounded-2xl shadow-2xl border flex flex-col">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
                <div className="flex items-center gap-2">
                    <Bot className="w-6 h-6" /> 
                    <span className="font-semibold">AI Assistant</span>
                </div>
                <button onClick={() => setIsOpen(false)} aria-label="Close Chat">
                    <X className="w-5 h-5" />
                </button>
            </header>
            <main className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                            msg.type === 'user' 
                                ? 'bg-blue-600 text-white rounded-br-none' 
                                : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {loading && <div className="text-gray-500 text-sm italic">Bot is typing...</div>}
                <div ref={chatEndRef} />
            </main>
            <footer className="p-2 border-t">
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={e => setInputValue(e.target.value)} 
                        onKeyPress={e => e.key === 'Enter' && handleSendMessage()} 
                        placeholder="Ask a question..." 
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-800" 
                    />
                    <button 
                        onClick={handleSendMessage} 
                        className="bg-blue-600 text-white p-2 rounded-lg" 
                        aria-label="Send Message"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default AIChatbot;
