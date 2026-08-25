'use client'

import { useState } from 'react'
import { PrintButton } from './PrintButton'

export interface ChecklistItem {
  id: string
  label: string
  action: string
}

type Answer = 'yes' | 'no' | 'unsure'

export function ChecklistTool({
  items,
  methodNote,
}: {
  items: ChecklistItem[]
  methodNote: string
}) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = items.every((i) => answers[i.id])
  const noItems = items.filter((i) => answers[i.id] === 'no')
  const unsureItems = items.filter((i) => answers[i.id] === 'unsure')
  const yesCount = items.filter((i) => answers[i.id] === 'yes').length

  if (submitted) {
    const tier =
      noItems.length === 0 ? 'No gaps found in what you answered' :
      noItems.length <= Math.ceil(items.length * 0.3) ? 'A few specific gaps' :
      'Several gaps worth addressing before moving forward'

    return (
      <div className="space-y-6">
        <div className="card-panel">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-electric mb-2">Result</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{tier}</h2>
          <p className="text-sm text-gray-500">
            {yesCount} of {items.length} items answered yes. This result is deterministic, not a score --
            it simply reflects which specific items you answered no or unsure to. {methodNote}
          </p>
        </div>

        {noItems.length > 0 && (
          <div className="card-panel">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Gaps and next actions</p>
            <ul className="space-y-3">
              {noItems.map((i) => (
                <li key={i.id} className="text-sm">
                  <p className="text-gray-800 font-medium">{i.label}</p>
                  <p className="text-gray-500">&rarr; {i.action}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {unsureItems.length > 0 && (
          <div className="card-panel border-amber-300 bg-amber-50">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">Unknown -- worth checking</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800">
              {unsureItems.map((i) => <li key={i.id}>{i.label}</li>)}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-3 no-print">
          <PrintButton />
          <button type="button" onClick={() => { setSubmitted(false); setAnswers({}) }} className="btn-outline-visible">Start Over</button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <fieldset>
        <legend className="sr-only">Checklist questions</legend>
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="card-panel">
              <p className="text-gray-800 font-medium mb-4">{item.label}</p>
              <div className="flex gap-3" role="group" aria-label={item.label}>
                {(['yes', 'no', 'unsure'] as Answer[]).map((val) => (
                  <button
                    key={val}
                    type="button"
                    aria-pressed={answers[item.id] === val}
                    onClick={() => setAnswers((prev) => ({ ...prev, [item.id]: val }))}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      answers[item.id] === val
                        ? 'bg-brand-electric text-white border-brand-electric'
                        : 'border-gray-300 text-gray-600 hover:border-brand-electric hover:text-brand-electric'
                    }`}
                  >
                    {val === 'yes' ? 'Yes' : val === 'no' ? 'No' : 'Not sure'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </fieldset>
      <button
        type="button"
        onClick={() => setSubmitted(true)}
        disabled={!allAnswered}
        className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {allAnswered ? 'See my result' : `Answer all ${items.length} questions to continue`}
      </button>
    </div>
  )
}
