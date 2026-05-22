import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const contactHeroImg =
  "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?auto=format&fit=crop&w=1200&q=80";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="grid min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-2">
        <div className="relative min-h-[min(50vw,28rem)] lg:min-h-0 lg:h-full">
          <Image
            src={contactHeroImg}
            alt="Plumber working on pipes under a kitchen cabinet"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center bg-[var(--bg-card)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto flex w-full max-w-md flex-col">
            <div className="mb-8 flex flex-col items-center text-center">
              <Link href="/" className="text-2xl font-bold text-[var(--navy)] sm:text-3xl">
                Tudor Plumbing
              </Link>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                Contractors · Cranleigh
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">66 Taylors Cres · GU6 7EP</p>
            </div>
            <h1 className="text-center text-3xl font-bold text-[var(--navy)]">Contact</h1>
            <p className="mt-2 text-center text-sm text-[var(--muted)]">Demo enquiry form.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
