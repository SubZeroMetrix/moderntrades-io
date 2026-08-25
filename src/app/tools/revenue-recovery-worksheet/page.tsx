import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { WorksheetTool, type WorksheetField } from '@/components/WorksheetTool'

export const metadata = buildMetadata({
  title: 'Revenue Recovery Worksheet',
  description: 'Enter your own numbers to see a rough estimate of revenue sitting in missed calls -- calculated entirely in your browser, nothing sent anywhere.',
  path: '/tools/revenue-recovery-worksheet',
})

const FIELDS: WorksheetField[] = [
  { id: 'missedCalls', label: 'Missed calls during business hours in the last 30 days', suffix: 'calls' },
  { id: 'conversionRate', label: 'Conservative estimate: % of missed callers who would have booked', suffix: '%', defaultHint: 'If unsure, a conservative starting guess is 20-40%.' },
  { id: 'avgJobValue', label: 'Average completed job value', suffix: '$' },
]

export default function RevenueRecoveryWorksheetPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Revenue Recovery Worksheet', url: '/tools/revenue-recovery-worksheet' }])
  const article = articleSchema({ headline: 'Revenue Recovery Worksheet', description: 'Interactive missed-call revenue exposure calculator.', path: '/tools/revenue-recovery-worksheet', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Revenue Recovery Worksheet" description="Pull your own call log numbers and get an immediate, transparent estimate -- calculated in your browser, nothing sent anywhere, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Revenue Recovery Worksheet', href: '/tools/revenue-recovery-worksheet' }]} />
      <div className="section-container max-w-2xl py-16">
        <WorksheetTool fields={FIELDS} formula="missed-call-exposure" methodNote="This is simple multiplication using the numbers you entered." />
        <div className="mt-10 text-center">
          <Link href="/resources/revenue-recovery" className="text-brand-electric underline">Read the full Revenue Recovery guide</Link>
        </div>
      </div>
    </div>
  )
}
