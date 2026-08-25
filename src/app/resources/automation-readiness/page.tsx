import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Automation Readiness for Contractors',
  description: 'What to automate first in a contractor business, what to keep manual, and how to tell the difference.',
  path: '/resources/automation-readiness',
})

export default function AutomationReadinessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Automation Readiness', url: '/resources/automation-readiness' }])
  const article = articleSchema({ headline: 'Automation Readiness for Contractors', description: 'What to automate first and what to keep manual.', path: '/resources/automation-readiness' })

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <div className="section-container max-w-3xl">
        <p className="text-label text-brand-electric mb-3">Resources</p>
        <h1 className="text-headline text-gray-900 mb-8">Automation Readiness for Contractors</h1>
        <div className="prose-content">
          <p>
            Automation works well on repetitive, well-defined tasks and fails badly on judgment calls. Getting that
            distinction backwards is the most common way contractor businesses waste money on software.
          </p>

          <h2>Good First Candidates for Automation</h2>
          <p>
            Appointment reminders, missed-call text-back, review requests after a completed job, and routing a new
            lead to the right person -- all rule-based, all the same every time, all safe to automate.
          </p>

          <h2>What Should Stay Manual (For Now)</h2>
          <p>
            Pricing judgment calls, handling an upset customer, and anything requiring a real read on a specific
            situation. Automating these too early usually creates a worse experience than doing nothing.
          </p>

          <h2>Where Operational AI Genuinely Helps</h2>
          <p>
            The honest use case today is surfacing and prioritizing -- flagging an overdue follow-up, drafting a
            response for a human to review, summarizing a pattern in repeat callbacks. Not making unsupervised
            decisions on a customer&apos;s behalf.
          </p>

          <h2>A Practical Starting Order</h2>
          <p>
            Automate the parts of follow-up that are already supposed to happen every time and currently
            don&apos;t reliably, before automating anything new. Fixing an existing gap beats adding a new capability
            nobody asked for.
          </p>

          <h2>Where This Goes Next</h2>
          <p>
            <a href="https://www.moderntradescrm.com">Modern Trades CRM</a>&apos;s workflow automation is built around
            exactly this -- rule-based, reviewable, never acting unsupervised on a customer. A SubZeroMetrix LLC affiliate.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
      </div>
    </div>
  )
}
