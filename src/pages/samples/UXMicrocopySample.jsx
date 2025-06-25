import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function UXMicrocopySample() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Button variant="outline" asChild className="mb-8">
        <Link to="/portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">Crafting Intuitive Experiences: UX Microcopy for a Fitness App</h1>
      <p className="text-muted-foreground text-lg mb-8">
        This sample demonstrates how carefully crafted UX microcopy can transform a fitness application, guiding users seamlessly through their journey and enhancing overall engagement and satisfaction.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Introduction: The Power of Small Words</h2>
        <p>
          In the world of digital products, every word counts. UX microcopy—the small bits of text that guide users through an interface—plays a crucial role in shaping user experience. From button labels to error messages, effective microcopy can clarify, reassure, and delight users, turning potential frustration into seamless interaction. This sample focuses on a hypothetical fitness tracking application, FitPulse, to illustrate the impact of thoughtful microcopy on user engagement and product usability.
        </p>

        <h2>1. Onboarding & Setup</h2>
        <h3>1.1 Welcome Screen</h3>
        <p>
          The first impression is vital. Instead of generic greetings, FitPulse uses microcopy that immediately connects with the user's goals.
        </p>
        <p><strong>Before:</strong> 


"Welcome to FitPulse"
<strong>After:</strong> "Ready to transform your fitness journey? Let's set up your profile and get started!"
        </p>
        <h3>1.2 Permission Requests</h3>
        <p>
          When requesting access to sensitive data like health information or location, clear and reassuring microcopy is essential.
        </p>
        <p><strong>Before:</strong> "Allow FitPulse to access your health data?"
<strong>After:</strong> "To accurately track your progress and provide personalized insights, FitPulse needs access to your health data. We keep your information private and secure."
        </p>

        <h2>2. Goal Setting & Tracking</h2>
        <h3>2.1 Setting a New Goal</h3>
        <p>
          Guiding users through goal creation with encouraging and clear language.
        </p>
        <p><strong>Before:</strong> "Enter your fitness goal"
<strong>After:</strong> "What's your next fitness milestone? Let's make it happen!"
        </p>
        <h3>2.2 Progress Updates</h3>
        <p>
          Providing feedback that motivates and informs.
        </p>
        <p><strong>Before:</strong> "You've logged a workout."
<strong>After:</strong> "Awesome! You just crushed another workout. Keep up the great work!"
        </p>

        <h2>3. Error Messages & Feedback</h2>
        <h3>3.1 Invalid Input</h3>
        <p>
          Turning frustrating errors into helpful guidance.
        </p>
        <p><strong>Before:</strong> "Invalid entry"
<strong>After:</strong> "Oops! It looks like there's an issue with your entry. Please double-check the highlighted fields."
        </p>
        <h3>3.2 Connectivity Issues</h3>
        <p>
          Communicating technical problems in a user-friendly way.
        </p>
        <p><strong>Before:</strong> "No internet connection"
<strong>After:</strong> "You're offline! Please check your internet connection to sync your latest progress."
        </p>

        <h2>4. Call-to-Actions (CTAs)</h2>
        <h3>4.1 Primary Action Button</h3>
        <p>
          Making CTAs clear and action-oriented.
        </p>
        <p><strong>Before:</strong> "Submit"
<strong>After:</strong> "Start My Workout" (on a workout screen), "Save Progress" (on a profile screen)
        </p>
        <h3>4.2 Secondary Action</h3>
        <p>
          Offering alternatives without overwhelming the user.
        </p>
        <p><strong>Before:</strong> "Cancel"
<strong>After:</strong> "Not now, maybe later" (for a non-critical action), "Discard Changes" (with a confirmation prompt)
        </p>

        <h2>Conclusion: The User's Silent Guide</h2>
        <p>
          Effective UX microcopy is the silent guide that navigates users through an application. By anticipating user needs, providing timely feedback, and speaking in a clear, encouraging voice, microcopy transforms a functional interface into an intuitive and enjoyable experience. For FitPulse, this means not just tracking fitness, but inspiring and supporting users every step of their health journey.
        </p>
      </div>
    </div>
  )
}

