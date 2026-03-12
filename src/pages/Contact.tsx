import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Thank you for your enquiry! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1762884110133-926e4195d3b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMGZpZWxkJTIwaW5kaWElMjBmYXJtZXIlMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MTIyNDkzMHww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/90"
          >
            Get in touch to learn more about our organic farming practices
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl text-green-900 mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We'd love to hear from you. Whether you have questions about our farming methods, products, or want to visit our farm, feel free to reach out.
                </p>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4 p-4 rounded-lg transition-all cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(240, 253, 244, 1)', x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-green-900 mb-1">Email</h3>
                      <a
                        href="mailto:yugdhara.orgfarms@gmail.com"
                        className="text-gray-700 hover:text-green-700 transition-colors"
                      >
                        yugdhara.orgfarms@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 p-4 rounded-lg transition-all cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(240, 253, 244, 1)', x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-green-900 mb-1">Phone</h3>
                      <a
                        href="tel:+919869438523"
                        className="text-gray-700 hover:text-green-700 transition-colors"
                      >
                        +91 9869438523
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 p-4 rounded-lg transition-all"
                    whileHover={{ backgroundColor: 'rgba(240, 253, 244, 1)', x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-green-900 mb-1">Location</h3>
                      <p className="text-gray-700">Mumbai, India</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="mt-12 p-6 bg-green-50 rounded-lg"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(220, 252, 231, 1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-xl text-green-900 mb-3">Visit Our Farm</h3>
                  <p className="text-gray-700">
                    Experience sustainable organic farming firsthand. Schedule a visit to see our multi-layer farming, Gir cow dairy, and agroforestry operations.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-50 p-8 rounded-lg">
                  <h2 className="font-serif text-2xl text-green-900 mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-white"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white"
                        placeholder="Tell us about your enquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-700 hover:bg-green-800 text-white"
                      size="lg"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Enquiry
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}