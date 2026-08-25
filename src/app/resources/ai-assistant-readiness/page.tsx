import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'AI Assistant Readiness for Contractors',
  description: 'What has to be true before an AI assistant can safely handle a customer conversation for a contractor business -- and why most businesses aren\'t there yet.',
  path: '/resources/ai-assistant-readiness',
})

export default function AiAssistantReadinessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'AI Assistant Readiness', url: '/resources/ai-assistant-readiness' }])
  const article = articleSchema({
    headline: 'AI Assistant Readiness for Contractors',
    description: 'The prerequisites before an AI assistant can handle a customer conversation.',
    path: '/resources/ai-assistant-readiness',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="AI Assistant Readiness for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'AI Assistant Readiness', href: '/resources/ai-assistant-readiness' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            An AI assistant is only as good as the process it&apos;s automating. If your intake, pricing, and scheduling
            rules aren&apos;t already consistent and documented, an AI assistant won&apos;t create that consistency -- it
            will just answer customers faster with whatever inconsistency already exists. Readiness is a process
            question first, a technology question second.
          </p>
        </div>

        <div className="prose-content">
          <h2>What &quot;Ready&quot; Actually Requires</h2>
          <ul>
            <li><strong>Documented answers to common questions</strong> -- service area, pricing ranges, what you do and don&apos;t do -- written down somewhere, not only in someone&apos;s head.</li>
            <li><strong>A clear handoff rule</strong> -- exactly when a conversation must go to a human (anything involving a quote commitment, a complaint, or an edge case), decided in advance, not improvised.</li>
            <li><strong>A consistent scheduling process</strong> an assistant can actually follow -- if humans book appointments inconsistently today, an AI layered on top inherits that inconsistency.</li>
            <li><strong>Consent and disclosure clarity</strong> -- customers should know when they&apos;re talking to an automated system, and consent rules for any follow-up contact still apply (see <Link href="/resources/phone-and-sms-readiness">Phone &amp; SMS Readiness</Link>).</li>
          </ul>

          <h2>What Goes Wrong Without This</h2>
          <p>
            An assistant given vague or outdated pricing information will quote it confidently to a customer,
            creating a commitment the business now has to honor or awkwardly walk back. An assistant with no clear
            handoff rule will either escalate everything (defeating the purpose) or nothing (mishandling anything
            unusual). Both failure modes trace back to missing process definition, not a bad AI model.
          </p>

          <h2>A Practical Starting Checklist</h2>
          <ul>
            <li>Write down your actual service area, pricing ranges, and what you explicitly don&apos;t do -- even a rough version.</li>
            <li>List every situation that should always go to a human, before deploying anything automated.</li>
            <li>Confirm your scheduling process is consistent enough that a script (human or AI) could follow it without guessing.</li>
            <li>Decide how customers will be told they&apos;re talking to an automated assistant.</li>
          </ul>

          <h2>Where Modern Trades CRM Stands Today</h2>
          <p>
            As of this review, Modern Trades CRM has no live AI-assisted feature -- see the{' '}
            <a href="https://www.moderntradescrm.com/capabilities">capabilities matrix</a>. Any future AI feature
            will be labeled there only once independently confirmed working, not marketed ahead of that.
          </p>

          <h2>Limitations</h2>
          <p>
            This page describes general prerequisites, not a certification or guarantee that any specific AI tool
            will behave correctly once these are in place -- vendor-specific behavior still needs its own testing.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" target="_blank" rel="noopener noreferrer">FTC, disclosure guidance relevant to automated/AI customer interactions</a></li>
            <li><a href="https://www.census.gov/programs-surveys/btos.html" target="_blank" rel="noopener noreferrer">U.S. Census Bureau, Business Trends and Outlook Survey (AI adoption data)</a></li>
          </ul>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>
        <p className="text-xs text-gray-400 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
