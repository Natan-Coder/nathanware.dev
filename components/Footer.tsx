const links = [
  { label: "Email", href: "mailto:29nate1@gmail.com"},
  { label: "Github", href: "https://github.com/Natan-Coder"},
  { label: "LinkedIn", href: "https://linkedin.com/in/nathan-ware-34ab96a6"},
  { label: "Resume", href: "/resume.pdf"}
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-16 py-8 mt-auto">
      <div className="flex flex-wrap gap-6">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a key={link.label} href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="font-mono text-sm text-foreground-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <p className="font-mono text-xs text-foreground-muted/60 mt-6">
        © {new Date().getFullYear()} Nathan Ware
      </p>
    </footer>
  );
}