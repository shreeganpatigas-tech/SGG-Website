import { contact, products } from "@/lib/data";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: contact.company,
  alternateName: contact.brand,
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Burhar",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  areaServed: "India",
  makesOffer: products.map((product) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: product.name,
      description: product.description,
    },
  })),
  sameAs: [
    "https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://www.youtube.com/",
  ],
};
