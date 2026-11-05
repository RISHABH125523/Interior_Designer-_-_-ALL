

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Clock,
  Sparkles,
  Phone,
  Paintbrush,
  Layers,
  Wallpaper,
  Ruler,
} from "lucide-react";

const Wall_Design = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Texture Wall Design",
      description:
        "Enhance your interiors with stylish textured walls and premium decorative finishes.",
    },
    {
      icon: Wallpaper,
      title: "Wallpaper Installation",
      description:
        "Beautiful wallpaper designs for bedrooms, living rooms, offices, and commercial spaces.",
    },
    {
      icon: Layers,
      title: "3D Wall Panels",
      description:
        "Modern 3D wall panels that add depth, style, and character to your interior.",
    },
    {
      icon: Ruler,
      title: "Customized Wall Design",
      description:
        "Personalized wall designs created according to your space, theme, and preferences.",
    },
  ];

  const gallery = [
    {
      title: "Modern Decorative Wall",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Luxury Living Room Wall",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Elegant Interior Design",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const process = [
    "Site Visit & Consultation",
    "Design Selection",
    "Surface Preparation",
    "Installation & Finishing",
  ];

  const phoneNumber = "919876543210";

  return (
    <div className="bg-[#f8f6f1] text-[#29271f]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90"
          alt="Modern decorative wall design"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-[#c4a477] px-5 py-2 text-sm font-medium tracking-widest text-[#e0c69d]">
              RISHI INTERIOR & ALL
            </span>

            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
              Creative Wall Design
              <span className="block text-[#c4a477]">
                For Beautiful Spaces
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
              Transform plain walls into stunning features with modern textures,
              decorative panels, wallpapers, and customized wall designs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#ad9165] px-7 py-4 font-semibold text-white transition hover:bg-[#92764d]"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  "Hello, I want to enquire about wall design work."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#29271f]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
              Decorative Wall Solutions
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Make Every Wall a Design Statement
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At RISHI INTERIOR & ALL, we believe walls are an important part of
              every interior. Our wall design solutions bring creativity,
              elegance, and personality to your home or commercial space.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From elegant wallpapers to modern wall panels and textured
              finishes, we help create interiors that reflect your style.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Modern and customized wall designs",
                "Premium decorative finishes",
                "Quality materials and installation",
                "Residential and commercial solutions",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#ad9165]" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
              alt="Elegant wall decoration"
              className="h-[420px] w-full object-cover md:h-[550px]"
            />

            <div className="absolute -bottom-6 -left-6 hidden bg-[#29271f] p-7 text-white md:block">
              <Sparkles className="mb-3 text-[#c4a477]" size={30} />
              <p className="text-xl font-semibold">Designed With Creativity</p>
              <p className="mt-2 text-sm text-gray-300">
                Style. Texture. Elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
              Our Services
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Wall Design Solutions
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Discover creative wall decoration services designed to enhance
              the beauty and atmosphere of your space.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group border border-gray-100 bg-[#f8f6f1] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#ad9165] hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#29271f] text-[#c4a477] transition group-hover:bg-[#ad9165] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
                Wall Design Gallery
              </span>

              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Ideas for Your Interior
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-[#ad9165] transition hover:text-[#29271f]"
            >
              View Our Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {gallery.map((item, index) => (
              <div key={index} className="group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex items-center justify-between border-b border-[#d9d2c5] py-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <ArrowRight
                    size={20}
                    className="text-[#ad9165] transition group-hover:translate-x-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#29271f] px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c4a477]">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Creative Designs with Quality Finishing
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              We focus on creativity, material quality, and professional
              installation to create attractive and long-lasting wall designs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-white/10 p-6">
              <ShieldCheck className="mb-4 text-[#c4a477]" size={32} />
              <h3 className="text-xl font-semibold">Quality Materials</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Carefully selected materials for attractive and reliable
                finishes.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <Clock className="mb-4 text-[#c4a477]" size={32} />
              <h3 className="text-xl font-semibold">Timely Completion</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Organized project planning to help complete work on schedule.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <Ruler className="mb-4 text-[#c4a477]" size={32} />
              <h3 className="text-xl font-semibold">Custom Designs</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Designs customized according to your interior theme and space.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <Sparkles className="mb-4 text-[#c4a477]" size={32} />
              <h3 className="text-xl font-semibold">Neat Finishing</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Attention to detail for a clean and polished final appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK PROCESS ================= */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ad9165]">
              Our Work Process
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              From Design to Final Finish
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#ad9165] text-xl font-semibold text-[#ad9165]">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-lg font-semibold">{step}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Each step is carefully planned to deliver a beautiful and
                  professional result.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#ad9165] px-6 py-20 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">
              Let's Design Your Walls
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/90">
              Contact us to discuss your wall design ideas and create a stylish
              interior that reflects your personality.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#29271f] px-7 py-4 font-semibold transition hover:bg-black"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hello, I want to discuss wall design work."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-[#29271f]"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wall_Design;

