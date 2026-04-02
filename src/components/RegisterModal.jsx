import React, { useState } from 'react';

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    level: '',
    interest: '' // Default empty to show placeholder
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      // Directs request to the Python API (works locally and on Vercel)
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.status === 'success') {
        setStatus('success');
        setMessage(data.message);
        // Clear form correctly on successful delivery
        setFormData({ fullName: '', email: '', department: '', level: '', interest: '' });
      } else {
        setStatus('error');
        // Show the actual message from PHP if it exists
        setMessage(data.message || 'Server-side validation failed. Please check all fields.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Ensure the Python Flask backend is running!');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred immersive background */}
      <div
        className="absolute inset-0 bg-purple-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Centered Dynamic Interface Modal */}
      <div className="relative bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(168,85,247,0.3)] w-full max-w-lg overflow-hidden animate-fade-scale">
        {/* Purple Gradient Header Component */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 flex justify-between items-center text-white">
          <h2 className="text-2xl font-bold">Register Now</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white transition transform hover:scale-110">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Form Body Context */}
        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8 animate-slide-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 text-4xl shadow-inner">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-3xl font-bold text-purple-700 mb-4">Registration Successful!</h3>
              <p className="text-lg text-purple-600 mb-8 max-w-xs mx-auto">
                Thank you for applying. We have sent a confirmation email to your address and securely recorded your response.
              </p>
              <button
                onClick={onClose}
                className="gradient-button px-8 py-4 rounded-full text-white font-bold transition-transform hover:-translate-y-1 w-full shadow-lg text-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-4 border border-red-200 flex items-center animate-shake">
                  <i className="fas fa-exclamation-circle mr-3 text-lg"></i>
                  <span className="font-medium">{message}</span>
                </div>
              )}

              <div>
                <label className="block text-purple-700 font-bold mb-1 ml-1">Full Name *</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-purple-900 font-medium placeholder-purple-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-purple-700 font-bold mb-1 ml-1">Email Address *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-purple-900 font-medium placeholder-purple-300"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-purple-700 font-bold mb-1 ml-1">Department *</label>
                  <input
                    required
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-purple-900 font-medium placeholder-purple-300"
                    placeholder="e.g. Mech. Eng"
                  />
                </div>
                <div>
                  <label className="block text-purple-700 font-bold mb-1 ml-1">Level *</label>
                  <select
                    required
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-purple-900 font-medium"
                  >
                    <option value="" disabled>Select</option>
                    <option value="100">100 Level</option>
                    <option value="200">200 Level</option>
                    <option value="300">300 Level</option>
                    <option value="400">400 Level</option>
                    <option value="500+">500+ Level</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-purple-700 font-bold mb-1 ml-1">Area of Interest</label>
                <select
                  required
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-purple-900 font-medium"
                >
                  <option value="" disabled>Select</option>
                  <option value="web2 skills">web2 skills</option>
                  <option value="web3 skills">web3 skills</option>
                  <option value="both web2 and web3">both web2 and web3</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full gradient-button px-6 py-4 mt-6 rounded-xl text-white font-bold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-purple-500/40 disabled:opacity-70 disabled:filter-grayscale"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center space-x-2">
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Processing Submission...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Submit Backend Registration</span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
