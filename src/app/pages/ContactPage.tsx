import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+852 3702 1796',
      subDetails: 'Toll Free Support'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@offshorecompanycorp.com',
      subDetails: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Hong Kong Office',
      subDetails: 'Central, Hong Kong'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 - 18:00',
      subDetails: 'GMT +8'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              Get in touch with our expert team for professional consultation and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#C91F26] group"
                >
                  <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C91F26] transition-colors">
                    <Icon className="w-6 h-6 text-[#C91F26] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-[#2C2C2C] mb-2">{info.title}</h3>
                  <p className="text-[#C91F26] font-semibold mb-1">{info.details}</p>
                  <p className="text-sm text-[#6C757D]">{info.subDetails}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-[#6C757D] mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C91F26] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C91F26] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C91F26] focus:border-transparent outline-none transition-all"
                    placeholder="+852 1234 5678"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C91F26] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="company-formation">Company Formation</option>
                    <option value="nominee-services">Nominee Services</option>
                    <option value="banking">Banking Services</option>
                    <option value="compliance">Compliance & Accounting</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C91F26] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#C91F26] hover:bg-[#a51920] text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right Side - Additional Info */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-[#C91F26]">
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#C91F26] text-white text-xs flex items-center justify-center">✓</span>
                      Expert Consultation
                    </h4>
                    <p className="text-[#6C757D] text-sm ml-8">
                      Get professional advice from our experienced team on company formation and offshore services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#C91F26] text-white text-xs flex items-center justify-center">✓</span>
                      Fast Response
                    </h4>
                    <p className="text-[#6C757D] text-sm ml-8">
                      We respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#C91F26] text-white text-xs flex items-center justify-center">✓</span>
                      Tailored Solutions
                    </h4>
                    <p className="text-[#6C757D] text-sm ml-8">
                      Every business is unique. We provide customized solutions for your specific needs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#C91F26] text-white text-xs flex items-center justify-center">✓</span>
                      Multilingual Support
                    </h4>
                    <p className="text-[#6C757D] text-sm ml-8">
                      Our team speaks multiple languages to serve clients worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-[#C91F26] mb-1">24h</div>
                  <div className="text-sm text-[#6C757D]">Response Time</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-[#C91F26] mb-1">100+</div>
                  <div className="text-sm text-[#6C757D]">Jurisdictions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
