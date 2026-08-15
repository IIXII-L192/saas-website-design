import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { LogoCloud } from "./components/logo-cloud";
import { Features } from "./components/features";
import { Showcase } from "./components/showcase";
import { Pricing } from "./components/pricing";
import { Testimonials } from "./components/testimonials";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Showcase />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
