import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Phone & SMS Readiness for Contractors',
  description: 'What TCPA and FCC consent rules actually require before a contractor business texts or auto-dials customers -- and why "just turn on texting" is riskier than it looks.',
  path: '/resources/phone-and-sms-readiness',
})

export default function PhoneSmsReadinessPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Phone & SMS Readiness', url: '/resources/phone-and-sms-readiness' },
  ])
  const article = articleSchema({
    headline: 'Phone & SMS Readiness for Contractors',
    description: 'What TCPA and FCC consent rules require before texting or auto-dialing customers.',
    path: '/resources/phone-and-sms-readiness',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <PageHeader
        eyebrow="Resources"
        title="Phone & SMS Readiness for Contractors"
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Phone & SMS Readiness', href: '/resources/phone-and-sms-readiness' }]}
      />

      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            Texting or auto-dialing a customer for marketing purposes requires their prior express written consent
            under the Telephone Consumer Protection Act (TCPA), enforced through FCC rules -- and since January 2025
            that consent can no longer be shared across multiple businesses. &quot;We&apos;ll just turn on SMS&quot;
            is not a software setting; it&apos;s a compliance program with real penalty exposure.
          </p>
        </div>

        <div className="prose-content">
          <h2>Who This Is For</h2>
          <p>
            Any contractor business considering automated text reminders, missed-call text-back, review requests by
            SMS, or marketing calls -- whether you build this yourself or a vendor builds it for you. This is
            education, not legal advice; a licensed attorney should review your specific consent flow.
          </p>

          <h2>The Underlying Problem</h2>
          <p>
            SMS and auto-dialed calls are effective specifically because they&apos;re fast and hard to ignore --
            which is exactly why federal law treats them differently from email. The TCPA requires{' '}
            <strong>prior express written consent</strong> before an automated or prerecorded marketing call or text
            reaches a consumer. This isn&apos;t a checkbox you add after the fact; it has to exist before the first
            message goes out.
          </p>

          <h2>What Changed in 2025</h2>
          <p>
            The FCC&apos;s one-to-one consent rule, effective January 2025, closed what regulators called the
            &quot;lead generation loophole&quot;: a single consent can no longer be shared or sold across multiple
            unrelated businesses. Each sender now needs its own, specific consent from each consumer.
          </p>
          <p>
            Separately, the FCC&apos;s expanded opt-out rules (effective April 11, 2025) require businesses to honor
            a consent revocation made through <em>any</em> reasonable method -- not just a &quot;STOP&quot; reply --
            including a phone call, email, website form, or in-person request, generally within 10 business days.
          </p>

          <h2>A Practical Readiness Checklist</h2>
          <ul>
            <li>Do you have a specific, documented consent record for SMS/calls -- separate from a general contact form submission?</li>
            <li>Is your consent language specific to your business, not shared with any other company or lead source?</li>
            <li>Can a customer revoke consent through more than just a reply keyword, and does your process act on it within days, not weeks?</li>
            <li>Do you have a documented quiet-hours policy (no marketing calls/texts outside reasonable hours)?</li>
            <li>Is there a frequency limit so the same customer isn&apos;t contacted repeatedly in a short window?</li>
            <li>Do you know who is legally the &quot;sender&quot; if you use a third-party CRM or marketing platform?</li>
          </ul>

          <h2>Where the Real Cost Shows Up</h2>
          <p>
            Enforcement isn&apos;t theoretical: the FCC has both revoked call-routing certifications for hundreds of
            providers and issued fines exceeding $200 million in a single year for robocall-rule violations. The
            exposure for a small business is usually private litigation risk under the TCPA&apos;s statutory
            damages, not an FCC fine directly -- but the underlying consent failures are the same ones the FCC is
            actively enforcing against at the carrier level.
          </p>

          <h2>Limitations</h2>
          <p>
            This page explains the general federal framework as of the sources cited below. State-level rules can
            add additional requirements. It does not cover every scenario (e.g. purely informational/transactional
            texts have different rules than marketing texts) and is not a substitute for legal review of your
            specific consent flow.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://docs.fcc.gov/public/attachments/DOC-408396A1.pdf" target="_blank" rel="noopener noreferrer">FCC, One-to-One Consent Rule (effective Apr 11, 2025)</a></li>
            <li><a href="https://docs.fcc.gov/public/attachments/DA-24-910A1.pdf" target="_blank" rel="noopener noreferrer">FCC, guidance on consent-revocation methods (Sept 2024)</a></li>
            <li><a href="https://www.federalregister.gov/documents/2024/03/05/2024-04587/strengthening-the-ability-of-consumers-to-stop-robocalls" target="_blank" rel="noopener noreferrer">Federal Register, Strengthening the Ability of Consumers to Stop Robocalls (Mar 2024)</a></li>
          </ul>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12 text-center">
          <p className="text-gray-700 mb-4">
            When your consent process is actually ready, <a href="https://www.moderntradescrm.com/capabilities" className="text-brand-electric underline">see what Modern Trades CRM currently supports</a>{' '}
            for phone/SMS -- honestly labeled, not oversold.
          </p>
          <Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link>
        </div>

        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25. Educational content, not legal advice.</p>
      </div>
    </div>
  )
}
