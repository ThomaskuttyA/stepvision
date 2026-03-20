'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

interface ProductItemCardProps {
    name: string
    image?: string
    description?: string
    index?: number
}

export default function ProductItemCard({ name, image, description, index = 0 }: ProductItemCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index % 12) * 0.04 }}
            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] flex flex-col h-full active:scale-95"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F9FA] flex items-center justify-center p-6">
                <img
                    src={image || `https://placehold.co/400x500/F8F9FA/1A1A2E?text=${encodeURIComponent(name)}`}
                    alt={name}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                
                {/* Visual Accent */}
                <div className="absolute top-6 left-6">
                    <div className="w-1 h-6 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                </div>
                
                {/* Floating Action */}
                <div className="absolute top-6 right-6 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="w-10 h-10 bg-navy text-gold rounded-full flex items-center justify-center shadow-2xl border border-white/10 hover:bg-gold hover:text-navy transition-colors group-active:scale-90">
                        <Plus className="w-5 h-5" />
                    </div>
                </div>

                {/* Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1 bg-white relative z-10 border-t border-gray-50">
                <div className="mb-4">
                    <h4 className="font-bold text-navy text-[13px] md:text-[15px] mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight min-h-[2.5rem]">
                        {name}
                    </h4>
                    <div className="h-[2px] w-4 bg-gold/30 group-hover:w-full group-hover:bg-gold transition-all duration-500 rounded-full" />
                </div>
                
                {description && (
                    <p className="text-gray-400 text-[10px] md:text-[11px] line-clamp-2 leading-relaxed mb-4 font-medium">
                        {description}
                    </p>
                )}
                
                {/* Footer Meta */}
                <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase">Premium Sourcing</span>
                    <div className="flex gap-1 items-center">
                        <div className="w-1.5 h-1.5 bg-gold/20 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-gold/40 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
