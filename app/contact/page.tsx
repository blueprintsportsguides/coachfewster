import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ContactForm from "@/components/ContactForm";

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
      <section className="py-section">
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-center mb-8">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-charcoal mb-3">Email</h4>
              <a
                href="mailto:dan@coreteamwear.co.uk"
                className="text-lg text-primary hover:text-primary-dark transition-colors duration-200"
              >
                dan@coreteamwear.co.uk
              </a>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-charcoal mb-3">Phone</h4>
              <a
                href="tel:07714242713"
                className="text-lg text-primary hover:text-primary-dark transition-colors duration-200"
              >
                07714 242713
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-container bg-section-alt">
        <div className="section-container-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Form Side */}
          <div>
            <h3 className="mb-6">Send an Enquiry</h3>
            <ContactForm />
          </div>

          {/* Image Side */}
          <div className="order-first lg:order-last">
            <ImagePlaceholder
              label="Contact page image placeholder"
              aspectRatio="square"
              className="w-full"
            />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
