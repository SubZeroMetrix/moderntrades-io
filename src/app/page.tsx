import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Modern Trades -- Contractor Growth & Operations',
  description: 'A national publication on contractor lead response, follow-up, automation, and operational AI -- practical, not generic.',
})

const TOPICS = [
  { href: '/resources/crm-readiness', title: 'CRM Readiness', description: 'What "ready for a CRM" actually means, and the signs a business is still better off without one.' },
  { href: '/resources/revenue-recovery', title: 'Revenue Recovery', description: 'Missed calls, stalled estimates, and dormant customers -- where contractor revenue actually leaks.' },
  { href: '/resources/automation-readiness', title: 'Automation Readiness', description: 'What to automate first, what to keep manual, and how to tell the difference.' },
]

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />

      <section className="relative overflow-hidden bg-gradient-navy dark-section py-24">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="section-container relative grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
          <div>
            <p className="text-label text-brand-cyan mb-4">Contractor Growth &amp; Operations</p>
            <h1 className="text-display text-white mb-6">Practical Systems, Not Generic Advice</h1>
            <p className="text-body-lg mb-10 max-w-xl">
              Lead response, missed-call recovery, estimate follow-up, customer reactivation, and where operational AI
              genuinely helps a contractor business -- written for owners running real crews, not theory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/resources" className="btn-primary">Browse Resources</Link>
              <a href="https://www.moderntradescrm.com" className="btn-outline-visible !text-white !border-white/40">See Modern Trades CRM</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-brand-electric/20 blur-3xl" />
            <Image
              src="/brand/modern-trades-mark.png"
              alt="Modern Trades mark"
              width={420}
              height={420}
              className="relative w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-5xl">
          <h2 className="text-headline text-gray-900 mb-3 text-center">Start Here</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Three places most contractor operations actually break -- each guide gives you a real next step, not a listicle.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {TOPICS.map((t, i) => (
              <Link key={t.href} href={t.href} className="card-panel hover:border-brand-electric/30 transition-colors">
                <p className="text-xs font-semibold text-brand-electric mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-500">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-light-alt">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-headline text-gray-900 mb-4">When a Guide Points to Software</h2>
          <p className="text-body-lg mb-8">
            Some of the gaps covered here are best closed with a real system, not just better habits. When that&apos;s
            true, <a href="https://www.moderntradescrm.com" className="text-brand-electric underline">Modern Trades CRM</a>{' '}
            is the product built for it -- a SubZeroMetrix LLC affiliate, disclosed wherever it&apos;s mentioned.
          </p>
          <a href="https://www.moderntradescrm.com" className="btn-secondary">See Modern Trades CRM</a>
        </div>
      </section>
    </div>
  )
}
