const items = ['Build', 'Deploy', 'Scale', 'Infer', 'Fine-tune', 'Orchestrate', 'Monitor', 'Iterate']

export default function Marquee() {
  const repeated = [...items, ...items]
  return (
    <div className="relative w-full bg-[#111111] py-5 overflow-hidden mt-16">
      {/* lime gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#CCFF00] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#CCFF00] to-transparent z-10" />

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-white font-bold text-xl px-6 whitespace-nowrap">
            {item}
            <span className="text-[#CCFF00]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
