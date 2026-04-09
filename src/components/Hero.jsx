export default function Hero() {
  return (
    <section id="about" className="pt-28 pb-0 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            From Data to{' '}<br />Decisions —{' '}<br />AI that Ships.
          </h1>
          <p className="text-gray-500 text-lg xl:text-xl leading-relaxed mb-8 max-w-lg">
            5 years shipping production AI in fintech — credit scoring, agentic workflows, and LLM systems at scale.
          </p>
          <div className="flex items-center gap-4 mb-10">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[#111111] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#333] transition-colors"
            >
              View Projects
              <span className="bg-[#4DD9E0] text-black rounded-full w-7 h-7 flex items-center justify-center">→</span>
            </a>
            <a
              href="https://linkedin.com/in/clarence-c-b26aa6179"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors underline underline-offset-4"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Clarenceee"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors underline underline-offset-4"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:clarencechanjh@gmail.com"
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors underline underline-offset-4"
            >
              Email ↗
            </a>
          </div>

          {/* Current role badge */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-500">Currently @ <strong className="text-black">Japanese Digital Bank</strong> — ML Engineer</span>
          </div>
        </div>

        {/* Right — photo placeholder + floating pills */}
        <div className="relative flex justify-center">
          {/* Colored bg shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-[26rem] xl:w-96 xl:h-[30rem] rounded-3xl bg-[#4DD9E0]/20" />
          </div>

          {/* Photo placeholder */}
          <div className="relative z-10 w-72 h-96 xl:w-80 xl:h-[28rem] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-end justify-center overflow-hidden shadow-lg">
            <img src="/profile4.png" alt="Clarence Chan" className="w-full h-full object-cover" />
          </div>

          {/* Floating pill badges */}
          <div className="absolute top-8 right-4 bg-[#4DD9E0] text-black text-xs font-semibold px-4 py-2 rounded-full shadow-md z-20">
            AI Engineer
          </div>
          <div className="absolute top-1/3 -left-4 bg-[#CCFF00] text-black text-xs font-semibold px-4 py-2 rounded-full shadow-md z-20">
            Agentic AI
          </div>
          <div className="absolute bottom-16 right-0 bg-white border border-gray-200 text-black text-xs font-semibold px-4 py-2 rounded-full shadow-md z-20">
            Cloud Native
          </div>
          <div className="absolute bottom-4 left-8 bg-[#111] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md z-20">
            Data Scientist
          </div>
        </div>

      </div>
    </section>
  )
}
