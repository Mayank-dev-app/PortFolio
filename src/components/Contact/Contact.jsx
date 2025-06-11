import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaTimes } from 'react-icons/fa';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => onClose(), 2000); // Auto-close after 2s

 try {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  const data = await res.json();
  console.log(data);
 
 } catch (error) {
    console.log("The Error: ", error);
 } };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative">
        <button
          className="absolute top-3 right-4 text-xl text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <FaCommentDots /> Contact Us
        </h2>

        {submitted && (
          <p className="text-green-600 mb-4">Thanks! I’ll contact you soon.</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <div className="flex items-center border px-3 rounded-md text-black">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full py-2 outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <div className="flex items-center border px-3 rounded-md text-black">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full py-2 outline-none"
              />
            </div>
          </div>

          <div className="mb-4 text-black">
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border px-3 py-2 rounded-md focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
