export default function HowItWorks(){
  const items = [
    {title:'Data Collection',desc:'We ingest from Twitter/X, Reddit, news comments, public forums and civic complaint portals using scheduled workers.'},
    {title:'NLP Processing',desc:'Transformer-based sentiment classification, entity extraction, and topic modeling to group issues.'},
    {title:'Sentiment Cartography',desc:'Geo-tagged posts are projected as heatmaps and bubbles to visualize real-time public mood.'},
    {title:'Use Cases',desc:'Citizens, journalists, and civic officials explore what matters now with transparency.'}
  ]
  return (
    <section className="bg-neutral-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">How it works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i)=> (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
