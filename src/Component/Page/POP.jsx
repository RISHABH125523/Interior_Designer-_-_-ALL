import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
  MoveUpRight,
  Layers3,
  Ruler,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const POP = () => {
  const popServices = [
    {
      number: "01",
      title: "POP Ceiling Design",
      description:
        "Sculptural ceiling concepts that bring elegance, depth, and character to your interior.",
      icon: Layers3,
    },
    {
      number: "02",
      title: "Gypsum Board Ceiling",
      description:
        "Clean, refined ceiling systems designed for modern residential and commercial spaces.",
      icon: Ruler,
    },
    {
      number: "03",
      title: "Designer False Ceiling",
      description:
        "Contemporary ceiling compositions with layered forms and distinctive architectural details.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "POP Cornice Work",
      description:
        "Decorative edges and transitions that create a seamless, premium interior finish.",
      icon: MoveUpRight,
    },
    {
      number: "05",
      title: "Wall Molding Design",
      description:
        "Elegant wall detailing that adds dimension and a timeless architectural statement.",
      icon: Layers3,
    },
    {
      number: "06",
      title: "LED Cove Lighting",
      description:
        "Ambient lighting details that shape the mood and highlight your ceiling design.",
      icon: Lightbulb,
    },
    {
      number: "07",
      title: "3D Ceiling Design",
      description:
        "Custom geometric and layered designs that transform ceilings into visual features.",
      icon: Sparkles,
    },
    {
      number: "08",
      title: "Complete POP Installation",
      description:
        "A coordinated installation process from design planning to final finishing.",
      icon: ShieldCheck,
    },
  ];

  const popProjects = [
    {
      title: "The Sculpted Living",
      type: "Residential · Ceiling Design",
      number: "01",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Serene Bedroom",
      type: "Residential · Modern POP",
      number: "02",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Architectural Harmony",
      type: "Luxury · Interior Finishing",
      number: "03",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const benefits = [
    "Customized ceiling concepts",
    "Quality materials and detailing",
    "Professional installation",
    "Clean and precise finishing",
  ];

  return (
    <main className="overflow-hidden bg-[#f8f6f1] text-[#282720]">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#22221d] pt-20">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury interior with contemporary ceiling design"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#171713]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171713]/90 via-[#171713]/55 to-transparent" />

        {/* Decorative geometry */}
        <div className="absolute right-[-90px] top-24 hidden h-[440px] w-[440px] rounded-full border border-white/15 lg:block">
          <div className="absolute inset-8 rounded-full border border-[#c9ab78]/30" />
          <div className="absolute inset-20 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9ab78]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-10 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.2em] text-white/55">
            <Link to="/" className="transition hover:text-[#d2b17b]">
              HOME
            </Link>
            <span className="text-[#c9ab78]">/</span>
            <Link to="/allwork" className="transition hover:text-[#d2b17b]">
              ALL WORK
            </Link>
            <span className="text-[#c9ab78]">/</span>
            <span className="text-white">POP WORK</span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-md">
              <Sparkles size={15} className="text-[#d2b17b]" />
              <span className="text-[9px] tracking-[0.3em] text-white/80">
                RISHI INTERIOR & ALL / CEILING STUDIO
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[1.08] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              The Art of
              <br />
              <span className="italic text-[#d2b17b]">
                Looking Up.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
              Discover a new dimension of interior design with premium
              POP ceilings, sculptural forms, refined details, and
              lighting concepts crafted to transform the atmosphere
              of every space.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-[#c9ab78] px-7 py-4 text-[10px] tracking-[0.2em] text-[#24231f] transition hover:bg-white"
              >
                DISCUSS YOUR PROJECT
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-[10px] tracking-[0.2em] text-white transition hover:border-[#c9ab78] hover:bg-[#c9ab78] hover:text-[#24231f]"
              >
                <Phone size={15} />
                CALL OUR STUDIO
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 hidden items-center justify-between text-[9px] tracking-[0.25em] text-white/40 md:flex lg:left-12 lg:right-12">
          <span>ARCHITECTURAL CEILING DESIGN</span>
          <span>01 — 08 / SPECIALIZED SERVICES</span>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a48658]">
                <span className="h-px w-8 bg-[#a48658]" />
                OUR DESIGN APPROACH
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                More than a ceiling.
                <br />
                <span className="italic text-[#a48658]">
                  A design statement.
                </span>
              </h2>
            </div>

            <div className="lg:pl-12">
              <p className="text-sm leading-8 text-[#777064] md:text-base">
                A thoughtfully designed ceiling can completely change
                the character of a room. Our POP work combines
                architectural creativity with careful execution to
                create spaces that feel balanced, elevated, and
                distinctly yours.
              </p>

              <div className="mt-8 flex items-center gap-5">
                <div className="h-px w-14 bg-[#a48658]" />
                <span className="text-[10px] tracking-[0.25em] text-[#a48658]">
                  DESIGNED WITH INTENTION
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 border-t border-[#ded8cb] pt-8 sm:grid-cols-3">
            <div>
              <p className="font-serif text-3xl">01</p>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-[#777064]">
                CONCEPT & PLANNING
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl">02</p>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-[#777064]">
                DESIGN & DETAIL
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl">03</p>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-[#777064]">
                INSTALLATION & FINISH
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-[#eeebe3] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-[#c9ab78]/50" />

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
              alt="Elegant contemporary interior"
              className="relative h-[420px] w-full object-cover md:h-[570px]"
            />

            <div className="absolute bottom-6 left-6 bg-[#24231f] px-6 py-5 text-white md:bottom-8 md:left-8">
              <p className="text-[9px] tracking-[0.3em] text-[#d2b17b]">
                RISHI INTERIOR & ALL
              </p>
              <p className="mt-2 font-serif text-xl">
                Detail makes the difference.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-6 text-[10px] tracking-[0.35em] text-[#a48658]">
              THE CRAFT BEHIND THE DESIGN
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Refined details.
              <br />
              <span className="italic text-[#a48658]">
                Seamless execution.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#777064]">
              POP ceiling design is an opportunity to bring architecture,
              lighting, and interior styling together. We create
              customized ceiling solutions that complement the
              proportions and character of your space.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#777064]">
              From understated contemporary ceilings to elaborate
              decorative concepts, our focus remains on thoughtful
              design, quality materials, and a carefully finished result.
            </p>

            <div className="mt-9 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 items-center justify-center border border-[#c9ab78]">
                    <Check size={13} className="text-[#a48658]" />
                  </div>
                  <span className="text-sm text-[#49453d]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#a48658] pb-3 text-[10px] tracking-[0.2em] text-[#49453d] transition hover:text-[#a48658]"
            >
              LET’S DISCUSS YOUR SPACE
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a48658]">
                <span className="h-px w-8 bg-[#a48658]" />
                WHAT WE CREATE
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl">
                POP Work
                <br />
                <span className="italic text-[#a48658]">
                  & Ceiling Solutions.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-8 text-[#777064] md:justify-self-end">
              Explore our range of ceiling and decorative services,
              designed to complement modern living and timeless
              architectural interiors.
            </p>
          </div>

          <div className="grid gap-px border border-[#ded8cb] bg-[#ded8cb] sm:grid-cols-2 lg:grid-cols-4">
            {popServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group bg-[#f8f6f1] p-7 transition duration-300 hover:bg-[#24231f] md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-[#a48658]">
                      {service.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.3}
                      className="text-[#a48658] transition-transform duration-300 group-hover:rotate-6"
                    />
                  </div>

                  <h3 className="mt-10 font-serif text-2xl leading-snug text-[#282720] transition-colors group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#777064] transition-colors group-hover:text-white/55">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[#ded8cb] pt-5 transition-colors group-hover:border-white/10">
                    <span className="text-[9px] tracking-[0.2em] text-[#a48658]">
                      POP / DESIGN
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[#a48658] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="bg-[#24231f] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#d2b17b]">
                <span className="h-px w-8 bg-[#d2b17b]" />
                SELECTED WORK
              </p>

              <h2 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl">
                Spaces that
                <br />
                <span className="italic text-[#d2b17b]">
                  speak design.
                </span>
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 text-[10px] tracking-[0.2em] text-white/70 transition hover:text-[#d2b17b]"
            >
              EXPLORE ALL PROJECTS
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popProjects.map((project) => (
              <article key={project.number} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[390px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70" />

                  <div className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-[9px] tracking-[0.2em] text-white backdrop-blur-sm">
                    PROJECT / {project.number}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] tracking-[0.2em] text-[#d2b17b]">
                        {project.type}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40 text-white transition group-hover:border-[#d2b17b] group-hover:bg-[#d2b17b] group-hover:text-[#24231f]">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-6 text-[10px] tracking-[0.35em] text-[#a48658]">
              OUR PROCESS
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              From your vision
              <br />
              <span className="italic text-[#a48658]">
                to the final detail.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#777064]">
              A thoughtful process that keeps your project clear,
              coordinated, and focused on the final design.
            </p>
          </div>

          <div className="grid gap-8 border-t border-[#ded8cb] pt-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Consultation",
                text: "We understand your space, ideas, needs, and design preferences.",
              },
              {
                number: "02",
                title: "Design Planning",
                text: "We develop a ceiling concept that complements your interior.",
              },
              {
                number: "03",
                title: "Execution",
                text: "Our team carries out the planned work with attention to detail.",
              },
              {
                number: "04",
                title: "Final Finish",
                text: "We focus on the final detailing and overall visual finish.",
              },
            ].map((step) => (
              <div key={step.number}>
                <p className="font-serif text-4xl text-[#a48658]">
                  {step.number}
                </p>

                <h3 className="mt-6 font-serif text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#777064]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#e9e3d7] px-6 py-24 lg:px-12 lg:py-32">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#c9ab78]/30" />
        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#c9ab78]/30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-[10px] tracking-[0.35em] text-[#a48658]">
            YOUR SPACE, REIMAGINED
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
            Ready to look
            <br />
            <span className="italic text-[#a48658]">
              above ordinary?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#777064]">
            Let’s bring your ceiling design ideas to life with
            thoughtful planning, refined details, and professional
            interior execution.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 bg-[#24231f] px-8 py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#c9ab78] hover:text-[#24231f]"
            >
              REQUEST A CONSULTATION
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20POP%20ceiling%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border border-[#24231f]/30 px-8 py-4 text-[10px] tracking-[0.2em] transition hover:border-[#24231f] hover:bg-[#24231f] hover:text-white"
            >
              WHATSAPP ENQUIRY
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default POP;
