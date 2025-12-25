import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="font-sans text-xs uppercase tracking-wide-custom text-terracotta-600 mb-8">
            AI Automation Consultancy
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-ink-900 leading-[1.1] mb-8">
            AI Automation for<br />
            <span className="text-ink-600">Small & Medium Business</span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto mb-12">
            Helping Australian businesses streamline operations, eliminate repetitive tasks,
            and scale intelligently with thoughtful AI solutions.
          </p>

          {/* CTA */}
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-sans text-sm font-medium px-8 py-4 bg-ink-900 text-parchment-100 rounded-full hover:bg-ink-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a conversation
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="hr-refined" />
      </div>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Left column - Label */}
            <div className="md:col-span-4">
              <p className="font-sans text-xs uppercase tracking-wide-custom text-ink-500 sticky top-28">
                About
              </p>
            </div>

            {/* Right column - Content */}
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink-900 leading-snug mb-8">
                Technology should work for you,
                <span className="text-ink-500"> not the other way around.</span>
              </h2>

              <div className="space-y-6 font-sans text-ink-600 leading-relaxed">
                <p>
                  I help small and medium businesses across Australia discover
                  practical ways to use AI automation. Not the hype &mdash; the real,
                  useful stuff that saves hours of repetitive work every week.
                </p>

                <p>
                  From automating customer enquiries to streamlining internal processes,
                  I focus on solutions that integrate naturally with how you already work.
                  No complicated systems. No steep learning curves. Just tools that make
                  your day easier.
                </p>

                <p>
                  Whether you&apos;re a solo operator or a growing team, AI automation
                  can give you back the time to focus on what matters &mdash; growing your
                  business and serving your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="hr-refined" />
      </div>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Left column - Label */}
            <div className="md:col-span-4">
              <p className="font-sans text-xs uppercase tracking-wide-custom text-ink-500 sticky top-28">
                What I Do
              </p>
            </div>

            {/* Right column - Services */}
            <div className="md:col-span-8">
              <div className="space-y-12">
                {/* Service 1 */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="font-serif text-4xl text-ink-300 font-medium">01</span>
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-ink-900 mb-3 group-hover:text-terracotta-600 transition-colors duration-300">
                        Process Automation
                      </h3>
                      <p className="font-sans text-ink-600 leading-relaxed">
                        Identify repetitive tasks eating up your time and automate them.
                        From data entry to report generation, free up hours every week.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="font-serif text-4xl text-ink-300 font-medium">02</span>
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-ink-900 mb-3 group-hover:text-terracotta-600 transition-colors duration-300">
                        Customer Communication
                      </h3>
                      <p className="font-sans text-ink-600 leading-relaxed">
                        Smart automation for enquiries, follow-ups, and customer support.
                        Respond faster without sacrificing the personal touch.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="font-serif text-4xl text-ink-300 font-medium">03</span>
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-ink-900 mb-3 group-hover:text-terracotta-600 transition-colors duration-300">
                        Integration & Workflows
                      </h3>
                      <p className="font-sans text-ink-600 leading-relaxed">
                        Connect your existing tools and create seamless workflows.
                        Make your software ecosystem work together, not in silos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-ink-900 text-parchment-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-snug mb-6">
            Ready to work smarter?
          </h2>
          <p className="font-sans text-parchment-200/80 mb-10 max-w-xl mx-auto">
            Let&apos;s have a conversation about your business and explore how
            AI automation could help you save time and scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-sans text-sm font-medium px-8 py-4 bg-parchment-100 text-ink-900 rounded-full hover:bg-parchment-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
