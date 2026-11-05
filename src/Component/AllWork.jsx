
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Home,
  Phone,
  MessageCircle,
} from "lucide-react";

import { useEffect } from "react";

const workData = {
  pop: {
    title: "POP Work",
    subtitle: "Premium POP & Gypsum Interior Designs",
    description:
      "We create beautiful POP designs, decorative ceilings, cornices and modern gypsum interiors to give your home a luxurious look.",
    services: [
      "POP Ceiling Design",
      "Gypsum Board Work",
      "Decorative Cornice",
      "Designer Ceiling",
      "Wall Molding",
      "LED Cove Lighting",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },

  painting: {
    title: "Painting Work",
    subtitle: "Professional Interior & Exterior Painting",
    description:
      "Transform your home with premium painting services, modern wall colors, texture finishes and professional paint application.",
    services: [
      "Interior Painting",
      "Exterior Painting",
      "Texture Painting",
      "Wall Putty",
      "Primer Application",
      "Designer Wall Painting",
    ],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828",
  },

  electrical: {
    title: "Electrical Work",
    subtitle: "Safe & Modern Electrical Solutions",
    description:
      "Our electrical services include modern lighting installation, wiring, switches, fans and complete electrical solutions for your home.",
    services: [
      "Electrical Wiring",
      "Light Installation",
      "Fan Installation",
      "Switch & Socket Fitting",
      "LED Lighting",
      "Electrical Renovation",
    ],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827",
  },

  furniture: {
    title: "Furniture Work",
    subtitle: "Custom Furniture & Interior Solutions",
    description:
      "We design and install stylish furniture that perfectly matches your interior, space and lifestyle.",
    services: [
      "Custom Sofa",
      "Bed Design",
      "Wardrobe",
      "TV Unit",
      "Dining Table",
      "Custom Furniture",
    ],
    image:
      "https://images.unsplash.com/photo-家具",
  },

  plumbing: {
    title: "Plumbing Work",
    subtitle: "Reliable Plumbing & Fitting Services",
    description:
      "We provide professional plumbing services for kitchens, bathrooms and complete home renovation projects.",
    services: [
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Pipe Installation",
      "Tap Fitting",
      "Wash Basin Installation",
      "Water Tank Connection",
    ],
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101",
  },

  "false-ceiling": {
    title: "False Ceiling",
    subtitle: "Modern & Luxury Ceiling Designs",
    description:
      "Upgrade your home with elegant false ceiling designs, gypsum ceilings, PVC ceilings and premium lighting solutions.",
    services: [
      "Gypsum False Ceiling",
      "PVC Ceiling",
      "POP Ceiling",
      "Cove Lighting",
      "Designer Ceiling",
      "Commercial Ceiling",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },

  "modular-kitchen": {
    title: "Modular Kitchen",
    subtitle: "Beautiful & Functional Kitchen Designs",
    description:
      "We create modern modular kitchens with smart storage, premium finishes and practical layouts.",
    services: [
      "L-Shape Kitchen",
      "U-Shape Kitchen",
      "Straight Kitchen",
      "Kitchen Cabinets",
      "Kitchen Countertop",
      "Kitchen Renovation",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },

  wooden: {
    title: "Wooden Work",
    subtitle: "Premium Woodwork & Custom Designs",
    description:
      "Our wooden work includes custom doors, wardrobes, wall panels and stylish wood interiors.",
    services: [
      "Wooden Doors",
      "Wooden Wardrobe",
      "Wall Paneling",
      "Wooden Partitions",
      "Wooden Shelves",
      "Custom Woodwork",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },

  flooring: {
    title: "Flooring Work",
    subtitle: "Premium Flooring Installation",
    description:
      "We install modern flooring solutions that improve the beauty, durability and comfort of your interior.",
    services: [
      "Tile Flooring",
      "Marble Flooring",
      "Granite Flooring",
      "Wooden Flooring",
      "Vinyl Flooring",
      "Floor Renovation",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },

  "wall-design": {
    title: "Wall Design",
    subtitle: "Creative & Designer Wall Interiors",
    description:
      "Give your walls a premium look with modern wall panels, decorative designs and stylish finishes.",
    services: [
      "3D Wall Design",
      "Wall Paneling",
      "Texture Wall",
      "Decorative Wall",
      "TV Wall Design",
      "Feature Wall",
    ],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
  },

  wallpaper: {
    title: "Wallpaper Work",
    subtitle: "Elegant Wallpaper Installation",
    description:
      "We provide premium wallpaper installation with modern patterns, textures and beautiful wall finishes.",
    services: [
      "Designer Wallpaper",
      "3D Wallpaper",
      "Bedroom Wallpaper",
      "Living Room Wallpaper",
      "Kids Room Wallpaper",
      "Wallpaper Removal",
    ],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
  },

  "glass-aluminum": {
    title: "Glass & Aluminum Work",
    subtitle: "Modern Glass & Aluminum Solutions",
    description:
      "We provide modern glass partitions, aluminum windows and stylish interior glass solutions.",
    services: [
      "Glass Partition",
      "Aluminum Windows",
      "Glass Doors",
      "Shower Glass",
      "Office Glass",
      "Aluminum Fabrication",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },

  bathroom: {
    title: "Bathroom Renovation",
    subtitle: "Luxury Bathroom Interior Solutions",
    description:
      "We transform bathrooms with modern tiles, premium fittings, plumbing and elegant bathroom designs.",
    services: [
      "Bathroom Tiles",
      "Sanitary Fittings",
      "Shower Installation",
      "Bathroom Plumbing",
      "Vanity Design",
      "Complete Renovation",
    ],
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101",
  },

  renovation: {
    title: "Home Renovation",
    subtitle: "Complete Home Interior Renovation",
    description:
      "From planning to finishing, we provide complete home renovation and interior solutions for residential spaces.",
    services: [
      "Complete Home Renovation",
      "Living Room Interior",
      "Bedroom Interior",
      "Kitchen Renovation",
      "Bathroom Renovation",
      "Interior Finishing",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },
};

const categories = [
  { name: "POP Work", slug: "pop" },
  { name: "Painting Work", slug: "painting" },
  { name: "Electrical Work", slug: "electrical" },
  { name: "Furniture Work", slug: "furniture" },
  { name: "Plumbing Work", slug: "plumbing" },
  { name: "False Ceiling", slug: "false-ceiling" },
  { name: "Modular Kitchen", slug: "modular-kitchen" },
  { name: "Wooden Work", slug: "wooden" },
  { name: "Flooring Work", slug: "flooring" },
  { name: "Wall Design", slug: "wall-design" },
  { name: "Wallpaper Work", slug: "wallpaper" },
  { name: "Glass & Aluminum", slug: "glass-aluminum" },
  { name: "Bathroom Renovation", slug: "bathroom" },
  { name: "Home Renovation", slug: "renovation" },
];

function AllWork() {
  const { category } = useParams();

  const selectedWork = category ? workData[category] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // ================= MAIN ALL WORK PAGE =================

  if (!category) {
    return (
      <main className="bg-[#f8f6f1] min-h-screen pt-28">

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-[#a48658] tracking-[4px] text-xs uppercase mb-5">
              Rishi Interior & All
            </p>

            <h1 className="text-4xl md:text-6xl font-serif text-[#29271f] mb-6">
              Our Interior <span className="text-[#a48658]">Works</span>
            </h1>

            <p className="text-[#777064] leading-8">
              Explore our complete range of interior design, renovation,
              construction and home improvement services.
            </p>

          </div>

          {/* CATEGORY CARDS */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {categories.map((item) => {
              const work = workData[item.slug];

              return (
                <Link
                  key={item.slug}
                  to={`/allwork/${item.slug}`}
                  className="group bg-white border border-[#ded8cb] overflow-hidden hover:shadow-xl transition duration-500"
                >

                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

                  </div>

                  <div className="p-7">

                    <h2 className="text-2xl font-serif text-[#29271f] mb-3">
                      {work.title}
                    </h2>

                    <p className="text-sm text-[#777064] leading-7 mb-5">
                      {work.subtitle}
                    </p>

                    <div className="flex items-center justify-between text-[#a48658]">

                      <span className="text-xs tracking-widest uppercase">
                        Explore Work
                      </span>

                      <ArrowUpRight
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                      />

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </section>

      </main>
    );
  }

  // ================= INVALID CATEGORY =================

  if (!selectedWork) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center justify-center bg-[#f8f6f1]">

        <h1 className="text-4xl font-serif text-[#29271f] mb-5">
          Work Not Found
        </h1>

        <Link
          to="/allwork"
          className="bg-[#29271f] text-white px-6 py-3"
        >
          Back to All Work
        </Link>

      </div>
    );
  }

  // ================= CATEGORY DETAIL PAGE =================

  return (
    <main className="bg-[#f8f6f1] min-h-screen pt-28">

      {/* HERO SECTION */}

      <section className="relative min-h-[550px] flex items-center">

        <img
          src={selectedWork.image}
          alt={selectedWork.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#29271f]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">

          {/* BREADCRUMB */}

          <div className="flex items-center gap-3 text-white/70 text-sm mb-8">

            <Link to="/" className="hover:text-white">
              Home
            </Link>

            <span>/</span>

            <Link to="/allwork" className="hover:text-white">
              All Work
            </Link>

            <span>/</span>

            <span className="text-white">
              {selectedWork.title}
            </span>

          </div>

          <p className="text-[#d0b184] tracking-[4px] uppercase text-xs mb-5">
            Rishi Interior & All
          </p>

          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 max-w-3xl">
            {selectedWork.title}
          </h1>

          <h2 className="text-xl md:text-2xl text-[#d0b184] mb-6 font-serif">
            {selectedWork.subtitle}
          </h2>

          <p className="text-white/80 leading-8 max-w-2xl mb-10">
            {selectedWork.description}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#a48658] text-white px-7 py-4 text-xs tracking-widest hover:bg-white hover:text-[#29271f] transition duration-300"
          >
            GET A FREE QUOTE
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* SERVICES SECTION */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="max-w-3xl mb-14">

          <p className="text-[#a48658] tracking-[4px] text-xs uppercase mb-5">
            What We Offer
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-[#29271f] mb-6">
            Our {selectedWork.title} Services
          </h2>

          <p className="text-[#777064] leading-8">
            We provide professional quality, modern designs and
            reliable workmanship for every project.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {selectedWork.services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#ded8cb] p-7 flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >

              <CheckCircle
                size={22}
                className="text-[#a48658] shrink-0"
              />

              <div>

                <h3 className="text-lg font-serif text-[#29271f]">
                  {service}
                </h3>

                <p className="text-sm text-[#777064] mt-3 leading-6">
                  Professional {service.toLowerCase()} with premium
                  materials and quality finishing.
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-[#29271f] py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-[#d0b184] tracking-[4px] text-xs uppercase mb-5">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
                Quality Work.
                <br />
                Beautiful Spaces.
              </h2>

              <p className="text-white/60 leading-8 mb-10">
                We focus on quality materials, skilled professionals,
                transparent communication and beautiful finishing
                to deliver interiors that you will love.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-[#d0b184] border-b border-[#d0b184] pb-3 hover:text-white transition"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="grid grid-cols-2 gap-5">

              {[
                "Quality Materials",
                "Expert Team",
                "Modern Designs",
                "On-Time Work",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-8 text-center"
                >

                  <CheckCircle
                    size={28}
                    className="text-[#d0b184] mx-auto mb-5"
                  />

                  <h3 className="text-white font-serif">
                    {item}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="bg-[#e8dfd0] p-10 md:p-16 text-center">

          <p className="text-[#a48658] tracking-[4px] text-xs uppercase mb-5">
            Let's Build Together
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-[#29271f] mb-6">
            Ready to Transform Your Space?
          </h2>

          <p className="text-[#777064] max-w-2xl mx-auto leading-8 mb-10">
            Contact us today to discuss your requirements and get
            a quotation for your interior project.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#29271f] text-white px-7 py-4 text-xs tracking-widest hover:bg-[#a48658] transition"
            >
              CONTACT US
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#29271f] text-[#29271f] px-7 py-4 text-xs tracking-widest hover:bg-[#29271f] hover:text-white transition"
            >
              <MessageCircle size={18} />
              WHATSAPP
            </a>

          </div>

        </div>

      </section>

      {/* BACK TO ALL WORK */}

      <div className="text-center pb-16">

        <Link
          to="/allwork"
          className="inline-flex items-center gap-3 text-[#a48658] hover:text-[#29271f] transition"
        >
          <Home size={18} />
          Back to All Interior Work
        </Link>

      </div>

    </main>
  );
}

export default AllWork;
