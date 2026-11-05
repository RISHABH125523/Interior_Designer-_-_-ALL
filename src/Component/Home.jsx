import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  Check,
  Sofa,
  House,
  Lightbulb,
  Ruler,
  Sparkles,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      number: "01",
      title: "Residential Design",
      description:
        "Beautifully designed homes that reflect your lifestyle, personality, and comfort.",
      icon: House,
    },
    {
      number: "02",
      title: "Commercial Interiors",
      description:
        "Modern and functional workspaces designed to inspire productivity.",
      icon: Sofa,
    },
    {
      number: "03",
      title: "Space Planning",
      description:
        "Smart layouts that make every corner feel purposeful and elegant.",
      icon: Ruler,
    },
    {
      number: "04",
      title: "Lighting Design",
      description:
        "Thoughtful lighting that brings warmth, depth, and character to your space.",
      icon: Lightbulb,
    },
  ];

  const projects = [
    {
      title: "The Ivory Residence",
      category: "Residential",
      location: "Mumbai, India",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Modern Serenity",
      category: "Living Room",
      location: "Pune, India",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Golden Suite",
      category: "Bedroom",
      location: "Delhi, India",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Homeowner",
      review:
        "Rishi transformed our home into something truly special. Every detail feels thoughtful, elegant, and personal.",
    },
    {
      name: "Rahul Mehta",
      role: "Business Owner",
      review:
        "The team understood our vision perfectly. The final space is beautiful, functional, and beyond our expectations.",
    },
    {
      name: "Priya Kapoor",
      role: "Homeowner",
      review:
        "From the first consultation to the final styling, the experience was smooth and professional.",
    },
  ];

  return (
    <main className="bg-[#F8F5EF] text-[#292720]">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90"
            alt="Luxury modern interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20 md:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#D7BD85]">
              <span className="h-px w-10 bg-[#D7BD85]" />
              Thoughtful Spaces. Timeless Living.
            </p>

            <h1 className="text-5xl font-light leading-[1.12] md:text-7xl lg:text-8xl">
              Design Your
              <br />
              <span className="font-serif italic text-[#D7BD85]">
                Dream Space
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              We create meaningful interiors that combine timeless elegance,
              modern comfort, and your unique personality.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#B99A5F] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#9F8148]"
              >
                Start Your Project
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/portfolio"
                className="inline-flex items-center gap-3 border border-white/50 px-7 py-4 text-sm text-white transition hover:bg-white hover:text-[#292720]"
              >
                <Play size={16} />
                Explore Projects
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 right-12 hidden items-center gap-4 text-white/70 md:flex">
            <span className="h-px w-14 bg-white/50" />
            <span className="text-xs uppercase tracking-[0.25em]">
              Scroll to Explore
            </span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A78A50]">
              About Rishi
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Spaces that tell
              <br />
              <span className="font-serif italic text-[#A78A50]">
                your story.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-[#777267]">
              At Rishi, we believe great design is more than aesthetics. It is
              about creating spaces that feel right, work beautifully, and
              inspire everyday living.
            </p>

            <p className="mt-4 leading-8 text-[#777267]">
              From concept to completion, our team brings together creativity,
              craftsmanship, and attention to detail to transform your vision
              into reality.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#B99A5F] pb-2 text-sm font-medium transition hover:text-[#A78A50]"
            >
              Discover Our Story
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant interior design"
              className="h-[480px] w-full object-cover md:h-[600px]"
            />

            <div className="absolute -bottom-8 -left-5 hidden bg-[#E9E1D2] p-8 md:block">
              <p className="font-serif text-4xl text-[#A78A50]">10+</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-[#777267]">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#EEE8DD] px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A78A50]">
                What We Do
              </p>
              <h2 className="text-4xl font-light md:text-6xl">
                Our Expertise
              </h2>
            </div>

            <a
              href="/services"
              className="inline-flex items-center gap-3 text-sm font-medium hover:text-[#A78A50]"
            >
              View All Services
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group border border-[#D8D0C3] bg-[#F8F5EF] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest text-[#A78A50]">
                      {service.number}
                    </span>

                    <Icon
                      size={27}
                      strokeWidth={1.3}
                      className="text-[#A78A50] transition group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-medium">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#777267]">
                    {service.description}
                  </p>

                  <a
                    href="/services"
                    className="mt-7 inline-flex items-center gap-2 text-sm text-[#A78A50]"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE STATEMENT */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Sparkles
            size={30}
            strokeWidth={1.2}
            className="mx-auto text-[#A78A50]"
          />

          <p className="mt-7 text-xs uppercase tracking-[0.3em] text-[#A78A50]">
            Our Design Philosophy
          </p>

          <h2 className="mt-7 text-3xl font-light leading-relaxed md:text-5xl">
            “Luxury is not about having more.
            <br className="hidden md:block" />
            It is about making every detail
            <span className="font-serif italic text-[#A78A50]">
              {" "}
              meaningful.
            </span>
            ”
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#777267]">
            We design with intention, create with passion, and believe that
            every space deserves a thoughtful approach.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A78A50]">
                Selected Work
              </p>

              <h2 className="text-4xl font-light md:text-6xl">
                Our Projects
              </h2>
            </div>

            <a
              href="/portfolio"
              className="inline-flex items-center gap-3 text-sm font-medium hover:text-[#A78A50]"
            >
              Explore Portfolio
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                href="/portfolio"
                key={project.title}
                className={`group block ${
                  index === 1 ? "lg:mt-12" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F5EF] text-[#292720] opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="mt-2 text-sm text-[#777267]">
                      {project.location}
                    </p>
                  </div>

                  <span className="pt-1 text-xs uppercase tracking-widest text-[#A78A50]">
                    {project.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="bg-[#292720] px-6 py-24 text-[#F8F5EF] md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D7BD85]">
              Client Stories
            </p>

            <h2 className="text-4xl font-light md:text-6xl">
              Words That Inspire
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/10 p-8 transition hover:border-[#B99A5F]"
              >
                <div className="flex gap-1 text-[#D7BD85]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <p className="mt-7 leading-8 text-white/75">
                  “{testimonial.review}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#D7BD85]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#E9E1D2] px-8 py-16 md:px-20 md:py-24">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#B99A5F]/30" />
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#B99A5F]/30" />

          <div className="relative max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A78A50]">
              Let's Create Together
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Ready to transform
              <br />
              <span className="font-serif italic text-[#A78A50]">
                your space?
              </span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-[#777267]">
              Tell us about your vision. Our team is ready to help you create a
              space that feels uniquely yours.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-[#292720] px-7 py-4 text-sm text-white transition hover:bg-[#A78A50]"
            >
              Book a Consultation
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-8 flex flex-wrap gap-5 text-xs text-[#777267]">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#A78A50]" />
                Free Initial Consultation
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#A78A50]" />
                Personalized Design
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
