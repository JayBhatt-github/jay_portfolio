"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Zap, Code, Brain, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden particle-system">
      <div className="matrix-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="code-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {[  ][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl glow-primary" />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-lg glow-primary"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-md glow-primary"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-3 hologram-card rounded-full text-sm font-medium mb-4 text-primary-foreground bg-primary/90 border border-primary/50 glow-primary">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Available for Projects
              <Zap className="h-4 w-4 animate-pulse" />
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 text-balance">
            <span className="holographic-text">Web Dev</span>
            <span className="text-secondary animate-pulse"> + </span>
            <span className="holographic-text">AI Engineer</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Crafting intelligent digital experiences with{" "}
            <span className="text-primary font-semibold">revolutionary code</span> and{" "}
            <span className="text-secondary font-semibold">AI innovation</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg morph-3d glow-primary border border-primary/50"
            >
              <Code className="h-5 w-5 mr-2" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 text-lg hologram-card text-primary border-primary/50 hover:bg-primary/10 morph-3d"
            >
              <Brain className="h-5 w-5 mr-2" />
              Let's Connect
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 hologram-card rounded-full immersive-hover"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-300 p-3 hologram-card rounded-full immersive-hover"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 hologram-card rounded-full immersive-hover"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="animate-bounce text-primary hover:text-secondary transition-colors p-2 hologram-card rounded-full glow-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
