import { Link, NavLink } from 'react-router-dom'
import { Menu, Map, BarChart3, Megaphone, Shield } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_20px_#34d399]"></span>
          CivicPulse
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/dashboard" className={({isActive})=>`flex items-center gap-2 text-white/80 hover:text-white transition ${isActive?'text-white':''}`}><Map className="w-4 h-4"/>Dashboard</NavLink>
          <NavLink to="/explorer" className={({isActive})=>`flex items-center gap-2 text-white/80 hover:text-white transition ${isActive?'text-white':''}`}><BarChart3 className="w-4 h-4"/>Trending</NavLink>
          <NavLink to="/complaints" className={({isActive})=>`flex items-center gap-2 text-white/80 hover:text-white transition ${isActive?'text-white':''}`}><Megaphone className="w-4 h-4"/>Report</NavLink>
          <NavLink to="/admin" className={({isActive})=>`flex items-center gap-2 text-white/80 hover:text-white transition ${isActive?'text-white':''}`}><Shield className="w-4 h-4"/>Admin</NavLink>
        </nav>
        <button className="md:hidden text-white/80"><Menu/></button>
      </div>
    </header>
  )
}
