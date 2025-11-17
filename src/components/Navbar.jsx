import { useState } from 'react'
import { Menu, X, Shield, ShieldCheck, Lock } from 'lucide-react'

const primary = '#00E5D9' // main accent
const background = '#051C2C' // interpreted from provided code (using deep blue for contrast)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'TOS', href: '#tos' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full opacity-30 blur-lg" style={{ background: primary }} />
                <div className="relative rounded-full p-2" style={{ background: primary }}>
                  <Shield className="h-5 w-5 text-slate-900" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">Aegis AntiCheat</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-slate-200/80 hover:text-white transition-colors text-sm">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-slate-200/80 text-sm hover:text-white">Pricing</a>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2" style={{ background: primary }}>
                <Lock className="h-4 w-4" /> Get Protected
              </a>
            </div>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200/90 hover:bg-white/10">
                    {n.label}
                  </a>
                ))}
                <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-900" style={{ background: primary }}>
                  <ShieldCheck className="h-4 w-4" /> Get Protected
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
    </header>
  )
}
