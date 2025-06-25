import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { GraduationCap, Code, Users, Award, Target, Heart, Lightbulb } from 'lucide-react'

export function About() {
  const qualifications = [
    {
      icon: GraduationCap,
      title: 'B.Tech in Computer Science',
      description: 'Strong technical foundation understanding complex systems'
    },
    {
      icon: Code,
      title: 'Python & Data Science Certified',
      description: 'Google Data Analytics certification and Python expertise'
    },
    {
      icon: Users,
      title: 'Open Source Contributor',
      description: 'Active contributor to Haiku OS and mentor in Google programs'
    },
    {
      icon: Award,
      title: '5+ Years Experience',
      description: 'Proven track record in technical writing and documentation'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'User-Centric Approach',
      description: 'Every piece of documentation is crafted with the end user in mind, ensuring clarity and usability.'
    },
    {
      icon: Heart,
      title: 'Technical Empathy',
      description: 'Understanding both the technical complexity and user needs to bridge the gap effectively.'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Thinking',
      description: 'Documentation that aligns with business goals and scales with product growth.'
    }
  ]

  const skills = [
    'Technical Writing',
    'API Documentation',
    'User Experience Writing',
    'Content Strategy',
    'SEO Optimization',
    'Accessibility',
    'Cross-functional Collaboration',
    'Process Documentation',
    'Information Architecture',
    'Developer Relations'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DocVerge</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by Preetpal Kaur, DocVerge is a freelance technical writing studio 
            dedicated to helping SaaS and AI companies deliver clear, impactful documentation.
          </p>
        </div>

        {/* Founder Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Preetpal Kaur</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I am Preetpal Kaur, founder of DocVerge, with over 5 years of experience in technical writing. 
                I specialize in creating user-centric, technically accurate content that bridges the gap between 
                complex systems and real-world users.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My work enables teams to scale faster with fewer support tickets and greater clarity. 
                From onboarding flows and help centers to API references and whitepapers, I create 
                documentation that enhances user experience and drives product success.
              </p>
              <Button asChild>
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualifications.map((qual, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <qual.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{qual.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{qual.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set built through years of experience and continuous learning
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20 bg-muted/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Experience & Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Open Source Contributions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Active contributor to Haiku OS project</li>
                <li>• Mentor in Google Summer of Code</li>
                <li>• Mentor in Outreachy program</li>
                <li>• Mentor in Google Code-in</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cross-functional Collaboration</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Work closely with product managers</li>
                <li>• Collaborate with developers and engineers</li>
                <li>• Partner with designers on user experience</li>
                <li>• Align documentation with business goals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you're a founder, designer, or engineer building something meaningful, 
            I'd love to support you with strategic, user-focused content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Free Audit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

