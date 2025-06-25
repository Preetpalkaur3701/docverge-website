import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function OnboardingGuideSample() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Button variant="outline" asChild className="mb-8">
        <Link to="/portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Streamlining User Onboarding: A Comprehensive Guide for SaaS Platforms</h1>
      <p className="text-muted-foreground text-lg mb-8">
        This sample demonstrates a user-centric onboarding guide designed to accelerate user adoption and reduce support inquiries for a hypothetical SaaS project management platform.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Introduction: The Critical First Impression</h2>
        <p>
          In the competitive SaaS landscape, the initial user experience is paramount. A well-crafted onboarding guide doesn't just show users how to use a product; it demonstrates its value, builds confidence, and sets the stage for long-term engagement. This guide focuses on a fictional project management tool, 


ProjectFlow, and illustrates how clear, concise, and actionable documentation can transform the user journey from initial sign-up to becoming a proficient, engaged user.
        </p>

        <h2>Section 1: Getting Started with ProjectFlow</h2>
        <h3>1.1 Account Setup and Workspace Creation</h3>
        <p>
          Upon successful registration, users are guided through the initial account setup. This involves verifying their email, setting up a secure password, and creating their first workspace. The workspace acts as the central hub for all projects and team collaboration. Clear prompts ensure users understand the purpose of each step, minimizing friction and confusion.
        </p>
        <h3>1.2 Inviting Your Team</h3>
        <p>
          Collaboration is key in project management. This section details how to invite team members to the newly created workspace. It covers various invitation methods, including email invitations and shareable links, along with instructions on managing user roles and permissions. Emphasis is placed on the benefits of inviting team members early to maximize collaborative features.
        </p>

        <h2>Section 2: Navigating the Dashboard and Key Features</h2>
        <h3>2.1 Dashboard Overview</h3>
        <p>
          The ProjectFlow dashboard is designed for quick access to critical project information. This part of the guide provides a visual walkthrough of the dashboard layout, explaining each section: active projects, upcoming deadlines, assigned tasks, and team activity feeds. Users learn how to customize their dashboard view to prioritize relevant information.
        </p>
        <h3>2.2 Creating and Managing Projects</h3>
        <p>
          The core functionality of ProjectFlow revolves around project creation. This subsection offers a step-by-step guide on initiating new projects, selecting templates, defining project parameters (e.g., start/end dates, budget), and assigning project leads. It also covers project archiving and deletion, ensuring users can manage their project lifecycle effectively.
        </p>
        <h3>2.3 Task Management and Workflow Automation</h3>
        <p>
          Detailed instructions are provided for creating, assigning, and tracking tasks within projects. This includes setting task dependencies, adding subtasks, attaching files, and utilizing comments for communication. The guide also introduces basic workflow automation features, such as automated notifications for task completion or overdue items, to enhance team productivity.
        </p>

        <h2>Section 3: Advanced Collaboration and Reporting</h2>
        <h3>3.1 Real-time Collaboration Tools</h3>
        <p>
          ProjectFlow integrates real-time communication features to facilitate seamless team interaction. This section explains how to use in-app chat, comment threads on tasks, and shared document editing. Best practices for effective collaborative communication are also included to foster a productive team environment.
        </p>
        <h3>3.2 Generating Reports and Analytics</h3>
        <p>
          Understanding project progress and team performance is crucial. This part of the guide covers the reporting and analytics features of ProjectFlow. Users learn how to generate various reports, such as task completion rates, team workload distribution, and project timelines. The guide emphasizes how these insights can inform decision-making and optimize future project planning.
        </p>

        <h2>Conclusion: Empowering Users for Success</h2>
        <p>
          This onboarding guide serves as a foundational resource for ProjectFlow users. By providing clear, actionable instructions and highlighting key features, it empowers users to quickly become proficient with the platform, ultimately leading to increased productivity and successful project outcomes. Effective documentation is not just about explaining features; it's about enabling user success and fostering a positive, long-lasting relationship with the product.
        </p>
      </div>
    </div>
  )
}

