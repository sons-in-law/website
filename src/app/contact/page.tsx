import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | liam-is-an.ai',
  description: 'Get in touch to discuss how AI automation can help your business. Based in Sydney, Australia.',
}

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <section className="pt-16 md:pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-wide-custom text-terracotta-600 mb-6">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-ink-900 leading-[1.1] mb-6">
            Let&apos;s talk about<br />
            <span className="text-ink-500">your business.</span>
          </h1>
          <p className="font-sans text-lg text-ink-600 max-w-xl">
            Whether you have a specific project in mind or just want to explore
            the possibilities, I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="hr-refined" />
      </div>

      {/* Contact Details Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Left column - Label */}
            <div className="md:col-span-4">
              <p className="font-sans text-xs uppercase tracking-wide-custom text-ink-500 sticky top-28">
                Get in Touch
              </p>
            </div>

            {/* Right column - Contact info */}
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-12">
                {/* Phone */}
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-wide-custom text-ink-500 mb-4">
                    Phone
                  </h3>
                  <a
                    href="tel:+61431901458"
                    className="font-serif text-2xl text-ink-900 link-refined hover:text-terracotta-600 transition-colors duration-300"
                  >
                    0431 901 458
                  </a>
                  <p className="font-sans text-sm text-ink-500 mt-2">
                    +61 431 901 458 (international)
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-wide-custom text-ink-500 mb-4">
                    Location
                  </h3>
                  <address className="font-sans text-ink-900 not-italic leading-relaxed">
                    22/51-57 Railway Parade<br />
                    Engadine NSW 2233<br />
                    Australia
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="hr-refined" />
      </div>

      {/* Business Details Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Left column - Label */}
            <div className="md:col-span-4">
              <p className="font-sans text-xs uppercase tracking-wide-custom text-ink-500 sticky top-28">
                Business Details
              </p>
            </div>

            {/* Right column - Business info */}
            <div className="md:col-span-8">
              <div className="bg-parchment-200/50 rounded-2xl p-8 md:p-10">
                <dl className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <dt className="font-sans text-sm text-ink-500">
                      Business Name
                    </dt>
                    <dd className="font-sans text-ink-900 font-medium">
                      liam-is-an.ai
                    </dd>
                  </div>

                  <div className="h-px bg-ink-900/10" />

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <dt className="font-sans text-sm text-ink-500">
                      ABN
                    </dt>
                    <dd className="font-sans text-ink-900 font-medium font-mono tracking-wide">
                      94 885 368 933
                    </dd>
                  </div>

                  <div className="h-px bg-ink-900/10" />

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <dt className="font-sans text-sm text-ink-500">
                      Phone
                    </dt>
                    <dd className="font-sans text-ink-900 font-medium">
                      0431 901 458
                    </dd>
                  </div>

                  <div className="h-px bg-ink-900/10" />

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <dt className="font-sans text-sm text-ink-500">
                      Address
                    </dt>
                    <dd className="font-sans text-ink-900 font-medium sm:text-right">
                      22/51-57 Railway Parade<br />
                      Engadine NSW 2233<br />
                      Australia
                    </dd>
                  </div>

                  <div className="h-px bg-ink-900/10" />

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <dt className="font-sans text-sm text-ink-500">
                      Country
                    </dt>
                    <dd className="font-sans text-ink-900 font-medium">
                      Australia
                    </dd>
                  </div>
                </dl>
              </div>

              <p className="font-sans text-sm text-ink-500 mt-6">
                ABN can be verified at{' '}
                <a
                  href="https://abr.business.gov.au/ABN/View?abn=94885368933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-600 link-refined"
                >
                  ABN Lookup
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Left column - Label */}
            <div className="md:col-span-4">
              <p className="font-sans text-xs uppercase tracking-wide-custom text-ink-500">
                Ready to Start?
              </p>
            </div>

            {/* Right column - CTA */}
            <div className="md:col-span-8">
              <p className="font-serif text-2xl md:text-3xl font-medium text-ink-900 leading-snug mb-6">
                The best way to get started is with a quick call.
              </p>
              <p className="font-sans text-ink-600 mb-8">
                No pressure, no sales pitch &mdash; just a conversation about your
                business and how AI automation might help.
              </p>
              <a
                href="tel:+61431901458"
                className="inline-flex items-center gap-3 font-sans text-sm font-medium px-8 py-4 bg-ink-900 text-parchment-100 rounded-full hover:bg-ink-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Call 0431 901 458
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6495 14.555 13.8196C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.6079 13.3983 14.6301 13.2134 14.6133C11.1619 14.3904 9.19137 13.6894 7.46004 12.5667C5.84926 11.5431 4.48359 10.1774 3.46004 8.56668C2.33336 6.82748 1.6322 4.84734 1.41337 2.78668C1.39671 2.60233 1.41862 2.41652 1.47## 2.24107C1.53667 2.06562 1.63175 1.90447 1.75655 1.76776C1.88134 1.63105 2.03328 1.52182 2.20256 1.44703C2.37184 1.37224 2.55765 1.33349 2.74671 1.33335H4.74671C5.07195 1.33016 5.38721 1.44476 5.63178 1.65571C5.87635 1.86667 6.03324 2.15964 6.07337 2.48001C6.14846 3.12006 6.29509 3.74849 6.51004 4.35335C6.59956 4.59198 6.61602 4.85085 6.55765 5.09849C6.49929 5.34614 6.36853 5.57139 6.18004 5.74668L5.34004 6.58668C6.29093 8.26934 7.73072 9.70912 9.41337 10.66L10.2534 9.82001C10.4287 9.63153 10.6539 9.50076 10.9016 9.4424C11.1492 9.38404 11.4081 9.40049 11.6467 9.49001C12.2516 9.70497 12.88 9.85159 13.52 9.92668C13.8439 9.96716 14.1396 10.1271 14.351 10.376C14.5625 10.6248 14.6748 10.9452 14.6667 11.28Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
