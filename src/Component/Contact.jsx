import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  Sparkles,
  MoveUpRight,
  Orbit,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "STUDIO LOCATION",
    value: "Mumbai, Maharashtra, India",
    note: "Visit our design studio",
  },
  {
    icon: Phone,
    title: "CALL OUR TEAM",
    value: "+91  8108837805",
    note: "Mon – Sat, 10 AM – 6 PM",
  },
  {
    icon: Mail,
    title: "EMAIL ADDRESS",
    value: "rishabhprajapati573@gmail.com",
    note: "We usually reply within 24 hours",
  },
  {
    icon: Clock,
    title: "WORKING HOURS",
    value: "Monday – Saturday",
    note: "10:00 AM – 6:00 PM",
  },
];

const services = [
  "Residential Design",
  "Commercial Design",
  "Space Planning",
  "Furniture & Styling",
  "3D Visualization",
  "Renovation",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setSubmitted(false);
  };

  return (
    <main className="overflow-hidden bg-[#f8f6f1] text-[#24231f]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury interior design"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#171713]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171713]/80 via-[#171713]/40 to-transparent" />

        {/* Decorative futuristic elements */}
        <div className="absolute right-10 top-24 hidden lg:block">
          <div className="relative h-52 w-52 rounded-full border border-white/20">
            <div className="absolute inset-5 rounded-full border border-[#c6a875]/50" />
            <div className="absolute inset-12 rounded-full border border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b982]" />
            <Orbit
              size={38}
              className="absolute -right-4 top-1/2 text-[#d6b982]"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-5 py-3 backdrop-blur-md">
              <Sparkles size={15} className="text-[#d6b982]" />
              <span className="text-[10px] tracking-[0.35em] text-white/80">
                RISHI / CONTACT STUDIO
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[1.08] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Let’s Shape
              <br />
              <span className="italic text-[#d6b982]">
                What’s Next.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/70 md:text-base">
              A space begins with an idea. Share your vision with us,
              and let’s transform it into an extraordinary experience
              designed around the way you live.
            </p>

            <a
              href="#contact-form"
              className="group mt-10 inline-flex items-center gap-4 bg-[#d6b982] px-8 py-4 text-xs tracking-[0.2em] text-[#24231f] transition-all duration-300 hover:bg-white"
            >
              START YOUR PROJECT
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-4 text-[10px] tracking-[0.25em] text-white/50 md:flex">
          <span>DESIGN</span>
          <span className="h-px w-12 bg-[#d6b982]" />
          <span>SPACE</span>
          <span className="h-px w-12 bg-[#d6b982]" />
          <span>FUTURE</span>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 md:grid-cols-2">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a98750]">
                <span className="h-px w-8 bg-[#a98750]" />
                THE FIRST STEP
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Every great space
                <br />
                <span className="italic text-[#a98750]">
                  starts somewhere.
                </span>
              </h2>
            </div>

            <div className="md:pb-2 md:pl-10">
              <p className="max-w-xl text-sm leading-8 text-[#77736b] md:text-base">
                Whether you’re planning a new home, reimagining your
                workspace, or exploring a bold new concept — we’re
                here to make the process thoughtful, seamless, and
                inspiring.
              </p>
            </div>
          </div>

          <div className="mt-16 h-px w-full bg-[#ded8cc]" />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] tracking-[0.25em] text-[#77736b]">
              YOUR IDEA. OUR EXPERTISE.
            </p>
            <p className="text-[10px] tracking-[0.25em] text-[#a98750]">
              LET’S BUILD SOMETHING TIMELESS
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT DETAILS + FORM ================= */}
      <section id="contact-form" className="px-6 pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">

          {/* CONTACT DETAILS */}
          <div className="relative overflow-hidden bg-[#24231f] p-8 text-white md:p-12 lg:col-span-2">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#c6a875]/20" />

            <div className="relative z-10">
              <p className="mb-6 text-[10px] tracking-[0.35em] text-[#d6b982]">
                CONNECT WITH RISHI
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                A conversation
                <br />
                <span className="italic text-[#d6b982]">
                  can change a space.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
                Our team is ready to listen, understand your needs,
                and help you discover the possibilities.
              </p>

              <div className="mt-12 space-y-8">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex gap-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-[#d6b982]/50 group-hover:bg-[#d6b982]/10">
                        <Icon
                          size={19}
                          className="text-[#d6b982]"
                        />
                      </div>

                      <div>
                        <p className="text-[9px] tracking-[0.25em] text-white/40">
                          {item.title}
                        </p>

                        <p className="mt-2 text-sm font-medium text-white/90">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-white/40">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-14 border-t border-white/10 pt-7">
                <p className="text-[10px] tracking-[0.25em] text-white/40">
                  STUDIO PHILOSOPHY
                </p>

                <p className="mt-3 font-serif text-xl italic text-[#d6b982]">
                  “Design beyond the ordinary.”
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-[#e5dfd3] bg-white p-7 md:p-12 lg:col-span-3">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="mb-5 text-[10px] tracking-[0.35em] text-[#a98750]">
                  PROJECT ENQUIRY
                </p>

                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  Tell us what
                  <br />
                  you’re imagining.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#77736b]">
                  A few details will help us understand your project
                  and connect you with the right design team.
                </p>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center border border-[#e5dfd3] text-[#a98750] sm:flex">
                <MoveUpRight size={23} />
              </div>
            </div>

            {submitted ? (
              <div className="mt-10 border border-[#e5dfd3] bg-[#f8f6f1] px-6 py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c6a875]/40 bg-white">
                  <CheckCircle2
                    size={30}
                    className="text-[#a98750]"
                  />
                </div>

                <h3 className="mt-6 font-serif text-3xl">
                  Thank You.
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#77736b]">
                  Your enquiry has been submitted in this demo.
                  We look forward to exploring your ideas.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-7 inline-flex items-center gap-3 border border-[#24231f] px-6 py-3 text-xs tracking-[0.15em] transition-colors hover:bg-[#24231f] hover:text-white"
                >
                  SEND ANOTHER MESSAGE
                  <ArrowUpRight size={15} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-xs tracking-wide text-[#555149]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full border border-[#e5dfd3] bg-[#faf9f6] px-4 py-4 text-sm outline-none transition-colors placeholder:text-[#aaa49a] focus:border-[#a98750]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-xs tracking-wide text-[#555149]"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      required
                      className="w-full border border-[#e5dfd3] bg-[#faf9f6] px-4 py-4 text-sm outline-none transition-colors placeholder:text-[#aaa49a] focus:border-[#a98750]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-xs tracking-wide text-[#555149]"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91  1234567890"
                      required
                      className="w-full border border-[#e5dfd3] bg-[#faf9f6] px-4 py-4 text-sm outline-none transition-colors placeholder:text-[#aaa49a] focus:border-[#a98750]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-3 block text-xs tracking-wide text-[#555149]"
                    >
                      Interested In *
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#e5dfd3] bg-[#faf9f6] px-4 py-4 text-sm text-[#77736b] outline-none transition-colors focus:border-[#a98750]"
                    >
                      <option value="">Select a service</option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-xs tracking-wide text-[#555149]"
                  >
                    Tell Us About Your Project *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your ideas, space requirements, timeline, or anything you'd like us to know..."
                    rows={5}
                    required
                    className="w-full resize-none border border-[#e5dfd3] bg-[#faf9f6] px-4 py-4 text-sm leading-7 outline-none transition-colors placeholder:text-[#aaa49a] focus:border-[#a98750]"
                  />
                </div>

                <div className="flex flex-col gap-5 border-t border-[#eee9df] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-6 text-[#99938a]">
                    * Required fields. Your information is used
                    only for this enquiry demo.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-4 bg-[#24231f] px-8 py-4 text-xs tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#c6a875] hover:text-[#24231f]"
                  >
                    SEND ENQUIRY
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#a98750]">
                <span className="h-px w-8 bg-[#a98750]" />
                OUR LOCATION
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Find your way
                <span className="italic text-[#a98750]"> to us.</span>
              </h2>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C%20Maharashtra%2C%20India"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.15em] text-[#555149] transition-colors hover:text-[#a98750]"
            >
              OPEN IN MAPS
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <div className="relative h-[350px] overflow-hidden border border-[#e5dfd3] md:h-[480px]">
            <iframe
              title="AUREVA Studio Location - Mumbai"
              src="https://www.google.com/maps?q=Mumbai%2C%20Maharashtra%2C%20India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />

            <div className="pointer-events-none absolute bottom-5 left-5 border border-white/50 bg-[#f8f6f1]/90 px-5 py-4 backdrop-blur-md">
              <p className="text-[9px] tracking-[0.3em] text-[#a98750]">
                RISHI DESIGN STUDIO
              </p>

              <p className="mt-2 font-serif text-lg">
                Mumbai, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#24231f] px-6 py-24 text-center md:py-32">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border border-white/[0.06]" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full border border-[#c6a875]/10" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 text-[10px] tracking-[0.35em] text-[#d6b982]">
            YOUR NEXT CHAPTER BEGINS HERE
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-7xl">
            Let’s create
            <br />
            <span className="italic text-[#d6b982]">
              something timeless.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55">
            Thoughtful design. Meaningful spaces. A future that
            feels beautifully yours.
          </p>

          <a
            href="mailto:hello@aureva.com"
            className="group mt-9 inline-flex items-center gap-4 bg-[#d6b982] px-8 py-4 text-xs tracking-[0.2em] text-[#24231f] transition-all duration-300 hover:bg-white"
          >
            LET’S TALK
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
