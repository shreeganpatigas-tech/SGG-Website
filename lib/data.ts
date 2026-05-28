import {
  Building2,
  Factory,
  Flame,
  FlaskConical,
  Gauge,
  HeartPulse,
  Landmark,
  Layers3,
  ShieldCheck,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";

export const navItems = ["Home", "About", "Products", "Industries", "Certifications", "Contact"];

export const products = [
  {
    name: "Industrial Oxygen",
    tone: "oxygen",
    description: "High-reliability oxygen supply for thermal cutting, steel work, fabrication, and process industries.",
    applications: "Power, cement, fabrication, manufacturing",
    icon: Gauge,
  },
  {
    name: "Medical Oxygen",
    tone: "oxygen",
    description: "Medical-grade oxygen supply for healthcare infrastructure with controlled handling standards.",
    applications: "Hospitals, clinics, emergency care",
    icon: HeartPulse,
  },
  {
    name: "Argon Gas",
    tone: "silver",
    description: "Inert gas support for welding, metallurgy, laboratory, and precision manufacturing environments.",
    applications: "Welding, fabrication, specialty process",
    icon: FlaskConical,
  },
  {
    name: "Carbon Dioxide",
    tone: "silver",
    description: "Industrial CO2 solutions for process cooling, shielding, and controlled industrial applications.",
    applications: "Manufacturing, fabrication, process plants",
    icon: Factory,
  },
  {
    name: "Nitrogen",
    tone: "silver",
    description: "Stable nitrogen supply for inerting, purging, pressure testing, and controlled-atmosphere operations.",
    applications: "Power, infrastructure, process industry",
    icon: Layers3,
  },
  {
    name: "Nitrous Oxide",
    tone: "oxygen",
    description: "Certified supply capability for specialist medical and industrial requirements.",
    applications: "Healthcare, specialty industrial use",
    icon: ShieldCheck,
  },
  {
    name: "Dissolved Acetylene",
    tone: "lpg",
    description: "Precision fuel gas for cutting, brazing, heating, and demanding fabrication workflows.",
    applications: "Fabrication, workshops, infrastructure",
    icon: Flame,
  },
  {
    name: "LPG",
    tone: "lpg",
    description: "Enterprise supply support for thermal operations and industrial energy applications.",
    applications: "Manufacturing, infrastructure, industrial traders",
    icon: Zap,
  },
];

export const industries = [
  { name: "Power Plants", icon: Zap, x: "16%", y: "34%" },
  { name: "Cement Plants", icon: Landmark, x: "32%", y: "68%" },
  { name: "Hospitals", icon: HeartPulse, x: "50%", y: "25%" },
  { name: "Manufacturing", icon: Factory, x: "65%", y: "63%" },
  { name: "Fabrication", icon: Workflow, x: "80%", y: "36%" },
  { name: "Infrastructure", icon: Building2, x: "88%", y: "73%" },
];

export const certifications = ["ISO", "PESO", "Startup India", "GST"];

export const features = [
  ["Certified Manufacturing", "Standards-led infrastructure backed by statutory registrations and operating discipline."],
  ["Reliable Supply", "Built for continuity across hospitals, power, cement, fabrication, and industrial customers."],
  ["Industrial Safety Standards", "Gas handling, storage, and dispatch workflows designed around safety-first controls."],
  ["High Purity Gases", "Manufacturing quality focused on controlled purity, pressure, and application consistency."],
  ["Operational Excellence", "Enterprise-grade planning for production, cylinder movement, and dispatch readiness."],
  ["Industry Experience", "A regional manufacturing base serving the industrial growth corridor of Madhya Pradesh."],
];

export const metrics = [
  { label: "Gas Categories", value: 8, suffix: "+" },
  { label: "Enterprise Segments", value: 6, suffix: "+" },
  { label: "Certified Operations", value: 4, suffix: "" },
];

export const contact = {
  company: "Shree Ganpati Gastech Private Limited",
  brand: "SGG Gas Dynamics",
  phone: "+91 7987594387",
  email: "shreeganpatigastech@gmail.com",
  location: "Burhar, Shahdol, Madhya Pradesh, India",
};

export const contactLinks = {
  phone: "tel:+917987594387",
  email: "mailto:shreeganpatigastech@gmail.com",
};

export const iconSet = { Truck };
