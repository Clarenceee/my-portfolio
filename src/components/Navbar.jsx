import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-black text-xl tracking-tight">Clarence</span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-black transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:clarencechanjh@gmail.com"
            className="hidden md:flex items-center gap-2 bg-[#111111] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors"
          >
            Contact
            <span className="bg-[#4DD9E0] text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
          </a>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#111] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#111] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#111] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm px-6 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:clarencechanjh@gmail.com"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold text-black"
          >
            Contact →
          </a>
        </div>
      )}
    </nav>
  )
}
