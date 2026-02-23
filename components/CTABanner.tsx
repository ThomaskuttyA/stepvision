'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface CTABannerProps {
    title?: string
    subtitle?: string
    buttonText?: string
    buttonHref?: string
    variant?: 'blue' | 'navy' | 'gold'
}

export default function CTABanner({
    title = "Ready to source from UAE? Let's talk.",
    subtitle = "Get competitive pricing, reliable supply chain, and expert export documentation.",
    buttonText = "Contact Us",
    buttonHref = "/contact",
    variant = 'blue'
}: CTABannerProps) {
    const bgClass = {
        blue: 'bg-primary',
        navy: 'bg-navy',
        gold: 'bg-gold',
    }[variant]

    return (
        <section className={`${bgClass} py-16 px-4`}>
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                    <p className="text-white/80 text-lg mb-8">{subtitle}</p>
                    <Link href={buttonHref} className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                        {buttonText} <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
