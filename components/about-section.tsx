import { Card } from "@/components/ui/card"
import { Code, Brain, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Passionate about creating innovative solutions at the intersection of web development and artificial
              intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a strong foundation in modern web technologies and a deep fascination with AI, I specialize in
                building intelligent applications that solve real-world problems. My expertise spans from crafting
                responsive user interfaces to implementing machine learning models in production environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to transform businesses and improve lives. Whether it's developing
                a seamless user experience or training a neural network, I approach every project with curiosity,
                precision, and a commitment to excellence.
              </p>
            </div>

            <div className="relative">
              <div className="bg-card rounded-lg p-8 border">
                <div className="font-mono text-sm text-muted-foreground mb-4">// Current focus</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">const</span>
                    <span className="text-foreground">expertise = [</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    <div className="text-accent">'Full-Stack Development',</div>
                    <div className="text-accent">'Machine Learning',</div>
                    <div className="text-accent">'AI Integration',</div>
                    <div className="text-accent">'Cloud Architecture'</div>
                  </div>
                  <div className="text-foreground">]</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Web Development</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building scalable, performant web applications using modern frameworks like React, Next.js, and Node.js.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">AI Engineering</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Developing and deploying machine learning models, from data preprocessing to production deployment.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bridging the gap between AI capabilities and user-friendly interfaces to create impactful solutions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
