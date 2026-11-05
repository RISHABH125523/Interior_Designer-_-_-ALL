import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CalendarDays,
  Home,
  MoveRight,
  Sparkles,
  Layers3,
  Plus,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Elegance",
    category: "Residential",
    type: "Luxury",
    location: "Mumbai, India",
    year: "2024",
    area: "2,400 SQ.FT",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    title: "The Golden Residence",
    category: "Residential",
    type: "Luxury",
    location: "Delhi, India",
    year: "2024",
    area: "3,100 SQ.FT",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    title: "Serene Bedroom",
    category: "Residential",
    type: "Modern",
    location: "Pune, India",
    year: "2023",
    area: "850 SQ.FT",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    title: "The Creative Office",
    category: "Commercial",
    type: "Modern",
    location: "Bangalore, India",
    year: "2024",
    area: "4,500 SQ.FT",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    title: "Minimal Living",
    category: "Residential",
    type: "Modern",
    location: "Jaipur, India",
    year: "2023",
    area: "1,800 SQ.FT",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    title: "The Luxe Kitchen",
    category: "Commercial",
    type: "Luxury",
    location: "Mumbai, India",
    year: "2024",
    area: "1,200 SQ.FT",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
];

const categories = ["All Projects", "Residential", "Commercial", "Luxury", "Modern"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory ||
            project.type === activeCategory
        );

  return (
    <main className="bg-[#f8f6f1] text-[#292820] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[680px] lg:min-h-[800px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="AUREVA luxury interior portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#191813]/80 via-[#191813]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191813]/70 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16 pt-32 pb-20 lg:pb-28">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[1px] bg-[#d4b47e]" />
            <p className="text-[#d4b47e] text-xs tracking-[0.3em] uppercase">
              Selected Works / 2023 — 2025
            </p>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.04] max-w-5xl">
            Spaces shaped
            <br />
            by <span className="italic text-[#d4b47e]">imagination.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-end mt-9">
            <p className="text-white/75 max-w-lg text-base sm:text-lg leading-8">
              A collection of thoughtful interiors, bold ideas, and timeless
              spaces designed to make everyday living extraordinary.
            </p>

            <div className="md:text-right">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-[#d4b47e] text-[#292820] px-7 py-4 rounded-full text-xs tracking-[0.15em] hover:bg-white transition duration-300"
              >
                EXPLORE THE COLLECTION
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-10 right-16 items-center gap-3 text-white/60">
            <span className="text-[10px] tracking-[0.2em]">SCROLL TO DISCOVER</span>
            <div className="w-12 h-[1px] bg-white/40" />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-5 sm:px-8 lg:px-16 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase mb-6">
              The RISHI Perspective
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.12]">
              Every space
              <br />
              tells a <span className="italic text-[#a78248]">story.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-[#777367] leading-8">
              Our portfolio is a reflection of our design philosophy — creating
              spaces that feel personal, purposeful, and beautifully balanced.
            </p>

            <p className="text-[#777367] leading-8 mt-4">
              From sophisticated residences to creative workspaces, each
              project begins with a vision and becomes a unique experience.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-11 h-11 rounded-full border border-[#c6a875] flex items-center justify-center text-[#a78248]">
                <Sparkles size={18} />
              </div>
              <span className="text-xs uppercase tracking-[0.15em]">
                Designed with intention
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT COLLECTION ================= */}
      <section id="projects" className="bg-[#eee8dd] py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase mb-5">
                The Collection
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Our selected
                <br />
                <span className="italic text-[#a78248]">projects.</span>
              </h2>
            </div>

            <p className="text-[#777367] leading-7 max-w-md">
              Explore spaces shaped by creativity, material, and the art of
              considered living.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 sm:px-6 py-3 rounded-full text-xs tracking-[0.08em] border transition duration-300 ${
                  activeCategory === category
                    ? "bg-[#292820] text-white border-[#292820]"
                    : "border-[#cbb99f] text-[#625d54] hover:bg-[#292820] hover:text-white hover:border-[#292820]"
                }`}
              >
                {category}
              </button>
            ))}

            <span className="ml-auto text-xs text-[#777367] hidden sm:block">
              {filteredProjects.length} PROJECTS
            </span>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group bg-[#f8f6f1] rounded-2xl overflow-hidden border border-[#dfd7ca] hover:border-[#c6a875] transition duration-500"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="bg-[#f8f6f1] text-[#292820] text-xs px-4 py-2 rounded-full">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white text-[10px] tracking-[0.2em] uppercase">
                      {project.type}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-2xl mt-2">
                      {project.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-[#d4b47e] text-[#292820] flex items-center justify-center group-hover:rotate-45 transition duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex justify-between items-center text-xs text-[#777367]">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#a78248]" />
                      {project.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-[#a78248]" />
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#dfd7ca]">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#a78248]">
                      {project.area}
                    </span>

                    <span className="text-xs flex items-center gap-2 group-hover:text-[#a78248] transition">
                      View Project
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Layers3 size={35} className="mx-auto text-[#a78248] mb-5" />
              <h3 className="font-serif text-2xl">No projects found</h3>
              <p className="text-[#777367] mt-3">
                Try selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-10 h-[1px] bg-[#a78248]" />
            <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase">
              Featured Project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85"
                alt="Featured AUREVA interior project"
                className="w-full h-[420px] sm:h-[600px] object-cover rounded-2xl"
              />

              <div className="absolute bottom-5 left-5 bg-[#f8f6f1] rounded-xl px-5 py-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#a78248]">
                  Project No. 001
                </p>
                <p className="font-serif text-xl mt-1">Modern Elegance</p>
              </div>
            </div>

            <div>
              <p className="text-[#a78248] text-xs tracking-[0.25em] uppercase mb-5">
                Mumbai / India
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Modern
                <br />
                <span className="italic text-[#a78248]">Elegance.</span>
              </h2>

              <p className="text-[#777367] leading-8 mt-7">
                A refined urban residence where modern aesthetics meet
                timeless comfort. Natural textures, warm tones, and carefully
                curated details create an inviting atmosphere.
              </p>

              <p className="text-[#777367] leading-8 mt-4">
                The result is a home that feels sophisticated yet effortless —
                a personal retreat designed around everyday living.
              </p>

              <div className="grid grid-cols-2 gap-6 border-y border-[#d8cdbb] py-7 mt-8">
                <div>
                  <Home size={20} className="text-[#a78248] mb-3" />
                  <p className="text-xs text-[#777367]">Project Type</p>
                  <p className="font-serif text-xl mt-1">Residential</p>
                </div>

                <div>
                  <MapPin size={20} className="text-[#a78248] mb-3" />
                  <p className="text-xs text-[#777367]">Location</p>
                  <p className="font-serif text-xl mt-1">Mumbai, India</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-8 bg-[#292820] text-white px-7 py-4 rounded-full hover:bg-[#a78248] transition duration-300"
              >
                Start Your Project
                <MoveRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="relative bg-[#292820] text-white py-24 lg:py-32 px-5 sm:px-8 lg:px-16 overflow-hidden"
      >
        <div className="absolute -top-24 -right-20 w-96 h-96 border border-white/10 rounded-full" />
        <div className="absolute -top-10 -right-6 w-64 h-64 border border-[#d4b47e]/20 rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full border border-[#d4b47e] text-[#d4b47e] flex items-center justify-center mx-auto mb-7">
            <Sparkles size={22} />
          </div>

          <p className="text-[#d4b47e] text-xs tracking-[0.25em] uppercase mb-5">
            Let's Create Together
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight">
            Your vision.
            <br />
            <span className="italic text-[#d4b47e]">Our next creation.</span>
          </h2>

          <p className="text-white/60 leading-8 max-w-xl mx-auto mt-7">
            Have a space waiting for a new story? Let's create something
            thoughtful, distinctive, and timeless together.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 bg-[#d4b47e] text-[#292820] px-8 py-4 rounded-full text-xs tracking-[0.15em] hover:bg-white transition duration-300"
          >
            DISCUSS YOUR PROJECT
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
