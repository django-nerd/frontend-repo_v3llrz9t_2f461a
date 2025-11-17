import { Radar, Activity, Network, Cpu } from 'lucide-react'

const primary = '#00E5D9'

export default function Features() {
  const features = [
    {
      icon: Radar,
      title: 'Heuristic Radar',
      desc: 'Adaptive detection that learns from behavior patterns and server telemetry.'
    },
    {
      icon: Activity,
      title: 'Integrity Monitor',
      desc: 'Real-time checks on core files, memory regions, and permissions.'
    },
    {
      icon: Network,
      title: 'Cloud Ban Sync',
      desc: 'Federated ban lists and instant propagation across your network.'
    },
    {
      icon: Cpu,
      title: 'Low Overhead',
      desc: 'Optimized hooks and async pipelines keep client FPS smooth.'
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg p-2" style={{ background: `${primary}22` }}>
                <Icon className="h-5 w-5" style={{ color: primary }} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
