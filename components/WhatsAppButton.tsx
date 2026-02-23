'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/971568978100"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-colors flex items-center gap-2 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden group-hover:inline text-sm font-medium whitespace-nowrap pr-1">
                Chat with us
            </span>
        </motion.a>
    )
}
