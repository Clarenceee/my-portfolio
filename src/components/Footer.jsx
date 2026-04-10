const navLinks = ['About', 'Experience', 'Projects', 'Skills']
const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/clarence-c-b26aa6179' },
  { label: 'GitHub', href: 'https://github.com/Clarenceee' },
  { label: 'Email', href: 'mailto:clarencechanjh@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-8 px-6 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

        <div className="col-span-2 md:col-span-1">
          <span className="font-black text-2xl">CC</span>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            ML Engineer based in<br />Kuala Lumpur, Malaysia.
          </p>
        </div>

        <div>
          <p className="font-bold text-sm mb-4">Navigation</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-gray-400 text-sm hover:text-black transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-sm mb-4">Social</p>
          <ul className="space-y-2">
            {socialLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-black transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-black text-2xl md:text-3xl leading-tight">Be Curious,<br />Build Well.</p>
          <p className="text-gray-400 text-sm mt-4">clarencechanjh@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone available upon request</p>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Clarence Chan Joon Hoe. All rights reserved.
      </div>
    </footer>
  )
}
