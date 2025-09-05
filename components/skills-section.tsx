import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST/GraphQL APIs", level: 90 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow/PyTorch", level: 87 },
      { name: "Scikit-learn", level: 90 },
      { name: "OpenAI API", level: 93 },
      { name: "Computer Vision", level: 82 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS/GCP", level: 80 },
      { name: "CI/CD", level: 83 },
      { name: "Kubernetes", level: 75 },
    ],
  },
]

const tools = [
  "VS Code",
  "Git",
  "Figma",
  "Postman",
  "Jupyter",
  "Docker",
  "Vercel",
  "Netlify",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Prisma",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit spanning modern web technologies and cutting-edge AI frameworks.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
