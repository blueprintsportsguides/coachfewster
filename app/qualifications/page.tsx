import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export default function Qualifications() {
  const qualifications = [
    {
      title: "FA Playmaker",
      description: "The FA Playmaker course is an entry-level coaching qualification that provides the foundation for working with players. It covers the basics of coaching, session planning, and creating positive learning environments.",
      context: "This qualification demonstrates a commitment to understanding the fundamentals of football coaching and player development."
    },
    {
      title: "FA Introduction to Football",
      description: "An introductory course that covers the essential principles of football coaching, including basic techniques, game understanding, and how to structure effective training sessions.",
      context: "This course provides the groundwork for understanding the game from a coaching perspective and how to communicate effectively with players."
    },
    {
      title: "UEFA C",
      description: "The UEFA C Licence is a recognised coaching qualification that demonstrates competency in planning, delivering, and evaluating football coaching sessions. It covers technical, tactical, physical, and psychological aspects of player development.",
      context: "This is a professional-level qualification that shows advanced understanding of coaching methodology and player development principles."
    },
    {
      title: "FA Introduction to First Aid",
      description: "Essential first aid training specifically tailored for sports and coaching environments. Covers injury assessment, basic life support, and how to respond to common sports-related injuries.",
      context: "Ensures the ability to provide immediate care and respond appropriately to injuries that may occur during training sessions or matches."
    },
    {
      title: "FA Safeguarding for Children",
      description: "Comprehensive safeguarding training that covers child protection policies, recognising signs of abuse, and understanding the responsibilities of working with young people in a sports setting.",
      context: "This qualification ensures a thorough understanding of safeguarding principles and creates a safe, secure environment for all young players."
    },
    {
      title: "FA Talent Identification",
      description: "Specialised training in identifying and nurturing talent in young players. Covers assessment techniques, understanding player potential, and how to support talented players appropriately.",
      context: "This qualification helps in recognising and developing players' strengths while ensuring appropriate support and progression pathways."
    },
    {
      title: "DBS",
      description: "Enhanced Disclosure and Barring Service (DBS) check, providing clearance to work with children and vulnerable adults. This is regularly updated to maintain current status.",
      context: "Essential certification that confirms suitability to work with young people and demonstrates commitment to child protection standards."
    },
    {
      title: "Public Liability Insurance",
      description: "Comprehensive public liability insurance coverage that protects against claims arising from coaching activities. This ensures both coach and participants are covered during sessions.",
      context: "Provides peace of mind and demonstrates professional responsibility, ensuring all coaching activities are properly insured and protected."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <SectionHeader
        title="Qualifications"
        intro="Professional qualifications and certifications that ensure safe, effective, and high-quality coaching for all players."
        className="pt-8 md:pt-12"
      />

      {/* Qualifications Grid */}
      <section className="py-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} hover className="h-full flex flex-col">
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 bg-gradient-to-b from-primary to-primary-dark text-white text-sm font-semibold rounded-full">
                    {qual.title}
                  </div>
                </div>
                <h3 className="mb-4">{qual.title}</h3>
                <p className="text-lg leading-relaxed text-charcoal-light mb-4 flex-grow">
                  {qual.description}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-base text-charcoal-light italic">
                    {qual.context}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Context Section */}
      <section className="section-container bg-section-alt">
        <div className="section-container-inner">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Continuous Professional Development</h2>
            <p className="text-lg md:text-xl leading-relaxed text-charcoal-light">
              Qualifications are regularly updated and maintained, with ongoing training and development to ensure coaching methods remain current, effective, and aligned with best practices in youth football development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

