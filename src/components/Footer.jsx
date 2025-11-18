export default function Footer(){
  return (
    <footer className="bg-neutral-950 text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 gap-6">
        <div>
          <div className="text-white font-semibold mb-2">CivicPulse</div>
          <p className="text-sm">Mapping public sentiment in real time.</p>
        </div>
        <div className="sm:text-right text-sm space-x-4">
          <a href="mailto:hello@civicpulse.ai" className="hover:text-white">hello@civicpulse.ai</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
