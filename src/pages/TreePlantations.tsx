import { motion } from 'motion/react';
import { TreePine, Clock, TrendingUp } from 'lucide-react';

export function TreePlantations() {
  const crops = [
    {
      category: 'Short-Term Crops',
      timeline: '3-12 months',
      items: [
        { name: 'Sugarcane', duration: '3–4 months' },
        { name: 'Banana', duration: '9–12 months' },
      ],
      color: 'green',
    },
    {
      category: 'Medium-Term',
      timeline: '5-7 years',
      items: [{ name: 'Kattha (Acacia catechu)', duration: '5–7 years' }],
      color: 'amber',
    },
    {
      category: 'Long-Term Premium Trees',
      timeline: '15-20 years',
      items: [
        { name: 'Agarwood', duration: '15–20 years' },
        { name: 'Red Sandalwood', duration: '15–20 years' },
        { name: 'White Sandalwood', duration: '15–20 years' },
      ],
      color: 'emerald',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1648485716909-2636f8abb2cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGFncm9mb3Jlc3RyeXxlbnwxfHx8fDE3NzA4Nzg2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Diversified Agroforestry & Plantation Model
          </motion.h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Our diversified plantation model integrates short, medium, and long-term crops to ensure continuous income streams while building long-term wealth and ecological stability.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Crop Timeline */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-green-900 text-center mb-16">
              Plantation Timeline
            </h2>
            <div className="space-y-12">
              {crops.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className={`bg-${category.color}-600 text-white p-6`}>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <TreePine className="w-10 h-10" />
                        <div>
                          <h3 className="font-serif text-2xl">{category.category}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-4 h-4" />
                            <p className="text-sm">{category.timeline}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className={`bg-${category.color}-50 p-4 rounded-lg border border-${category.color}-200`}
                        >
                          <p className="text-lg text-gray-900 mb-1">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <TrendingUp className="w-16 h-16 text-green-700 mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl text-green-900 mb-8">
                Long-Term Value Creation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This diversified approach ensures long-term wealth creation and ecological stability while providing consistent returns at different intervals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-serif text-xl text-green-900 mb-2">Immediate Returns</h3>
                  <p className="text-gray-600">Short-term crops provide quick cash flow</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-serif text-xl text-green-900 mb-2">Steady Income</h3>
                  <p className="text-gray-600">Medium-term crops ensure continuous revenue</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-serif text-xl text-green-900 mb-2">Wealth Building</h3>
                  <p className="text-gray-600">Premium trees create lasting value</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forest Image Section */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.7), rgba(45, 80, 22, 0.7)), url('https://images.unsplash.com/photo-1762085337179-a98d6cfa5813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB3b29kbGFuZCUyMG5hdHVyZSUyMGdyZWVufGVufDF8fHx8MTc3MDg3ODY5Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Building Forests, Building Futures
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Our agroforestry model creates thriving ecosystems that benefit both people and planet for generations to come.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
