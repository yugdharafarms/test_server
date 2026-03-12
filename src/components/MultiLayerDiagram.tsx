import { motion } from 'motion/react';
import { ArrowDown, Sun, Cloud, Droplets } from 'lucide-react';

export function MultiLayerDiagram() {
  const layers = [
    {
      id: 'canopy',
      title: 'Canopy Layer',
      subtitle: '15-30 feet high',
      description: 'Tall trees capturing maximum sunlight for photosynthesis',
      crops: ['Coconut Palm', 'Mango', 'Banana'],
      image: 'https://images.unsplash.com/photo-1766788468488-53b911ab8994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFsbSUyMHRyZWUlMjB0YWxsJTIwY2Fub3B5JTIwdHJvcGljYWx8ZW58MXx8fHwxNzcyNDQ2OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-sky-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-sky-100',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-900',
      icon: Sun,
    },
    {
      id: 'mid',
      title: 'Mid Layer',
      subtitle: '6-15 feet high',
      description: 'Medium-height crops utilizing filtered sunlight below canopy',
      crops: ['Papaya', 'Guava', 'Drumstick'],
      image: 'https://images.unsplash.com/photo-1644780397378-f606b8423a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMHRyZWUlMjBtZWRpdW0lMjBzaXplJTIwdHJvcGljYWwlMjBmcnVpdHxlbnwxfHx8fDE3NzI0NDY5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
      borderColor: 'border-green-400',
      textColor: 'text-green-900',
      icon: Cloud,
    },
    {
      id: 'ground',
      title: 'Ground Layer',
      subtitle: '0-3 feet high',
      description: 'Low-growing vegetables thriving in partial shade and rich soil',
      crops: ['Spinach', 'Cabbage', 'Turmeric', 'Herbs'],
      image: 'https://images.unsplash.com/photo-1746707233861-c3663cc5dff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwdmVnZXRhYmxlJTIwZ3JvdW5kJTIwY292ZXIlMjBncmVlbiUyMGxlYXZlc3xlbnwxfHx8fDE3NzI0NDY5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-lime-400 to-green-500',
      bgColor: 'bg-gradient-to-br from-lime-50 to-green-100',
      borderColor: 'border-lime-400',
      textColor: 'text-lime-900',
      icon: Droplets,
    },
    {
      id: 'root',
      title: 'Root Layer',
      subtitle: 'Underground',
      description: 'Root vegetables and tubers growing beneath the soil surface',
      crops: ['Ginger', 'Carrot', 'Radish', 'Sweet Potato'],
      image: 'https://images.unsplash.com/photo-1646815212561-d5604f74078a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW5nZXIlMjByb290JTIwdW5kZXJncm91bmQlMjB0dWJlciUyMHNvaWwlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MjQ0NjkyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-100',
      borderColor: 'border-amber-400',
      textColor: 'text-amber-900',
      icon: ArrowDown,
    },
  ];

  return (
    <div className="relative">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-green-900 mb-4">
          How Multi-Layer Farming Works
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A cross-sectional view of our integrated vertical farming system showing four productive layers
        </p>
      </motion.div>

      {/* Desktop View - Side by Side */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Layer Card */}
            <div className={`${layer.bgColor} rounded-2xl overflow-hidden shadow-xl border-4 ${layer.borderColor} h-full`}>
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={layer.image}
                  alt={layer.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${layer.color} opacity-30`} />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <layer.icon className={`w-6 h-6 ${layer.textColor}`} />
                </div>

                {/* Height Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                  <p className={`text-xs font-semibold ${layer.textColor}`}>{layer.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className={`font-serif text-2xl ${layer.textColor} mb-3`}>
                  {layer.title}
                </h4>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {layer.description}
                </p>

                {/* Crops List */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    Example Crops:
                  </p>
                  {layer.crops.map((crop) => (
                    <div
                      key={crop}
                      className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${layer.color}`} />
                      <span className="text-sm text-gray-800 font-medium">{crop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow Between Layers */}
            {index < layers.length - 1 && (
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowDown className="w-4 h-4 text-white rotate-[-90deg]" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile/Tablet View - Stacked Vertically */}
      <div className="lg:hidden space-y-6">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`${layer.bgColor} rounded-2xl overflow-hidden shadow-xl border-4 ${layer.borderColor}`}>
              <div className="md:flex md:items-center">
                {/* Image */}
                <div className="relative md:w-1/3 h-56 md:h-full overflow-hidden">
                  <img
                    src={layer.image}
                    alt={layer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${layer.color} opacity-30`} />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <layer.icon className={`w-6 h-6 ${layer.textColor}`} />
                  </div>

                  {/* Height Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                    <p className={`text-xs font-semibold ${layer.textColor}`}>{layer.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:w-2/3">
                  <h4 className={`font-serif text-2xl ${layer.textColor} mb-3`}>
                    {layer.title}
                  </h4>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {layer.description}
                  </p>

                  {/* Crops List */}
                  <div className="flex flex-wrap gap-2">
                    <p className="w-full text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Example Crops:
                    </p>
                    {layer.crops.map((crop) => (
                      <div
                        key={crop}
                        className="flex items-center gap-2 bg-white/70 rounded-full px-3 py-1.5"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${layer.color}`} />
                        <span className="text-sm text-gray-800 font-medium">{crop}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Between Layers */}
            {index < layers.length - 1 && (
              <div className="flex justify-center py-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowDown className="w-5 h-5 text-white" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Benefits Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl p-8 text-white"
      >
        <h4 className="font-serif text-2xl mb-6 text-center">System Benefits</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-serif text-green-300 mb-2">5x</div>
            <p className="text-sm text-green-100">More productive than traditional single-crop farming</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-green-300 mb-2">100%</div>
            <p className="text-sm text-green-100">Efficient use of vertical space and sunlight</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-green-300 mb-2">Year-Round</div>
            <p className="text-sm text-green-100">Continuous harvest from different layers</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
