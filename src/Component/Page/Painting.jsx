import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  PaintRoller,
  Brush,
  Home,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  Palette,
  Layers3,
  MoveUpRight,
  Droplets,
  WandSparkles,
  CircleDot,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Home,
    title: "Interior Painting",
    description:
      "Elegant wall finishes for living rooms, bedrooms, kitchens, and complete residential interiors.",
    tag: "RESIDENTIAL",
  },
  {
    number: "02",
    icon: PaintRoller,
    title: "Exterior Painting",
    description:
      "Weather-conscious finishes that refresh your property's exterior and create lasting appeal.",
    tag: "EXTERIOR",
  },
  {
    number: "03",
    icon: Brush,
    title: "Texture & Effects",
    description:
      "Artful textures and layered finishes that bring depth, dimension, and character to walls.",
    tag: "SPECIAL FINISH",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Decorative Walls",
    description:
      "Statement walls, accent colors, and refined decorative painting for distinctive spaces.",
    tag: "DESIGN DETAIL",
  },
];

const projects = [
  {
    number: "01",
    title: "The Calm Residence",
    category: "Soft Neutral Finish",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    size: "large",
  },
  {
    number: "02",
    title: "The Warm Retreat",
    category: "Premium Wall Finish",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    number: "03",
    title: "The Modern Sanctuary",
    category: "Decorative Painting",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    number: "04",
    title: "The Textured Space",
    category: "Contemporary Finish",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    size: "large",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We visit your space, understand your vision, and identify the right painting solution.",
  },
  {
    number: "02",
    title: "Design the Palette",
    description:
      "Colors, finishes, and textures are selected to complement your interior and lifestyle.",
  },
  {
    number: "03",
    title: "Prepare with Precision",
    description:
      "Walls are cleaned, repaired, sanded, and prepared for a smooth, consistent finish.",
  },
  {
    number: "04",
    title: "Craft the Finish",
    description:
      "Primer and paint are applied with care, using a planned process and attention to detail.",
  },
  {
    number: "05",
    title: "Review & Reveal",
    description:
      "We inspect the final result, complete touch-ups, and leave the space ready to enjoy.",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Material Integrity",
    description:
      "Suitable paint systems and materials are selected according to the needs of each space.",
  },
  {
    icon: Star,
    title: "Detail-Driven Craft",
    description:
      "Edges, corners, transitions, and finishing details receive careful attention.",
  },
  {
    icon: Clock,
    title: "Organized Execution",
    description:
      "A planned workflow helps keep your painting project coordinated and efficient.",
  },
  {
    icon: Palette,
    title: "Color Intelligence",
    description:
      "Thoughtful palettes create a visual balance between light, space, and atmosphere.",
  },
];

const palettes = [
  { name: "Warm Minimal", code: "#D9C9B1", hex: "D9C9B1" },
  { name: "Earth & Clay", code: "#B98568", hex: "B98568" },
  { name: "Soft Olive", code: "#9C9B7B", hex: "9C9B7B" },
  { name: "Modern Charcoal", code: "#57564F", hex: "57564F" },
  { name: "Ivory Mist", code: "#E9E3D8", hex: "E9E3D8" },
];

const Painting = () => {
  return (
    <main className="overflow-hidden bg-[#f7f5ef] text-[#272720]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[780px] overflow-hidden bg-[#20211d]">
        <img
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=2200&q=90"
          alt="Professional wall painting and interior finishing"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#171813]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171813]/95 via-[#171813]/65 to-[#171813]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171813]/80 via-transparent to-[#171813]/20" />

        {/* Futuristic orbit graphic */}
        <div className="pointer-events-none absolute -right-40 top-20 hidden h-[700px] w-[700px] rounded-full border border-white/10 lg:block">
          <div className="absolute inset-16 rounded-full border border-[#c9ab78]/25" />
          <div className="absolute inset-32 rounded-full border border-white/10" />
          <div className="absolute inset-48 rounded-full border border-[#c9ab78]/20" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
          <div className="absolute left-[22%] top-[22%] h-2 w-2 rounded-full bg-[#d4b681]" />
          <div className="absolute bottom-[22%] right-[22%] h-2 w-2 rounded-full bg-white/70" />
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
              <span className="text-white">PAINTING</span>
            </div>

            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#d4b681]" />
              <span className="text-[9px] tracking-[0.3em] text-white/75">
                RISHI INTERIOR & ALL — COLOR STUDIO
              </span>
            </div>

            <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl lg:text-[108px]">
              Color is more
              <br />
              than a finish.
              <br />
              <span className="italic text-[#d4b681]">
                It is a feeling.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/65 md:text-base">
              A new perspective on painting. We bring color, texture, and
              craftsmanship together to transform everyday spaces into
              thoughtful, beautifully finished environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-[#d4b681] px-7 py-4 text-[10px] tracking-[0.2em] text-[#24231f] transition duration-300 hover:bg-white"
              >
                START YOUR PROJECT
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-[10px] tracking-[0.2em] text-white transition duration-300 hover:border-[#d4b681] hover:bg-[#d4b681] hover:text-[#24231f]"
              >
                VIEW PROJECTS
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-white/40">
                DESIGN APPROACH
              </p>
              <p className="mt-2 font-serif text-xl text-white">
                Color with purpose
              </p>
            </div>

            <div>
              <p className="text-[9px] tracking-[0.25em] text-white/40">
                FINISH PHILOSOPHY
              </p>
              <p className="mt-2 font-serif text-xl text-white">
                Precision in detail
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-[9px] tracking-[0.25em] text-white/40">
                STUDIO SERIES
              </p>
              <p className="mt-2 font-serif text-xl text-[#d4b681]">
                Painting / 001
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
                THE ART OF COLOR
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
                A room can change.
                <br />
                <span className="italic text-[#a48658]">
                  A feeling can stay.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-16">
              <p className="text-sm leading-8 text-[#777064] md:text-base">
                The right color can open up a room, create a sense of calm,
                or give a space a stronger identity. We approach painting
                as a design detail — with considered palettes, proper
                preparation, and a refined finish.
              </p>

              <div className="mt-8 flex items-center gap-5">
                <div className="h-px w-14 bg-[#a48658]" />
                <span className="text-[10px] tracking-[0.25em] text-[#a48658]">
                  MAKE SPACE FEEL DIFFERENT
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-5 border-t border-[#ded8cb] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "COLOR CONSULTATION"],
              ["02", "SURFACE PREPARATION"],
              ["03", "PAINT APPLICATION"],
              ["04", "DETAIL & FINISH"],
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
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=85"
              alt="Painting professionals creating a refined wall finish"
              className="relative h-[450px] w-full object-cover md:h-[620px]"
            />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between bg-[#24231f]/95 p-6 text-white backdrop-blur-md md:bottom-8 md:left-8 md:right-8">
              <div>
                <p className="text-[9px] tracking-[0.3em] text-[#d4b681]">
                  RISHI INTERIOR & ALL
                </p>
                <p className="mt-2 font-serif text-2xl">
                  Every detail matters.
                </p>
              </div>
              <MoveUpRight size={24} className="text-[#d4b681]" />
            </div>
          </div>

          <div>
            <p className="mb-6 text-[10px] tracking-[0.35em] text-[#a48658]">
              OUR PAINTING PHILOSOPHY
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Thoughtful colors.
              <br />
              <span className="italic text-[#a48658]">
                Intentional details.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#777064]">
              At RISHI INTERIOR & ALL, painting is more than applying
              color. It is about creating harmony between the walls,
              furniture, lighting, and overall character of your space.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#777064]">
              From understated neutrals to expressive accent walls, our
              approach combines practical preparation with an eye for
              beautiful finishing.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Carefully selected paints and materials",
                "Professional surface preparation",
                "Clean edges and refined finishing",
                "Color choices suited to your space",
                "A clear and organized work process",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 items-center justify-center border border-[#c9ab78]">
                    <Check size={13} className="text-[#a48658]" />
                  </div>
                  <span className="text-sm text-[#49453d]">{item}</span>
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
                OUR EXPERTISE
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl">
                Finishes that
                <br />
                <span className="italic text-[#a48658]">
                  define a space.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-8 text-[#777064] md:justify-self-end">
              From a subtle refresh to a bold design statement, discover
              painting services shaped around your space and vision.
            </p>
          </div>

          <div className="grid gap-px border border-[#ded8cb] bg-[#ded8cb] sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ================= COLOR PALETTE ================= */}
      <section className="relative overflow-hidden bg-[#24231f] px-6 py-24 lg:px-14 lg:py-32">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/5" />
        <div className="absolute -right-4 -top-4 h-64 w-64 rounded-full border border-[#c9ab78]/10" />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#d2b17b]">
                <span className="h-px w-8 bg-[#d2b17b]" />
                COLOR STORIES
              </p>

              <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-7xl">
                Your space.
                <br />
                <span className="italic text-[#d2b17b]">
                  Your palette.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-8 text-white/55 lg:justify-self-end">
              Color is a language of its own. Explore a few tones that
              can shape the mood, depth, and identity of a modern interior.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {palettes.map((palette) => (
              <div key={palette.name} className="group">
                <div
                  className="relative h-36 overflow-hidden transition duration-500 group-hover:-translate-y-2 md:h-52"
                  style={{ backgroundColor: palette.code }}
                >
                  <span className="absolute bottom-3 right-3 text-[9px] tracking-[0.2em] text-black/50">
                    #{palette.hex}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <h3 className="font-serif text-base text-white md:text-lg">
                    {palette.name}
                  </h3>
                  <CircleDot size={15} className="text-[#d2b17b]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
            <Palette size={18} className="text-[#d2b17b]" />
            <p className="text-[9px] tracking-[0.22em] text-white/45">
              PALETTE PREVIEW / FINAL COLOR MAY VARY WITH LIGHTING
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a48658]">
                <span className="h-px w-8 bg-[#a48658]" />
                SELECTED SPACES
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl">
                The art of
                <br />
                <span className="italic text-[#a48658]">
                  transformation.
                </span>
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 text-[10px] tracking-[0.2em] text-[#49453d] transition hover:text-[#a48658]"
            >
              VIEW FULL PORTFOLIO
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.number} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                      project.size === "large"
                        ? "h-[380px] md:h-[500px]"
                        : "h-[340px] md:h-[420px]"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-[9px] tracking-[0.2em] text-white backdrop-blur-sm">
                    CASE STUDY / {project.number}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] tracking-[0.2em] text-[#d2b17b]">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-white md:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:border-[#d2b17b] group-hover:bg-[#d2b17b] group-hover:text-[#24231f]">
                      <ArrowUpRight size={19} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-[#eeebe3] px-6 py-24 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-6 text-[10px] tracking-[0.35em] text-[#a48658]">
                WHY RISHI INTERIOR & ALL
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl">
                Craftsmanship
                <br />
                <span className="italic text-[#a48658]">
                  beyond the surface.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-8 text-[#777064] md:justify-self-end">
              A refined finish comes from the things you notice — and
              the details you should never have to notice.
            </p>
          </div>

          <div className="grid gap-px border border-[#ded8cb] bg-[#ded8cb] sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group bg-[#f7f5ef] p-8 transition duration-300 hover:bg-white"
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
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#777064]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
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
                From the
                <br />
                <span className="italic text-[#a48658]">
                  first idea
                </span>
                <br />
                to the final coat.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#777064]">
                We follow a clear sequence, giving each stage the care
                it needs — from understanding your space to reviewing
                the final finish.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <Layers3 size={20} className="text-[#a48658]" />
                <span className="text-[9px] tracking-[0.25em] text-[#777064]">
                  A DETAIL-LED WORKFLOW
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
            <WandSparkles size={23} />
          </div>

          <p className="mb-6 text-[10px] tracking-[0.35em] text-[#d2b17b]">
            A NEW CHAPTER FOR YOUR SPACE
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-7xl">
            Let’s give your
            <br />
            walls a
            <span className="italic text-[#d2b17b]"> new story.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/55">
            A thoughtful color palette. A carefully prepared surface.
            A finish that feels right. Tell us about your painting
            project and let’s create something beautiful.
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
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-[10px] tracking-[0.2em] text-white transition hover:border-[#c9ab78] hover:bg-[#c9ab78] hover:text-[#24231f]"
            >
              <Phone size={15} />
              CALL OUR STUDIO
            </a>
          </div>

          <div className="mt-16 border-t border-white/10 pt-6">
            <p className="text-[9px] tracking-[0.25em] text-white/35">
              RISHI INTERIOR & ALL / PAINTING STUDIO / COLOR • CRAFT • DETAIL
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Painting;
