import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <section id="api" className="bg-neutral-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Designed for citizens, media, and officials</h2>
            <p className="text-white/70">Explore live mood heatmaps, trending issues, and verified complaints to understand what your city cares about now.</p>
          </div>
          <div className="space-y-3">
            <a href="/dashboard" className="block text-center px-4 py-3 rounded-lg bg-emerald-500 text-black font-semibold">Explore Dashboard</a>
            <a href="/explorer" className="block text-center px-4 py-3 rounded-lg border border-white/20">Trending Explorer</a>
            <a href="/complaints" className="block text-center px-4 py-3 rounded-lg border border-white/20">Submit Complaint</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default App
