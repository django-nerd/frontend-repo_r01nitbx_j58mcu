import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Explorer(){
  const [city, setCity] = useState('San Francisco')
  const [clusters, setClusters] = useState([])

  const load = async () => {
    const res = await fetch(`${BACKEND}/api/sentiment/trending?city=${encodeURIComponent(city)}`)
    const json = await res.json()
    setClusters(json.clusters||[])
  }
  useEffect(()=>{ load() },[])

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-3 mb-6">
          <input value={city} onChange={e=>setCity(e.target.value)} className="bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          <button onClick={load} className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold">Refresh</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((c,i)=> (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="text-xs text-white/60 mb-2">Keywords: {c.keywords?.join(', ')}</div>
              <div className="text-sm text-white/70">Volume: {c.volume}</div>
              <div className="text-sm text-white/70">Sentiment: +{c.sentiment_breakdown?.positive} / {c.sentiment_breakdown?.neutral} / -{c.sentiment_breakdown?.negative}</div>
              {c.sample_posts?.length>0 && (
                <div className="mt-3 text-xs text-white/70 space-y-1">
                  {c.sample_posts.map((p,idx)=>(<div key={idx} className="bg-black/30 rounded px-2 py-1">{p}</div>))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
