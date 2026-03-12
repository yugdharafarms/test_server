import { motion } from 'motion/react';
import { FileText, Target, DollarSign, Copyright, AlertTriangle, Scale, Link as LinkIcon, RefreshCw, Mail } from 'lucide-react';

export function TermsOfService() {
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
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="mb-4">Terms of Service</h1>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Welcome to Yugdhara Organic Farms. By accessing this website, you agree to comply with the following Terms of Service.
              </p>

              {/* Section 1 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Target className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">1. Website Purpose</h2>
                    <p className="text-gray-700 mb-4">This website is created to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Present our organic farming initiatives</li>
                      <li>Share information about crop planning and agroforestry</li>
                      <li>Facilitate grant applications and funding opportunities</li>
                      <li>Build institutional and community partnerships</li>
                    </ul>
                    <p className="text-gray-700 mt-4">The website content is for informational purposes only.</p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <DollarSign className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">2. No Investment or Financial Advice</h2>
                    <p className="text-gray-700 mb-4">The content presented on this website:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Does not constitute financial advice</li>
                      <li>Is not a public investment offer</li>
                      <li>Does not guarantee returns</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      All agricultural projects are subject to environmental, climatic, regulatory, and market risks.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Grant approvals or funding decisions are subject to evaluation by respective authorities and institutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Copyright className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">3. Intellectual Property</h2>
                    <p className="text-gray-700 mb-4">
                      All content, text, branding, images, and materials on this website are the intellectual property of Yugdhara Organic Farms unless otherwise stated.
                    </p>
                    <p className="text-gray-700">Unauthorized reproduction, distribution, or use is prohibited.</p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <AlertTriangle className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">4. Accuracy of Information</h2>
                    <p className="text-gray-700 mb-4">We strive to provide accurate and updated information. However:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Agricultural yields may vary</li>
                      <li>Plantation timelines are indicative</li>
                      <li>Market conditions may change</li>
                    </ul>
                    <p className="text-gray-700 mt-4">We do not guarantee absolute accuracy at all times.</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Scale className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">5. Limitation of Liability</h2>
                    <p className="text-gray-700 mb-4">Yugdhara Organic Farms shall not be held liable for:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Any direct or indirect damages</li>
                      <li>Losses arising from reliance on website information</li>
                      <li>Technical interruptions or website downtime</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <LinkIcon className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">6. External Links</h2>
                    <p className="text-gray-700">
                      We may reference external agricultural or governmental resources. We are not responsible for their content or policies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <RefreshCw className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">7. Modifications</h2>
                    <p className="text-gray-700 mb-4">
                      We reserve the right to update or modify these Terms at any time without prior notice.
                    </p>
                    <p className="text-gray-700">
                      Continued use of the website constitutes acceptance of revised terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <div className="flex items-start mb-6">
                  <Scale className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">8. Governing Law</h2>
                    <p className="text-gray-700">
                      These Terms shall be governed in accordance with the laws of India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Mail className="w-8 h-8 text-green-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-4">9. Contact Details</h2>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-semibold text-gray-900">Yugdhara Organic Farms</p>
                      <p>Mumbai, India</p>
                      <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:yugdhara.orgfarms@gmail.com" className="text-green-700 hover:text-green-800">
                          yugdhara.orgfarms@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong> +91 9869438523
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
