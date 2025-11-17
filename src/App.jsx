import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import ContentSections from './components/ContentSections'

const primary = '#00E5D9'
const background = '#051C2C' // interpreted from provided background color

function App() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: background }}>
      {/* Ambient gradient + grid pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(1200px_600px_at_60%_-10%, ${primary}, transparent)` }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.07]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
        <ContentSections />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300/70 text-sm">© {new Date().getFullYear()} Aegis AntiCheat. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="text-slate-300/80 hover:text-white">About</a>
            <a href="#tos" className="text-slate-300/80 hover:text-white">Terms</a>
            <a href="#pricing" className="inline-flex items-center rounded-md px-3 py-1.5 font-medium text-slate-900" style={{ background: primary }}>Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
