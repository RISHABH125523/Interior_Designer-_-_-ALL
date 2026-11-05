import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Zap,
  Lightbulb,
  Plug,
  House,
  Factory,
  Fan,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  Wrench,
  Sparkles,
  CircuitBoard,
  MoveUpRight,
  Activity,
  Power,
} from "lucide-react";

const phoneNumber = "919876543210";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  "Hello RISHI INTERIOR & ALL, I need electrical services."
)}`;

const callLink = `tel:+${phoneNumber}`;

const services = [
  {
    number: "01",
    icon: Zap,
    title: "Wiring & Installation",
    tag: "CORE SYSTEM",
    description:
      "Professional wiring and electrical installation for residential and commercial environments.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Lighting Architecture",
    tag: "LIGHT DESIGN",
    description:
      "Ambient, decorative, and modern LED lighting designed to elevate the mood of your space.",
  },
  {
    number: "03",
    icon: Plug,
    title: "Switch & Socket Systems",
    tag: "SMART DETAIL",
    description:
      "Organized switchboards, sockets, and power points with a clean, considered finish.",
  },
  {
    number: "04",
    icon: House,
    title: "Residential Electrical",
    tag: "HOME SYSTEMS",
    description:
      "Complete electrical solutions for new homes, interiors, and renovation projects.",
  },
  {
    number: "05",
    icon: Factory,
    title: "Commercial Electrical",
    tag: "WORKSPACES",
    description:
      "Electrical installation services for offices, shops, studios, and commercial spaces.",
  },
  {
    number: "06",
    icon: Fan,
    title: "Appliance Installation",
    tag: "DAILY ESSENTIALS",
    description:
      "Installation of ceiling fans, exhaust fans, and electrical appliances with care.",
  },
];

const projects = [
  {
    number: "01",
    title: "The Ambient Residence",
    category: "Architectural Lighting",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "The Pendant Collection",
    category: "Decorative Lighting",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "The Power Studio",
    category: "Electrical Installation",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "The Modern Detail",
    category: "Switchboard Design",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  "Safety-conscious installation practices",
  "Professional electrical workmanship",
  "Suitable materials and fittings",
  "Clean and organized execution",
  "Planned project coordination",
  "Residential and commercial solutions",
];

const process = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your requirements, project scope, and the intended use of your space.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "We inspect the site and plan the electrical work according to its requirements.",
  },
  {
    number: "03",
    title: "Precision Installation",
    description:
      "The planned electrical work is carried out with attention to workmanship and safety.",
  },
  {
    number: "04",
    title: "Testing & Handover",
    description:
      "The completed installation is reviewed and tested before project handover.",
  },
];

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Safety-conscious planning and installation practices for every project.",
  },
  {
    icon: Wrench,
    title: "Skilled Workmanship",
    description:
      "Careful execution with attention to installation quality and details.",
  },
  {
    icon: Clock,
    title: "Planned Delivery",
    description:
      "A structured workflow to help keep project execution organized.",
  },
  {
    icon: Activity,
    title: "System Review",
    description:
      "Testing and inspection of completed electrical work before handover.",
  },
];

const Electrical = () => {
  return (
    <main className="overflow-hidden bg-[#f7f5ef] text-[#29271f]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[780px] overflow-hidden bg-[#20211d]">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2200&q=90"
          alt="Electrical installation and modern electrical systems"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#171813]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171813]/95 via-[#171813]/70 to-[#171813]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171813]/80 via-transparent to-[#171813]/20" />

        {/* Futuristic circuit-inspired decoration */}
        <div className="pointer-events-none absolute -right-24 top-24 hidden h-[650px] w-[650px] rounded-full border border-white/10 lg:block">
          <div className="absolute inset-16 rounded-full border border-[#c9ab78]/25" />
          <div className="absolute inset-32 rounded-full border border-white/10" />
          <div className="absolute inset-48 rounded-full border border-[#c9ab78]/20" />

          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />

          <div className="absolute left-[20%] top-[30%] h-3 w-3 rounded-full bg-[#d4b681] shadow-[0_0_25px_#d4b681]" />
          <div className="absolute bottom-[20%] right-[28%] h-2 w-2 rounded-full bg-white/80" />

          <div className="absolute right-20 top-24 border border-[#c9ab78]/30 bg-[#20211d]/80 p-5 backdrop-blur-xl">
            <CircuitBoard size={28} className="text-[#d4b681]" />
            <p className="mt-3 text-[8px] tracking-[0.25em] text-white/50">
              SYSTEM / 001
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1500px] flex-col justify-between px-6 pb-10 pt-32 lg:px-14">
          <div>
            <div className="mb-10 flex flex-wrap items-center gap-3 text-[9px] tracking-[0.28em] text-white/55">
              <Link to="/" className="transition hover:text-[#d4b681]">
                HOME
              </Link>
              <span className="text-[#d4b681]">/</span>
              <Link to="/allwork" className="transition hover:text-[#d4b681]">
                ALL WORK
              </Link>
              <span className="text-[#d4b681]">/</span>
              <span className="text-white">ELECTRICAL</span>
            </div>

            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#d4b681]" />
              <span className="text-[9px] tracking-[0.3em] text-white/75">
                RISHI INTERIOR & ALL — ELECTRICAL STUDIO
              </span>
            </div>

            <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl lg:text-[108px]">
              Powering
              <br />
              modern spaces.
              <br />
              <span className="italic text-[#d4b681]">
                Designed to connect.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/65 md:text-base">
              Thoughtful electrical solutions for contemporary living.
              From lighting architecture to complete electrical systems,
              we combine functional design with careful workmanship.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-[#d4b681] px-7 py-4 text-[10px] tracking-[0.2em] text-[#24231f] transition duration-300 hover:bg-white"
              >
                DISCUSS YOUR PROJECT
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-[10px] tracking-[0.2em] text-white transition duration-300 hover:border-[#d4b681] hover:bg-[#d4b681] hover:text-[#24231f]"
              >
                EXPLORE OUR WORK
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-white/40">
                APPROACH
              </p>
              <p className="mt-2 font-serif text-xl text-white">
                Safety-led execution
              </p>
            </div>

            <div>
              <p className="text-[9px] tracking-[0.25em] text-white/40">
                DESIGN
              </p>
              <p className="mt-2 font-serif text-xl text-white">
                Modern functionality
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-[9px] tracking-[0.25em] text-white/40">
                STUDIO SERIES
              </p>
              <p className="mt-2 font-serif text-xl text-[#d4b681]">
                Electrical / 002
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a48658]">
                <span className="h-px w-8 bg-[#a48658]" />
                THE ART OF FUNCTION
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
                Every connection
                <br />
                <span className="italic text-[#a48658]">
                  has a purpose.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-16">
              <p className="text-sm leading-8 text-[#777064] md:text-base">
                Electrical systems are an essential part of every interior.
                The right installation supports comfort, functionality,
                and the overall experience of a space. We focus on
                thoughtful planning, organized work, and quality finishing.
              </p>

              <div className="mt-8 flex items-center gap-5">
                <div className="h-px w-14 bg-[#a48658]" />
                <span className="text-[10px] tracking-[0.25em] text-[#a48658]">
                  CONNECT WITH CONFIDENCE
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-5 border-t border-[#ded8cb] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "PLAN & ASSESS"],
              ["02", "INSTALL WITH CARE"],
              ["03", "TEST THE SYSTEM"],
              ["04", "REVIEW & HANDOVER"],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-4">
                <span className="font-serif text-3xl text-[#a48658]">
                  {number}
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#777064]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-[#eeebe3] px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-[#c9ab78]/50" />

            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85"
              alt="Modern decorative lighting in a contemporary interior"
              className="relative h-[450px] w-full object-cover md:h-[620px]"
            />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between bg-[#24231f]/95 p-6 text-white backdrop-blur-md md:bottom-8 md:left-8 md:right-8">
              <div>
                <p className="text-[9px] tracking-[0.3em] text-[#d4b681]">
                  RISHI INTERIOR & ALL
                </p>
                <p className="mt-2 font-serif text-2xl">
                  Function meets form.
                </p>
              </div>
              <MoveUpRight size={24} className="text-[#d4b681]" />
            </div>
          </div>

          <div>
            <p className="mb-6 text-[10px] tracking-[0.35em] text-[#a48658]">
              OUR ELECTRICAL PHILOSOPHY
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Reliable systems.
              <br />
              <span className="italic text-[#a48658]">
                Refined execution.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#777064]">
              At RISHI INTERIOR & ALL, we deliver electrical services
              for residential and commercial spaces. From lighting
              installations to complete electrical setup, we focus
              on quality, functionality, and careful execution.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#777064]">
              Our process emphasizes proper planning, suitable materials,
              organized installation, and final review of completed work.
            </p>

            <div className="mt-9 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 items-center justify-center border border-[#c9ab78]">
                    <Check size={13} className="text-[#a48658]" />
                  </div>
                  <span className="text-sm text-[#49453d]">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#a48658] pb-3 text-[10px] tracking-[0.2em] text-[#49453d] transition hover:text-[#a48658]"
            >
              DISCOVER OUR STUDIO
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a48658]">
                <span className="h-px w-8 bg-[#a48658]" />
                OUR CAPABILITIES
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl">
                Electrical
                <br />
                <span className="italic text-[#a48658]">
                  systems, reimagined.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-8 text-[#777064] md:justify-self-end">
              Complete electrical solutions for modern homes, commercial
              spaces, and interior renovation projects.
            </p>
          </div>

          <div className="grid gap-px border border-[#ded8cb] bg-[#ded8cb] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group bg-[#f7f5ef] p-7 transition duration-500 hover:bg-[#24231f] md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-[#a48658]">
                      {service.number}
                    </span>

                    <Icon
                      size={25}
                      strokeWidth={1.3}
                      className="text-[#a48658] transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                    />
                  </div>

                  <p className="mt-9 text-[9px] tracking-[0.25em] text-[#a48658]">
                    {service.tag}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl leading-snug text-[#282720] transition-colors group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#777064] transition-colors group-hover:text-white/55">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-8 flex items-center justify-between border-t border-[#ded8cb] pt-5 text-[9px] tracking-[0.2em] text-[#a48658] transition-colors group-hover:border-white/10"
                  >
                    DISCUSS THIS SERVICE
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="bg-[#24231f] px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#d2b17b]">
                <span className="h-px w-8 bg-[#d2b17b]" />
                SELECTED PROJECTS
              </p>

              <h2 className="font-serif text-4xl text-white sm:text-5xl md:text-7xl">
                Light. Detail.
                <br />
                <span className="italic text-[#d2b17b]">
                  Atmosphere.
                </span>
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 text-[10px] tracking-[0.2em] text-white/70 transition hover:text-[#d2b17b]"
            >
              VIEW ALL PROJECTS
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article key={project.number} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[400px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute left-4 top-4 border border-white/30 bg-black/20 px-3 py-2 text-[9px] tracking-[0.2em] text-white backdrop-blur-sm">
                    PROJECT / {project.number}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] tracking-[0.2em] text-[#d2b17b]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFETY & QUALITY ================= */}
      <section className="bg-[#eeebe3] px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a48658]">
                <span className="h-px w-8 bg-[#a48658]" />
                SAFETY & QUALITY
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Built with care.
                <br />
                <span className="italic text-[#a48658]">
                  Checked with purpose.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#777064]">
                Electrical work requires careful planning and qualified
                professionals. Our approach prioritizes safety-conscious
                installation, suitable materials, and review of completed
                work before handover.
              </p>

              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-3 bg-[#24231f] px-7 py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#a48658]"
              >
                DISCUSS YOUR REQUIREMENTS
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-px border border-[#ded8cb] bg-[#ded8cb] sm:grid-cols-2 lg:col-span-7">
              {safetyFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group bg-[#f7f5ef] p-8 transition hover:bg-white"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={27}
                        strokeWidth={1.4}
                        className="text-[#a48658] transition-transform group-hover:-translate-y-1"
                      />

                      <span className="text-[10px] tracking-[0.2em] text-[#a48658]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 font-serif text-2xl">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#777064]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a48658]">
                <span className="h-px w-8 bg-[#a48658]" />
                OUR PROCESS
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                From planning
                <br />
                <span className="italic text-[#a48658]">
                  to power.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#777064]">
                A structured process keeps your electrical project
                coordinated — from the first consultation to final
                testing and handover.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <Power size={20} className="text-[#a48658]" />
                <span className="text-[9px] tracking-[0.25em] text-[#777064]">
                  PLAN / INSTALL / VERIFY
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              {process.map((step, index) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c9ab78] font-serif text-lg text-[#a48658] transition hover:bg-[#c9ab78] hover:text-white">
                      {step.number}
                    </div>

                    {index !== process.length - 1 && (
                      <div className="my-2 h-full min-h-16 w-px bg-[#ded8cb]" />
                    )}
                  </div>

                  <div className="flex-1 border-b border-[#ded8cb] pb-8 pt-1">
                    <h3 className="font-serif text-2xl">{step.title}</h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#777064]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#24231f] px-6 py-24 lg:px-14 lg:py-32">
        <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-8 h-[340px] w-[340px] rounded-full border border-[#c9ab78]/20" />
        <div className="absolute right-24 top-24 h-[170px] w-[170px] rounded-full border border-white/5" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#c9ab78]/40 text-[#d2b17b]">
            <Sparkles size={23} />
          </div>

          <p className="mb-6 text-[10px] tracking-[0.35em] text-[#d2b17b]">
            POWER YOUR NEXT PROJECT
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-7xl">
            Let’s connect
            <br />
            your space to
            <span className="italic text-[#d2b17b]"> the future.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/55">
            From essential electrical installations to modern lighting
            solutions, let’s discuss what your space needs.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 bg-[#c9ab78] px-8 py-4 text-[10px] tracking-[0.2em] text-[#24231f] transition hover:bg-white"
            >
              REQUEST A CONSULTATION
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href={callLink}
              className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-[10px] tracking-[0.2em] text-white transition hover:border-[#c9ab78] hover:bg-[#c9ab78] hover:text-[#24231f]"
            >
              <Phone size={15} />
              CALL OUR STUDIO
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] text-white/50 transition hover:text-[#d2b17b]"
            >
              <MessageCircle size={15} />
              CHAT ON WHATSAPP
            </a>
          </div>

          <div className="mt-16 border-t border-white/10 pt-6">
            <p className="text-[9px] tracking-[0.25em] text-white/35">
              RISHI INTERIOR & ALL / ELECTRICAL STUDIO / POWER • PRECISION • DETAIL
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Electrical;
