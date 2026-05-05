export default function Home() {
  const faqs = [
    {
      q: 'How does the embeddable widget work?',
      a: 'Paste one script tag into your app. Our widget intercepts cancellation clicks and presents A/B-tested retention flows — no backend changes needed.'
    },
    {
      q: 'What kind of retention offers can I run?',
      a: 'Pause plans, discount coupons, plan downgrades, or custom messaging — all configurable from your dashboard without a redeploy.'
    },
    {
      q: 'Is my customers\' data safe?',
      a: 'We collect only anonymized behavioral signals. No PII is stored. All data is encrypted in transit and at rest, and you can delete it anytime.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Churn Reduction
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Losing Subscribers.<br />
          <span className="text-[#58a6ff]">Optimize Every Cancellation.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Embed a smart cancellation flow in minutes. A/B test retention offers, capture exit reasons, and turn cancellations into saves — all from one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Saving Subscribers — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="mt-5 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Social proof strip */}
      <div className="border-y border-[#21262d] bg-[#161b22] py-5">
        <p className="text-center text-sm text-[#6e7681] tracking-wide">
          Trusted by SaaS teams saving&nbsp;
          <span className="text-[#58a6ff] font-semibold">15–40%</span>
          &nbsp;of at-risk subscribers every month
        </p>
      </div>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple, Flat Pricing</h2>
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-5xl font-extrabold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited cancellation flow events',
              'A/B test up to 5 retention variants',
              'Exit-reason analytics dashboard',
              'Embeddable widget (1 line of code)',
              'Email digest of saves & churn trends',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="mt-4 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#21262d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} CancelGuard. All rights reserved.
      </footer>
    </main>
  )
}
