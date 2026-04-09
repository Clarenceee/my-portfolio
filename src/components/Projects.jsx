const projects = [
  {
    title: 'Churns — AI Creative Content Engine',
    description:
      'Turn a simple brief into ready-to-post social media content. Churns runs a full creative workflow — from ideation to polished visuals — so marketing teams can produce on-brand assets in minutes, not days.',
    tags: ['FastAPI', 'Next.js', 'TypeScript', 'OpenAI', 'Docker', 'WebSocket'],
    metrics: ['83 tests', '6-stage pipeline', 'Platform localisation'],
    github: null,
    demo: '/churns_demo.mp4',
    image: null,
    accent: '#4DD9E0',
  },
  {
    title: 'Agentic RAG System',
    description:
      'An AI chatbot that lets users ask questions over their own private data. Upload documents, and the system intelligently retrieves the right information to give accurate, context-aware answers — no data ever leaves your environment.',
    tags: ['LangGraph', 'Streamlit', 'Qdrant', 'Mem0', 'PostgreSQL', 'Docker'],
    metrics: ['5 specialised agents', 'Stateful conversations', 'HITL confirmation'],
    github: 'https://github.com/Clarenceee/agentic-rag',
    demo: '/ai_chatbot_demo.mp4',
    image: null,
    accent: '#CCFF00',
  },
  {
    title: 'ESG Carbon Inventory Engine',
    description:
      'Automates corporate carbon accounting by reading environmental reports and calculating greenhouse gas emissions across all scopes. Helps sustainability teams go from raw documents to audit-ready reports in a fraction of the time.',
    tags: ['FastAPI', 'LangGraph', 'PostgreSQL', 'OpenAI', 'JWT', 'Alembic'],
    metrics: ['ISO 14064-1 compliant', 'Multi-doc routing', 'Excel report gen'],
    github: 'https://github.com/Clarenceee/esg-workflow',
    demo: null,
    image: null,
    accent: '#4DD9E0',
  },
  {
    title: 'JPMorgan Financial RAG',
    description:
      'Ask plain-English questions about JPMorgan\'s financial reports and get instant, sourced answers. The system understands what you\'re looking for, pulls from the right documents, and delivers clear insights — ideal for analysts and investors.',
    tags: ['LangGraph', 'pgvector', 'PostgreSQL', 'OpenAI', 'PyMuPDF', 'Qwen'],
    metrics: ['Intent routing', '3 parallel sub-queries', 'HNSW indexing'],
    github: 'https://github.com/Clarenceee/uw-agentic-finance',
    demo: null,
    image: null,
    accent: '#CCFF00',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Project media / placeholder */}
      {project.demo ? (
        <div className="bg-black">
          <video
            src={project.demo}
            controls
            className="w-full h-64 object-cover"
            preload="metadata"
          />
        </div>
      ) : project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
      ) : (
        <div
          className="h-64 flex items-center justify-center"
          style={{ backgroundColor: project.accent + '18' }}
        >
          <svg className="w-10 h-10 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-black text-lg mb-2 leading-tight">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map((m) => (
            <span key={m} className="text-xs font-semibold bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
              {m}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: project.accent + '22', color: '#111' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#111] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#333] transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs text-gray-400 italic">Private project</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-black">Latest Projects</h2>
        <a
          href="https://github.com/Clarenceee"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
          See All ↗
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
