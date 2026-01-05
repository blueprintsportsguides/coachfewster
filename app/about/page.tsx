import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ValueCard from "@/components/ValueCard";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <SectionHeader
        title="About"
        intro="Understanding the journey and values that shape every coaching session."
        className="pt-8 md:pt-12"
      />

      {/* Story Section */}
      <section className="py-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div>
            <div className="relative w-full aspect-square rounded-image overflow-hidden">
              <Image
                src="/coach-story.jpg"
                alt="Coach story"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="mb-6">My Story</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-charcoal-light">
              <p>
                I've always loved being on the football pitch, but after a knee injury and the unexpected pause of the COVID lockdown, my journey took a new direction. What first felt like a setback turned out to be a turning point.
              </p>
              <p>
                I shifted my focus from playing to coaching and discovered a real passion for helping others grow. Now, I focus on helping players develop with confidence and enjoyment, creating positive environments where every child can thrive.
              </p>
              <p>
                Since then, I have focused on delivering sessions that are supportive, structured, and tailored to each individual. The goal is always the same: help players feel confident on the pitch and proud of their progress, both on and off the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Values Section */}
      <section className="section-container bg-section-alt">
        <div className="section-container-inner">
          <div className="mb-12 md:mb-16">
            <h2 className="text-center mb-4">Coaching Values</h2>
            <p className="text-center text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto">
              The principles that guide every session and interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <ValueCard
            title="Confidence First"
            description="Building self-belief is at the heart of everything. Every session is designed to help players feel more confident, both in their abilities and in themselves."
            iconPath="/images/icons/Confidence.svg"
            iconAlt="Confidence icon"
          />
          <ValueCard
            title="Enjoyment Matters"
            description="Football should be fun. When players enjoy what they're doing, they're more engaged, learn better, and develop a genuine love for the game."
            iconPath="/images/icons/Enjoyment.svg"
            iconAlt="Enjoyment icon"
          />
          <ValueCard
            title="Player-Centred Coaching"
            description="Every player is unique. Sessions are tailored to individual needs, goals, and learning styles, ensuring each child gets the support they need to progress."
            iconPath="/images/icons/Coaching.svg"
            iconAlt="Coaching icon"
          />
          <ValueCard
            title="Clear Progression"
            description="Structured development with clear goals and regular feedback. Players can see their improvement and understand their journey, building motivation and pride."
            iconPath="/images/icons/Progression.svg"
            iconAlt="Progression icon"
          />
          </div>
        </div>
      </section>
    </>
  );
}
