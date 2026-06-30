import ContactHero from "@/components/pages/contact/ContactHero";
import ContactForm from "@/components/pages/contact/ContactForm";
import WorkshopLocation from "@/components/pages/contact/WorkshopLocation";

export default function ContactPage() {
  return (
    <main className="flex-grow pt-20 bg-white">
      <ContactHero />
      
      {/* Main Content Grid: Form + Address/Map Details */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <WorkshopLocation />
        </div>
      </section>
    </main>
  );
}
