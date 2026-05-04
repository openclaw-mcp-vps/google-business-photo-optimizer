export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Your Google Business Photos for{" "}
          <span className="text-[#58a6ff]">Better Local Rankings</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          AI-powered analysis scores your Google Business Profile photos and gives you actionable recommendations to attract more local customers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📸", title: "Photo Quality Score", desc: "AI rates brightness, composition, and relevance." },
          { icon: "🔍", title: "SEO Factor Analysis", desc: "Checks metadata, alt signals, and category match." },
          { icon: "📈", title: "Improvement Tracking", desc: "Monitor ranking impact after each optimization." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to dominate local search</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Connect unlimited GBP locations",
              "AI photo quality scoring",
              "SEO optimization recommendations",
              "Monthly improvement reports",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start Optimizing Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the photo analysis work?",
              a: "Our AI evaluates each photo for quality signals like lighting, sharpness, and subject relevance, then cross-references Google's known ranking factors to give you a score and specific fixes."
            },
            {
              q: "Do I need technical skills to use this?",
              a: "Not at all. Connect your Google Business Profile with one click, and we handle the analysis. You get a simple checklist of improvements to make."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Google Business Photo Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
