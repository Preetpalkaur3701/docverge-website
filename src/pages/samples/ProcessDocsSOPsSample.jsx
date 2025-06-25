import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function ProcessDocsSOPsSample() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Button variant="outline" asChild className="mb-8">
        <Link to="/portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Standard Operating Procedure: Remote Employee Onboarding</h1>
      <p className="text-muted-foreground text-lg mb-8">
        This sample outlines a comprehensive Standard Operating Procedure (SOP) for onboarding new remote employees, ensuring a consistent, efficient, and welcoming experience from offer acceptance to full integration.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>1. Purpose</h2>
        <p>
          To establish a standardized and efficient process for onboarding new remote employees, ensuring they are equipped with the necessary tools, information, and support to become productive members of the team quickly and seamlessly.
        </p>

        <h2>2. Scope</h2>
        <p>
          This SOP applies to all departments and managers involved in the hiring and integration of new remote employees.
        </p>

        <h2>3. Responsibilities</h2>
        <ul>
          <li><strong>HR Department:</strong> Manages pre-boarding paperwork, background checks, and initial communication.</li>
          <li><strong>IT Department:</strong> Provisions hardware, software, and access credentials.</li>
          <li><strong>Hiring Manager:</strong> Develops onboarding plan, assigns a buddy, and conducts regular check-ins.</li>
          <li><strong>New Employee:</strong> Completes required training, attends meetings, and actively engages with the team.</li>
        </ul>

        <h2>4. Procedure</h2>

        <h3>4.1 Pre-Boarding (Offer Acceptance to Start Date)</h3>
        <h4>4.1.1 HR Actions (T-14 days)</h4>
        <ul>
          <li>Send welcome email with offer letter, benefits information, and link to HR portal for paperwork completion.</li>
          <li>Initiate background check and verify employment eligibility.</li>
          <li>Schedule initial HR orientation call for Day 1.</li>
        </ul>
        <h4>4.1.2 IT Actions (T-10 days)</h4>
        <ul>
          <li>Provision laptop/desktop with necessary software and security configurations.</li>
          <li>Create user accounts for all relevant systems (e.g., email, collaboration tools, project management software).</li>
          <li>Ship hardware to employee's remote address, ensuring delivery before start date.</li>
          <li>Set up VPN access and provide instructions.</li>
        </ul>
        <h4>4.1.3 Hiring Manager Actions (T-7 days)</h4>
        <ul>
          <li>Develop a detailed 30-60-90 day onboarding plan, outlining key objectives and learning milestones.</li>
          <li>Assign an experienced team member as a buddy to the new employee.</li>
          <li>Schedule initial team introductions and meetings for the first week.</li>
        </ul>

        <h3>4.2 Day 1: Welcome & Orientation</h3>
        <h4>4.2.1 HR Orientation (Morning)</h4>
        <ul>
          <li>Welcome call with HR to review company policies, benefits, and answer any initial questions.</li>
          <li>Confirmation of IT setup and access.</li>
        </ul>
        <h4>4.2.2 Team Introduction (Afternoon)</h4>
        <ul>
          <li>Virtual team meeting for introductions and overview of team dynamics.</li>
          <li>Hiring manager reviews the 30-60-90 day plan and initial tasks.</li>
        </ul>

        <h3>4.3 Week 1: Immersion & Initial Tasks</h3>
        <ul>
          <li><strong>Buddy System:</strong> Regular check-ins with assigned buddy for informal guidance and support.</li>
          <li><strong>Training:</strong> Completion of mandatory compliance training and introduction to relevant internal tools.</li>
          <li><strong>Initial Project:</strong> Assignment of a small, manageable task to familiarize the employee with workflows and team collaboration.</li>
          <li><strong>One-on-One:</strong> Weekly one-on-one meeting with hiring manager to discuss progress, challenges, and provide feedback.</li>
        </ul>

        <h3>4.4 Month 1: Integration & Growth</h3>
        <ul>
          <li><strong>Performance Review:</strong> Formal review of 30-day progress against the onboarding plan.</li>
          <li><strong>Skill Development:</strong> Identification of areas for growth and relevant training resources.</li>
          <li><strong>Team Contribution:</strong> Encouragement to actively participate in team discussions and contribute ideas.</li>
        </ul>

        <h2>5. Documentation & Resources</h2>
        <p>
          All relevant documents, including this SOP, employee handbook, and training materials, are stored in the company’s internal knowledge base (e.g., Confluence, SharePoint) and are accessible to all employees.
        </p>

        <h2>6. Review & Revision</h2>
        <p>
          This SOP will be reviewed annually by the HR and IT departments, or as needed, to ensure its continued effectiveness and alignment with company policies and best practices. Any revisions will be communicated to all relevant stakeholders.
        </p>

        <h2>7. Appendix</h2>
        <ul>
          <li>New Employee Checklist</li>
          <li>IT Setup Guide</li>
          <li>Onboarding Plan Template</li>
        </ul>
      </div>
    </div>
  )
}

