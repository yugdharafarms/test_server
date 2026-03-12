import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1767880408267-e9f64de1fe7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDg3ODY5M3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            About Our Organic Farming Mission
          </motion.h1>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-green-700" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-green-900 mb-4">Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Working towards a future where organic farming harmonizes with nature to provide clean, sustainable food and restore environmental vitality.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-green-700" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-green-900 mb-4">Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To foster a healthier environment and community by implementing organic farming practices that protect natural resources and produce nutrient-rich, chemical-free, and fresh food.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-green-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-serif text-xl text-green-900 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Every practice we implement ensures long-term ecological balance and resource preservation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-serif text-xl text-green-900 mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  Rooted in traditional Indian wisdom while embracing modern sustainable techniques.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-serif text-xl text-green-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  Producing nutrient-rich, chemical-free food that nourishes body and soul.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}