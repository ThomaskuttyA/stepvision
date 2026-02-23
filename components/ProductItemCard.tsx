'use client'

import { motion } from 'framer-motion'

interface ProductItemCardProps {
    name: string
    image?: string
    index?: number
}

export default function ProductItemCard({ name, image, index = 0 }: ProductItemCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
        >
            <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                <img
                    src={image || `https://placehold.co/400x400/f3f4f6/1A1A2E?text=${encodeURIComponent(name)}`}
                    alt={name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-3 bg-white/95 backdrop-blur-md absolute bottom-0 inset-x-0 border-t border-gray-100 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-[11px] sm:text-xs font-bold text-navy text-center line-clamp-1 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {name}
                </h4>
            </div>
        </motion.div>
    )
}
