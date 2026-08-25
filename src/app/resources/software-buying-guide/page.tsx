import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Software Buying Guide for Contractors',
  description: 'A vendor-neutral framework for evaluating contractor software -- what to ask before buying, and the questions most sales demos are designed to skip past.',
  path: '/resources/software-buying-guide',
})

export default function SoftwareBuyingGuidePage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Software Buying Guide', url: '/resources/software-buying-guide' }])
  const article = articleSchema({
    headline: 'Software Buying Guide for Contractors',
    description: 'A vendor-neutral framework for evaluating contractor software.',
    path: '/resources/software-buying-guide',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Software Buying Guide for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Software Buying Guide', href: '/resources/software-buying-guide' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Most contractor software demos are built to show the best-case screen, not the honest current state of
            the product. This guide is a vendor-neutral set of questions to ask any contractor software vendor --
            including Modern Trades CRM -- before committing, so the decision is based on verified capability, not
            a polished demo.
          </p>
        </div>

        <div className="prose-content">
          <h2>Questions Worth Asking Any Vendor</h2>
          <ol>
            <li><strong>&quot;Is this feature live for existing customers today, or is it on your roadmap?&quot;</strong> A roadmap item described in present tense in a demo is a common source of buyer disappointment.</li>
            <li><strong>&quot;Can I see this working with my own data, not sample data?&quot;</strong> Sample data is curated to look clean; your real data will surface real gaps.</li>
            <li><strong>&quot;What happens to my data if I cancel?&quot;</strong> Export format and timeline matter more after the fact than most buyers realize beforehand.</li>
            <li><strong>&quot;Who do I talk to when something breaks, and what&apos;s the actual response time?&quot;</strong> Not the marketed SLA -- the real, current one.</li>
            <li><strong>&quot;What does implementation actually involve, and how long has it taken for other customers like me?&quot;</strong> A vague answer here usually means it hasn&apos;t been standardized yet.</li>
          </ol>

          <h2>Red Flags Worth Noticing</h2>
          <ul>
            <li>A feature demoed but never shown working live, only in slides or a video.</li>
            <li>Pricing that requires a sales call to learn even roughly, with no ballpark offered.</li>
            <li>No clear answer about who owns your data or how to leave.</li>
            <li>Testimonials with no way to verify they&apos;re from real, current customers.</li>
          </ul>

          <h2>Applying This to Modern Trades CRM</h2>
          <p>
            We built the <a href="https://www.moderntradescrm.com/capabilities">capabilities matrix</a> specifically
            so you can ask us these same questions and get a direct answer without a sales call -- every row is
            labeled Available, Prepared, Planned, or Unavailable, not just described in marketing language. If a
            row doesn&apos;t have enough detail, that&apos;s a fair thing to ask about directly.
          </p>

          <h2>Limitations</h2>
          <p>
            This guide reflects general due-diligence practice, not a certification of any specific vendor
            (including Modern Trades CRM) -- always verify claims against your own use case before committing.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
        <p className="text-xs text-gray-400 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
