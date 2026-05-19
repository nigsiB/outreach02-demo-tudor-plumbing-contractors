import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80", alt: "Modern bathroom installation", title: "Bathroom installs", desc: "Full refits, showers, and tiling coordination with trusted local trades." },
  { image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80", alt: "Boiler and heating system", title: "Boilers & heating", desc: "Servicing, repairs, and replacements — landlord certificates available." },
  { image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80", alt: "Plumber responding to a leak", title: "Emergency leaks", desc: "Burst pipes and urgent call-outs across Cranleigh and surrounding villages." },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", alt: "Rental property plumbing work", title: "Landlord work", desc: "Reliable turnaround for agents and rental portfolios." },
  { image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80", alt: "General plumbing maintenance", title: "General plumbing", desc: "Taps, cylinders, outside taps, and routine maintenance." },
];

const reviews = [
  { quote: "Carl sorted our boiler the same day — professional and fair.", name: "Sarah M.", detail: "Google review" },
  { quote: "Best plumber we've used in Cranleigh. Bathroom looks fantastic.", name: "James T.", detail: "5★ local" },
  { quote: "Turned up on time, left everything tidy. Will use again.", name: "Helen R.", detail: "Repeat customer" },
];

export default function Page() {
  return (
    <main>
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">66 Taylors Cres · Cranleigh GU6 7EP</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Reliable plumbing from Carl &amp; the Tudor team.</h1>
            <p className="mt-4 text-white/80 leading-relaxed">
              Demo concept — bathrooms, boilers, and emergency call-outs. Rated 5★ from 15 reviews; Mon–Fri 8–5, Sat 8–1.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:07415381749" className="rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-bold">
                Call 07415 381749
              </a>
              <Link href="/contact" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold">
                Request a quote
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={heroImg} alt="Plumber at work" fill className="object-cover" priority sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section-trust border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-bold text-[var(--navy)]">5★</span> · 15 reviews on Google</p>
          <p><span className="font-bold text-[var(--navy)]">Cranleigh GU6 7EP</span></p>
          <p><span className="font-bold text-[var(--navy)]">Mon–Fri 8–5 · Sat 8–1</span></p>
        </div>
      </section>

      <section className="section-services mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold text-[var(--navy)]">Services</h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">Everything from Sunday-morning emergencies to planned bathroom upgrades.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={aboutImg} alt="Bathroom plumbing installation" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--navy)]">Why homeowners choose Tudor Plumbing</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Carl has built a reputation in Cranleigh for honest quotes, tidy workmanship, and showing up when it matters —
              including out-of-hours emergencies when other firms are closed.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--navy)]">
              <li>✓ Local, owner-led service — you speak to the person doing the job</li>
              <li>✓ Bathrooms, boilers, and landlord compliance</li>
              <li>✓ Clear pricing before work starts</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        image={galleryImg}
        imageAlt="Plumbing tools and fittings"
        title="Need a plumber today?"
        body="Call for emergencies or send a message for bathroom quotes and boiler work. Demo site — confirm live availability with Tudor Plumbing."
        primaryHref="/contact"
        primaryLabel="Get a quote"
        secondaryHref="tel:07415381749"
        secondaryLabel="07415 381749"
      />

      <section className="section-reviews mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold text-[var(--navy)]">What customers say</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm italic leading-relaxed text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-semibold text-[var(--navy)]">{r.name}</p>
              <p className="text-xs text-[var(--muted)]">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-bold text-[var(--navy)]">Recent work</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image src={galleryImg} alt="Completed plumbing job" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image src={aboutImg} alt="Boiler and heating work" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <CtaBand
        reverse
        image={heroImg}
        imageAlt="Tudor Plumbing Cranleigh"
        title="Book Carl for your next job"
        body="66 Taylors Crescent, Cranleigh GU6 7EP. Saturday mornings available for smaller jobs and quotes."
        primaryHref="tel:07415381749"
        primaryLabel="Call now"
        secondaryHref="/contact"
        secondaryLabel="Contact form"
      />
    </main>
  );
}
