
import HeroSection from './_components/herosection'
import  FeatureSection  from './_components/featuresection';
import  CTASection  from './_components/ctasection';


export default function HomepageComponent() {
  return (
    <div className="min-h-screen h-auto">
      <main>
      <HeroSection />
      <div id="about">
          <FeatureSection />
        </div>
   <CTASection />
      </main>
    </div>
  )
}