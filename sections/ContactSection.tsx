import GlassPanel from "@/components/GlassPanel";
import SectionTitle from "@/components/SectionTitle";
import { contact, contactLinks } from "@/lib/data";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import IndustrialScene from "@/components/IndustrialScene";

export default function ContactSection() {
  return (
    <section id="contact" className="industrial-section z-10">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <GlassPanel className="overflow-hidden">
          <IndustrialScene compact />
        </GlassPanel>
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Enterprise Gas Supply Coordination"
            body="Direct contact channels for industrial, medical, and infrastructure gas supply requirements."
          />
          <div className="grid gap-4">
            <a href={contactLinks.phone} className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[.045] p-5 transition hover:border-industrial-oxygen/50">
              <Phone className="h-5 w-5 text-industrial-oxygen" />
              <span>{contact.phone}</span>
            </a>
            <a href={contactLinks.email} className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[.045] p-5 transition hover:border-industrial-oxygen/50">
              <Mail className="h-5 w-5 text-industrial-oxygen" />
              <span>{contact.email}</span>
            </a>
            <div className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[.045] p-5">
              <MapPin className="h-5 w-5 text-industrial-oxygen" />
              <span>{contact.location}</span>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Youtube].map((Icon, index) => (
              <span key={index} className="grid h-11 w-11 place-items-center rounded-md border border-white/[.12] bg-white/[.04] text-white/[.72] transition hover:border-industrial-oxygen/60 hover:text-industrial-oxygen">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
