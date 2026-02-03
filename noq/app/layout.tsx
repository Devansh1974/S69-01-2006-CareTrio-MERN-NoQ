import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
title: 'CareTrio | Smart Healthcare Platform',
description: 'Doctor–Patient smart care platform',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className={`${inter.className} bg-slate-50 text-slate-800`}>
<Navbar />
<main className="min-h-screen">{children}</main>
<Footer />
</body>
</html>
)
}