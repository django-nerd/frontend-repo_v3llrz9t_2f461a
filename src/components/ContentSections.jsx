const primary = '#00E5D9'

export default function ContentSections() {
  return (
    <>
      <section id="about" className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center">
          <div className="animate-in">
            <h2 className="text-3xl font-bold text-white">About Us</h2>
            <p className="mt-3 text-slate-300/85">
              We are a team of server owners and security engineers obsessed with fair gameplay. Our FiveM anti-cheat blends signature-based rules with behavior-driven heuristics to catch what others miss.
            </p>
            <p className="mt-3 text-slate-300/85">
              Built for performance, audited regularly, and updated continuously.
            </p>
          </div>
          <div className="rounded-2xl glass p-6 card-hover shine animate-in" style={{ animationDelay: '120ms' }}>
            <div className="aspect-video rounded-xl bg-slate-900/50 grid place-items-center text-slate-300">Security Dashboard Preview</div>
          </div>
        </div>
      </section>

      <section id="tos" className="py-28">
        <div className="mx-auto max-w-3xl px-6 animate-in">
          <h2 className="text-3xl font-bold text-white">Terms of Service</h2>
          <div className="mt-4 space-y-4 text-slate-300/85 text-sm leading-6">
            <p>
              By subscribing, you agree to use the software solely on your owned servers and comply with FiveM terms. Redistribution, reverse engineering, or bypass attempts are prohibited and result in immediate termination.
            </p>
            <p>
              Refunds are available within 7 days if the product materially fails to perform as described and support cannot resolve the issue.
            </p>
            <p>
              We reserve the right to suspend access if suspicious activity is detected to protect the broader network.
            </p>
          </div>
          <a href="#pricing" className="mt-6 inline-flex rounded-xl px-4 py-2 font-semibold text-slate-900 btn-glow" style={{ background: primary }}>I Agree</a>
        </div>
      </section>
    </>
  )
}
