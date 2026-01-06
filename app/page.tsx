import Hero from "@/components/Hero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Personal Football Coaching Built Around Confidence, Skill, and Enjoyment"
        subtext="Professional 1 to 1 and small group football coaching in Egham and surrounding areas, focused on helping players grow both on and off the pitch."
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Sessions",
          href: "/services",
        }}
      />

      {/* Intro Text Section */}
      <section className="py-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-square rounded-image overflow-hidden">
              <Image
                src="/coaching-action.jpeg"
                alt="Coaching action"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-lg md:text-xl leading-relaxed">
              Every player develops differently. Sessions are designed to support confidence, technique, and enjoyment, whether your child is just starting out or looking to take their game further.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="section-container bg-section-alt">
        <div className="section-container-inner">
          <div className="mb-12 md:mb-16">
            <h2 className="text-center mb-4">Our Services</h2>
            <p className="text-center text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto">
              Flexible coaching options tailored to your child's needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ServiceCard
              title="1 to 1 Coaching"
              description="Personalised one to one sessions tailored to your child's position, ability, and goals. Focused attention, clear feedback, and structured progression."
              price="£40"
              imageLabel="1 to 1 coaching"
              imagePath="/1-to-1-coaching.jpeg"
            />
            <ServiceCard
              title="Small Group Sessions"
              description="Small group sessions that combine individual development with shared learning. Ideal for friends or siblings who want focused coaching in a supportive setting."
              price="£50–£75"
              imageLabel="Small group session"
              imagePath="/small-group-session.jpeg"
            />
            <ServiceCard
              title="Parties"
              description="High-energy, well-organised sports parties designed to keep children active, engaged, and smiling from start to finish."
              price="£120"
              imageLabel="Party session"
              imagePath="/party-session.jpg"
            />
            <ServiceCard
              title="Football Camps"
              description="Structured holiday camps focused on fun, learning, and game-based development. More details coming soon."
              price="Price TBC"
              imageLabel="Football camp"
              imagePath="/football-camp.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Location Coverage Strip */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="mb-4">Location Coverage</h3>
              <p className="text-lg md:text-xl leading-relaxed">
                Based in Egham and delivering sessions across surrounding areas. Flexible locations including local pitches, parks, and agreed training spaces.
              </p>
            </div>
            <div>
              <div className="relative w-full aspect-video rounded-image overflow-hidden">
                <Image
                  src="/location-map.jpg"
                  alt="Map showing Egham and surrounding areas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container bg-section-alt">
        <div className="section-container-inner">
          <div className="mb-12 md:mb-16">
            <h2 className="text-center mb-4">What Parents Say</h2>
            <p className="text-center text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto">
              Feedback from parents and players about their coaching experience.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel
              testimonials={[
                {
                  quote: "Asa played his best 2 games of the season over the last 2 weeks, having started his 1-2-1's with you. The step up was noticed by all.",
                  author: "Parent"
                },
                {
                  quote: "My son had a 1 day class with the spurs keeper! He said not a patch on Danny F!",
                  author: "Parent"
                },
                {
                  quote: "I thought it was really good and Eddie enjoyed it which is more important! Thanks Dan!",
                  author: "Parent"
                }
              ]}
              autoScrollInterval={5000}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-section">
        <CTABanner
          headline="Ready to get started or have a question?"
          subtext="Get in touch to discuss the right session for your child."
          ctaText="Contact Me"
          ctaHref="/contact"
          showImage={true}
          imageLabel="CTA banner background"
          imagePath="/cta-banner-background.jpeg"
        />
      </section>
    </>
  );
}
