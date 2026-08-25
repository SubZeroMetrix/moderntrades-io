import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'CRM Readiness Checklist',
  description: 'A free, interactive checklist to see exactly which CRM-readiness gaps your business has -- no email required, results shown immediately.',
  path: '/tools/crm-readiness-checklist',
})

const ITEMS: ChecklistItem[] = [
  { id: 'multiple-people', label: 'More than one person touches leads or scheduling in your business.', action: 'If it\'s still just you, a shared spreadsheet is usually enough for now -- a CRM adds overhead before it adds value at this stage.' },
  { id: 'inconsistent-tracking', label: 'Open leads and quotes currently live somewhere inconsistent (notebook, texts, memory).', action: 'Pick one place to track every open lead, even a spreadsheet, before adding software on top of an inconsistent process.' },
  { id: 'outgrown-spreadsheet', label: 'You\'ve already tried a shared spreadsheet or basic system and outgrown it.', action: 'This is one of the clearest signs a CRM is worth evaluating now.' },
  { id: 'documented-process', label: 'Your intake and follow-up process is documented, not just known by one person.', action: 'Write down your current process before automating it -- software encodes whatever process it\'s given, inconsistency included.' },
  { id: 'team-buy-in', label: 'Your team is willing to consistently use a shared system, not just you.', action: 'A CRM only helps if it\'s actually used -- get buy-in before implementation, not after.' },
]

export default function CrmReadinessChecklistPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'CRM Readiness Checklist', url: '/tools/crm-readiness-checklist' }])
  const article = articleSchema({ headline: 'CRM Readiness Checklist', description: 'Interactive checklist for CRM readiness.', path: '/tools/crm-readiness-checklist', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="CRM Readiness Checklist" description="Five questions, answered honestly, with an immediate result and no email required. Nothing you enter here is sent anywhere." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'CRM Readiness Checklist', href: '/tools/crm-readiness-checklist' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="Read the full reasoning in the CRM Readiness guide." />
        <div className="mt-10 text-center">
          <Link href="/resources/crm-readiness" className="text-brand-electric underline">Read the full CRM Readiness guide</Link>
        </div>
      </div>
    </div>
  )
}
