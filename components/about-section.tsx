"use client"

const stats = [
  { value: "15", label: "Repositories" },
  { value: "212", label: "Contributions" },
  { value: "3+", label: "Years" },
]

const expertise = [
  "Web Design",
  "Framer",
  "Distributed System",
  "Web Dev",
  "App dev",
  "WebAssembly",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Left column - Title */}
        <div className="lg:col-span-4">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">About</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 leading-tight">
            From chaos 
            <br />
             to 
            <br />
            <span className="text-primary">clean UI/UX</span>
          </h2>
        </div>

        {/* Right column - Content */}
        <div className="lg:col-span-8 lg:pl-12">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I'm Srivattsa, a 2nd year Computer Science student at SRM KTR. My work sits at creating clean ui and distributed systems.
            </p>
            <p>
              I believe in learning by rebuilding. Most of my projects are explorations and inspiration.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="block text-4xl md:text-5xl font-serif text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Expertise tags */}
          <div className="mt-16">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-6">
              Focus Areas
            </span>
            <div className="flex flex-wrap gap-3">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
