import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { OnboardingGuideSample } from './pages/samples/OnboardingGuideSample'
import { APIDocumentationSample } from './pages/samples/APIDocumentationSample'
import { AIMLWhitepaperSample } from './pages/samples/AIMLWhitepaperSample'
import { UXMicrocopySample } from './pages/samples/UXMicrocopySample'
import { ProcessDocsSOPsSample } from './pages/samples/ProcessDocsSOPsSample'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/samples/onboarding-guide" element={<OnboardingGuideSample />} />
            <Route path="/samples/api-documentation" element={<APIDocumentationSample />} />
            <Route path="/samples/ai-ml-whitepaper" element={<AIMLWhitepaperSample />} />
            <Route path="/samples/ux-microcopy" element={<UXMicrocopySample />} />
            <Route path="/samples/process-docs-sops" element={<ProcessDocsSOPsSample />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


