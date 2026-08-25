import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'CRM Migration Planning for Contractors',
  description: 'What actually breaks during a CRM switch, and a practical checklist for migrating contact and job data without losing history or double-messaging customers.',
  path: '/resources/crm-migration-planning',
})

export default function CrmMigrationPlanningPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'CRM Migration Planning', url: '/resources/crm-migration-planning' }])
  const article = articleSchema({ headline: 'CRM Migration Planning for Contractors', description: 'A practical checklist for switching CRM systems.', path: '/resources/crm-migration-planning', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="CRM Migration Planning for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'CRM Migration Planning', href: '/resources/crm-migration-planning' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Most CRM migration problems aren&apos;t technical -- they&apos;re data-quality and process problems that
            existed before the switch and get exposed by it. Plan around what data actually needs to move, what
            can be cleaned up instead of migrated, and how to avoid double-messaging customers during the overlap.
          </p>
        </div>

        <div className="prose-content">
          <h2>What Actually Breaks</h2>
          <p>
            The most common real-world failure isn&apos;t lost data -- it&apos;s duplicate or conflicting
            communication during the transition: a customer getting an old system&apos;s automated reminder and
            the new system&apos;s reminder for the same appointment, or a follow-up sequence firing twice.
          </p>

          <h2>A Practical Migration Checklist</h2>
          <ol>
            <li><strong>Export before you need to.</strong> Confirm you can get a clean export of contacts, job history, and notes from your current system before committing to a switch date.</li>
            <li><strong>Decide what&apos;s worth migrating vs. archiving.</strong> Not every old lead needs to move -- a dormant contact from 3 years ago might be better archived separately than cluttering a fresh system.</li>
            <li><strong>Map fields before importing,</strong> not during. Know which old field maps to which new one, and what happens to fields that don&apos;t have an equivalent.</li>
            <li><strong>Turn off automation in the old system before turning it on in the new one.</strong> This is the single most common source of double-messaging during a migration.</li>
            <li><strong>Test with a small batch first.</strong> Import a handful of records, verify they look right, before running the full migration.</li>
            <li><strong>Keep the old system read-only for a window</strong> after cutover, in case you need to reference something that didn&apos;t migrate cleanly.</li>
          </ol>

          <h2>A Worked Example</h2>
          <p>
            Say a contractor has 1,200 contacts in an old system, of which maybe 300 have had activity in the last
            12 months. Migrating all 1,200 into a fresh CRM risks starting the new system cluttered with stale
            data. A more deliberate approach: migrate the active 300 fully, archive the rest as a spreadsheet for
            reference, and add dormant contacts back individually if they resurface. Illustrative approach, not a
            universal rule -- your own data quality determines the right cutoff.
          </p>

          <h2>Checklist</h2>
          <ul>
            <li>Can you export a clean copy of your current contact and job data right now?</li>
            <li>Have you decided which records are worth migrating vs. archiving?</li>
            <li>Is there a field mapping plan before the import, not during?</li>
            <li>Is automation in the old system disabled before the new system&apos;s automation goes live?</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            This is a general planning framework, not a guarantee that any specific migration will be
            issue-free -- data quality varies enormously between businesses and prior systems.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12">
          <p className="text-sm text-gray-700 mb-3">
            See what Modern Trades CRM actually supports for data import at the{' '}
            <a href="https://www.moderntradescrm.com/implementation" className="text-brand-electric underline">Implementation</a> page -- honestly, this is not yet a fully standardized process.
          </p>
          <p className="text-xs text-gray-500">
            Disclosure: Modern Trades CRM and The Modern Trades Mentor are affiliated businesses operated by
            SubZeroMetrix LLC. Any recommendation of them here is not independent.
          </p>
        </div>
        <div className="mt-6"><Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link></div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
