import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Review Request Systems for Contractors',
  description: 'Why review recency matters more than review count, when to actually ask, and the FTC rules that govern how you can ask -- with a practical, compliant system.',
  path: '/resources/review-request-systems',
})

export default function ReviewRequestSystemsPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Review Request Systems', url: '/resources/review-request-systems' }])
  const article = articleSchema({ headline: 'Review Request Systems for Contractors', description: 'A practical, compliant system for requesting reviews.', path: '/resources/review-request-systems', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Review Request Systems for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Review Request Systems', href: '/resources/review-request-systems' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            A prospect comparing contractors reads recency before count. A business with 200 reviews and nothing
            in the last year reads as inactive; a business with 20 reviews, most from the last 90 days, reads as
            alive and busy. The system that matters is asking consistently right after a job, not accumulating
            reviews over years.
          </p>
        </div>

        <div className="prose-content">
          <h2>When to Ask</h2>
          <p>
            The best moment is immediately after a job the customer is visibly happy with -- while the experience
            is fresh, not a week later in a batch email. A same-day text or email with a direct link to leave a
            review outperforms a generic monthly request blast.
          </p>

          <h2>What the Rules Actually Require</h2>
          <p>
            The FTC&apos;s 2024 rule on consumer reviews and testimonials bans several specific practices: writing
            or buying fake reviews, suppressing genuine negative reviews you solicited, and having insiders post
            reviews without disclosing the relationship. It does not ban asking real customers for honest reviews
            -- it bans manufacturing or filtering them. If you text a review request, that message may also fall
            under TCPA consent rules -- see our <Link href="/resources/phone-and-sms-readiness" className="text-brand-electric underline">Phone &amp; SMS Readiness</Link> guide.
          </p>

          <h2>A Practical System</h2>
          <ol>
            <li><strong>Trigger on job completion,</strong> not on a calendar schedule -- the request should follow the actual work, same day if possible.</li>
            <li><strong>Ask once, directly</strong> -- a single clear link to your preferred platform (Google Business Profile is usually the highest-value target), not a menu of five review sites.</li>
            <li><strong>Never filter by rating before asking</strong> -- routing only happy customers to the public review link while quietly diverting unhappy ones is the exact practice the FTC rule targets.</li>
            <li><strong>Respond to every negative review publicly and professionally.</strong> An unanswered negative review reads worse than the review itself.</li>
            <li><strong>Track count and recency separately</strong> -- 30-day and 90-day review counts, not just lifetime total.</li>
          </ol>

          <h2>A Worked Example</h2>
          <p>
            Say a contractor completes 40 jobs a month and asks for a review on every one, with a realistic 20%
            response rate -- that&apos;s 8 new reviews a month, enough to keep the 90-day count visibly active. At
            zero systematic asking, most contractors get a handful of unprompted reviews a year. The gap is almost
            entirely a process gap, not a satisfaction gap. Illustrative figures, not measured outcomes.
          </p>

          <h2>Checklist</h2>
          <ul>
            <li>Have you received at least one new review in the last 30 days?</li>
            <li>Is there a defined trigger for asking (job completion), or does it happen sporadically?</li>
            <li>Does every negative review get a public, professional response?</li>
            <li>Are you asking every customer, or only the ones you assume are happy?</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            The response-rate figure above is illustrative, not a benchmark from a study. Actual review conversion
            varies by platform, request method, and trade. This page is not legal advice on FTC compliance --
            consult counsel for your specific review-request process.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" target="_blank" rel="noopener noreferrer">FTC, Consumer Reviews and Testimonials Rule (effective October 21, 2024)</a></li>
            <li><a href="https://support.google.com/business/answer/3038177?hl=en" target="_blank" rel="noopener noreferrer">Google Business Profile Help, guidelines for review policies</a></li>
          </ul>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12">
          <p className="text-sm text-gray-700 mb-3">
            Modern Trades CRM&apos;s review-request engine exists in code but the completed-job trigger isn&apos;t
            built yet -- see the honest <a href="https://www.moderntradescrm.com/capabilities" className="text-brand-electric underline">capabilities matrix</a> before assuming it&apos;s live.
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
