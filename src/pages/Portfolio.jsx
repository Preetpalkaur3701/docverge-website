import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { ExternalLink, FileText, Code, BookOpen, MessageSquare, Settings } from 'lucide-react'

export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'SaaS Onboarding Guide',
      category: 'User Guides',
      icon: BookOpen,
      description: 'Step-by-step onboarding guide for a project management SaaS platform, designed to reduce time-to-value.',
      tags: ['Onboarding', 'User Experience', 'SaaS', 'Getting Started'],
      link: '/samples/onboarding-guide'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics API Documentation',
      category: 'API Documentation',
      icon: Code,
      description: 'Complete API reference for a machine learning analytics platform, including authentication, endpoints, and SDKs.',
      tags: ['API Reference', 'Machine Learning', 'Python SDK', 'Authentication'],
      link: '/samples/api-documentation'
    },
    {
      id: 3,
      title: 'Explainable AI (XAI) Whitepaper',
      category: 'Technical Writing',
      icon: FileText,
      description: 'Research whitepaper on the importance of Explainable AI (XAI) in building trust in autonomous systems.',
      tags: ['AI Ethics', 'Research', 'Whitepaper', 'Technical Editing'],
      link: '/samples/ai-ml-whitepaper'
    },
    {
      id: 4,
      title: 'Fitness App UX Microcopy',
      category: 'UX Writing',
      icon: MessageSquare,
      description: 'Optimized microcopy for a fitness tracking application, enhancing user engagement and satisfaction.',
      tags: ['UX Writing', 'Mobile App', 'Conversion Optimization', 'Microcopy'],
      link: '/samples/ux-microcopy'
    },
    {
      id: 5,
      title: 'Remote Employee Onboarding SOP',
      category: 'Process Documentation',
      icon: Settings,
      description: 'Comprehensive Standard Operating Procedure (SOP) for onboarding new remote employees.',
      tags: ['SOP', 'Remote Work', 'Process Documentation', 'HR'],
      link: '/samples/process-docs-sops'
    }
  ]

  const categories = ['All', 'API Documentation', 'User Guides', 'Technical Writing', 'UX Writing', 'Process Documentation']

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sample documentation showcasing our expertise across different industries and content types. 
            Each piece demonstrates our commitment to clarity, usability, and user-centered design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              {category}
            </Badge>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <item.icon className="h-8 w-8 text-primary" />
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={item.link}>
                    View Full Sample <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Feedback from satisfied clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Preetpal transformed our API documentation from confusing to crystal clear. 
                  Our developer adoption rate increased by 40% after the rewrite."
                </p>
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">CTO, TechFlow AI</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "The onboarding guide DocVerge created reduced our support tickets by 60%. 
                  Users can now get started without any help from our team."
                </p>
                <div className="font-semibold">Marcus Rodriguez</div>
                <div className="text-sm text-muted-foreground">Product Manager, CloudSync</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Professional, thorough, and always delivered on time. 
                  Preetpal understands both the technical and business sides of documentation."
                </p>
                <div className="font-semibold">Emily Watson</div>
                <div className="text-sm text-muted-foreground">Founder, DataViz Pro</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Impressed by What You See?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            These samples represent just a fraction of what's possible. 
            Let's discuss how we can create documentation that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Request Custom Sample
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

