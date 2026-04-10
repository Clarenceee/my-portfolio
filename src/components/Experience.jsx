const jobs = [
  {
    role: 'Machine Learning Engineer',
    company: 'Japanese Digital Bank',
    period: 'Jul 2024 – Present',
    accent: '#4DD9E0',
    projects: [
      {
        name: 'Credit Scoring Service',
        bullets: [
          'Engineered and deployed a low-latency credit scoring ML service with FastAPI and Ray Serve on AWS EKS, achieving p95 latency of 900ms with 99% uptime',
          'Integrated with online feature stores and implemented feature versioning with Feast to reduce feature access latency',
        ],
      },
      {
        name: 'AML Detection System',
        bullets: [
          'Built a real-time AML detection service with FastAPI and Ray Serve on AWS EKS, achieving p95 latency of 900ms with 99% uptime',
          'Designed Kafka and Apache Flink pipelines processing thousands of transactions per second with stateful event streaming and real-time classification',
          'Fine-tuned embedding models for name screening, achieving 100% recall on sanctioned entities',
          'Conducted A/B testing for rollouts, validating improvements in detection accuracy before full-scale deployment',
        ],
      },
      {
        name: 'Agentic Insights Generation Platform',
        bullets: [
          'Developed an agentic insights generation workflow orchestrated with Airflow, combining locally deployed LLMs for text generation, fact-checking, and guardrails evaluation',
          'Deployed open-source LLMs with vLLM for high-throughput inference on AWS EKS',
          'Trained and fine-tuned SetFit models for text classification and guardrails, achieving a 95% F1-score',
          'Built a graph-based platform for modular and fault-tolerant agent workflows with LangGraph',
        ],
      },
      {
        name: 'MLOps & Observability Platform',
        bullets: [
          'Applied MLFlow for experiment tracking, artifact management, and model versioning to ensure reproducibility',
          'Implemented drift detectors and SHAP-based explainability, delivering interpretable risk scores for stakeholders and regulators',
          'Integrated Langfuse observability into LLM pipelines and Datadog monitoring for general deployments and pipeline metrics',
          'Established unit and end-to-end tests across all CI/CD pipelines via GitHub Actions to ensure regression safety',
          'Developed Datadog and Superset dashboards to monitor functional and operational performance metrics',
        ],
      },
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Singapore MNC Advisory Firm',
    period: 'Oct 2022 – Jul 2024',
    accent: '#CCFF00',
    projects: [
      {
        name: 'Wood Volume Estimation',
        bullets: [
          'Designed a computer vision algorithm around YOLOv5 using MLOps best practices',
          'Optimised model inference time by 6x and integrated it into a mobile app for precise wood log volume estimation',
          'Achieved a consistent 90% accuracy with a drift detection algorithm for input distribution shifts and model performance fluctuations',
        ],
      },
      {
        name: 'Supply Chain Logistic Optimisation',
        bullets: [
          'Revamped supply chain operations through Neo4j database integration and ETL processes',
          'Automated the vessel scheduling algorithm, reducing operation lead time and cost by ~20%',
        ],
      },
      {
        name: 'Pulp Price Forecasting (POC)',
        bullets: [
          'Performed feature selection and dimensionality reduction across 50+ feature columns',
          'Conducted EDA and built visualisations to support strategic planning',
          'Developed time-series forecasting models (LSTM, Seq2Seq) to predict product price trends, achieving 83% accuracy',
        ],
      },
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Malaysian AI Startup',
    period: 'Dec 2021 – Mar 2022',
    accent: '#E5E5E5',
    projects: [
      {
        name: 'ID Card & Passport MRZ OCR Pipeline',
        bullets: [
          'Improved data augmentation to accommodate identity documents from 100+ countries',
          'Implemented a CNN-based denoising autoencoder from scratch, increasing image readability by at least 23%',
          'Retrained and improved Tesseract OCR accuracy, reducing the average Levenshtein distance by over 10%',
        ],
      },
    ],
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
            <div className="space-y-6">
              {job.projects.map((project) => (
                <div key={project.name}>
                  <h4 className="font-bold text-sm text-[#111] mb-2">{project.name}</h4>
                  <ul className="space-y-2">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                        <span className="text-[#4DD9E0] mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
