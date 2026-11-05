import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Home,
  Building2,
  LayoutDashboard,
  Sofa,
  Palette,
  Lightbulb,
  Check,
  Sparkles,
  MoveUpRight,
  Plus,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      category: "LIVING SPACES",
      icon: Home,
      title: "Residential\nInterior Design",
      description:
        "Personalized homes that bring comfort, sophistication, and your own story into every corner.",
      features: [
        "Living Room Design",
        "Bedroom Interiors",
        "Kitchen Design",
        "Complete Home Interiors",
      ],
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      category: "WORK & BUSINESS",
      icon: Building2,
      title: "Commercial\nInterior Design",
      description:
        "Distinctive workspaces and commercial environments designed to inspire people and elevate brands.",
      features: [
        "Office Interiors",
        "Retail Store Design",
        "Restaurant Interiors",
        "Corporate Spaces",
      ],
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "03",
      category: "SMART PLANNING",
      icon: LayoutDashboard,
      title: "Space\nPlanning",
      description:
        "Intelligent layouts that maximize every square foot while maintaining a natural sense of flow.",
      features: [
        "Space Optimization",
        "Floor Plan Design",
        "Furniture Layout",
        "Functional Planning",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "04",
      category: "DETAILS & DECOR",
      icon: Sofa,
      title: "Furniture &\nStyling",
      description:
        "Carefully curated furniture and decor that add character, texture, and a personal touch.",
      features: [
        "Custom Furniture",
        "Furniture Selection",
        "Home Accessories",
        "Decor Styling",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "05",
      category: "MATERIAL STORIES",
      icon: Palette,
      title: "Color & Material\nConsultation",
      description:
        "A considered combination of tones, textures, finishes, and materials for a cohesive interior.",
      features: [
        "Color Consultation",
        "Material Selection",
        "Wall Finishes",
        "Lighting Selection",
      ],
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "06",
      category: "VISUAL EXPERIENCE",
      icon: Lightbulb,
      title: "3D Design &\nVisualization",
      description:
        "See your future space before it exists through immersive design concepts and visualizations.",
      features: [
        "3D Interior Models",
        "Design Concepts",
        "Virtual Walkthroughs",
        "Design Presentations",
      ],
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We learn about your vision, lifestyle, requirements, and the possibilities of your space.",
    },
    {
      number: "02",
      title: "Imagine",
      description:
        "We develop creative concepts, layouts, materials, and a clear design direction.",
    },
    {
      number: "03",
      title: "Refine",
      description:
        "Every detail is thoughtfully reviewed and refined before the execution stage.",
    },
    {
      number: "04",
      title: "Create",
      description:
        "Your vision comes to life through careful execution and considered finishing.",
    },
  ];

  const benefits = [
    "Designs tailored to your lifestyle",
    "Creative and functional solutions",
    "Careful material and finish selection",
    "Detail-focused design approach",
  ];

  return (
    <main className="bg-[#f8f6f1] text-[#292820] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[650px] lg:min-h-[760px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
          alt="Premium contemporary interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b17]/80 via-[#1c1b17]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b17]/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-16 pt-32 pb-20 lg:pb-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[1px] bg-[#d4b47e]" />
              <p className="text-[#d4b47e] text-xs tracking-[0.3em] uppercase">
                The Art of Interior Living
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.05] tracking-tight">
              Thoughtful
              <br />
              design.{" "}
              <span className="italic text-[#d4b47e]">
                Exceptional
              </span>
              <br />
              spaces.
            </h1>

            <div className="grid md:grid-cols-2 gap-8 items-end mt-9">
              <p className="text-white/75 max-w-lg leading-8 text-base sm:text-lg">
                We create meaningful environments where aesthetics,
                functionality, and your individuality come together.
              </p>

              <div className="md:text-right">
                <a
                  href="#all-services"
                  className="inline-flex items-center gap-4 bg-[#d4b47e] text-[#292820] px-7 py-4 rounded-full text-xs tracking-[0.15em] font-medium hover:bg-white transition duration-300"
                >
                  EXPLORE SERVICES
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-10 right-16 items-center gap-3 text-white/60">
            <span className="text-[10px] tracking-[0.2em]">SCROLL TO EXPLORE</span>
            <div className="w-12 h-[1px] bg-white/40" />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase mb-6">
              Our Expertise
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.12]">
              More than interiors.
              <br />
              <span className="italic text-[#a78248]">
                A way of living.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[#777367] leading-8">
              At RISHI, we believe every space has the potential to become
              something extraordinary. Our services bring together creativity,
              thoughtful planning, and timeless design.
            </p>

            <p className="text-[#777367] leading-8 mt-4">
              From private residences to contemporary workspaces, we shape
              environments that feel personal, purposeful, and beautifully
              considered.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <span className="w-10 h-10 rounded-full border border-[#c6a875] flex items-center justify-center text-[#a78248]">
                <Sparkles size={17} />
              </span>
              <span className="text-xs tracking-[0.15em] uppercase">
                Design with intention
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE COLLECTION ================= */}
      <section id="all-services" className="bg-[#eee8dd] py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase mb-5">
                What We Do
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Our service
                <br />
                <span className="italic text-[#a78248]">collection.</span>
              </h2>
            </div>

            <p className="text-[#777367] leading-7 max-w-md">
              Explore our range of design services, created to transform
              spaces into experiences that feel distinctly yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group bg-[#f8f6f1] rounded-2xl overflow-hidden border border-[#dfd7ca] hover:border-[#c6a875] transition duration-500"
                >
                  {/* Image */}
                  <div className="relative h-[280px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title.replace("\n", " ")}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="bg-[#f8f6f1] text-[#292820] text-xs px-4 py-2 rounded-full">
                        {service.number}
                      </span>
                      <span className="text-white text-[10px] tracking-[0.2em]">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-[#d4b47e] text-[#292820] flex items-center justify-center group-hover:rotate-45 transition duration-300">
                      <MoveUpRight size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#eee8dd] flex items-center justify-center text-[#a78248]">
                        <Icon size={19} />
                      </div>

                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#a78248]">
                        RISHI / {service.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl leading-tight whitespace-pre-line">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#777367] leading-7 mt-4">
                      {service.description}
                    </p>

                    <div className="mt-7 pt-6 border-t border-[#dfd7ca]">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#a78248] mb-4">
                        Includes
                      </p>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-xs text-[#625d54]"
                          >
                            <Check
                              size={14}
                              className="text-[#a78248] shrink-0 mt-[1px]"
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="flex items-center justify-between mt-7 pt-5 border-t border-[#dfd7ca] text-xs tracking-[0.13em] uppercase font-medium hover:text-[#a78248] transition"
                    >
                      Discuss Your Project
                      <ArrowRight
                        size={17}
                        className="group-hover:translate-x-1 transition"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURE / DIFFERENCE ================= */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
              alt="A thoughtfully designed modern interior"
              className="w-full h-[450px] sm:h-[600px] object-cover rounded-2xl"
            />

            <div className="absolute -bottom-7 -right-3 sm:right-8 bg-[#d4b47e] rounded-2xl p-6 sm:p-8 max-w-[230px]">
              <p className="font-serif text-3xl italic">Made to feel.</p>
              <p className="text-xs leading-5 mt-3 text-[#292820]/70">
                Every detail carries a purpose. Every space tells a story.
              </p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase mb-5">
              The RISHI Difference
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Where vision
              <br />
              meets <span className="italic text-[#a78248]">precision.</span>
            </h2>

            <p className="text-[#777367] leading-8 mt-7">
              We look beyond trends to create interiors that feel authentic.
              Our design approach blends creative thinking with practical
              solutions, making every space beautiful and effortless to use.
            </p>

            <div className="mt-9 space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#eee8dd] flex items-center justify-center text-[#a78248]">
                    <Check size={15} />
                  </span>
                  <p className="text-sm text-[#625d54]">{benefit}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-10 text-xs tracking-[0.15em] uppercase border-b border-[#c6a875] pb-3 hover:text-[#a78248] transition"
            >
              Discover Our Approach
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#292820] py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <p className="text-[#d4b47e] text-xs tracking-[0.25em] uppercase mb-5">
                Our Process
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                From first thought
                <br />
                to <span className="italic text-[#d4b47e]">final form.</span>
              </h2>
            </div>

            <p className="text-white/60 leading-8 max-w-lg">
              A thoughtful and transparent process that brings clarity to
              every stage of your design journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={item.number}
                className="group border-t border-white/20 pt-7 hover:border-[#d4b47e] transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl text-[#d4b47e]">
                    {item.number}
                  </span>

                  <Plus
                    size={19}
                    className="text-white/30 group-hover:text-[#d4b47e] group-hover:rotate-45 transition duration-300"
                  />
                </div>

                <h3 className="font-serif text-2xl text-white mt-7">
                  {item.title}
                </h3>

                <p className="text-sm text-white/55 leading-7 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full border border-[#c6a875] text-[#a78248] flex items-center justify-center mx-auto mb-7">
            <Sparkles size={22} />
          </div>

          <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase mb-5">
            Your Next Chapter Begins Here
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight">
            Let's create
            <br />
            <span className="italic text-[#a78248]">something timeless.</span>
          </h2>

          <p className="text-[#777367] leading-8 max-w-xl mx-auto mt-7">
            Have a space in mind? Tell us your vision and let's turn it into
            a meaningful design experience.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-4 mt-9 bg-[#292820] text-white px-8 py-4 rounded-full text-xs tracking-[0.15em] hover:bg-[#a78248] transition duration-300"
          >
            START A PROJECT
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;

