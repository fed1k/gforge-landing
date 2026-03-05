import ContactForm from "@/components/layout/ContactForm";
import ContactHero from "@/components/layout/ContactHero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',  // or whatever
  description: "We’re here to support your journey reach out anytime for guidance, answers, and support, and let’s move your talent forward together.",
  alternates: {
    canonical: '/contact',  // relative path — Next.js auto-completes to full URL using metadataBase
  },
};

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}

export default Contact;