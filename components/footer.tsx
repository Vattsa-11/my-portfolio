import Link from "next/link"
import { GitHubActivity } from "./github-activity"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <Link href="/" className="text-sm font-mono uppercase tracking-widest text-foreground">
            Srivattsa R
          </Link>
          <p className="text-sm text-muted-foreground mt-2">Developer</p>
        </div>
        
        <div>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-4">
            Links
          </span>
          <div className="space-y-2">
            <Link href="/" className="block text-sm text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/blog" className="block text-sm text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link href="/#work" className="block text-sm text-foreground hover:text-primary transition-colors">Work</Link>
            <Link href="/#contact" className="block text-sm text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        
        <div>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-4">
            Recent Activity
          </span>
          <GitHubActivity username="Vattsa-11" limit={4} />
        </div>
      </div>
      
      <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">© {new Date().getFullYear()} Srivattsa R</p>
        <div className="flex gap-6">
          <a href="https://github.com/Vattsa-11" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/srivattsa" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
