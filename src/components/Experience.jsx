const jobs = [
  {
    role: 'Machine Learning Engineer',
    company: 'Japanese Digital Bank',
    period: 'Jul 2024 – Present',
    highlights: [
      'Built and launched AI-powered credit scoring and anti-money laundering services that process loan applications and flag suspicious activity in real time with 99% uptime',
      'Designed real-time data pipelines handling thousands of transactions per second to power instant lending decisions',
      'Developed name screening models that catch 100% of sanctioned entities, helping the bank stay fully compliant with regulations',
      'Created an AI agent platform that automates repetitive internal workflows, freeing up team capacity for higher-value work',
      'Set up end-to-end monitoring so the team can track model performance and catch issues before they impact customers',
    ],
    accent: '#4DD9E0',
  },
  {
    role: 'Data Scientist',
    company: 'Singapore MNC Advisory Firm',
    period: 'Oct 2022 – Jul 2024',
    highlights: [
      'Streamlined how AI models go from development to production, cutting deployment time and reducing manual errors',
      'Built a computer vision system that estimates wood volume from images, replacing slow manual measurement processes',
      'Optimised supply chain operations using graph-based analytics, reducing lead times and costs by ~20%',
      'Developed commodity price forecasting models that helped the business plan procurement and manage risk more effectively',
    ],
    accent: '#CCFF00',
  },
  {
    role: 'AI Engineer Intern',
    company: 'Malaysian AI Startup',
    period: 'Dec 2021 – Mar 2022',
    highlights: [
      'Built computer vision solutions that automatically detect and measure objects, replacing time-consuming manual inspections',
      'Established production-ready AI pipelines so models could be reliably updated and scaled as the business grew',
    ],
    accent: '#E5E5E5',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black mb-16">Experience</h2>
      <div className="space-y-8">
        {jobs.map((job) => (
          <div key={job.company} className="grid md:grid-cols-[280px_1fr] gap-6 p-8 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors bg-white">
            <div>
              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: job.accent, color: job.accent === '#E5E5E5' ? '#555' : '#111' }}
              >
                {job.period}
              </div>
              <h3 className="font-black text-lg leading-tight mb-1">{job.role}</h3>
              <p className="text-gray-500 font-medium text-sm">{job.company}</p>
            </div>
            <ul className="space-y-2">
              {job.highlights.map((h, i) => (
                <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                  <span className="text-[#4DD9E0] mt-1 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
