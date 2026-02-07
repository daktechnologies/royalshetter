import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".contact-title", { y: 50, opacity: 0, duration: 0.8 })
      .from(".contact-info", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".contact-form", { scale: 0.95, opacity: 0, duration: 0.5 }, "-=0.3");
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-20 bg-primary-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Get in <span className="text-secondary-700">Touch</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Ready to transform your infrastructure needs? Contact us today for expert consultation and customized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Royal Shelter Solutions</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={20} className="text-secondary-700 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary-900">Address</p>
                    <p className="text-secondary-600">
                      3391/03, Amina Manzil, Hakeem Seth Compound,<br />
                      Qasimpura Road, Salamatpura,<br />
                      Bhiwandi, Thane – 421302,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone size={20} className="text-secondary-700 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary-900">Mobile</p>
                    <p className="text-secondary-600">+91-8044464777 | +91-9372345012</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail size={20} className="text-secondary-700 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary-900">Email</p>
                    <p className="text-secondary-600">royalsheltersolutions@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe size={20} className="text-secondary-700 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-secondary-900">Website</p>
                    <a 
                      href="https://www.indiamart.com/royal-shelter-solutions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-secondary-700 transition-colors"
                    >
                      www.indiamart.com/royal-shelter-solutions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-secondary-700 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-secondary-700 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-secondary-700 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-secondary-700 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-secondary-700 text-primary-100 rounded-lg font-medium hover:bg-secondary-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
