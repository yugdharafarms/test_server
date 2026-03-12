import { motion } from 'motion/react';
import { Leaf, Droplets, Bug, Sprout, Trees, Heart, Wind, Sun } from 'lucide-react';

const sustainabilityImages = {
  carbonForest: 'https://images.unsplash.com/photo-1769373468731-f2072960b5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBzZXF1ZXN0cmF0aW9uJTIwZm9yZXN0JTIwdHJlZXMlMjBncmVlbiUyMGNhbm9weSUyMGFlcmlhbHxlbnwxfHx8fDE3NzI0NTE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  soilRegeneration: 'https://images.unsplash.com/photo-1642952273588-ed6fa28870ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwcmVnZW5lcmF0aW9uJTIwb3JnYW5pYyUyMGNvbXBvc3RpbmclMjBmYXJtaW5nJTIwaGFuZHMlMjBlYXJ0aHxlbnwxfHx8fDE3NzI0NTE1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  waterConservation: 'https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlud2F0ZXIlMjBoYXJ2ZXN0aW5nJTIwZHJpcCUyMGlycmlnYXRpb24lMjBzdXN0YWluYWJsZSUyMHdhdGVyJTIwZmFybXxlbnwxfHx8fDE3NzI0NTE1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  biodiversity: 'https://images.unsplash.com/photo-1769799199079-4ce4530cedf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9kaXZlcnNpdHklMjB3aWxkZmxvd2VycyUyMGluc2VjdHMlMjBidXR0ZXJmbGllcyUyMG9yZ2FuaWMlMjBmYXJtfGVufDF8fHx8MTc3MjQ1MTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  solarEnergy: 'https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVuZXJneSUyMHNvbGFyJTIwcGFuZWxzJTIwZmFybSUyMHJlbmV3YWJsZSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MjQ1MTUwOHww&ixlib=rb-4.1.0&q=80&w=1080',
};

const commitments = [
  {
    icon: Sprout,
    title: 'Soil Regeneration',
    description: 'Restoring soil health through organic matter, crop rotation, and natural composting.',
    image: sustainabilityImages.soilRegeneration,
    color: 'green',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Efficient irrigation systems and rainwater harvesting to preserve precious water resources.',
    image: sustainabilityImages.waterConservation,
    color: 'blue',
  },
  {
    icon: Bug,
    title: 'Natural Pest Control',
    description: 'Biological pest management using beneficial insects and companion planting.',
    image: sustainabilityImages.biodiversity,
    color: 'amber',
  },
  {
    icon: Leaf,
    title: 'Reduced Chemical Usage',
    description: 'Eliminating synthetic pesticides and fertilizers for truly organic production.',
    image: sustainabilityImages.carbonForest,
    color: 'emerald',
  },
  {
    icon: Trees,
    title: 'Biodiversity Preservation',
    description: 'Creating habitats for diverse species through integrated farming systems.',
    image: sustainabilityImages.biodiversity,
    color: 'teal',
  },
  {
    icon: Heart,
    title: 'Ecosystem Restoration',
    description: 'Farming practices that regenerate rather than deplete natural resources.',
    image: sustainabilityImages.soilRegeneration,
    color: 'rose',
  },
];

const impactStats = [
  { value: '0%', label: 'Synthetic Chemicals', icon: Leaf, color: 'green' },
  { value: '40%', label: 'Less Water Usage', icon: Droplets, color: 'blue' },
  { value: '500+', label: 'Trees Planted', icon: Trees, color: 'emerald' },
  { value: '100%', label: 'Organic Certified', icon: Sun, color: 'amber' },
];

export function Sustainability() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section
        className="py-40 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('${sustainabilityImages.carbonForest}')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-300 uppercase tracking-widest mb-4 text-sm"
          >
            Farming for the Future
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Commitment to Environmental Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            We farm to restore, not deplete — building a greener planet one harvest at a time.
          </motion.p>
        </div>
      </section>

      {/* Carbon Reduction Feature Banner */}
      <section className="py-0">
        <div className="relative h-[420px] md:h-[500px] overflow-hidden">
          <img
            src={sustainabilityImages.carbonForest}
            alt="Dense green forest canopy — carbon sequestration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/70 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="max-w-xl text-white"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Wind className="w-5 h-5 text-green-300" />
                  <span className="text-green-300 uppercase tracking-widest text-sm">Carbon Action</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-5 leading-snug">
                  Actively Reducing Our Carbon Footprint
                </h2>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Through agroforestry, tree plantation, and regenerative agriculture, our farm sequesters more carbon than it emits. Dense tree canopies, organic soil management, and zero synthetic inputs make every acre a carbon sink.
                </p>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="font-serif text-3xl text-green-300">500+</p>
                    <p className="text-gray-300 text-sm">Trees Planted</p>
                  </div>
                  <div className="w-px bg-green-700" />
                  <div className="text-center">
                    <p className="font-serif text-3xl text-green-300">Zero</p>
                    <p className="text-gray-300 text-sm">Synthetic Inputs</p>
                  </div>
                  <div className="w-px bg-green-700" />
                  <div className="text-center">
                    <p className="font-serif text-3xl text-green-300">Net+</p>
                    <p className="text-gray-300 text-sm">Carbon Positive</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-8 h-8 text-green-300 mx-auto mb-3" />
                <p className="font-serif text-4xl text-white mb-1">{stat.value}</p>
                <p className="text-green-300 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              We focus on farming systems that restore rather than deplete. Our sustainable practices ensure that future generations inherit fertile land, clean water, and thriving ecosystems.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sustainable Practices — Image Cards */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-green-900 text-center mb-16"
            >
              Our Sustainable Practices
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={commitment.image}
                      alt={commitment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <commitment.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-green-900 mb-3">{commitment.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{commitment.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Split Image + Text — Water Stewardship */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src={sustainabilityImages.waterConservation}
              alt="Drip irrigation water conservation"
              className="w-full h-full object-cover min-h-[320px]"
            />
            <div className="absolute inset-0 bg-blue-900/30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-950 text-white flex items-center p-10 md:p-16"
          >
            <div>
              <Droplets className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="font-serif text-3xl mb-4">Water Stewardship</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Through drip irrigation, rainwater harvesting, and smart scheduling, we use up to 40% less water than conventional farms while maintaining peak crop health.
              </p>
              <p className="text-blue-200 text-sm">
                Every drop is managed with precision — conserving local water tables and protecting surrounding ecosystems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Split Image + Text — Biodiversity */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-emerald-950 text-white flex items-center p-10 md:p-16 order-2 md:order-1"
          >
            <div>
              <Trees className="w-10 h-10 text-emerald-300 mb-4" />
              <h3 className="font-serif text-3xl mb-4">Biodiversity & Ecosystem</h3>
              <p className="text-emerald-100 leading-relaxed mb-4">
                Our farm is home to hundreds of plant species, beneficial insects, birds, and native wildlife. We plant companion crops and hedgerows to encourage natural predators of pests.
              </p>
              <p className="text-emerald-200 text-sm">
                A thriving ecosystem means healthier crops — naturally, without chemicals.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden order-1 md:order-2"
          >
            <img
              src={sustainabilityImages.biodiversity}
              alt="Wildflowers and biodiversity on the farm"
              className="w-full h-full object-cover min-h-[320px]"
            />
            <div className="absolute inset-0 bg-emerald-900/20" />
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-green-900 text-center mb-12">
                Our Environmental Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={sustainabilityImages.soilRegeneration}
                    alt="Regenerative agriculture"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="bg-green-50 p-6 border-l-4 border-green-700">
                    <h3 className="font-serif text-2xl text-green-900 mb-3">Regenerative Agriculture</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Our farming methods actively improve soil health, increase carbon sequestration, and enhance the overall resilience of agricultural ecosystems.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={sustainabilityImages.solarEnergy}
                    alt="Renewable energy on farm"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="bg-amber-50 p-6 border-l-4 border-amber-700">
                    <h3 className="font-serif text-2xl text-amber-900 mb-3">Clean Energy Farming</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Harnessing solar energy and renewable resources reduces our dependency on fossil fuels, cutting operational emissions significantly across the farm.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-700 shadow-md">
                  <Droplets className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="font-serif text-2xl text-blue-900 mb-3">Water Stewardship</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Through efficient water management and conservation techniques, we ensure sustainable water use while protecting local water sources.
                  </p>
                </div>
                <div className="bg-emerald-50 p-8 rounded-2xl border-l-4 border-emerald-700 shadow-md">
                  <Leaf className="w-10 h-10 text-emerald-600 mb-3" />
                  <h3 className="font-serif text-2xl text-emerald-900 mb-3">Zero Chemical Promise</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    We maintain a strict zero-chemical policy, ensuring our produce is free from synthetic pesticides, herbicides, and fertilizers — always.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="py-28 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,30,10,0.80), rgba(0,30,10,0.85)), url('${sustainabilityImages.carbonForest}')`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Leaf className="w-14 h-14 mx-auto mb-6 text-green-300" />
            <blockquote className="font-serif text-2xl md:text-3xl mb-6 leading-relaxed">
              "Sustainability is not just about preserving the environment — it's about creating a thriving ecosystem that nourishes both people and planet for generations to come."
            </blockquote>
            <p className="text-green-300 uppercase tracking-widest text-sm">Yugdhara Organic Farms Philosophy</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
