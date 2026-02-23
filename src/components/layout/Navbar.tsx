const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

function BrandLockup() {
  return (
    <a href="#home" className="inline-flex flex-col leading-none text-white">
      <span className="font-serif text-[26px] font-semibold italic tracking-tight">
        {"<"}Kenny Zhu{" />"}
      </span>
      <span className="mt-2 text-[10px] font-medium tracking-[0.35em] text-white/75 uppercase">
        Computer Science
      </span>
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6">
        <BrandLockup />

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] font-medium text-white transition hover:text-cyan-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navegación móvil" className="md:hidden">
          <ul className="flex items-center gap-4">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-white/90 transition hover:text-cyan-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
