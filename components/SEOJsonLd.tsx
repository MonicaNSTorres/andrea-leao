import { siteConfig } from "@/lib/site";

export function SEOJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Andréa Leão Psicóloga",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+55 12 98178-8004",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Alfredo Ignácio Nogueira Penido, 255",
      addressLocality: "São José dos Campos",
      addressRegion: "SP",
      postalCode: "12246-000",
      addressCountry: "BR",
    },
    areaServed: ["São José dos Campos", "Brasil"],
    serviceType: "Psicoterapia presencial e online",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}