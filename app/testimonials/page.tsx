import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export default function Testimonials() {
  const testimonials = [
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
  ];

  return (
    <>
      {/* Page Header */}
      <SectionHeader
        title="Testimonials"
        intro="Feedback from parents and players about their coaching experience."
        className="pt-8 md:pt-12"
      />

      {/* Testimonials Grid */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="h-full flex flex-col">
                <div className="mb-6 flex-grow">
                  <svg
                    className="w-8 h-8 text-primary mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl leading-relaxed text-charcoal-light italic mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-base font-semibold text-charcoal">
                    — {testimonial.author}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

