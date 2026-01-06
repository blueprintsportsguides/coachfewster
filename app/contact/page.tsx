import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <SectionHeader
        title="Get in Touch"
        intro="Whether you are interested in sessions, parties, or camps, feel free to get in touch. Happy to answer questions and help you choose the right option."
        className="pt-8 md:pt-12"
      />

      {/* Contact Details Section */}
      <section className="section-container bg-section-alt">
        <div className="section-container-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Contact Info Side */}
            <div className="text-center lg:text-left">
              <h2 className="mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-charcoal mb-4">Email</h3>
                  <a
                    href="mailto:dan@coreteamwear.co.uk"
                    className="text-2xl md:text-3xl text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                  >
                    dan@coreteamwear.co.uk
                  </a>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-charcoal mb-4">Phone</h3>
                  <a
                    href="tel:07714242713"
                    className="text-2xl md:text-3xl text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                  >
                    07714 242713
                  </a>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div>
              <div className="relative w-full aspect-square rounded-image overflow-hidden">
                <Image
                  src="/contact-page.jpg"
                  alt="Contact page"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
