import { ShieldCheck, Zap, CheckCircle2 } from 'lucide-react'

const primary = '#00E5D9'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]" style={{ background: `radial-gradient(50%_50%_at_50%_0%, ${primary}, transparent 60%)` }} />
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
              <Zap className="h-3.5 w-3.5" /> Real-time Detection • Server-side Integrity • Seamless Updates
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Modern FiveM Anti-Cheat
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg">
              Keep your city safe with enterprise-grade protection. Lightweight client, powerful detection engine, and instant actions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-medium text-slate-900" style={{ background: primary }}>
                <ShieldCheck className="h-5 w-5" /> Get Protection
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 border border-white/10 text-white/90 hover:bg-white/5">
                Learn More
              </a>
            </div>
            <ul className="mt-8 grid gap-3 text-slate-300/80">
              {['Heuristic pattern scanning', 'Server-side validation', 'Automatic ban sync'].map((i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: primary }} /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 blur-3xl opacity-40" style={{ background: `conic-gradient(from_180deg_at_50%_50%, ${primary}, transparent)` }} />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {["Injection Block", "Executor Trap", "Spectate Guard", "Vehicle Spawner", "Damage Mod", "Blacklist"]
                  .map((label, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                    <div className="text-sm text-slate-200/80">{label}</div>
                    <div className="mt-3 h-2 overflow-hidden rounded bg-slate-800">
                      <div className="h-full" style={{ width: `${60 + (idx * 6)}%`, background: primary }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
