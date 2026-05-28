import FloatingCertificate from "@/components/FloatingCertificate";
import SectionTitle from "@/components/SectionTitle";
import { certifications } from "@/lib/data";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="industrial-section z-10 bg-black/30">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Certifications"
          title="Statutory Trust Signals for Industrial Buyers"
          body="Certification visibility is treated as part of the brand architecture, reinforcing manufacturing discipline and enterprise credibility."
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((name, index) => (
            <FloatingCertificate key={name} name={name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
