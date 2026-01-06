import SectionHeader from "@/components/SectionHeader";
import ServiceDetail from "@/components/ServiceDetail";
import CTABanner from "@/components/CTABanner";

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <SectionHeader
        title="Our Services"
        intro="Flexible coaching options designed to support your child's development, confidence, and enjoyment of football."
        className="pt-8 md:pt-12"
      />

      {/* 1 to 1 Coaching */}
      <ServiceDetail
        title="1 to 1 Coaching"
        price="£40"
        imageLabel="1 to 1 coaching session"
        imagePath="/1-to-1-coaching.jpeg"
        description="Personalised one to one sessions tailored to your child's position, ability, and goals. Whether your child is an outfield player or goalkeeper, each session is designed to provide focused attention, clear feedback, and structured progression."
        includes={[
          "Individual attention and personalised coaching plan",
          "Position-specific training (outfield or goalkeeper)",
          "Technique development and skill building",
          "Confidence-building exercises and positive reinforcement",
          "Flexible scheduling to fit your family's needs",
          "Progress tracking and regular feedback"
        ]}
        idealFor="Players who benefit from individual attention, those working on specific skills or positions, children building confidence, or players preparing for trials or matches."
        imagePosition="right"
      />

      {/* Small Group Sessions */}
      <ServiceDetail
        title="Small Group Sessions"
        price="£50–£75"
        imageLabel="Small group coaching session"
        imagePath="/small-group-session.jpeg"
        description="Small group sessions that combine individual development with shared learning. With a maximum of 3 players, these sessions offer the perfect balance of personal attention and peer interaction."
        includes={[
          "Maximum 3 players per session for focused attention",
          "Individual skill development within a group setting",
          "Game-based learning and small-sided practice",
          "Peer support and friendly competition",
          "Social development and teamwork skills",
          "Flexible pricing based on group size"
        ]}
        idealFor="Friends or siblings who want to train together, players who enjoy learning alongside others, families looking for a cost-effective option, or children who thrive in small group environments."
        imagePosition="left"
      />

      {/* Parties */}
      <ServiceDetail
        title="Parties"
        price="£120"
        imageLabel="Football party session"
        imagePath="/party-session.jpg"
        description="High-energy, well-organised sports parties designed to keep children active, engaged, and smiling from start to finish. Available as football-focused or multi-sport options to suit your celebration."
        includes={[
          "Structured activities and games for all ability levels",
          "Football-focused or multi-sport options available",
          "All equipment provided",
          "Suitable for various age groups",
          "Organised and supervised throughout",
          "Focus on fun, participation, and enjoyment"
        ]}
        idealFor="Birthday parties, celebration events, group gatherings, or any occasion where you want children to be active and engaged in a structured, fun environment."
        imagePosition="right"
      />

      {/* Football Camps */}
      <ServiceDetail
        title="Football Camps"
        price="Price TBC"
        imageLabel="Football camp session"
        imagePath="/football-camp.jpeg"
        description="Structured holiday camps focused on fun, learning, and game-based development. These camps provide extended coaching opportunities during school holidays, combining skill development with enjoyment and social interaction."
        includes={[
          "Multi-day structured camp programmes",
          "Skill development and game-based learning",
          "Suitable for various age groups and abilities",
          "Combination of individual and group activities",
          "Focus on fun, confidence, and progression",
          "More details coming soon"
        ]}
        idealFor="Children who want extended coaching during school holidays, players looking to maintain and develop skills over breaks, families seeking structured holiday activities, or those wanting to experience coaching in a camp setting."
        imagePosition="left"
        comingSoon={true}
      />

      {/* Call to Action */}
      <section className="py-section">
        <CTABanner
          headline="Ready to Book a Session?"
          subtext="Get in touch to discuss which service is right for your child and to arrange a session."
          ctaText="Contact Me"
          ctaHref="/contact"
          variant="primary"
          showImage={true}
          imageLabel="Ready to Book a Session"
          imagePath="/ready-to-book-session.jpeg"
        />
      </section>
    </>
  );
}
