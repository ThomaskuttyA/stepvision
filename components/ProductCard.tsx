'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductCardProps {
    slug: string
    name: string
    icon: string
    description: string
    index?: number
}

export default function ProductCard({ slug, name, icon, description, index = 0 }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
        >
            <Link
                href={`/products/${slug}`}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20 h-full"
            >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{description}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="w-4 h-4" />
                </div>
            </Link>
        </motion.div>
    )
}
