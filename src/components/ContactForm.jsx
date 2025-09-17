// // src/components/ContactForm.jsx
import React, { useState } from "react";
import useEnquiry from "../hooks/enquiry.js"; // ✅ make sure path matches your file
import { servicesData } from "../data/staticData";

const ContactForm = () => {
  const { createEnquiry, creating } = useEnquiry();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  
   const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");
  try {
    createEnquiry({
          name: formData.name,
          email: formData.email,
          enquireAbout: formData.service,
          enquiryDescription: formData.message,
      });
    setStatus("Sent!");
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  } catch (err) {
    setStatus("Error! Please try again.");
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="sr-only">
            Select a Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-300"
            required
          >
            <option value="">Select a Service</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Tell us about your project...
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none text-white"
            required
          />
        </div>
        <button
          type="submit"
          disabled={creating || status === "Sending..."}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {creating || status === "Sending..."
            ? "Sending..."
            : status === "Sent!"
            ? "Sent!"
            : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
