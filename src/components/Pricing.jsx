const primary = '#00E5D9'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$9/mo',
      tagline: 'For small communities',
      features: ['Up to 32 slots', 'Basic detection', 'Email support']
    },
    {
      name: 'Pro',
      price: '$19/mo',
      tagline: 'Most popular',
      highlight: true,
      features: ['Up to 64 slots', 'Advanced modules', 'Priority support']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      tagline: 'High population servers',
      features: ['100+ slots', 'Dedicated cluster', 'SLA & onboarding']
    }
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300/80">Choose a plan that grows with your city.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border bg-white/5 p-6 backdrop-blur ${t.highlight ? 'border-0 ring-2' : 'border-white/10'}`} style={t.highlight ? { boxShadow: `0 0 0 1px ${primary}`, ringColor: primary } : {}}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{t.name}</h3>
                <span className="text-sm text-slate-300/80">{t.tagline}</span>
              </div>
              <div className="mt-4 text-4xl font-bold" style={{ color: primary }}>{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: primary }} /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium text-slate-900" style={{ background: primary }}>
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
