import { useEffect, useState } from 'react'

const Resume = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/resume.json')
      .then(res => res.json())
      .then(setData)
      .catch(() => {})
  }, [])

  const printView = () => window.print()

  const downloadText = () => {
    if (!data) return
    const lines = []
    lines.push(data.name)
    lines.push(data.title)
    lines.push(`Location: ${data.location || ''}`)
    if (data.contact?.email) lines.push(`Email: ${data.contact.email}`)
    if (data.contact?.phone) lines.push(`Phone: ${data.contact.phone}`)
    lines.push('')
    if (data.sections) {
      data.sections.forEach(sec => {
        lines.push(sec.heading)
        lines.push('-'.repeat(sec.heading.length))
        sec.items = sec.items || []
        sec.items.forEach(it => {
          if (typeof it === 'string') lines.push(`- ${it}`)
          else if (typeof it === 'object') {
            if (it.title) lines.push(`- ${it.title}`)
            if (Array.isArray(it.points)) it.points.forEach(p => lines.push(`  - ${p}`))
          }
        })
        lines.push('')
      })
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Kumar_V_S_Resume.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!data) {
    return (
      <section id="resume" className="py-8 bg-transparent">
        <div className="container mx-auto px-4">Loading resume...</div>
      </section>
    )
  }

  return (
    <section id="resume" className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Resume</h2>
          <div className="flex gap-2">
            <button onClick={printView} className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white">Print</button>
            <button onClick={downloadText} className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white">Download Text</button>
          </div>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/20 text-sm" style={{ whiteSpace: 'pre-wrap' }}>
          {data.name && (
            <div className="mb-2 font-semibold">{data.name} — {data.title}</div>
          )}
          <div className="mb-2">{data.location}</div>
          <div className="mb-2">Email: {data.contact?.email} | Phone: {data.contact?.phone}</div>
          <hr className="my-2" />
          {data.sections && data.sections.map((sec, idx) => (
            <div key={idx} className="my-2">
              <div className="font-semibold">{sec.heading}</div>
              <ul className="ml-4 mt-1">{sec.items.map((it, i) => (
                <li key={i}>{typeof it === 'string' ? it : it.title || ''}</li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume
