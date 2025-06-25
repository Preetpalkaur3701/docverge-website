import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { BookOpen, Code, FileText, MessageSquare, Settings, CheckCircle, ArrowRight } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Onboarding Guides & Help Centers',
      description: 'Clear, structured content to get users started faster',
      features: [
        'User journey mapping and content strategy',
        'Step-by-step onboarding flows',
        'Comprehensive help center articles',
        'FAQ development and organization',
        'Search-optimized content structure',
        'Mobile-responsive documentation'
      ],
      benefits: [
        'Reduced time-to-value for new users',
        'Decreased support ticket volume',
        'Improved user satisfaction scores',
        'Higher product adoption rates'
      ]
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Developer-ready docs with use-case clarity and code accuracy',
      features: [
        'Complete API reference documentation',
        'Interactive code examples',
        'SDK and library documentation',
        'Authentication and error handling guides',
        'Rate limiting and best practices',
        'Postman collections and testing guides'
      ],
      benefits: [
        'Faster developer integration',
        'Reduced developer support requests',
        'Improved API adoption',
        'Enhanced developer experience'
      ]
    },
    {
      icon: FileText,
      title: 'AI/ML Whitepapers & Research Blogs',
      description: 'Insightful edits and rewrites to improve structure, flow, and accessibility',
      features: [
        'Technical content editing and restructuring',
        'Complex concept simplification',
        'Research paper formatting and style',
        'Blog post optimization for engagement',
        'Citation and reference management',
        'Peer review and fact-checking'
      ],
      benefits: [
        'Increased content readability',
        'Better audience engagement',
        'Enhanced thought leadership',
        'Improved SEO performance'
      ]
    },
    {
      icon: MessageSquare,
      title: 'UX Microcopy & UI Messaging',
      description: 'User-guiding copy that improves interface interactions',
      features: [
        'Error message optimization',
        'Button and CTA copy refinement',
        'Tooltip and help text creation',
        'Form field labels and placeholders',
        'Empty state messaging',
        'Confirmation and success messages'
      ],
      benefits: [
        'Reduced user confusion',
        'Improved conversion rates',
        'Enhanced user experience',
        'Decreased abandonment rates'
      ]
    },
    {
      icon: Settings,
      title: 'Process Docs & SOPs',
      description: 'Internal documentation for smoother operations and compliance',
      features: [
        'Standard Operating Procedures (SOPs)',
        'Workflow documentation',
        'Training materials and guides',
        'Compliance documentation',
        'Internal knowledge base creation',
        'Process optimization recommendations'
      ],
      benefits: [
        'Streamlined team operations',
        'Consistent process execution',
        'Faster employee onboarding',
        'Improved compliance adherence'
      ]
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Understanding your product, users, and documentation goals through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Developing a comprehensive content strategy aligned with your business objectives.'
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Writing, editing, and structuring content with focus on clarity and user experience.'
    },
    {
      step: '04',
      title: 'Review & Refinement',
      description: 'Collaborative review process with stakeholders to ensure accuracy and effectiveness.'
    },
    {
      step: '05',
      title: 'Delivery & Support',
      description: 'Final delivery with ongoing support and maintenance recommendations.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive documentation services designed to enhance user experience, 
            support developer integration, and drive product success.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures high-quality deliverables and successful outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose DocVerge */}
        <section className="mb-20 bg-muted/50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose DocVerge?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">SEO</div>
              <div className="text-sm text-muted-foreground">Optimized Content</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your documentation needs and how DocVerge can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

