import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'CRM Implementation Preparation Checklist',
  description: 'A free, interactive checklist to see what you actually need before starting CRM implementation -- no email required.',
  path: '/tools/crm-implementation-prep',
})

const ITEMS: ChecklistItem[] = [
  { id: 'data-ready', label: 'You know roughly how many existing contacts/customers you\'d need to import, and where that data currently lives.', action: 'Locate your current contact data (spreadsheet, old system export, paper records) before implementation starts -- this is usually the slowest step if left until the last minute.' },
  { id: 'pipeline-decided', label: 'You have a rough idea of the stages you want a deal to move through, even if it\'s not final.', action: 'Sketch your ideal pipeline stages on paper first -- it\'s much easier to configure something you\'ve already thought through.' },
  { id: 'team-identified', label: 'You know who on your team will actually use the system day-to-day.', action: 'List every person who needs access before implementation, including their role -- this determines user setup.' },
  { id: 'process-documented', label: 'Your current intake and follow-up process is written down somewhere, not just known by you.', action: 'Write down your current process, even roughly -- implementation configures the system around a real process, not a guess.' },
  { id: 'time-allocated', label: 'You\'ve set aside real time (not just "when I get a chance") to test the system before relying on it.', action: 'Block dedicated time for testing with real data before go-live -- rushing this step is the most common cause of a rocky launch.' },
]

export default function CrmImplementationPrepPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'CRM Implementation Preparation Checklist', url: '/tools/crm-implementation-prep' }])
  const article = articleSchema({ headline: 'CRM Implementation Preparation Checklist', description: 'Interactive checklist for CRM implementation readiness.', path: '/tools/crm-implementation-prep', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="CRM Implementation Preparation Checklist" description="Five questions to see what to prepare before implementation starts -- immediate result, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'CRM Implementation Preparation Checklist', href: '/tools/crm-implementation-prep' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="See the real implementation sequence on Modern Trades CRM's Implementation page." />
        <div className="mt-10 text-center">
          <a href="https://www.moderntradescrm.com/implementation" className="text-brand-electric underline">See Modern Trades CRM&apos;s Implementation page</a>
        </div>
      </div>
    </div>
  )
}
