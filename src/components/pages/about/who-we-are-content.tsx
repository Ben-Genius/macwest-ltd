"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { Globe } from "@/components/ui/globe";

const STATS = [
  { value: "14+", label: "Years of excellence" },
  { value: "3", label: "ISO certifications" },
  { value: "100+", label: "Projects delivered" },
];

const VISION_MARKERS = [
  { id: "accra", location: [5.6037, -0.187] as [number, number], label: "Accra, Ghana" },
  { id: "lagos", location: [6.5244, 3.3792] as [number, number], label: "Lagos, Nigeria" },
  { id: "nairobi", location: [-1.2921, 36.8219] as [number, number], label: "Nairobi, Kenya" },
  { id: "johannesburg", location: [-26.2041, 28.0473] as [number, number], label: "Johannesburg" },
  { id: "abidjan", location: [5.3599, -4.0083] as [number, number], label: "Abidjan, Côte d'Ivoire" },
  { id: "dakar", location: [14.7167, -17.4677] as [number, number], label: "Dakar, Senegal" },
  { id: "dar", location: [-6.7924, 39.2083] as [number, number], label: "Dar es Salaam" },
  { id: "douala", location: [4.0511, 9.7679] as [number, number], label: "Douala, Cameroon" },
];

const VISION_ARCS = [
  { id: "accra-lagos", from: [5.6037, -0.187] as [number, number], to: [6.5244, 3.3792] as [number, number] },
  { id: "accra-abidjan", from: [5.6037, -0.187] as [number, number], to: [5.3599, -4.0083] as [number, number] },
  { id: "accra-nairobi", from: [5.6037, -0.187] as [number, number], to: [-1.2921, 36.8219] as [number, number] },
  { id: "accra-johannesburg", from: [5.6037, -0.187] as [number, number], to: [-26.2041, 28.0473] as [number, number] },
  { id: "lagos-dar", from: [6.5244, 3.3792] as [number, number], to: [-6.7924, 39.2083] as [number, number] },
];

const VISION_POINTS = [
  "Expand our footprint across Sub-Saharan Africa",
  "Set the standard for quality and reliability in the region",
  "Deliver forward-thinking, future-ready engineering solutions",
  "Build lasting partnerships with public and private sectors",
];

const MISSION_POINTS = [
  "Offer precision engineering for structures built to last",
  "Deliver cost-effective solutions without compromising quality",
  "Champion health, safety, and environmental responsibility",
  "Empower local talent and support community growth",
];

const CSR_PILLARS = [
  { title: "Infrastructure", desc: "Building lasting structures that uplift communities" },
  { title: "Education", desc: "Supporting training programmes and skills development" },
  { title: "Sustainability", desc: "Environmentally responsible construction practices" },
  { title: "Community", desc: "Engaging and empowering local people in every project" },
];

export function WhoWeAreContent() {
  return (
    <>
      {/* ── Hero statement ────────────────────────────────────── */}
      <Section theme="white" spacing="sm">
        <Container size="2xl">
          <GSAPReveal y={10}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-navy-200 text-[13px] font-semibold tracking-wide text-navy-600 bg-navy-50 mb-8">
              Who We Are
            </span>
          </GSAPReveal>

          <GSAPReveal y={0} delay={0.1}>
            <div className="max-w-full w-full mb-14">
              <h2 className="max-w-full w-full whitespace-nowrap mx-auto text-center lg:text-[3.5rem] font-display font-bold leading-[1.1] tracking-tight">
                <span className="text-navy-900">
                  We&apos;re a proudly Ghanaian-owned company meeting the evolving demand for modern civil engineering and construction.{" "}
                </span>
                <span className="text-navy-300">
                  Built on integrity, driven by excellence since 2011.
                </span>
              </h2>
            </div>
          </GSAPReveal>

          <GSAPReveal y={40} delay={0.2}>
            <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden relative">
              <Image
                src="https://i0.wp.com/macwest.com.gh/wp-content/uploads/2025/03/0T6A9939.jpg?fit=2048%2C1365&ssl=1"
                alt="Macwest Limited — flagship project"
                fill
                className="object-cover"
                priority
              />
            </div>
          </GSAPReveal>
        </Container>
      </Section>

      {/* ── Vision — text left, globe right ──────────────────── */}
      <Section theme="white" spacing="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <GSAPReveal y={30} className="flex flex-col">
              <span className="inline-flex w-fit items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-navy-50 mb-6">
                Our Vision
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-5 leading-tight">
                The most reliable and preferred construction company in Sub-Saharan Africa.
              </h3>
              <p className="text-navy-500 leading-relaxed text-lg mb-8">
                We aim to be the most reliable and preferred Construction and Engineering Company in Sub-Saharan Africa and beyond — building trust through every project we deliver.
              </p>
              <ul className="space-y-3">
                {VISION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-2 size-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-navy-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </GSAPReveal>

            <GSAPReveal y={40} delay={0.15} className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <Globe
                  markers={VISION_MARKERS}
                  arcs={VISION_ARCS}
                  markerColor={[0.55, 0.1, 0.2]}
                  baseColor={[0.95, 0.95, 0.98]}
                  arcColor={[0.55, 0.1, 0.2]}
                  glowColor={[0.9, 0.88, 0.9]}
                  dark={0}
                  mapBrightness={9}
                  markerSize={0.03}
                  theta={0.15}
                  speed={0.002}
                />
                <p className="text-center text-xs text-navy-400 mt-4 tracking-wide">
                  Expanding across Sub-Saharan Africa
                </p>
              </div>
            </GSAPReveal>
          </div>
        </Container>
      </Section>

      {/* ── Mission — image left, text right ─────────────────── */}
      <Section theme="light" spacing="xl">
        <Container size="xl" className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <GSAPReveal y={40} delay={0.15} className="lg:order-1 order-2">
              <div className="aspect-[3/2.8] w-full rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/about/mission.png"
                  alt="Macwest mission — construction excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </GSAPReveal>

            <GSAPReveal y={30} className="lg:order-2 order-1 flex flex-col">
              <span className="inline-flex w-fit items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-white mb-6">
                Our Mission
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-5 leading-tight">
                Creating value through contemporary construction and engineering solutions.
              </h3>
              <p className="text-navy-500 leading-relaxed text-lg mb-8">
                To emerge as a regional leader through the creation of value by providing contemporary Construction and Engineering solutions designed to meet infrastructural needs.
              </p>
              <ul className="space-y-3">
                {MISSION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-2 size-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    <span className="text-navy-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </GSAPReveal>
          </div>
        </Container>
      </Section>

      {/* ── Our Story — sticky heading + scrolling prose ──────── */}
      <Section theme="white" spacing="xl">
        <Container size="xl" className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-6">
                <GSAPReveal y={20}>
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-navy-200 text-[12px] font-semibold tracking-wide text-navy-600 bg-navy-50">
                    Our Story
                  </span>
                </GSAPReveal>
                <GSAPReveal y={30} delay={0.1}>
                  <h3 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 leading-tight">
                    Built on Integrity, Driven by Excellence.
                  </h3>
                </GSAPReveal>
                <GSAPReveal y={40} delay={0.15}>
                  <div className="aspect-[3/3] w-full rounded-2xl overflow-hidden relative">
                    <Image
                      src="/images/about/our_story.JPG"
                      alt="Macwest — our story"
                      fill
                      className="object-cover"
                    />
                  </div>
                </GSAPReveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <GSAPReveal y={30} delay={0.2}>
                <div className="space-y-6 pt-2">
                  <p className="text-xl text-navy-800 leading-relaxed font-medium">
                    Macwest Limited was registered in May 2011, under the Companies Act of 1963, with a mandate to serve Ghana&apos;s evolving need for Modern Civil and Engineering Innovations.
                  </p>
                  <p className="text-navy-500 leading-relaxed">
                    Built on the values of precision, integrity, and innovation, we have since earned several global certifications and are trusted partners in the industry. From our earliest projects, we set out to blend technical excellence with practical problem-solving — delivering structures of lasting value.
                  </p>
                  <p className="text-navy-500 leading-relaxed">
                    Over the years, we&apos;ve built and trained a strong team of engineers, skilled craftspeople, and creative professionals whose diverse expertise drives our work. What began as a local construction venture has grown into a full-service engineering and construction firm, recognized for cost-effective and future-ready solutions.
                  </p>
                  <p className="text-navy-500 leading-relaxed">
                    Looking ahead, we are focused on expanding our footprint across Sub-Saharan Africa, bringing the same standards of quality and reliability to clients throughout the region. At our core, we remain true to the principles that guided our founding — always committed to exceeding expectations.
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-navy-100">
                    {STATS.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-3xl font-display font-bold text-brand-600 mb-1">{stat.value}</div>
                        <div className="text-sm text-navy-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </GSAPReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Corporate Social Responsibility ───────────────────── */}
      <Section theme="brand" spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-600/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold-500/5 to-transparent blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GSAPReveal y={30}>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-white/20 text-[12px] font-semibold tracking-wide text-white/60 mb-6">
                Community Impact
              </span>
              <h3 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Corporate Social Responsibility
              </h3>
              <p className="text-navy-200 leading-relaxed text-lg mb-5">
                At Macwest, Corporate Social Responsibility is not an obligation — it guides how we work and how we engage with communities.
              </p>
              <p className="text-navy-300 leading-relaxed mb-5">
                We believe every project is an opportunity to create a lasting, positive impact beyond the immediate scope of construction or development.
              </p>
              <p className="text-navy-300 leading-relaxed mb-10">
                While we pursue economic growth and business excellence, our CSR initiatives are designed to support education, community development, and sustainable livelihoods, ensuring that our presence brings tangible value to local communities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {CSR_PILLARS.map((pillar) => (
                  <div key={pillar.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] transition-colors">
                    <div className="w-8 h-0.5 bg-brand-500 mb-4" />
                    <div className="font-semibold text-white mb-1.5 text-sm tracking-wide uppercase">{pillar.title}</div>
                    <div className="text-sm text-navy-300 leading-snug">{pillar.desc}</div>
                  </div>
                ))}
              </div>
            </GSAPReveal>

            <GSAPReveal y={40} delay={0.15}>
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden relative shadow-2xl">
                <Image
                  src="https://i0.wp.com/www.macwest.com.gh/wp-content/uploads/2025/07/1H6A1074-scaled.jpg"
                  alt="Macwest corporate social responsibility"
                  fill
                  className="object-cover"
                />
              </div>
            </GSAPReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
