import { motion } from 'motion/react';
import { Layers, Sprout, TrendingUp, TreePine, Leaf, Droplets } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Button } from '../components/ui/button';
import { useEffect } from 'react';
import { MultiLayerDiagram } from '../components/MultiLayerDiagram';

export function FarmingMethods() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation whenever location changes
    const hash = location.hash;
    if (hash) {
      // Small delay to ensure the DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // 80px for header
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1722810767145-5f8380c009df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGhhcnZlc3R8ZW58MXx8fHwxNzcwODM0MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Advanced Organic Farming Systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          >
            Maximizing productivity while preserving ecological balance
          </motion.p>
        </div>
      </section>

      {/* Multi-Layer Farming */}
      <section id="multi-layer" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Layers className="w-8 h-8 text-green-700" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-green-900">
                  Multi-Layer Farming
                </h2>
                <p className="text-gray-600">Vertical integration for maximum efficiency</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1610720752661-65b06d6fc857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aSUyMGxheWVyJTIwdmVydGljYWwlMjBmYXJtaW5nJTIwb3JnYW5pYyUyMGNyb3BzfGVufDF8fHx8MTc3MTQ5NTUxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Multi-layer farming system"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold bg-green-700 px-3 py-1 rounded-full inline-block">
                    5x Productivity Per Acre
                  </p>
                </div>
              </div>

              {/* Secondary Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1636634245682-f7d41c3dc8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHRyZWVzJTIwb3JjaGFyZCUyMGNhbm9weSUyMHN1bmxpZ2h0JTIwZ3JlZW58ZW58MXx8fHwxNzcxNDk1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fruit tree canopy layer"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold bg-amber-700 px-3 py-1 rounded-full inline-block">
                    Canopy Layer - Fruit Trees
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A sophisticated vertical farming approach that arranges crops at different heights to maximize sunlight exposure and land productivity. This innovative system delivers yields equivalent to 5 acres on just 1 acre of land.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-serif text-xl text-green-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                    Key Impact
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      5x productivity per acre compared to traditional farming
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Natural pest reduction through biodiversity
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Enhanced soil vitality and nutrient cycling
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Optimal sunlight utilization across all layers
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-serif text-xl text-blue-900 mb-4 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-blue-700" />
                    Crop Layers
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Canopy Layer:</span> Fruit trees (mango, papaya, avocado)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Mid-Level:</span> Creepers & climbers (bottle gourd, passion fruit)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Ground Level:</span> Leafy vegetables (spinach, lettuce)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Root Layer:</span> Turmeric, ginger, and root vegetables
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="bg-gradient-to-b from-sky-50 to-green-50 p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-green-900 mb-6 text-center">
                How Multi-Layer Farming Works
              </h3>
              <MultiLayerDiagram />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Multi-Crop Farming */}
      <section id="multi-crop" className="py-20 bg-green-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Sprout className="w-8 h-8 text-amber-700" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-green-900">
                  Multi-Crop Farming
                </h2>
                <p className="text-gray-600">Diversified cultivation for year-round productivity</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Image 1 */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1759044858251-d4c9da88f7f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmNyb3BwaW5nJTIwbXVsdGlwbGUlMjBjcm9wcyUyMGZhcm0lMjBmaWVsZHxlbnwxfHx8fDE3NzE0OTU1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Intercropping multiple crops"
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Intercropping System</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1738669313657-07ebf0f23d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdmVnZXRhYmxlJTIwZ2FyZGVuJTIwbWl4ZWQlMjBjcm9wc3xlbnwxfHx8fDE3NzE0OTU1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Diverse vegetable garden"
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Mixed Vegetable Cultivation</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1758158254068-8fe19e4968f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwcm90YXRpb24lMjBmaWVsZCUyMGFncmljdWx0dXJlJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzcxNDk1NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Crop rotation fields"
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Crop Rotation Strategy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Strategic cultivation of multiple crops within a single year through intercropping, relay cropping, and systematic rotation. This approach ensures continuous income, improved soil health, and reduced dependency on chemicals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="font-serif text-lg text-green-900 mb-3">Economic Benefits</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      Multiple income streams throughout the year
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      Reduced market risk through diversification
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      Higher overall farm profitability
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="font-serif text-lg text-green-900 mb-3">Ecological Benefits</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      Natural soil enrichment through nitrogen fixation
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      Biological pest control and disease management
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      Improved biodiversity and ecosystem health
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Sprout className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="font-serif text-lg text-green-900 mb-3">Farm Resilience</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-600">•</span>
                      Risk diversification across crop varieties
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-600">•</span>
                      Protection against climate variability
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-600">•</span>
                      Continuous productivity year-round
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Farming Techniques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                <h4 className="font-serif text-lg text-green-900 mb-2">Intercropping</h4>
                <p className="text-sm text-gray-600">Growing two or more crops simultaneously in the same field</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-600">
                <h4 className="font-serif text-lg text-green-900 mb-2">Relay Cropping</h4>
                <p className="text-sm text-gray-600">Planting second crop before first crop is harvested</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-600">
                <h4 className="font-serif text-lg text-green-900 mb-2">Crop Rotation</h4>
                <p className="text-sm text-gray-600">Sequential planting of different crops in same area</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plantation & Agroforestry */}
      <section id="plantation" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <TreePine className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-green-900">
                  Plantation Model & Agroforestry
                </h2>
                <p className="text-gray-600">Long-term sustainable growth and ecological balance</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Plantation Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1758582388197-cd8449914603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMHN1c3RhaW5hYmxlJTIwZm9yZXN0cnklMjB5b3VuZ3xlbnwxfHx8fDE3NzE0OTU1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tree plantation sustainable forestry"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold bg-emerald-700 px-3 py-1 rounded-full inline-block">
                    Tree Plantation for Long-Term Value
                  </p>
                </div>
              </div>

              {/* Agroforestry Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1644845664240-bd0813b50cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JvZm9yZXN0cnklMjBtaXhlZCUyMGZhcm1pbmclMjB0cmVlcyUyMGNyb3BzfGVufDF8fHx8MTc3MTQ5NTUxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Agroforestry mixed farming"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold bg-green-700 px-3 py-1 rounded-full inline-block">
                    Agroforestry Integration
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our plantation model focuses on high-value crops including exotic fruits, premium nuts, and valuable timber species that provide sustainable returns over time. Combined with agroforestry practices, we integrate trees with crops and livestock to create a resilient, productive, and ecologically balanced farming system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-serif text-xl text-emerald-900 mb-4">High-Value Plantation Crops</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <TreePine className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                      Red & White Sandalwood (15-20 years)
                    </li>
                    <li className="flex items-start">
                      <TreePine className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                      Agarwood - Premium timber (15-20 years)
                    </li>
                    <li className="flex items-start">
                      <TreePine className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                      Kattha (Acacia catechu) (5-7 years)
                    </li>
                    <li className="flex items-start">
                      <TreePine className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                      Cashew & exotic fruit orchards
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-serif text-xl text-green-900 mb-4">Agroforestry Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      Carbon sequestration and climate mitigation
                    </li>
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      Soil erosion prevention and water retention
                    </li>
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      Biodiversity enhancement and wildlife habitat
                    </li>
                    <li className="flex items-start">
                      <Leaf className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                      Diversified income from timber, fruits, and fodder
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sustainable Farming Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8 group">
              <img
                src="https://images.unsplash.com/photo-1624806992928-9c7a04a8383d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWVyJTIwaGFuZHMlMjBzb2lsJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzcxNDk1NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sustainable organic farming practices"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <h3 className="font-serif text-3xl md:text-4xl mb-4">
                  Committed to Sustainable Agriculture
                </h3>
                <p className="text-lg max-w-2xl mb-6">
                  Discover the diverse crops we cultivate using these advanced farming methods
                </p>
                <Link to="/products">
                  <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 px-8">
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}