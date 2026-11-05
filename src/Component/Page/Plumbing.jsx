import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sofa,
  BedDouble,
  Armchair,
  Table2,
  Lamp,
  Package,
  Ruler,
  Palette,
  Hammer,
  Phone,
  MessageCircle,
  Sparkles,
  MoveUpRight,
  Layers,
} from "lucide-react";

const Funiture = () => {
  const phoneNumber = "919876543210";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello RISHI INTERIOR & ALL, I am interested in your furniture services."
  )}`;

  const callLink = `tel:+${phoneNumber}`;

  const furnitureServices = [
    {
      number: "01",
      icon: Sofa,
      title: "Living Room",
      description:
        "Statement sofas, custom TV units, center tables, and refined living spaces.",
      tag: "Comfort • Style",
    },
    {
      number: "02",
      icon: BedDouble,
      title: "Bedroom Furniture",
      description:
        "Beautiful beds, wardrobes, side tables, and thoughtfully planned bedrooms.",
      tag: "Rest • Relax",
    },
    {
      number: "03",
      icon: Armchair,
      title: "Bespoke Furniture",
      description:
        "One-of-a-kind furniture designed around your space and personality.",
      tag: "Made • For You",
    },
    {
      number: "04",
      icon: Table2,
      title: "Dining Collection",
      description:
        "Modern dining tables and chairs for memorable everyday moments.",
      tag: "Gather • Connect",
    },
    {
      number: "05",
      icon: Package,
      title: "Modular Furniture",
      description:
        "Smart, adaptable furniture that makes every inch of space count.",
      tag: "Smart • Living",
    },
    {
      number: "06",
      icon: Lamp,
      title: "Accent & Decor",
      description:
        "Console tables, accent chairs, and finishing pieces with character.",
      tag: "Details • Matter",
    },
  ];

  const projects = [
    {
      title: "The Modern Lounge",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
      className: "lg:col-span-2",
    },
    {
      title: "Quiet Luxury Bedroom",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
      className: "",
    },
    {
      title: "The Art of Dining",
      category: "Dining",
      image:
        "https://images.unsplash.com/photo-161โต?auto=format&fit=crop&w=900&q=85",
      className: "",
    },
    {
      title: "Contemporary Living",
      category: "Custom Furniture",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
      className: "lg:col-span-2",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your lifestyle, ideas, needs, and design preferences.",
    },
    {
      number: "02",
      title: "Measure",
      description:
        "We study your room dimensions and create a practical layout.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We plan the design, materials, colors, and finishing details.",
    },
    {
      number: "04",
      title: "Craft",
      description:
        "Your furniture is created with care and attention to detail.",
    },
    {
      number: "05",
      title: "Install",
      description:
        "We bring the design to life with a professional installation.",
    },
  ];

  const benefits = [
    "Personalized furniture concepts",
    "Quality materials and finishes",
    "Space-conscious design planning",
    "Modern and timeless aesthetics",
    "Careful installation",
    "Detail-oriented craftsmanship",
  ];

  return (
    <main className="overflow-hidden bg-[#f6f3ed] text-[#26251f]">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#22221d]">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=90"
          alt="Premium contemporary furniture"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171813]/95 via-[#171813]/75 to-[#171813]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171813]/70 via-transparent to-[#171813]/20" />

        {/* Decorative futuristic rings */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[580px] w-[580px] rounded-full border border-[#c4a477]/20" />
        <div className="pointer-events-none absolute -right-24 top-36 h-[420px] w-[420px] rounded-full border border-[#c4a477]/20" />
        <div className="pointer-events-none absolute right-20 top-56 h-[220px] w-[220px] rounded-full border border-[#c4a477]/20" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 border border-[#c4a477]/40 bg-black/20 px-4 py-3 backdrop-blur-md">
              <Sparkles size={16} className="text-[#c4a477]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e4d2b5]">
                Rishi Interior & All / Furniture Studio
              </span>
            </div>

            <h1 className="mt-8 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Furniture
              <span className="block italic text-[#c4a477]">
                Beyond Ordinary.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Furniture that feels personal. Spaces that feel extraordinary.
              Discover a new expression of comfort through thoughtful design,
              refined materials, and bespoke craftsmanship.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-[#c4a477] px-7 py-4 text-sm font-semibold text-[#25231d] transition hover:bg-[#ddc49d]"
              >
                Start Your Project
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#25231d]"
              >
                Explore Collection
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 border-t border-white/20 pt-7">
              <div className="pr-4">
                <p className="font-serif text-2xl text-[#c4a477] sm:text-3xl">
                  Bespoke
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs">
                  Design Approach
                </p>
              </div>

              <div className="border-l border-white/20 px-4">
                <p className="font-serif text-2xl text-[#c4a477] sm:text-3xl">
                  Refined
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs">
                  Material Selection
                </p>
              </div>

              <div className="border-l border-white/20 pl-4">
                <p className="font-serif text-2xl text-[#c4a477] sm:text-3xl">
                  Timeless
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-xs">
                  Design Language
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50 lg:flex">
          <span className="h-px w-12 bg-[#c4a477]" />
          Crafted for your lifestyle
        </div>
      </section>

      {/* ================= INTRO / ABOUT ================= */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-[#c4a477]" />

            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85"
              alt="Sophisticated furniture and interior design"
              className="relative h-[480px] w-full object-cover sm:h-[580px]"
            />

            <div className="absolute -bottom-8 right-0 max-w-[250px] bg-[#28271f] p-6 text-white sm:-right-8">
              <Sparkles size={24} className="text-[#c4a477]" />
              <p className="mt-4 font-serif text-2xl">
                Designed Around You
              </p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                A perfect balance of function, form, and feeling.
              </p>
            </div>

            <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-white/80">
              Interior / 01
            </span>
          </div>

          <div className="lg:pl-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#ad9165]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
                A New Perspective
              </p>
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              More Than
              <span className="block italic text-[#ad9165]">
                Furniture.
              </span>
              A Feeling.
            </h2>

            <p className="mt-7 leading-8 text-[#77746b]">
              At RISHI INTERIOR & ALL, furniture is an expression of the way
              you live. We create considered furniture solutions that bring
              together comfort, utility, and timeless visual appeal.
            </p>

            <p className="mt-4 leading-8 text-[#77746b]">
              From a single statement piece to a complete home transformation,
              every detail is planned to complement your space and your
              lifestyle.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8ddca] text-[#ad9165]">
                    <Check size={13} />
                  </div>
                  <p className="text-sm leading-6 text-[#55534b]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#ad9165] pb-2 text-sm font-semibold"
            >
              Discover Our Story
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative bg-[#eae4d9] py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-40 w-40 border-b border-l border-[#c4a477]/30" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#ad9165]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
                  What We Create
                </p>
              </div>

              <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl lg:text-6xl">
                Furniture, Reimagined.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#77746b]">
              Explore curated furniture services designed to transform your
              everyday spaces into something truly special.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {furnitureServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative overflow-hidden border border-[#d8d0c2] bg-[#f6f3ed] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#ad9165] hover:shadow-[0_20px_50px_rgba(38,37,31,0.10)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-sm text-[#b9a98e]">
                      {service.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center bg-[#e9dfcf] text-[#ad9165] transition duration-300 group-hover:bg-[#ad9165] group-hover:text-white">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-8 font-serif text-2xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-7 text-[#77746b]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#e2dbd0] pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ad9165]">
                      {service.tag}
                    </span>

                    <Link
                      to="/contact"
                      aria-label={`Enquire about ${service.title}`}
                      className="flex h-9 w-9 items-center justify-center border border-[#d8d0c2] transition group-hover:border-[#ad9165] group-hover:bg-[#ad9165] group-hover:text-white"
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#ad9165]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
                  Selected Work
                </p>
              </div>

              <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl lg:text-6xl">
                Spaces With Soul.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[#77746b]">
                A visual collection of furniture concepts, refined interiors,
                and thoughtful details.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 border-b border-[#ad9165] pb-2 text-sm font-semibold"
            >
              Explore All Projects
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden bg-[#28271f] ${project.className}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[400px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d5b98c]">
                    {project.category}
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h3 className="font-serif text-2xl text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <Link
                      to="/portfolio"
                      aria-label={`View ${project.title} project`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40 text-white transition hover:bg-white hover:text-[#28271f]"
                    >
                      <MoveUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN PHILOSOPHY ================= */}
      <section className="relative overflow-hidden bg-[#24241e] py-24 text-white lg:py-32">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-[#c4a477]/10" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border border-[#c4a477]/15" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c4a477]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c4a477]">
                Our Design Philosophy
              </p>
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Thoughtful Design.
              <span className="block italic text-[#c4a477]">
                Beautiful Living.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-white/60">
              Great furniture does more than fill a room. It creates flow,
              improves everyday living, and brings a sense of harmony to your
              home. Our approach combines spatial thinking with refined
              aesthetics to create furniture that belongs.
            </p>

            <div className="mt-10 space-y-7">
              {[
                {
                  icon: Ruler,
                  title: "Intelligent Space Planning",
                  text: "Dimensions and layouts thoughtfully aligned with your room.",
                },
                {
                  icon: Palette,
                  title: "Material & Finish Curation",
                  text: "Colors, textures, and finishes selected to complement your home.",
                },
                {
                  icon: Hammer,
                  title: "Craft & Installation",
                  text: "Careful execution with a focus on finish and functionality.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c4a477]/30 bg-white/[0.03] text-[#c4a477]">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/50">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85"
                alt="Contemporary sofa design"
                className="h-64 w-full object-cover sm:h-80"
              />

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85"
                alt="Modern bedroom furniture"
                className="mt-12 h-64 w-full object-cover sm:h-80"
              />

              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85"
                alt="Sophisticated interior"
                className="-mt-8 h-64 w-full object-cover sm:h-80"
              />

              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85"
                alt="Elegant living space"
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c4a477]/50 bg-[#24241e]/90 text-[#c4a477] backdrop-blur-sm">
              <Layers size={34} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#ad9165]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
                The Journey
              </p>
              <span className="h-px w-10 bg-[#ad9165]" />
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl lg:text-6xl">
              From Vision to Reality.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#77746b]">
              A considered process that turns your furniture ideas into a
              beautiful, functional reality.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <article
                key={item.number}
                className="relative border-t border-[#c4a477] bg-white p-7 shadow-[0_10px_35px_rgba(38,37,31,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#d5c4a7]">
                    {item.number}
                  </span>

                  {index < process.length - 1 && (
                    <ArrowRight
                      size={17}
                      className="hidden text-[#c4a477] lg:block"
                    />
                  )}
                </div>

                <h3 className="mt-7 font-serif text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#77746b]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24 lg:px-12 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#28271f] px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#c4a477]/20" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#c4a477]/20" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <Sparkles size={17} className="text-[#c4a477]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c4a477]">
                  Your Space, Your Story
                </p>
              </div>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                Ready to Create
                <span className="block italic text-[#c4a477]">
                  Something Beautiful?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/60">
                Let’s discuss your furniture ideas, design preferences, and
                project requirements. Your next beautiful space starts here.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={callLink}
                className="inline-flex items-center justify-center gap-3 bg-[#c4a477] px-6 py-4 text-sm font-semibold text-[#25231d] transition hover:bg-[#ddc49d]"
              >
                <Phone size={18} />
                Call Us
                <ArrowUpRight size={17} />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#25D366] hover:bg-[#25D366]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRAND FOOTER ================= */}
      <footer className="border-t border-[#ded8cb] px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-[0.2em]">
              RISHI<span className="text-[#ad9165]">.</span>
            </span>

            <span className="mt-1 text-[9px] tracking-[0.35em] text-[#8c806c]">
              INTERIOR & ALL
            </span>
          </Link>

          <p className="text-xs tracking-wide text-[#77746b]">
            Designing Spaces. Creating Experiences.
          </p>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            Back to Home
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Funiture;

