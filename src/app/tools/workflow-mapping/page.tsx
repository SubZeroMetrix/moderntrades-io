import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { ChecklistTool, type ChecklistItem } from '@/components/ChecklistTool'

export const metadata = buildMetadata({
  title: 'Workflow Mapping Worksheet',
  description: 'A free, interactive checklist to test whether a specific process is consistent enough to safely automate -- no email required.',
  path: '/tools/workflow-mapping',
})

const ITEMS: ChecklistItem[] = [
  { id: 'two-person-test', label: 'Two different people, asked separately, would describe this process the same way.', action: 'If their answers wouldn\'t match, automating this process will encode one version and quietly break the other -- fix the inconsistency first.' },
  { id: 'clear-trigger', label: 'The process has one clear, specific trigger (e.g. a booking, an inbound lead) -- not "whenever someone gets to it."', action: 'A vague trigger makes automation unreliable. Define exactly what starts this process.' },
  { id: 'clear-next-step', label: 'There is one specific, repeatable next step after the trigger, not several possible paths depending on who\'s working that day.', action: 'Write down the single correct next step -- if there are several valid paths today, pick the one you actually want automated.' },
  { id: 'exceptions-known', label: 'You know the common exceptions to this process and what should happen for each.', action: 'List the top 2-3 exceptions before automating -- an automation that only handles the standard case will mishandle the rest silently.' },
]

export default function WorkflowMappingPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Workflow Mapping Worksheet', url: '/tools/workflow-mapping' }])
  const article = articleSchema({ headline: 'Workflow Mapping Worksheet', description: 'Interactive process-consistency checklist before automating.', path: '/tools/workflow-mapping', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Workflow Mapping Worksheet" description="Test one specific process against four questions before automating it -- immediate result, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Workflow Mapping Worksheet', href: '/tools/workflow-mapping' }]} />
      <div className="section-container max-w-2xl py-16">
        <ChecklistTool items={ITEMS} methodNote="Run this once per process you're considering automating -- not once for the whole business." />
        <div className="mt-10 text-center">
          <a href="https://www.metrixaudit.com/workflow-readiness" className="text-brand-electric underline">See Metrix Audit&apos;s Workflow Readiness page</a>
        </div>
      </div>
    </div>
  )
}
