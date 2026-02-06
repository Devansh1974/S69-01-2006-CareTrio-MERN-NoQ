'use client'
import { motion } from 'framer-motion'


export default function HomePage() {
return (
<section className="max-w-7xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-2 gap-12 items-center">
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
<h2 className="text-4xl md:text-5xl font-bold leading-tight">
Modern Healthcare,
<span className="text-blue-600"> Simplified</span>
</h2>
<p className="mt-6 text-slate-600">
Seamless doctor–patient collaboration with real-time care tracking,
appointments, and insights — all in one elegant platform.
</p>
<div className="mt-8 flex gap-4">
<a href="/patient" className="px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700">
I am a Patient
</a>
<a href="/doctor" className="px-6 py-3 rounded-2xl border border-slate-300 hover:border-blue-600">
I am a Doctor
</a>
</div>
</motion.div>


<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
className="bg-white rounded-3xl shadow-xl p-8"
>
<ul className="space-y-4">
{['Smart Appointments', 'Live Health Tracking', 'Secure Records', 'Analytics Dashboard'].map((f) => (
<li key={f} className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-blue-600" />
<span className="font-medium">{f}</span>
</li>
))}
</ul>
</motion.div>
</div>
</section>
)
}