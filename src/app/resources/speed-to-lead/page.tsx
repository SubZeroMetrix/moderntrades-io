import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Speed-to-Lead for Contractors',
  description: 'Why response time predicts who wins the job more reliably than price, what the research actually says, and how to measure your own response time honestly.',
  path: '/resources/speed-to-lead',
})

export default function SpeedToLeadPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Resources', url: '/resources' }, { name: 'Speed-to-Lead', url: '/resources/speed-to-lead' }])
  const article = articleSchema({ headline: 'Speed-to-Lead for Contractors', description: 'How response time affects win rate, and how to measure yours.', path: '/resources/speed-to-lead', dateModified: '2026-08-25' })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="Resources" title="Speed-to-Lead for Contractors" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Resources', href: '/resources' }, { name: 'Speed-to-Lead', href: '/resources/speed-to-lead' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="card-panel bg-surface-light-alt mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Direct answer</p>
          <p className="text-gray-800">
            In most residential trades, the business that responds first wins a disproportionate share of jobs --
            not because it&apos;s better, but because most buyers stop shopping once someone competent answers.
            Speed-to-lead is the time between an inquiry arriving and a real human response. It is measurable,
            and most contractors have never actually measured theirs.
          </p>
        </div>

        <div className="prose-content">
          <h2>What the Research Actually Says</h2>
          <p>
            The foundational study here is Harvard Business Review&apos;s 2011 analysis by Oldroyd, McElheran, and
            Elkington, covering 2,241 companies. It found firms responding within an hour were roughly seven times
            more likely to have a meaningful qualifying conversation than those waiting longer, with contact odds
            dropping sharply after the first 30 minutes.
          </p>
          <p>
            Two honest caveats: this study is from 2011, and it covered a mix of B2B industries rather than
            residential contractors specifically. Treat it as strong directional evidence that speed matters --
            not as a contractor-specific benchmark. We are not aware of an equivalently rigorous, current,
            contractor-specific public dataset, and we are not going to invent one.
          </p>

          <h2>How to Measure Yours (The Only Number That Matters)</h2>
          <ol>
            <li>Pick your next 20 inbound inquiries -- calls, form fills, texts, whatever channels you use.</li>
            <li>For each one, record two timestamps: when it arrived, and when a human from your business actually responded. Voicemail going out does not count. An auto-reply does not count.</li>
            <li>Calculate the median, not the average -- one terrible outlier skews an average and hides your typical experience.</li>
            <li>Separately note how many got <em>no</em> response at all. That number is usually the uncomfortable one.</li>
          </ol>

          <h2>A Worked Example</h2>
          <table className="w-full text-sm border-collapse my-4">
            <tbody>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">Inquiries measured</td><td className="py-2 font-mono">20</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">Responded within 1 hour</td><td className="py-2 font-mono">7</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">Responded same day but over 1 hour</td><td className="py-2 font-mono">9</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">Responded next day or later</td><td className="py-2 font-mono">3</td></tr>
              <tr className="border-b border-gray-200"><td className="py-2 pr-4 text-gray-500">Never responded</td><td className="py-2 font-mono">1</td></tr>
              <tr><td className="py-2 pr-4 text-gray-900 font-semibold">Within-1-hour rate</td><td className="py-2 font-mono font-semibold">35%</td></tr>
            </tbody>
          </table>
          <p>
            A business with a 35% within-the-hour rate isn&apos;t failing -- it&apos;s normal. But it now has a real
            baseline to improve against, instead of a feeling.
          </p>

          <h2>What Actually Moves the Number</h2>
          <ul>
            <li><strong>Decide who owns first response</strong> -- a specific person or role, not &quot;whoever&apos;s free.&quot;</li>
            <li><strong>Separate acknowledgement from qualification.</strong> A 90-second &quot;got it, I&apos;ll call you within the hour with a real answer&quot; holds the lead. Waiting until you can give a full answer loses it.</li>
            <li><strong>Fix the after-hours path first if that&apos;s where the volume is.</strong> Measure before assuming.</li>
            <li><strong>Track it weekly.</strong> Response time regresses the moment nobody looks at it.</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            Speed-to-lead is necessary but not sufficient -- answering fast with a poor-quality conversation does
            not win work. The example numbers above are illustrative of the method, not measured benchmarks. Your
            own baseline is the only figure worth acting on.
          </p>

          <h2>Sources</h2>
          <ul className="text-sm">
            <li><a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Oldroyd, McElheran &amp; Elkington, &quot;The Short Life of Online Sales Leads,&quot; Harvard Business Review, March 2011</a></li>
          </ul>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 mt-12">
          <p className="text-sm text-gray-700 mb-3">
            <strong>Measure it first:</strong> the free{' '}
            <Link href="/tools/missed-call-response-map" className="text-brand-electric underline">Missed-Call Response Map</Link>{' '}
            walks through what happens to unanswered inquiries in your business -- immediate result, no email required.
          </p>
          <p className="text-xs text-gray-500">
            Disclosure: Modern Trades CRM and The Modern Trades Mentor are affiliated businesses operated by
            SubZeroMetrix LLC, which also publishes Modern Trades. Any recommendation of them here is not independent.
          </p>
        </div>
        <div className="mt-6"><Link href="/resources" className="text-brand-electric underline">&larr; All resources</Link></div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
