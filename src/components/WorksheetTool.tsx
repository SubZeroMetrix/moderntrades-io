'use client'

import { useState } from 'react'
import { PrintButton } from './PrintButton'

export interface WorksheetField {
  id: string
  label: string
  suffix?: string
  defaultHint?: string
}

export interface WorksheetResult {
  headline: string
  detail: string
  breakdown: { label: string; value: string }[]
}

// Declarative formula id instead of a function prop -- functions can't cross
// the server/client component boundary in the App Router.
export type WorksheetFormula = 'missed-call-exposure' | 'stalled-estimate-value' | 'dormant-customer-value' | 'lead-response-cost'

const FORMULAS: Record<WorksheetFormula, (v: Record<string, number>) => WorksheetResult> = {
  'missed-call-exposure': (v) => {
    const converted = v.missedCalls * (v.conversionRate / 100)
    const exposure = converted * v.avgJobValue
    return {
      headline: `$${exposure.toLocaleString(undefined, { maximumFractionDigits: 0 })} rough monthly exposure`,
      detail: 'This is a floor estimate based on your own numbers, not a guarantee -- the actual conversion rate for your specific missed callers is unknown until measured.',
      breakdown: [
        { label: 'Missed calls', value: v.missedCalls.toLocaleString() },
        { label: `x conservative conversion (${v.conversionRate}%)`, value: converted.toFixed(1) },
        { label: 'x average job value', value: `$${v.avgJobValue.toLocaleString()}` },
        { label: 'Rough monthly exposure', value: `$${exposure.toLocaleString(undefined, { maximumFractionDigits: 0 })}` },
      ],
    }
  },
  'stalled-estimate-value': (v) => {
    const recovered = v.openEstimates * (v.recoveryRate / 100)
    const value = recovered * v.avgJobValue
    return {
      headline: `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })} in estimates still open, not lost`,
      detail: 'This reflects estimates that likely just need one more follow-up -- not a guarantee of recovery. The real number depends on why each one stalled.',
      breakdown: [
        { label: 'Open estimates with no follow-up date', value: v.openEstimates.toLocaleString() },
        { label: `x conservative recovery rate (${v.recoveryRate}%)`, value: recovered.toFixed(1) },
        { label: 'x average job value', value: `$${v.avgJobValue.toLocaleString()}` },
        { label: 'Estimated recoverable value', value: `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}` },
      ],
    }
  },
  'lead-response-cost': (v) => {
    const slowLeads = v.leadsPerMonth * (v.slowResponsePct / 100)
    const lostFromSlow = slowLeads * (v.lossRateOnSlow / 100)
    const value = lostFromSlow * v.avgJobValue
    return {
      headline: `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })} rough monthly cost of slow response`,
      detail: 'Based on research showing response speed strongly predicts win rate (see the Speed-to-Lead guide). This is a floor estimate using your own numbers, not a guarantee.',
      breakdown: [
        { label: 'Leads per month', value: v.leadsPerMonth.toLocaleString() },
        { label: `x % responded to slowly (over 1 hour)`, value: `${slowLeads.toFixed(1)} (${v.slowResponsePct}%)` },
        { label: `x estimated loss rate on slow-responded leads (${v.lossRateOnSlow}%)`, value: lostFromSlow.toFixed(1) },
        { label: 'x average job value', value: `$${v.avgJobValue.toLocaleString()}` },
        { label: 'Rough monthly cost', value: `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}` },
      ],
    }
  },
  'dormant-customer-value': (v) => {
    const responders = v.dormantCustomers * (v.responseRate / 100)
    const value = responders * v.avgJobValue
    return {
      headline: `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })} in available revenue from your existing customer list`,
      detail: 'This reflects revenue that costs a phone call, not new marketing spend -- but it depends on having working contact info and a real reason to reach out.',
      breakdown: [
        { label: 'Dormant customers (12+ months)', value: v.dormantCustomers.toLocaleString() },
        { label: `x conservative response rate (${v.responseRate}%)`, value: responders.toFixed(1) },
        { label: 'x average job value', value: `$${v.avgJobValue.toLocaleString()}` },
        { label: 'Estimated available revenue', value: `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}` },
      ],
    }
  },
}

export function WorksheetTool({
  fields,
  formula,
  methodNote,
}: {
  fields: WorksheetField[]
  formula: WorksheetFormula
  methodNote: string
}) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const numericValues: Record<string, number> = {}
  for (const f of fields) numericValues[f.id] = parseFloat(values[f.id] || '0') || 0

  const allFilled = fields.every((f) => values[f.id] && !isNaN(parseFloat(values[f.id])))
  const result = submitted ? FORMULAS[formula](numericValues) : null

  if (result) {
    return (
      <div className="space-y-6">
        <div className="card-panel">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Result</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{result.headline}</h2>
          <p className="text-sm text-gray-500">{result.detail}</p>
        </div>

        <div className="card-panel">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">How this was calculated</p>
          <table className="w-full text-sm border-collapse">
            <tbody>
              {result.breakdown.map((row) => (
                <tr key={row.label} className="border-b border-gray-200">
                  <td className="py-2 pr-4 text-gray-500">{row.label}</td>
                  <td className="py-2 font-mono text-gray-900">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-4">{methodNote} All numbers you entered stay in your browser -- nothing is sent anywhere.</p>
        </div>

        <div className="flex flex-wrap gap-3 no-print">
          <PrintButton />
          <button type="button" onClick={() => { setSubmitted(false) }} className="btn-outline-visible">Recalculate</button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="card-panel space-y-5">
        {fields.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-sm font-medium text-gray-800 mb-1.5">{f.label}</label>
            <div className="flex items-center gap-2">
              <input
                id={f.id}
                type="number"
                inputMode="decimal"
                min={0}
                value={values[f.id] || ''}
                onChange={(e) => setValues((prev) => ({ ...prev, [f.id]: e.target.value }))}
                className="w-full max-w-xs rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric"
                aria-describedby={f.defaultHint ? `${f.id}-hint` : undefined}
              />
              {f.suffix && <span className="text-sm text-gray-500">{f.suffix}</span>}
            </div>
            {f.defaultHint && <p id={`${f.id}-hint`} className="text-xs text-gray-500 mt-1">{f.defaultHint}</p>}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setSubmitted(true)}
        disabled={!allFilled}
        className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {allFilled ? 'Calculate' : 'Fill in every field to continue'}
      </button>
    </div>
  )
}
