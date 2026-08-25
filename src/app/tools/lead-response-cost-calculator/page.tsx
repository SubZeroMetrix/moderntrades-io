import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { WorksheetTool, type WorksheetField } from '@/components/WorksheetTool'

export const metadata = buildMetadata({
  title: 'Lead Response Cost Calculator',
  description: 'Enter your own lead volume and response habits to see a rough estimate of what slow response is costing you -- calculated in your browser, nothing sent anywhere.',
  path: '/tools/lead-response-cost-calculator',
})

const FIELDS: WorksheetField[] = [
  { id: 'leadsPerMonth', label: 'Inbound leads per month (calls, forms, texts combined)', suffix: 'leads' },
  { id: 'slowResponsePct', label: '% of leads that take over 1 hour to get a real human response', suffix: '%', defaultHint: 'If unsure, pull your last 20 inquiries and time them -- see the Speed-to-Lead guide.' },
  { id: 'lossRateOnSlow', label: 'Conservative estimate: % of slow-responded leads lost to a competitor', suffix: '%', defaultHint: 'A conservative starting guess is 20-40%.' },
  { id: 'avgJobValue', label: 'Average job value', suffix: '$' },
]

export default function LeadResponseCostCalculatorPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tools', url: '/tools' }, { name: 'Lead Response Cost Calculator', url: '/tools/lead-response-cost-calculator' }])
  const article = articleSchema({ headline: 'Lead Response Cost Calculator', description: 'Interactive calculator for the cost of slow lead response.', path: '/tools/lead-response-cost-calculator', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Tools" title="Lead Response Cost Calculator" description="See what slow response is roughly costing you, using your own numbers -- calculated in your browser, no email required." breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools' }, { name: 'Lead Response Cost Calculator', href: '/tools/lead-response-cost-calculator' }]} />
      <div className="section-container max-w-2xl py-16">
        <WorksheetTool fields={FIELDS} formula="lead-response-cost" methodNote="This is simple multiplication using the numbers you entered, informed by the 2011 HBR speed-to-lead research (see the guide)." />
        <div className="mt-10 text-center">
          <Link href="/resources/speed-to-lead" className="text-brand-electric underline">Read the full Speed-to-Lead guide</Link>
        </div>
      </div>
    </div>
  )
}
