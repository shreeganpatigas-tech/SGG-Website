import { Product, Industry, Certification, Metric } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "industrial-oxygen",
    name: "Industrial Oxygen",
    alias: "Oxygen Gas (O₂)",
    formula: "O₂",
    color: "#6EC1E4", // Oxygen Blue
    pressure: "150 - 200 Bar",
    purity: "≥ 99.7%",
    description: "Premium high-purity industrial oxygen supplied in cylinders and manifolds for intense high-temperature combustion and metal manipulation.",
    applications: ["Metal Cutting & Welding", "Laser Cutting Systems", "Steel Manufacturing", "Glass & Ceramic Melting"],
    specs: ["Moisture: < 50 ppm", "Hydrocarbons: < 10 ppm", "Cylinder Spec: IS 7285", "Valve Outlet: G-5/8\" Right Hand Female / Standard"],
    valveType: "IS-3224 Type 3"
  },
  {
    id: "medical-oxygen",
    name: "Medical Oxygen IP",
    alias: "Life Support (O₂ IP)",
    formula: "O₂",
    color: "#00E5FF", // Vibrant Cyan
    pressure: "137 - 150 Bar",
    purity: "≥ 99.5% (IP/BP)",
    description: "Pharmacopoeia-compliant medical oxygen manufactured under strict state-governed licensing, tailored for acute care units, ventilators, and emergency life support.",
    applications: ["Anesthesia Units", "Intensive Care Units (ICU)", "Hyperbaric Therapy", "Aerosol Therapy Delivery"],
    specs: ["Moisture: < 5 ppm", "Carbon Monoxide: < 5 ppm", "Carbon Dioxide: < 300 ppm", "ISO 13485 Medical Standard"],
    valveType: "Bullnose Type or Pin-Index"
  },
  {
    id: "argon-gas",
    name: "Argon Gas",
    alias: "Shielding Gas (Ar)",
    formula: "Ar",
    color: "#8E44AD", // Deep Purple
    pressure: "150 Bar",
    purity: "≥ 99.999% (UHP Grade)",
    description: "Ultra-high purity shield gas designed for TIG welding, metal casting protection, and aerospace fabrication. Prevents oxidation of molten weld beads.",
    applications: ["TIG & MIG Welding Protection", "Titanium & Stainless Steel Work", "Silicon Crystal Growth", "Double-Glazed Insulation Window Systems"],
    specs: ["Nitrogen: < 2 ppm", "Oxygen: < 1 ppm", "Moisture: < 2 ppm", "Inert Shield Validation Certified"],
    valveType: "IS-3224 Type 1 or Side Outlet"
  },
  {
    id: "carbon-dioxide",
    name: "Carbon Dioxide",
    alias: "Carbon Dioxide (CO₂)",
    formula: "CO₂",
    color: "#E67E22", // Bronze Orange
    pressure: "50 - 64 Bar (Liquid Phase)",
    purity: "≥ 99.99%",
    description: "Food and industrial-grade carbon dioxide for inerting systems, metal active gas (MAG) welding, water treatment, and food preservation cooling pipelines.",
    applications: ["MAG Welding Processes", "Fire Suppression Systems", "Foundry Core Hardening", "Effluent Neutralization"],
    specs: ["Moisture: < 20 ppm", "Sulfur Compound: < 0.1 ppm", "Carbon Monoxide: < 10 ppm", "Inerting Index: Certified Premium"],
    valveType: "IS-3224 Type 2 (External)"
  },
  {
    id: "nitrogen",
    name: "Nitrogen Gas",
    alias: "Inert Gas (N₂)",
    formula: "N₂",
    color: "#BFC3C7", // Titanium Silver
    pressure: "150 - 200 Bar",
    purity: "≥ 99.999% (Oxygen Free)",
    description: "High-volume dry nitrogen gas and liquid form supporting purge operations, refinery pipeline pressure testing, laser cutting shield cover, and food preservation.",
    applications: ["Pipeline Purging & Inerting", "Laser Cutting Shielding", "Electronic Device Curing", "Food Packing Protection"],
    specs: ["Oxygen: < 3 ppm", "Moisture: < 3 ppm", "Dew Point: -65°C", "Zero Flammability Shield Security"],
    valveType: "IS-3224 Type 3 (Female)"
  },
  {
    id: "nitrous-oxide",
    name: "Nitrous Oxide",
    alias: "Anesthetic (N₂O)",
    formula: "N₂O",
    color: "#3498DB", // Smooth Blue
    pressure: "51 Bar (Liquid Phase)",
    purity: "≥ 99.5% (Medical Grade)",
    description: "Premium medical-grade analgesic gas specifically filled and audited for surgical centers, dental clinics, and specialized industrial combustion acceleration.",
    applications: ["Inhalation Anesthesia", "Semi-Conductor Plasma Etching", "Atomic Absorption Spectroscopy", "Extreme Internal Combustion Boosting"],
    specs: ["Nitric Oxide: < 1 ppm", "Carbon Monoxide: < 5 ppm", "Total Halogens: < 1 ppm", "Auditable Filling Records maintained"],
    valveType: "Pin-Index & Chrome Finished Standard"
  },
  {
    id: "dissolved-acetylene",
    name: "Dissolved Acetylene",
    alias: "Fuel Gas (C₂H₂)",
    formula: "C₂H₂",
    color: "#E74C3C", // Safety Crimson Red
    pressure: "15 Bar",
    purity: "≥ 98.5% (In Acetone)",
    description: "Extremely high burning temperature fuel gas, safely dissolved in acetone within porous monolithic shell cylinders. Unbeatable for deep steel cutting and molding.",
    applications: ["Oxy-Acetylene Cutting", "Metal Flame Spraying", "High-Speed Steel Hardening", "Glass Container Lubrication"],
    specs: ["Phosphine & Hydrogen Sulfide Free", "Acetone Absorbent Spec: IS 7312", "Monolithic Porosity Index: 0.92", "Ultra Flame Velocity Standard"],
    valveType: "IS-3224 Type 4 (Left Hand Thread)"
  },
  {
    id: "lpg",
    name: "LPG (Liquefied Petroleum Gas)",
    alias: "Industrial Fuel (LPG)",
    formula: "C₃H₈ + C₄H₁₀",
    color: "#F39C12", // Warm Amber Orange
    pressure: "7 - 10 Bar",
    purity: "Standard High Calorific",
    description: "Premium industrial-grade LPG designed for high thermal-output furnaces, heat-treatment lines, cement kiln preheat zones, and customized industrial firing ovens.",
    applications: ["Metal Heat Treatment", "Industrial Furnace Fuel", "Kiln Auxiliary Firing", "Powder Coating Ovens"],
    specs: ["Calorific Value: ~11,000 kcal/kg", "Moisture Content: Nil", "Vapor Pressure at 37°C: < 14 Bar", "Industrial Cylinder Volume Options"],
    valveType: "Standard Self-Closing Valve or F-Type"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "power-plants",
    name: "Power Generation Plants",
    shortDesc: "Boiler Purging, Turbine Insulation, & High-Heat Metalwork.",
    description: "Modern power plants depend on high-volume gas supplies. Shree Ganpati Gastech provides continuous inert nitrogen for boiler purging, pure hydrogen/inert systems for turbine stator cooling line shields, and oxygen fuel for extreme machinery repairs.",
    gasUtilization: ["High Purity Nitrogen", "Argon Shielding", "Industrial Oxygen"],
    metric: "100% Safety Uptimes"
  },
  {
    id: "cement-plants",
    name: "Cement Plants & Kilns",
    shortDesc: "Auxiliary Combustion Fuel & Process Inerting.",
    description: "Cement manufacturers leverage SGG's high-calorific LPG feed lines and Nitrogen blankets to manage active combustion and prevent silo hot-spots. Our consistent gas delivery schedules protect cement kiln operational cycles.",
    gasUtilization: ["Industrial LPG", "Dry Nitrogen Purge Lines", "Carbon Dioxide"],
    metric: "Continuous Supply Logistics"
  },
  {
    id: "hospitals",
    name: "Hospitals & Medical Infrastructure",
    shortDesc: "Life Support IP Oxygen & Anesthetic Gases.",
    description: "Providing life-saving Medical Oxygen IP and Nitrous Oxide with 100% certificate compliance. Our dedicated medical-gas transport vehicles provide continuous backup manifold loops for critical healthcare networks across Madhya Pradesh.",
    gasUtilization: ["Medical Oxygen IP", "Nitrous Oxide IP", "Sterilization Gasses"],
    metric: "Sovereign IP Certified Quality"
  },
  {
    id: "manufacturing",
    name: "Heavy Industrial Manufacturing",
    shortDesc: "Laser-Cutting Protectants, Heat Treatment, & Atmosphere Control.",
    description: "Powering modern automated production hubs with high-pressure nitrogen for precise rust-free laser cutter finishes, process protective shielding, and high-performance metallic heat treatment operations.",
    gasUtilization: ["Inert Nitrogen 99.999%", "Argon Purge", "Liquid Gases"],
    metric: "UHP Gas Standards Metered"
  },
  {
    id: "fabrication",
    name: "Metal Fabrication & Deep Weld Work",
    shortDesc: "Ultra-Heat Oxy-Fuel Cutting & High-Strength Shield Weld.",
    description: "Supporting modern mechanical engineering workshops, boiler builders, and heavy machine shops with oxy-acetylene fuels, high-density carbon dioxide, and ultra-high purity argon for zero-defect architectural steel welds.",
    gasUtilization: ["Dissolved Acetylene", "Argon TIG Shield", "Oxygen Boost"],
    metric: "Dual Shield Weld Excellence"
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Heavy Engineering",
    shortDesc: "Structure Construction, Bridge Work, and Pipeline Fabrication.",
    description: "From structural high-gauge steel cutting on-site to heavy-duty hydraulic metalwork, we deliver on-demand gas manifolds directly to remote infrastructure, road, bridge, and pipeline sites.",
    gasUtilization: ["Industrial Oxygen", "LPG Fuels", "Shield Gases"],
    metric: "Direct Pipeline Logistics Support"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iso",
    name: "ISO 9001:2015 & 14001:2015",
    authority: "International Quality Management Standard",
    regNo: "SGG/QMS/2024-098",
    description: "Certified Quality and Environmental Protection Management Systems governing industrial gas manufacturing processes, purity tracking, and workplace safety parameters.",
    accentColor: "#B5121B"
  },
  {
    id: "peso",
    name: "PESO Certification / Licenses",
    authority: "Petroleum and Explosives Safety Organisation (Govt. of India)",
    regNo: "MP/GAS/PESO/A510-99",
    description: "Statutory government clearance for high-pressure gas cylinder testing, bulk filling operations, manifold cylinder transportation, and chemical safety compliant storage facilities.",
    accentColor: "#6EC1E4"
  },
  {
    id: "startup-india",
    name: "Startup India Recognised",
    authority: "DPIIT, Ministry of Commerce & Industry",
    regNo: "DPIIT-89410-SGG",
    description: "Official recognition from the Government of India supporting high-growth engineering innovations, sustainable gas distribution systems, and clean infrastructure development.",
    accentColor: "#3498DB"
  },
  {
    id: "gst-registered",
    name: "GST Registered Enterprise",
    authority: "Department of Revenue, Govt. of India",
    regNo: "23AAYCS3412B1Z8",
    description: "Fully compliant Indian tax registries ensuring transparent B2B invoice clearances, direct input-tax-credit (ITC) support, and standard logistics tracking documentation.",
    accentColor: "#F39C12"
  }
];

export const METRICS: Metric[] = [
  {
    label: "Annual Cylinder Fillings",
    value: "180",
    suffix: "K+",
    subtext: "High-pressure cylinders certified and filled annually under PESO norms."
  },
  {
    label: "Continuous Operational Purity",
    value: "99.999",
    suffix: "%",
    subtext: "Guaranteed purity levels for inert Nitrogen and high-grade Argon supplies."
  },
  {
    label: "Active Plant Feed Lines",
    value: "24",
    suffix: "/7",
    subtext: "Round-the-clock automated gas compression, bottling, and logistic dispatch."
  },
  {
    label: "Zero Accident Record",
    value: "100",
    suffix: "%",
    subtext: "Pristine industrial safety compliance profile across all manufacturing sites."
  }
];
