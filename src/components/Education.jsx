const certs = [
  'ML for Credit Scoring & Risk Management',
  'MLOps Specialization',
  'Microsoft Azure AI',
  'Neo4j Certified Professional',
  'PostgreSQL Certificate',
  'Dassault Systems Mechanical Design',
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black mb-16">Education &amp; Certs</h2>
      <div className="grid md:grid-cols-2 gap-8">

        {/* Degree */}
        <div className="p-8 rounded-2xl border border-gray-100 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#4DD9E0]" />
          <div className="inline-block bg-[#CCFF00] text-black text-xs font-black px-3 py-1 rounded-full mb-4">
            Best FYP Award ✦
          </div>
          <h3 className="font-black text-xl mb-1">Bachelor of Mechatronics Engineering</h3>
          <p className="text-[#4DD9E0] font-bold text-sm mb-1">First Class Honours</p>
          <p className="text-gray-500 text-sm mb-3">Monash University Malaysia</p>
          <p className="text-gray-400 text-sm mb-4">CGPA: <strong className="text-black">3.8 / 4.0</strong></p>
          <div className="flex items-center gap-6">
            <a
              href="https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=75255033-e1db-44a1-97aa-ae9b00254c28"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#111] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#333] transition-colors"
            >
              Watch FYP Presentation ↗
            </a>
            <a
              href="https://www.monash.edu.my/pages/latest/articles/2022/engineering-students-showcase-skills-and-innovations"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors underline underline-offset-4"
            >
              Best FYP Feature ↗
            </a>
          </div>
        </div>

        {/* Certs */}
        <div className="p-8 rounded-2xl border border-gray-100 bg-white">
          <h3 className="font-black text-lg mb-6">Certifications</h3>
          <ul className="space-y-3">
            {certs.map((cert) => (
              <li key={cert} className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-[#4DD9E0] shrink-0" />
                {cert}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
