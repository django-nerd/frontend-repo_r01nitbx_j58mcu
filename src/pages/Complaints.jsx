import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Complaints(){
  const [form, setForm] = useState({description:'', city:'', category:'', lat:'', lon:'', image_url:'', submitted_by:''})
  const [result, setResult] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const payload = { ...form, lat: form.lat?parseFloat(form.lat):undefined, lon: form.lon?parseFloat(form.lon):undefined }
    const res = await fetch(`${BACKEND}/api/complaints/new`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    const json = await res.json()
    setResult(json)
  }

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-4">Submit a complaint</h1>
        <form onSubmit={submit} className="space-y-3">
          <input placeholder="City" value={form.city} onChange={e=>setForm({...form, city:e.target.value})} className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          <textarea placeholder="Describe the issue" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Latitude" value={form.lat} onChange={e=>setForm({...form, lat:e.target.value})} className="bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
            <input placeholder="Longitude" value={form.lon} onChange={e=>setForm({...form, lon:e.target.value})} className="bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          </div>
          <input placeholder="Image URL (optional)" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})} className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          <input placeholder="Email (optional)" value={form.submitted_by} onChange={e=>setForm({...form, submitted_by:e.target.value})} className="w-full bg-neutral-900 border border-white/10 rounded-lg px-3 py-2"/>
          <button className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold">Submit</button>
        </form>
        {result && (
          <div className="mt-4 rounded border border-white/10 bg-white/5 p-3 text-sm">
            <div>Saved: {String(result.saved)}</div>
            <div>Sentiment: {result.sentiment?.label} ({result.sentiment?.score?.toFixed(2)})</div>
            <div>ID: {result.id}</div>
          </div>
        )}
      </div>
    </div>
  )
}
