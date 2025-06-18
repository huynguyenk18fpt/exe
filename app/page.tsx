// page.tsx
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import VideoLibrary from "./sections/VideoLibrary"
import Quiz from "./sections/Quiz"
import Resources from "./sections/Resources"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <Features />
      <VideoLibrary />
      <Quiz />
      <Resources />
      <CTA />
      <Footer />
    </div>
  )
}
