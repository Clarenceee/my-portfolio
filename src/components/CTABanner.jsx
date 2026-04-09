export default function CTABanner() {
  return (
    <section className="mx-4 md:mx-8 my-8 rounded-3xl bg-[#1F1F1F] px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      {/* decorative shapes */}
      <div className="absolute top-4 right-24 w-24 h-24 rounded-2xl bg-white/5 rotate-12" />
      <div className="absolute bottom-4 right-8 w-16 h-16 rounded-2xl bg-white/5 -rotate-6" />

      <h2 className="text-3xl md:text-5xl font-black text-white max-w-xl leading-tight">
        Let's build something intelligent together.
      </h2>

      <a
        href="mailto:clarencechanjh@gmail.com"
        className="flex items-center gap-3 bg-[#4DD9E0] text-black font-bold px-8 py-4 rounded-full whitespace-nowrap hover:bg-[#3bc8cf] transition-colors shrink-0"
      >
        Hire Me!
        <span className="bg-black text-[#4DD9E0] rounded-full w-8 h-8 flex items-center justify-center">→</span>
      </a>
    </section>
  )
}
