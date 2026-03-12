import { motion } from 'motion/react';
import { Flower2, Apple, Carrot, Nut, TreePine, Clock, ShoppingCart, Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Button } from '../components/ui/button';
import { EnquiryModal } from '../components/EnquiryModal';
import groundNutImage from 'figma:asset/c2dd149b757f518aee60725be64cdfcc4c02fe4c.png';

export function Products() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; category: string } | null>(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleEnquiry = (productName: string, categoryTitle: string) => {
    setSelectedProduct({ name: productName, category: categoryTitle });
    setIsModalOpen(true);
  };

  const productCategories = [
    {
      id: 'flowers',
      icon: Flower2,
      title: 'Exotic Flowers',
      color: 'pink',
      products: [
        { name: 'Rose', duration: 'Year-round', image: 'https://images.unsplash.com/photo-1635350837369-adbaa58a83de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZmxvd2VycyUyMGdhcmRlbiUyMGZyZXNoJTIwcGlua3xlbnwxfHx8fDE3NzE0OTUyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Mogra (Jasmine)', duration: 'Seasonal', image: 'https://images.unsplash.com/photo-1683461853160-6827b8f10639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2dyYSUyMGphc21pbmUlMjBmbG93ZXJzJTIwd2hpdGUlMjBmcmFncmFudHxlbnwxfHx8fDE3NzE0OTUyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Lotus', duration: 'Seasonal', image: 'https://images.unsplash.com/photo-1729521181012-b1ee810e96ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3R1cyUyMGZsb3dlciUyMHBpbmslMjBzYWNyZWQlMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzcyNDQ2NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Marigold', duration: 'Year-round', image: 'https://images.unsplash.com/photo-1626774710202-8e5591110581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpZ29sZCUyMGZsb3dlcnMlMjBvcmFuZ2UlMjB5ZWxsb3clMjBmcmVzaHxlbnwxfHx8fDE3NzI0NDY2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Tuberose', duration: 'Seasonal', image: 'https://images.unsplash.com/photo-1770783581735-191b082695eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dWJlcm9zZSUyMHdoaXRlJTIwZmxvd2VycyUyMGZyYWdyYW50JTIwZ2FyZGVufGVufDF8fHx8MTc3MjQ0NjYxNnww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Hibiscus', duration: 'Year-round', image: 'https://images.unsplash.com/photo-1766705266051-d9c70506658f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWJpc2N1cyUyMGZsb3dlciUyMHJlZCUyMHRyb3BpY2FsJTIwZ2FyZGVufGVufDF8fHx8MTc3MjQ0NjYxN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Orchid', duration: 'Year-round', image: 'https://images.unsplash.com/photo-1716901279744-a4c56b5f42f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjBleG90aWMlMjBmbG93ZXJzJTIwY29sb3JmdWwlMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzcyNDQ2NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
    },
    {
      id: 'fruits',
      icon: Apple,
      title: 'Exotic Fruits',
      color: 'orange',
      products: [
        { name: 'Avocado', duration: '6-8 months', image: 'https://images.unsplash.com/photo-1594921194380-d4d03d481e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwaGFsdmVkJTIwZ3JlZW4lMjBjcmVhbXklMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjQ0NzI5MHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Dragon Fruit', duration: 'Year-round', image: 'https://images.unsplash.com/photo-1654786733736-aefca0247a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFnb24lMjBmcnVpdCUyMHBpdGF5YSUyMGN1dCUyMG9wZW4lMjB3aGl0ZSUyMHBpbmt8ZW58MXx8fHwxNzcyNDQ3MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Strawberry', duration: '4-6 months', image: 'https://images.unsplash.com/photo-1762330462761-71cd1be854eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwcmVkJTIwZnJlc2glMjBvcmdhbmljJTIwZnJ1aXR8ZW58MXx8fHwxNzcyNDQ2NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Mulberry', duration: '3-4 months', image: 'https://images.unsplash.com/photo-1760544138193-30f5f01ccb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWxiZXJyeSUyMGJsYWNrJTIwcHVycGxlJTIwZnJlc2glMjBiZXJyaWVzfGVufDF8fHx8MTc3MjQ0NjcxNnww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Raspberry', duration: '4-6 months', image: 'https://images.unsplash.com/photo-1595086076536-f5b03646f83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjByZWQlMjBmcmVzaCUyMG9yZ2FuaWMlMjBiZXJyaWVzfGVufDF8fHx8MTc3MjQ0NjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Passion Fruit', duration: '6-8 months', image: 'https://images.unsplash.com/photo-1723929668852-03053220863e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzaW9uJTIwZnJ1aXQlMjBjdXQlMjBvcGVuJTIwcHVycGxlJTIwc2VlZHN8ZW58MXx8fHwxNzcyNDQ3NDczfDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Papaya', duration: '9-12 months', image: 'https://images.unsplash.com/photo-1760881682605-4301108e8596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjB0cm9waWNhbCUyMGZydWl0JTIwb3JhbmdlJTIwZnJlc2h8ZW58MXx8fHwxNzcyNDQ2NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Guava', duration: '6-8 months', image: 'https://images.unsplash.com/photo-1759772515773-5748e3de1beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMHRyb3BpY2FsJTIwZnJ1aXQlMjBncmVlbiUyMGZyZXNofGVufDF8fHx8MTc3MjQ0NjcxOHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Pomegranate', duration: '5-6 months', image: 'https://images.unsplash.com/photo-1763027096271-bf9c98859e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb21lZ3JhbmF0ZSUyMHJlZCUyMHNlZWRzJTIwZnJlc2glMjBmcnVpdHxlbnwxfHx8fDE3NzI0NDY3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
    },
    {
      id: 'seasonal-fruits',
      icon: Apple,
      title: 'Seasonal Fruits',
      color: 'yellow',
      products: [
        { name: 'Alphonso Mango', duration: '3-4 months', image: 'https://images.unsplash.com/photo-1580928986783-bd8256003f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHNsaWNlZCUyMG9yYW5nZSUyMHllbGxvdyUyMGp1aWN5JTIwZnJlc2h8ZW58MXx8fHwxNzcyNDQ3MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Banana', duration: '9-12 months', image: 'https://images.unsplash.com/photo-1757332050958-b797a022c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBidW5jaCUyMGZyZXNoJTIwb3JnYW5pYyUyMHllbGxvd3xlbnwxfHx8fDE3NzE0OTUyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
    },
    {
      id: 'vegetables',
      icon: Carrot,
      title: 'Exotic Vegetables',
      color: 'green',
      products: [
        { name: 'Broccoli', duration: '3-4 months', image: 'https://images.unsplash.com/photo-1757332334626-8dadb145540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jY29saSUyMGZyZXNoJTIwZ3JlZW4lMjB2ZWdldGFibGUlMjBvcmdhbmljJTIwaGVhbHRoeXxlbnwxfHx8fDE3NzI0NDc5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Colored Cauliflower (Purple / Yellow)', duration: '3-4 months', image: 'https://images.unsplash.com/photo-1718128305320-45881328f60f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBjYXVsaWZsb3dlciUyMHJvbWFuZXNjbyUyMGNvbG9yZnVsJTIwdmVnZXRhYmxlJTIwb3JnYW5pY3xlbnwxfHx8fDE3NzI0NDgyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
    },
    {
      id: 'spices',
      icon: Leaf,
      title: 'Spices',
      color: 'red',
      products: [
        { name: 'Ginger (Adrak)', duration: '8-10 months', image: 'https://images.unsplash.com/photo-1763019228611-b2bce31c89d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW5nZXIlMjByb290JTIwZnJlc2glMjBvcmdhbmljJTIwc3BpY2V8ZW58MXx8fHwxNzcxNDk1MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Black Pepper', duration: '2-3 years for bearing', image: 'https://images.unsplash.com/photo-1649951806971-ad0e00408773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHdob2xlJTIwcGVwcGVyY29ybnMlMjBzcGljZXxlbnwxfHx8fDE3NzI0NDk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
    },
    {
      id: 'nuts',
      icon: Nut,
      title: 'Nuts & Plantation Crops',
      color: 'amber',
      products: [
        { name: 'Cashew Nuts', duration: '2-3 years', image: 'https://images.unsplash.com/photo-1627820752174-acae1b399128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwb3JnYW5pYyUyMG5hdHVyYWwlMjBoZWFsdGh5fGVufDF8fHx8MTc3MTQ5NTI2OHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Ground Nuts', duration: '4-5 months', image: groundNutImage },
      ],
    },
    {
      id: 'plantation',
      icon: TreePine,
      title: 'Long-Term Plantation Crops',
      color: 'emerald',
      products: [
        { name: 'Kattha (Khair) – Acacia catechu', duration: '5-7 years', image: 'https://images.unsplash.com/photo-1703756292660-ccd7ab19e344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FjaWElMjB0cmVlJTIwdHJvcGljYWwlMjBmb3Jlc3QlMjB0aW1iZXJ8ZW58MXx8fHwxNzcyNDUxMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Red Sandalwood', duration: '15-20 years', image: 'https://images.unsplash.com/photo-1755007404273-19ec5e21b98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3b29kJTIwdHJlZSUyMGJhcmslMjB0cm9waWNhbCUyMEluZGlhfGVufDF8fHx8MTc3MjQ1MTA4MHww&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'White Sandalwood', duration: '15-20 years', image: 'https://images.unsplash.com/photo-1685040380642-3dc5980b81b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNhbmRhbHdvb2QlMjB0cmVlJTIwc2FudGFsdW0lMjBhbGJ1bXxlbnwxfHx8fDE3NzI0NTEwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        { name: 'Agarwood', duration: '15-20 years', image: 'https://images.unsplash.com/photo-1762764516516-defa7eab561a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2Fyd29vZCUyMG91ZCUyMGFxdWlsYXJpYSUyMHRyZWUlMjBmb3Jlc3R8ZW58MXx8fHwxNzcyNDUxMDY3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto"
          >
            From exotic flowers to premium plantation crops, we cultivate a diverse range of organic products
          </motion.p>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="scroll-mt-20"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center`}>
                    <category.icon className={`w-8 h-8 text-${category.color}-700`} />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-green-900">
                    {category.title}
                  </h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Hover Overlay with Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            onClick={() => handleEnquiry(product.name, category.title)}
                            className="bg-white text-green-800 hover:bg-green-50 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Enquire Now
                          </Button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-green-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span>{product.duration}</span>
                        </div>

                        <Button
                          onClick={() => handleEnquiry(product.name, category.title)}
                          variant="outline"
                          className="w-full border-green-600 text-green-700 hover:bg-green-50"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Enquire
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Planning Model Timeline */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-green-900 mb-4">
                Our Crop Planning Model
              </h2>
              <p className="text-lg text-gray-700">
                Strategic diversification for sustainable income at every stage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50" />
                <div className="relative">
                  <div className="text-5xl font-serif text-green-700 mb-4">3-12</div>
                  <h3 className="font-serif text-2xl text-green-900 mb-2">Short-Term Crops</h3>
                  <p className="text-gray-600 mb-4">Months</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Flowers (Rose, Mogra)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Vegetables & Spices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Ground Nuts
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-16 -mt-16 opacity-50" />
                <div className="relative">
                  <div className="text-5xl font-serif text-amber-700 mb-4">1-5</div>
                  <h3 className="font-serif text-2xl text-green-900 mb-2">Mid-Term Crops</h3>
                  <p className="text-gray-600 mb-4">Years</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Exotic Fruits
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Cashew Nuts
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Kattha (Acacia)
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -mr-16 -mt-16 opacity-50" />
                <div className="relative">
                  <div className="text-5xl font-serif text-emerald-700 mb-4">15-20</div>
                  <h3 className="font-serif text-2xl text-green-900 mb-2">Long-Term Wealth</h3>
                  <p className="text-gray-600 mb-4">Years</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Agarwood
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      Red Sandalwood
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      White Sandalwood
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct?.name}
        category={selectedProduct?.category}
      />
    </div>
  );
}