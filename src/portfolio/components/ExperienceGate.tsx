import React from 'react'

type Props = {
  unlocked: boolean
  onUnlock: () => void
}

export function ExperienceGate({ unlocked, onUnlock }: Props): React.ReactElement {
  const [input, setInput] = React.useState('')
  const [lines, setLines] = React.useState<string[]>([
    'auth@experience:~$ whoami',
    'guest',
    'auth@experience:~$ echo "Unlock MJ\'s experience?"',
    'Unlock MJ\'s experience?',
    'auth@experience:~$ enter key to continue...'
  ])

  const secret = 'always evolving'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim().toLowerCase() === secret) {
      setLines((prev) => [...prev, `> ${input}`, 'access granted ✅'])
      setInput('')
      setTimeout(onUnlock, 500)
    } else {
      setLines((prev) => [...prev, `> ${input}`, 'access denied ❌'])
      setInput('')
    }
  }

  React.useEffect(() => {
    if (!unlocked) return
    setLines((prev) => [...prev, 'loading experience…'])
  }, [unlocked])

  return (
    <div id="experience" className="rounded-2xl p-6 md:p-8 md:max-w-3xl w-full mx-auto bg-white border border-black/10 shadow-xl text-ink">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm ink-subtle">Interactive Unlock</div>
        <div className="flex gap-1">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500/70" />
          <span className="inline-block h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/70" />
        </div>
      </div>

      <div className="mt-4 font-mono text-ink/90 text-[13px] leading-relaxed">
        {lines.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
        {!unlocked && (
          <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
            <span className="opacity-60">$</span>
            <input
              className="flex-1 bg-transparent outline-none placeholder:ink-subtle"
              placeholder="type the key phrase… (hint: your Mark1 motto)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Experience unlock input"
            />
            <button className="btn" type="submit">Enter</button>
          </form>
        )}
        {unlocked && <div className="mt-3 opacity-70">Unlocked. Scroll for the journey ↓</div>}
      </div>
    </div>
  )
}


