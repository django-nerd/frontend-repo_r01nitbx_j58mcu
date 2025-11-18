import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

// Simple blob heat layer using canvas (placeholder for Mapbox)
function HeatCanvas({ points }){
  const ref = useMemo(()=>({canvas:null, ctx:null}),[])
  useEffect(()=>{
    const canvas = document.getElementById('heat-canvas')
    if(!canvas) return
    ref.canvas = canvas
    ref.ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = 400; draw() }
    const draw = () => {
      const ctx = ref.ctx
      ctx.clearRect(0,0,canvas.width,canvas.height)
      points.forEach(p => {
        const x = Math.random()*canvas.width
        const y = Math.random()*canvas.height
        const r = 30
        const grd = ctx.createRadialGradient(x,y,0,x,y,r)
        const color = p.score>0.2?'rgba(16,185,129,0.6)':(p.score<-0.2?'rgba(239,68,68,0.6)':'rgba(234,179,8,0.6)')
        grd.addColorStop(0, color)
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grd
        ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill()
      })
    }
    resize()
    window.addEventListener('resize', resize)
    return ()=>window.removeEventListener('resize', resize)
  },[points])
  return <canvas id="heat-canvas" className="w-full rounded-lg bg-neutral-900 border border-white/10"/>
}

export default function Dashboard(){
  const [city, setCity] = useState('San Francisco')
  const [data, setData] = useState({summary:{}, points:[]})

  const fetchData = async (c) => {
    const res = await fetch(`${BACKEND}/api/sentiment/city?name=${encodeURIComponent(c)}`)
    const json = await res.json()
    setData(json)
  }

  useEffect(()=>{ fetchData(city) },[])

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50"/>
            <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Search city" className="bg-neutral-900 border border-white/10 rounded-lg pl-9 pr-3 py-2"/>
          </div>
          <button onClick={()=>fetchData(city)} className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold">Load</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HeatCanvas points={data.points||[]} />
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/60">Average sentiment</div>
              <div className="text-3xl font-semibold">{(data.summary?.average??0).toFixed(2)}</div>
              <div className="text-sm text-white/60">{data.summary?.label}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/60">Points</div>
              <div className="text-3xl font-semibold">{data.summary?.count||0}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
