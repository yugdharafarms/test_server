import { motion } from 'motion/react';
import { Milk, Heart, Droplet, Leaf, Star, Shield, Sparkles } from 'lucide-react';

const girCowImages = [
  {
    url: 'https://images.unsplash.com/photo-1596522868827-678785f7cd45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaXIlMjBjb3clMjBJbmRpYW4lMjBpbmRpZ2Vub3VzJTIwZGFpcnklMjBjYXR0bGV8ZW58MXx8fHwxNzcyNDUxMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Purebred Gir Cows',
    description: 'Our indigenous Gir cows, known for their distinctive hump and long drooping ears, thrive in natural farm conditions.',
  },
  {
    url: 'https://images.unsplash.com/photo-1629725061970-2edfd1c52256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjb3clMjBkZXNpJTIwY293JTIwY2xvc2UlMjB1cCUyMHBvcnRyYWl0JTIwZmllbGR8ZW58MXx8fHwxNzcyNDUxMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Naturally Raised',
    description: 'Each cow is raised with love and care, grazing freely on organic pastures free from chemicals and stress.',
  },
  {
    url: 'https://images.unsplash.com/photo-1759738104612-5645fa10593e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3clMjBoZXJkJTIwZ3JhemluZyUyMGdyZWVuJTIwcGFzdHVyZSUyMHN1bnJpc2UlMjBJbmRpYXxlbnwxfHx8fDE3NzI0NTEzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Free-Range Grazing',
    description: 'Our herd roams vast green pastures, producing rich A2 milk packed with natural nutrients and golden goodness.',
  },
];

export function DairyProducts() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${girCowImages[0].url}')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-300 uppercase tracking-widest mb-4 text-sm"
          >
            100% Indigenous Breed
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Gir Cow – A2 Dairy Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Pure, natural A2 milk from the sacred Gir breed — raised on organic pastures at Yugdhara Organic Farms
          </motion.p>
        </div>
      </section>

      {/* Gir Cow Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-green-900 mb-4">
              Meet Our Gir Cows
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each Gir cow at our farm is a cherished member of the family — resilient, disease-resistant, and the source of our premium A2 dairy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {girCowImages.map((img, index) => (
              <motion.div
                key={img.caption}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">
                      {img.caption}
                    </span>
                  </div>
                </div>
                <div className="bg-green-50 p-5">
                  <p className="text-gray-700 leading-relaxed text-sm">{img.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Milk className="w-10 h-10 text-green-300 mx-auto mb-3" />
              <p className="font-serif text-4xl text-white mb-1">6–10</p>
              <p className="text-green-300 uppercase tracking-wider text-sm">Litres / Day</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Heart className="w-10 h-10 text-green-300 mx-auto mb-3" />
              <p className="font-serif text-4xl text-white mb-1">12–15</p>
              <p className="text-green-300 uppercase tracking-wider text-sm">Years Lifespan</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-10 h-10 text-green-300 mx-auto mb-3" />
              <p className="font-serif text-4xl text-white mb-1">A2</p>
              <p className="text-green-300 uppercase tracking-wider text-sm">Pure Milk Protein</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A2 Milk Benefits */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-green-900 text-center mb-4">
                A2 Milk Benefits
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                A2 milk from Gir cows is rich in essential nutrients that promote overall health and well-being.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { label: 'Proteins', icon: Shield },
                  { label: 'Vitamins', icon: Sparkles },
                  { label: 'Amino Acids', icon: Leaf },
                  { label: 'Phosphorus', icon: Droplet },
                  { label: 'Carotene', icon: Star },
                ].map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-green-700 mx-auto mb-2" />
                    <p className="text-gray-700 text-sm">{label}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-500 mt-8 italic text-sm">
                Milk, butter, and ghee from Gir cows have a natural golden tone — indicating superior quality and nutritional value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Panchgavya */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-green-900 text-center mb-8">
                Panchgavya Significance
              </h2>
              <div className="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-500">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Milk, curd, ghee, dung, and urine together form <span className="font-semibold text-amber-800">Panchgavya</span> — traditionally valued in Ayurveda and organic farming for its holistic benefits.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { name: 'Milk', emoji: '🥛' },
                    { name: 'Curd', emoji: '🍶' },
                    { name: 'Ghee', emoji: '🧈' },
                    { name: 'Dung', emoji: '🌱' },
                    { name: 'Urine', emoji: '💧' },
                  ].map((item) => (
                    <div key={item.name} className="bg-white p-4 rounded-xl text-center shadow-sm">
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <p className="text-gray-700 text-sm">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organic By-Products */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-green-900 text-center mb-12">
                Organic By-Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                  <Leaf className="w-12 h-12 text-green-700 mb-4" />
                  <h3 className="font-serif text-2xl text-green-900 mb-4">Cow Dung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Natural fertilizer rich in micronutrients that enriches soil health and promotes sustainable farming practices. Used in biogas and vermicomposting.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                  <Droplet className="w-12 h-12 text-green-700 mb-4" />
                  <h3 className="font-serif text-2xl text-green-900 mb-4">Cow Urine</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Used in traditional agricultural and wellness practices, valued for its beneficial properties as a natural pesticide and soil conditioner in organic farming.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
