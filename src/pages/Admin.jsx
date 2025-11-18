import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Admin(){
  const [city, setCity] = useState('')
  const [data, setData] = useState(null)

  const load = async () => {
    const url = `${BACKEND}/api/analytics/overview${city?`?city=${encodeURIComponent(city)}`:''}`
    const res = await fetch(url)
    const json = await res.json()
    setData(json)
  }

  useEffect(()=>{ load() },[])

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex gap-3 mb-6">
          <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Filter by city" className="bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          <button onClick={load} className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold">Refresh</button>
        </div>
        {data && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-sm text-white/60">Posts</div><div className="text-3xl font-semibold">{data.sources?.posts||0}</div></div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-sm text-white/60">Complaints</div><div className="text-3xl font-semibold">{data.sources?.complaints||0}</div></div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="text-sm text-white/60">Positive Rate</div><div className="text-3xl font-semibold">{Math.round((data.rates?.positive||0)*100)}%</div></div>
          </div>
        )}
      </div>
    </div>
  )
}
