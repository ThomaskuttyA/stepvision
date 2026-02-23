import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
    title: 'Stepvision International Trading FZ LLC | UAE Export to Africa',
    description: 'Your trusted gateway for global trade from UAE to Africa. We supply industrial, commercial, and consumer products across 8 major categories.',
    keywords: 'UAE export, Africa trade, industrial supplies, building materials, heavy equipment, marine equipment, UAE trading company',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    )
}
