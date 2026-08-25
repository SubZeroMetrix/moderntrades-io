import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Scheduling Readiness for Contractors',
  description: 'What has to be true about your scheduling process before shared calendars or online booking actually help, rather than just exposing existing chaos to more people.',
  path: '/resources/scheduling-readiness',
})

export default function SchedulingReadinessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Scheduling Readiness', url: '/resources/scheduling-readiness' }])
  const article = articleSchema({ headline: 'Scheduling Readiness for Contractors', description: 'Prerequisites before shared calendars or online booking help.', path: '/resources/scheduling-readiness', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Scheduling Readiness for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Scheduling Readiness', href: '/resources/scheduling-readiness' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            When scheduling exists only in one person&apos;s head or a paper calendar, double-bookings and missed
            appointments become a matter of when, not if. Moving to a shared or online-bookable calendar doesn&apos;t
            fix that by itself -- it just gives more people visibility into whatever process already exists,
            chaotic or not.
          </p>
        </div>

        <div className="prose-content">
          <h2>The Real Prerequisite Is a Consistent Rule, Not Software</h2>
          <p>
            Before any calendar tool helps, you need one consistent answer to: how does a new appointment actually
            get confirmed, and who else can see it? If two people would describe that process differently, a
            shared calendar just makes the inconsistency visible to more people faster -- it doesn&apos;t resolve it.
          </p>

          <h2>A Practical Readiness Check</h2>
          <ol>
            <li><strong>Ask two people who touch scheduling</strong> to independently describe, step by step, how an appointment gets booked and confirmed. Compare the answers.</li>
            <li><strong>Define buffer and travel time explicitly</strong> -- if this varies by job type, write down the rule rather than relying on memory.</li>
            <li><strong>Decide who can see the full schedule</strong> -- if only one person can, that&apos;s the single point of failure a shared calendar is meant to remove.</li>
            <li><strong>Confirm what happens on a reschedule or cancellation</strong> -- is there a defined next step, or does it depend on who notices?</li>
          </ol>

          <h2>A Worked Example</h2>
          <p>
            Say a two-person crew relies on a single paper calendar kept at the shop. If the person who updates it
            is out sick for two days, appointments made or changed during that window risk being missed entirely
            -- not from bad intentions, but because the information had nowhere else to live. A shared digital
            calendar removes that specific single point of failure, but only if both people actually use it
            consistently.
          </p>

          <h2>Checklist</h2>
          <ul>
            <li>Can more than one person see the full schedule without asking someone else?</li>
            <li>Is there a written (not just remembered) rule for confirming a new appointment?</li>
            <li>Do buffer times and travel time follow a consistent rule?</li>
            <li>Is there a defined next step when an appointment is rescheduled or cancelled?</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            This page describes general readiness prerequisites, not a guarantee that any specific scheduling tool
            will fix a given business&apos;s process. The underlying process discipline matters more than the tool.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12">
          <p className="text-sm text-gray-700 mb-3">
            Modern Trades CRM&apos;s appointment scheduling (booking, reschedule, cancel, assignment) is verified
            working today -- see the <a href="https://www.moderntradescrm.com/capabilities" className="text-brand-electric underline">capabilities matrix</a>.
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
