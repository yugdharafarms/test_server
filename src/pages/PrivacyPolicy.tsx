import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, Cookie, Link as LinkIcon, Clock, Mail } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-xl text-green-100">
              Effective Date: February 16, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Yugdhara Organic Farms ("we", "our", "us") respects your privacy and is committed to protecting the personal information you share with us.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or communicate with us regarding farming initiatives, partnerships, or grant-related activities.
              </p>

              {/* Section 1 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Database className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-700 mb-4">We may collect the following information:</p>
                  </div>
                </div>
                
                <div className="ml-12">
                  <h3 className="text-xl font-serif text-gray-900 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Organization / Institution Name</li>
                    <li>Location</li>
                    <li>Message / Inquiry details</li>
                  </ul>

                  <h3 className="text-xl font-serif text-gray-900 mb-3">Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Website usage data (via cookies)</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Eye className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">2. Purpose of Data Collection</h2>
                    <p className="text-gray-700 mb-4">The primary purpose of this website is to:</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-12">
                  <li>Facilitate communication regarding agricultural projects</li>
                  <li>Support grant applications and funding initiatives</li>
                  <li>Establish institutional partnerships</li>
                  <li>Share information about sustainable farming activities</li>
                  <li>Respond to inquiries and collaboration requests</li>
                </ul>
                <p className="text-gray-700 mt-4 ml-12">We collect only the information necessary to support these activities.</p>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">Your information may be used to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Respond to inquiries</li>
                  <li>Process grant-related communications</li>
                  <li>Share project updates</li>
                  <li>Evaluate collaboration opportunities</li>
                  <li>Improve website performance</li>
                </ul>
                <p className="text-gray-900 font-semibold mt-4">
                  We do not sell, rent, or trade personal information to third parties.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Lock className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">4. Data Protection & Security</h2>
                    <p className="text-gray-700 mb-4">
                      We implement appropriate technical and organizational security measures to protect personal information from unauthorized access, misuse, or disclosure.
                    </p>
                    <p className="text-gray-700">
                      However, no digital transmission is 100% secure, and users share information at their own discretion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Cookie className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">5. Cookies Policy</h2>
                    <p className="text-gray-700 mb-4">Our website may use cookies to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Improve user experience</li>
                      <li>Track site performance</li>
                      <li>Understand visitor behavior</li>
                    </ul>
                    <p className="text-gray-700 mt-4">Users may disable cookies in their browser settings.</p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <LinkIcon className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">6. Third-Party Links</h2>
                    <p className="text-gray-700">
                      Our website may contain links to external websites related to agriculture, grants, or institutional bodies. We are not responsible for the privacy practices of third-party websites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Clock className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">7. Data Retention</h2>
                    <p className="text-gray-700">
                      We retain personal information only as long as necessary for legitimate agricultural, funding, partnership, or compliance purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif text-gray-900 mb-4">8. Your Rights</h2>
                <p className="text-gray-700 mb-4">You may request:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your information</li>
                </ul>
                <p className="text-gray-700 mt-4">Requests can be made via the contact details below.</p>
              </div>

              {/* Section 9 */}
              <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Mail className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">9. Contact Information</h2>
                    <p className="text-gray-700 mb-4">For privacy-related concerns:</p>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:yugdhara.orgfarms@gmail.com" className="text-green-700 hover:text-green-800">
                          yugdhara.orgfarms@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong> +91 9869438523
                      </p>
                      <p>
                        <strong>Location:</strong> Mumbai, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
