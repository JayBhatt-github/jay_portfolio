import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react"

const projects = [
  {
    title: "Vegan | Plant Based Food",
    description:
      "A Vegan and plant based foods platform serves veriety of plant based foods focusing on providing healthy food solution to health consious people",
    image: "/asian_vegan.png",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://asian-vegan.vercel.app/",
    githubUrl: "https://github.com/JayBhatt-github/asian_vegan",
    featured: true,
  },
  {
    title: "PC Builder",
    description:
      "responsive platform that lets you build PCs as per requirements and use cases. focusing on use needs and budget for building new pc",
    image: "/pc_builder.png",
    technologies: ["Python", "Bootstrap", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://pc-builder-depl.onrender.com/",
    githubUrl: "https://github.com/JayBhatt-github/PC_BUILDER",
    featured: true,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 relative particle-system">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <h2 className="text-4xl sm:text-5xl font-bold holographic-text">Revolutionary Projects</h2>
              <Zap className="h-6 w-6 text-secondary animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge applications that push the boundaries of{" "}
              <span className="text-primary font-semibold">web development</span> and{" "}
              <span className="text-secondary font-semibold">artificial intelligence</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 project-showcase">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hologram-card project-card-3d immersive-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-primary/90 hover:bg-primary text-primary-foreground glow-primary morph-3d"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-secondary/90 hover:bg-secondary text-secondary-foreground morph-3d"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 holographic-text">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description.slice(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} className="tech-badge-futuristic text-xs text-primary-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hologram-card immersive-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-semibold mb-2 text-primary">{project.title}</h4>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <Badge key={techIndex} className="tech-badge-futuristic text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" asChild className="p-1 h-6 w-6 hover:text-primary morph-3d">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild className="p-1 h-6 w-6 hover:text-secondary morph-3d">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
