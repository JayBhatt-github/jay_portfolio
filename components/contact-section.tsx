"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center text-center">
            {/* Left Column: Email, Phone, Location */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Right Column: Gradient Box */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 w-full max-w-sm">
                <h4 className="font-semibold mb-3">Available for:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li>• Full-stack web development projects</li>
                  <li>• AI/ML integration and consulting</li>
                  <li>• Technical architecture and planning</li>
                  <li>• Code reviews and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
