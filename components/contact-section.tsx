"use client"

import { ArrowUpRight } from "lucide-react"

const links = [
  { name: "GitHub", handle: "@Vattsa-11", href: "https://github.com/Vattsa-11" },
  { name: "LinkedIn", handle: "Connect", href: "https://www.linkedin.com/in/srivattsa" },
  { name: "Instagram", handle: "@v_a_t_t_s_a_11", href: "https://instagram.com/v_a_t_t_s_a_11" },
  { name: "Email", handle: "Say hello", href: "mailto:srisu0306@gmail.com" },
]

export function ContactSection() {

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      {/* Large CTA text */}
      <div className="mb-24">
        <h2 className="text-[10vw] md:text-[8vw] font-serif leading-[0.9] tracking-tight">
          Let's work
          <br />
          <span className="text-primary">together</span>
        </h2>
      </div>

      <div>
        {/* Links Only */}
        <div>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-8">Connect</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-24 gap-x-16 gap-y-0">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-border hover:border-primary transition-colors"
              >
                <div>
                  <span className="text-xl md:text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                  <span className="text-sm text-muted-foreground ml-4">{link.handle}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
