const skillGroups = [
  {
    label: 'ML / AI',
    color: '#4DD9E0',
    skills: ['LLM Fine-tuning', 'Agentic Systems', 'RAG', 'LangGraph', 'vLLM', 'Computer Vision', 'Time Series', 'Credit Scoring', 'SetFit', 'SHAP'],
  },
  {
    label: 'MLOps & Infrastructure',
    color: '#CCFF00',
    skills: ['AWS EKS', 'Kubernetes', 'Docker', 'Ray Serve', 'Kafka', 'Apache Flink', 'Airflow', 'Feast', 'MLFlow', 'GitHub Actions', 'Datadog', 'Langfuse'],
  },
  {
    label: 'Development',
    color: '#111111',
    skills: ['Python', 'FastAPI', 'Streamlit', 'Next.js', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Neo4j', 'Qdrant', 'pgvector'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black mb-16">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.label} className="p-8 rounded-2xl border border-gray-100 bg-white">
            <div
              className="inline-block text-xs font-black px-3 py-1 rounded-full mb-6"
              style={{
                backgroundColor: group.color,
                color: group.color === '#111111' ? 'white' : '#111',
              }}
            >
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full border border-gray-100 hover:border-gray-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
