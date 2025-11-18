import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-emerald-400/90 text-xs mb-4">AI-powered civic sentiment cartography</p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">See What Your City Feels — In Real Time.</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">CivicPulse aggregates conversations from social platforms, forums, and complaint portals, then maps sentiment into live city heatmaps.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/dashboard" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              Explore Dashboard <ArrowRight className="w-4 h-4 ml-2"/>
            </Link>
            <a href="#api" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10">API Access</a>
          </div>
        </div>
      </div>
    </section>
  )
}
