import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'CRM Migration Checklist',
  description: 'A free, interactive checklist to see if you\'re ready to switch CRM systems without losing data or double-messaging customers -- no email required.',
  path: '/tools/crm-migration-checklist',
})

const ITEMS: ChecklistItem[] = [
  { id: 'clean-export', label: 'You can export a clean copy of your current contact and job data right now.', action: 'Confirm your current system\'s export before committing to a switch date -- this is the most common last-minute surprise.' },
  { id: 'decided-scope', label: 'You\'ve decided which records are worth migrating vs. archiving separately.', action: 'Migrating everything indiscriminately often just moves clutter into the new system.' },
  { id: 'field-mapping', label: 'You have a field-mapping plan (old field -> new field) before the import, not during.', action: 'Map fields ahead of time -- doing it live during import is where data quality problems happen.' },
  { id: 'automation-off', label: 'You have a plan to disable old-system automation before enabling the new system\'s.', action: 'This prevents the single most common migration problem: a customer getting duplicate messages from both systems.' },
  { id: 'test-batch', label: 'You plan to test with a small batch before running the full migration.', action: 'Import a handful of records first and verify they look right before committing to the full dataset.' },
]

export default function CrmMigrationChecklistPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'CRM Migration Checklist', url: '/tools/crm-migration-checklist' }])
  const article = articleSchema({ headline: 'CRM Migration Checklist', description: 'Interactive checklist for CRM migration readiness.', path: '/tools/crm-migration-checklist', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="CRM Migration Checklist" description="Five questions to check before you switch CRM systems -- immediate result, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'CRM Migration Checklist', href: '/tools/crm-migration-checklist' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="See the full framework in the CRM Migration Planning guide." />
        <div className="mt-10 text-center">
          <Link href="/resources/crm-migration-planning" className="text-brand-electric underline">Read the full CRM Migration Planning guide</Link>
        </div>
      </div>
    </div>
  )
}
