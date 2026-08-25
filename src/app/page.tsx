import Link from 'next/link'
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

      <section className="bg-gradient-navy dark-section py-24">
        <div className="section-container max-w-3xl text-center">
          <p className="text-label text-brand-cyan mb-4">Contractor Growth & Operations</p>
          <h1 className="text-display text-white mb-6">Practical Systems, Not Generic Advice</h1>
          <p className="text-body-lg mb-10 max-w-xl mx-auto">
            Lead response, missed-call recovery, estimate follow-up, customer reactivation, and where operational AI
            genuinely helps a contractor business -- written for owners running real crews, not theory.
          </p>
          <Link href="/resources" className="btn-primary">Browse Resources</Link>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-5xl">
          <h2 className="text-headline text-gray-900 mb-10 text-center">Start Here</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {TOPICS.map((t) => (
              <Link key={t.href} href={t.href} className="card-panel hover:border-brand-electric/30 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-500">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-light-alt">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-headline text-gray-900 mb-4">When You&apos;re Ready for Software</h2>
          <p className="text-body-lg mb-8">
            Modern Trades is an educational publication, not a sales page. When a specific problem points to a real
            software need, <a href="https://www.moderntradescrm.com" className="text-brand-electric underline">Modern Trades CRM</a>{' '}
            is the product built to handle it -- a SubZeroMetrix LLC affiliate, disclosed here and everywhere else it&apos;s mentioned.
          </p>
          <a href="https://www.moderntradescrm.com" className="btn-secondary">See Modern Trades CRM</a>
        </div>
      </section>
    </div>
  )
}
