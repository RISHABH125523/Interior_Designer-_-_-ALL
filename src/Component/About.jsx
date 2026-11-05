import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Sparkles,
  Layers3,
  Ruler,
  Palette,
  Sofa,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "120+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "15+", label: "Design Experts" },
  ];

  const values = [
    {
      icon: <Sparkles size={22} />,
      title: "Thoughtful Design",
      description:
        "Every space is designed with purpose, balance, and attention to detail.",
    },
    {
      icon: <Layers3 size={22} />,
      title: "Quality Materials",
      description:
        "We choose premium materials that combine durability with timeless beauty.",
    },
    {
      icon: <Ruler size={22} />,
      title: "Personal Approach",
      description:
        "Your lifestyle, preferences, and needs shape every design decision.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your lifestyle, vision, budget, and project requirements.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our team creates concepts, layouts, and material selections for your space.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We bring the design to life with quality craftsmanship and execution.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "We complete the project with detailed finishing and a final walkthrough.",
    },
  ];

  return (
    <main className="bg-[#f8f6f1] text-[#292820] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative px-5 sm:px-8 lg:px-16 pt-20 pb-16 lg:pt-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#c6a875]/50 rounded-full px-4 py-2 mb-7">
                <Sparkles size={14} className="text-[#a78248]" />
                <span className="text-xs tracking-[0.18em] uppercase">
                  About RISHI
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight">
                Spaces that
                <br />
                <span className="italic text-[#a78248]">feel like</span>
                <br />
                your story.
              </h1>

              <p className="text-[#777367] text-base sm:text-lg leading-8 max-w-xl mt-7">
                We believe great interiors are more than beautiful spaces.
                They are a reflection of your personality, your lifestyle, and
                the moments that matter most.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 bg-[#292820] text-white px-7 py-4 rounded-full hover:bg-[#a78248] transition duration-300"
                >
                  Explore Our Work
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-[#292820]/20 px-7 py-4 rounded-full hover:border-[#a78248] hover:text-[#a78248] transition duration-300"
                >
                  Let's Talk
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-5 -right-5 w-28 h-28 border border-[#c6a875]/50 rounded-full hidden sm:block" />

              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant modern interior designed by RISHI"
                className="relative w-full h-[430px] sm:h-[550px] object-cover rounded-t-[180px] rounded-b-2xl"
              />

              <div className="absolute -bottom-6 left-5 sm:left-10 bg-white p-5 sm:p-7 shadow-xl rounded-2xl max-w-xs">
                <p className="font-serif text-3xl italic text-[#a78248]">
                  Design with purpose.
                </p>
                <p className="text-sm text-[#777367] mt-2">
                  Crafted for the way you live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-5 sm:px-8 lg:px-16 py-20 mt-8">
        <div className="max-w-7xl mx-auto border-y border-[#d9d2c5] py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <h2 className="font-serif text-4xl sm:text-5xl text-[#a78248]">
                  {item.number}
                </h2>
                <p className="text-sm text-[#777367] mt-3 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="px-5 sm:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="Warm and minimal living room"
              className="w-full h-[400px] sm:h-[520px] object-cover rounded-2xl"
            />

            <div className="absolute -bottom-7 -right-3 sm:right-8 bg-[#e8dfd0] p-6 sm:p-8 rounded-2xl">
              <Home size={28} className="text-[#a78248] mb-3" />
              <p className="font-serif text-2xl">A home</p>
              <p className="font-serif text-2xl italic text-[#a78248]">
                beyond walls.
              </p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a78248] mb-5">
              Our Story
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              Creating interiors
              <br />
              <span className="italic text-[#a78248]">
                with meaning.
              </span>
            </h2>

            <p className="text-[#777367] leading-8 mt-7">
              RISHI began with a simple belief: the spaces around us shape
              the way we feel, think, and live. We bring creativity and
              craftsmanship together to create interiors that feel personal
              and timeless.
            </p>

            <p className="text-[#777367] leading-8 mt-4">
              From a calm living room to a complete home transformation, our
              approach is thoughtful, collaborative, and detail-focused.
              Every project is an opportunity to create something meaningful.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Designs tailored to your lifestyle",
                "A balance of aesthetics and functionality",
                "Careful attention to every detail",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#e8dfd0] flex items-center justify-center">
                    <Check size={14} className="text-[#a78248]" />
                  </span>
                  <p className="text-sm text-[#555348]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="px-5 sm:px-8 lg:px-16 py-24 bg-[#eee8dd] mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a78248] mb-5">
              Our Philosophy
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              Beauty is in the
              <span className="italic text-[#a78248]"> details.</span>
            </h2>

            <p className="text-[#777367] leading-7 mt-5">
              Our philosophy is simple: design should look beautiful, work
              effortlessly, and feel naturally yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8f6f1] p-8 sm:p-10 rounded-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#e8dfd0] flex items-center justify-center text-[#a78248] mb-7">
                  {item.icon}
                </div>

                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>

                <p className="text-[#777367] leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-5 sm:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#a78248] mb-5">
                How We Work
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
                From first idea
                <br />
                to <span className="italic text-[#a78248]">final detail.</span>
              </h2>
            </div>

            <p className="text-[#777367] leading-8 max-w-xl">
              We make the design journey simple and transparent. Our
              collaborative process ensures every decision moves your project
              closer to the space you imagined.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="border-t border-[#c6a875] pt-7 group"
              >
                <span className="font-serif text-4xl text-[#c6a875]">
                  {item.number}
                </span>

                <h3 className="font-serif text-2xl mt-5 mb-3 group-hover:text-[#a78248] transition">
                  {item.title}
                </h3>

                <p className="text-[#777367] leading-7 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMISE ================= */}
      <section className="px-5 sm:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-[#292820] text-white rounded-3xl overflow-hidden">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs uppercase tracking-[0.22em] text-[#c6a875] mb-5">
              The RISHI Promise
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              Your vision.
              <br />
              <span className="italic text-[#c6a875]">Our commitment.</span>
            </h2>

            <p className="text-white/65 leading-8 mt-6">
              We believe the best spaces are created through trust,
              communication, and a shared vision. We listen carefully,
              design thoughtfully, and work with care at every stage.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#c6a875] text-[#292820] px-7 py-4 rounded-full hover:bg-white transition duration-300"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="h-full min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
              alt="AUREVA interior design project"
              className="w-full h-full min-h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 sm:px-8 lg:px-16 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full border border-[#c6a875] flex items-center justify-center text-[#a78248]">
              <Sofa size={24} />
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.22em] text-[#a78248] mb-5">
            Let's Create Something
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl leading-tight">
            Ready to transform
            <br />
            <span className="italic text-[#a78248]">your space?</span>
          </h2>

          <p className="text-[#777367] leading-7 mt-6 max-w-xl mx-auto">
            Tell us about your dream space. Let's make it beautiful,
            functional, and uniquely yours.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-8 bg-[#292820] text-white px-8 py-4 rounded-full hover:bg-[#a78248] transition duration-300"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
