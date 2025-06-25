import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, FileText, Code, BookOpen, MessageSquare, Settings, ArrowRight } from 'lucide-react'

export function Home() {
  const services = [
    {
      icon: BookOpen,
      title: 'Onboarding Guides & Help Centers',
      description: 'Clear, structured content to get users started faster'
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Developer-ready docs with use-case clarity and code accuracy'
    },
    {
      icon: FileText,
      title: 'AI/ML Whitepapers & Research Blogs',
      description: 'Insightful edits and rewrites to improve structure, flow, and accessibility'
    },
    {
      icon: MessageSquare,
      title: 'UX Microcopy & UI Messaging',
      description: 'User-guiding copy that improves interface interactions'
    },
    {
      icon: Settings,
      title: 'Process Docs & SOPs',
      description: 'Internal documentation for smoother operations and compliance'
    }
  ]

  const benefits = [
    'Technical fluency with B.Tech in Computer Science',
    'Open-source contributor & mentor',
    'Cross-functional experience with product teams',
    'SEO + accessibility focused',
    'Over 5 years of experience'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Clear, Impactful Documentation for{' '}
              <span className="text-primary">SaaS & AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              DocVerge helps SaaS and AI companies deliver documentation that enhances user experience, 
              supports developer integration, and drives product success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What DocVerge Offers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive documentation services tailored for modern tech companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DocVerge Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With DocVerge?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I don't just "write docs"; I help your users succeed. With technical expertise 
                and user-focused approach, I create documentation that grows with your product.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Let's connect and discuss how I can help improve your documentation strategy.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scale Faster with Better Documentation
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Reduce support tickets, improve user experience, and accelerate product adoption 
            with strategic, user-focused content.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get Your Free Audit Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

