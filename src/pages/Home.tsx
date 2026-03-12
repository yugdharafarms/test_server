import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Sprout, Layers, Milk, TreePine, Leaf, Users, Award, TrendingUp, Heart, Package, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { HeroCarousel } from '../components/HeroCarousel';

export function Home() {
  const services = [
    {
      icon: Layers,
      title: 'Multi-Layer Farming',
      description: 'High-efficiency vertical farming system maximizing land productivity.',
      link: '/farming-methods#multi-layer',
    },
    {
      icon: Sprout,
      title: 'Multi-Crop Farming',
      description: 'Year-round diversified cropping for consistent yield and soil health.',
      link: '/farming-methods#multi-crop',
    },
    {
      icon: Milk,
      title: 'Gir Cow Dairy',
      description: 'A2 milk and traditional dairy products rooted in Ayurveda.',
      link: '/dairy-products',
    },
  ];

  const benefits = [
    'Exotic Crop Cultivation Expertise',
    'Short-term and Long-term Plantation Planning',
    'Organic Soil Regeneration',
    'High-value Crop Management',
    'Sustainable Agroforestry Integration',
    '100% Chemical-free Practices',
  ];

  const productCategories = [
    {
      icon: Sprout,
      title: 'Exotic Flowers',
      items: ['Rose', 'Mogra'],
      image: 'https://images.unsplash.com/photo-1635350837369-adbaa58a83de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZmxvd2VycyUyMGdhcmRlbiUyMGZyZXNoJTIwcGlua3xlbnwxfHx8fDE3NzE0OTUyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/products#flowers',
    },
    {
      icon: Package,
      title: 'Exotic Fruits',
      items: ['Alphonso Mango', 'Avocado', 'Dragon Fruit', 'Banana'],
      image: 'https://images.unsplash.com/photo-1765480953875-a7338f896e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0JTIwYmFza2V0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzcxNTAyNjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/products#fruits',
    },
    {
      icon: Leaf,
      title: 'Vegetables & Spices',
      items: ['Ginger', 'Black Pepper'],
      image: 'https://images.unsplash.com/photo-1763019228611-b2bce31c89d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW5nZXIlMjByb290JTIwZnJlc2glMjBvcmdhbmljJTIwc3BpY2V8ZW58MXx8fHwxNzcxNDk1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/products#vegetables',
    },
    {
      icon: TreePine,
      title: 'Plantation Crops',
      items: ['Sandalwood', 'Agarwood', 'Cashew', 'Sugarcane'],
      image: 'https://images.unsplash.com/photo-1647220576336-f2e94680f3b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JvZm9yZXN0cnklMjB0cmVlcyUyMHBsYW50YXRpb24lMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NzE1MDI2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/products#plantation',
    },
  ];

  const dairyProducts = [
    { name: 'A2 Gir Cow Milk', description: 'Pure, natural A2 protein milk' },
    { name: 'Fresh Curd', description: 'Traditional fermented dairy' },
    { name: 'Ghee (Clarified Butter)', description: 'Ayurvedic golden elixir' },
    { name: 'Buttermilk', description: 'Probiotic refreshment' },
  ];

  const stats = [
    { number: '5x', label: 'Productivity Increase', icon: TrendingUp },
    { number: '100%', label: 'Chemical-Free', icon: Leaf },
    { number: '15+', label: 'Crop Varieties', icon: Sprout },
    { number: '20+', label: 'Years Experience', icon: Award },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Two decades of organic farming excellence with traditional wisdom and modern innovation.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: '100% organic certification and rigorous quality control at every stage.',
    },
    {
      icon: Heart,
      title: 'Sustainability Focus',
      description: 'Committed to environmental restoration and long-term ecological balance.',
    },
    {
      icon: Users,
      title: 'Community Partnership',
      description: 'Building lasting relationships with farmers, customers, and stakeholders.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <HeroCarousel>
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto"
          >
            Sustainable Organic Farming for a Healthier Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90"
          >
            Working towards a future where organic farming harmonizes with nature to provide clean, sustainable food and restore environmental vitality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8">
                Explore Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white px-8">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </HeroCarousel>

      {/* Stats Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-green-300" />
                <div className="font-serif text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-green-200 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-900 mb-6">
                Farming in Harmony with Nature
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We combine traditional Indian agricultural wisdom with sustainable modern practices to produce chemical-free, nutrient-rich food while restoring environmental vitality.
              </p>
            </motion.div>

            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-2xl mb-8"
            >
              <img
                src="https://images.unsplash.com/photo-1558717738-12f5dde036a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBtZXRob2RzJTIwb3JnYW5pYyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MTUwMjU5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sustainable farming methods"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-serif">Committed to Excellence Since 2004</p>
              </div>
            </motion.div>

            <div className="text-center">
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Learn About Our Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-900 mb-4">
              Our Farming Methods
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Advanced organic farming systems that maximize productivity while preserving ecological balance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="font-serif text-2xl text-green-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/farming-methods">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                View All Farming Methods
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-900 mb-4">
              Our Premium Organic Products
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From exotic flowers to valuable plantation crops, discover our diverse range of organic products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-green-900 mb-3">{category.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {category.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {category.items.length > 3 && (
                      <li className="text-sm text-green-700 font-medium">
                        +{category.items.length - 3} more
                      </li>
                    )}
                  </ul>
                  <Link to={category.link}>
                    <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                      View Products
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dairy Products Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwZGFpcnklMjBwcm9kdWN0cyUyMGhlYWx0aHklMjBuYXR1cmFsfGVufDF8fHx8MTc3MTUwMjYwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dairy products"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold">Premium A2 Milk</span>
                  </div>
                  <p className="text-sm">From our heritage Gir cows</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                    <Milk className="w-7 h-7 text-amber-700" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-green-900">
                    Pure Gir Cow Dairy
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Experience the goodness of traditional A2 milk from our heritage Gir cows, raised with love and care in natural pastures. Our dairy products are rooted in Ayurvedic principles and produced without any chemicals or hormones.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {dairyProducts.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-600"
                    >
                      <h4 className="font-semibold text-green-900 mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </motion.div>
                  ))}
                </div>

                <Link to="/dairy-products">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Discover Dairy Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-900 mb-4">
              Why Choose Yugdhara Organic Farms
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Committed to delivering the highest quality organic products while nurturing the environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md"
                >
                  <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center">
                    <TreePine className="w-7 h-7 text-green-300" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl">
                    Our Commitment to Sustainability
                  </h2>
                </div>
                
                <p className="text-lg text-green-100 mb-6 leading-relaxed">
                  We believe in farming that gives back to nature. Our sustainable practices focus on carbon sequestration, water conservation, biodiversity enhancement, and soil regeneration—creating a positive environmental impact for generations to come.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Zero chemical pesticides and fertilizers',
                    'Carbon-negative farming practices',
                    'Water harvesting and conservation',
                    'Biodiversity restoration through agroforestry',
                    'Soil health improvement programs',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-green-100">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/sustainability">
                  <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                    Learn About Our Sustainability
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1647220576336-f2e94680f3b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JvZm9yZXN0cnklMjB0cmVlcyUyMHBsYW50YXRpb24lMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NzE1MDI2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainable agroforestry"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-2xl order-2 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1761466977752-de51b3ecce84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwb3JnYW5pYyUyMGZhcm18ZW58MXx8fHwxNzcxNTAyNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Farm team working together"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-7 h-7 text-green-700" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-green-900">
                    Partner With Us
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you're looking to collaborate on sustainable agriculture projects, source premium organic products, or invest in long-term plantation ventures, we welcome partnerships that share our vision of environmental stewardship and agricultural excellence.
                </p>

                <div className="bg-green-50 p-6 rounded-xl mb-6">
                  <h3 className="font-serif text-xl text-green-900 mb-4">Partnership Opportunities</h3>
                  <ul className="space-y-3">
                    {[
                      'Farm collaboration and contract farming',
                      'Organic produce supply partnerships',
                      'Agro-tourism and educational programs',
                      'Long-term plantation investments',
                      'Research and development initiatives',
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.9), rgba(45, 80, 22, 0.9)), url('https://images.unsplash.com/photo-1732024695910-4b43293ecc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcwODc4NjkzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Experience Pure Organic Goodness?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Connect with us to learn more about our products, farming methods, or partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 px-8">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white px-8">
                  Browse Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
