'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { products } from '@/lib/products'

interface FormData {
    fullName: string
    companyName: string
    country: string
    email: string
    phone: string
    category: string
    message: string
}

const countries = [
    "Nigeria", "Ghana", "Kenya", "Ethiopia", "Tanzania", "Uganda", "South Africa",
    "Egypt", "Morocco", "Algeria", "Angola", "Mozambique", "Zambia", "Zimbabwe",
    "Senegal", "Ivory Coast", "Cameroon", "Rwanda", "Sudan", "Somalia",
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
    "Other"
]

interface InquiryFormProps {
    defaultCategory?: string
}

export default function InquiryForm({ defaultCategory = '' }: InquiryFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        defaultValues: { category: defaultCategory }
    })

    const onSubmit = async (data: FormData) => {
        setStatus('loading')
        try {
            // Simulate form submission — in production, connect to email service
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log('Form submitted:', data)
            setStatus('success')
            reset()
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Inquiry Sent!</h3>
                <p className="text-green-700 mb-6">
                    Thank you for reaching out. Our team will contact you within 24 hours at <strong>sales@stepvisioninternational.com</strong>.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-primary">
                    Send Another Inquiry
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                        {...register('fullName', { required: 'Full name is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${errors.fullName ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="John Smith"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
                    <input
                        {...register('companyName', { required: 'Company name is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${errors.companyName ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="Your Company Ltd."
                    />
                    {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
                    <select
                        {...register('country', { required: 'Country is required' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors bg-white ${errors.country ? 'border-red-400' : 'border-gray-300'}`}
                    >
                        <option value="">Select your country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp</label>
                    <input
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="+234 800 000 0000"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Category *</label>
                    <select
                        {...register('category', { required: 'Please select a category' })}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors bg-white ${errors.category ? 'border-red-400' : 'border-gray-300'}`}
                    >
                        <option value="">Select a category</option>
                        {products.map(p => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                        <option value="other">Other / Multiple Categories</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message / Requirements *</label>
                <textarea
                    {...register('message', { required: 'Please describe your requirements' })}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                    placeholder="Please describe the products you need, quantities, specifications, destination country, and any other relevant details..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Something went wrong. Please try again or email us directly.</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" /> Send Inquiry
                    </span>
                )}
            </button>
            <p className="text-xs text-gray-500 text-center">
                We respond within 24 hours • <a href="mailto:sales@stepvisioninternational.com" className="text-primary hover:underline">sales@stepvisioninternational.com</a>
            </p>
        </form>
    )
}
