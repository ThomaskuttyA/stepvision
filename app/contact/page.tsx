'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, Share2, Globe, Shield } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import InquiryForm from '@/components/InquiryForm'

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export default function ContactPage() {
    return (
        <div className="pt-16 lg:pt-20 bg-[#F8FAFC]">
            {/* Page Hero - More Dynamic */}
            <section className="relative py-28 bg-navy overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-6">
                            Global Supply Solutions
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Let&apos;s Build Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Success Together.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
                            Whether you need a single quotation or long-term procurement support, 
                            our UAE-based team is ready to streamline your supply chain.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content - Glassmorphism Layout */}
            <section className="py-24 relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Sidebar Info */}
                        <div className="lg:col-span-4 space-y-6">
                            <motion.div 
                                {...fadeUp}
                                className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white"
                            >
                                <h2 className="text-3xl font-bold text-navy mb-8 tracking-tight">Direct Channels</h2>
                                
                                <div className="space-y-8">
                                    {[
                                        { 
                                            icon: <Mail className="w-5 h-5" />, 
                                            label: "Email Support", 
                                            value: "sales@stepvisioninternational.com",
                                            href: "mailto:sales@stepvisioninternational.com",
                                            color: "bg-blue-50 text-blue-600"
                                        },
                                        { 
                                            icon: <Phone className="w-5 h-5" />, 
                                            label: "Call / WhatsApp", 
                                            value: "+971 56 897 8100",
                                            href: "tel:+971568978100",
                                            color: "bg-green-50 text-green-600"
                                        },
                                        { 
                                            icon: <MapPin className="w-5 h-5" />, 
                                            label: "Operations Base", 
                                            value: "UAE Free Zone, United Arab Emirates",
                                            href: "#",
                                            color: "bg-amber-50 text-amber-600"
                                        },
                                        { 
                                            icon: <Clock className="w-5 h-5" />, 
                                            label: "Business Hours", 
                                            value: "Mon - Sat: 9:00 AM - 6:00 PM (GST)",
                                            href: "#",
                                            color: "bg-purple-50 text-purple-600"
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="group flex items-start gap-5">
                                            <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
                                                <a href={item.href} className="text-navy font-semibold text-sm md:text-base hover:text-primary transition-colors leading-tight block">
                                                    {item.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social / Share */}
                                <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Connect With Us</span>
                                    <div className="flex gap-3">
                                        <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.a
                                {...fadeUp}
                                transition={{ delay: 0.2 }}
                                href="https://wa.me/971568978100"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative group overflow-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-[2.5rem] p-8 shadow-xl hover:shadow-green-500/20 transition-all"
                            >
                                <div className="relative z-10 flex items-center gap-6 text-white">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 relative">
                                        <WhatsAppIcon className="w-8 h-8 relative z-10" />
                                        <motion.div 
                                            animate={{ scale: [1, 1.2, 1] }} 
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute inset-0 bg-white/20 rounded-full blur-md" 
                                        />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold leading-tight">Instant Support</div>
                                        <div className="text-green-50/80 text-sm mt-1 font-medium">Talk to an export specialist via WhatsApp</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 ml-auto group-hover:translate-x-2 transition-transform" />
                                </div>
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
                            </motion.a>
                        </div>

                        {/* Main Form Area */}
                        <div className="lg:col-span-8 space-y-8">
                            <motion.div 
                                {...fadeUp}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-[2.5rem] p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden"
                            >
                                <div className="max-w-2xl">
                                    <h2 className="text-4xl font-bold text-navy mb-4 tracking-tight">Send an Inquiry</h2>
                                    <p className="text-gray-500 text-lg mb-10 leading-relaxed font-normal">
                                        Describe your procurement needs in detail. Our sourcing team will analyze your request and provide a comprehensive proposal.
                                    </p>
                                    <InquiryForm />
                                </div>

                                {/* Aesthetic Background Text */}
                                <div className="absolute bottom-10 right-10 pointer-events-none opacity-[0.03] select-none">
                                    <span className="text-9xl font-bold text-navy uppercase tracking-tighter">Inquiry</span>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </section>

            {/* UAE Presence - Full Width Banner */}
            <section className="mt-20">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-navy relative min-h-[450px] flex items-center overflow-hidden"
                >
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
                            alt="UAE Skyline"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl">
                            <div className="w-16 h-1.5 bg-gold rounded-full mb-8" />
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Your Gateway to <br />
                                <span className="text-gold">Global Trade Excellence.</span>
                            </h3>
                            <p className="text-white/70 leading-relaxed text-xl font-normal mb-10">
                                Strategically positioned in the UAE, we bridge the gap between world-class 
                                manufacturers and the growing demands of the African continent.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 border border-white/10">
                                        <Globe className="w-7 h-7 text-gold" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-base tracking-wide uppercase">Global Network</div>
                                        <div className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">Direct Sourcing</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 border border-white/10">
                                        <Shield className="w-7 h-7 text-gold" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-base tracking-wide uppercase">Trusted Partner</div>
                                        <div className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">FZ LLC Certified</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
