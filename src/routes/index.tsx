import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, BedDouble, Bath, Maximize, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVilla from "@/assets/hero-villa.jpg";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import aboutInterior from "@/assets/about-interior.jpg";

export const Route = createFileRoute("/")({
  component: PlinthLanding,
});

const listings = [
  {
    img: listing1,
    title: "The Marlowe Residence",
    location: "Notting Hill, London",
    price: "£4,250,000",
    beds: 4,
    baths: 3,
    area: "3,200",
  },
  {
    img: listing2,
    title: "Casa Lumière",
    location: "Marbella, Spain",
    price: "€6,800,000",
    beds: 5,
    baths: 4,
    area: "4,800",
  },
  {
    img: listing3,
    title: "The Ashford Townhouse",
    location: "Chelsea, London",
    price: "£3,150,000",
    beds: 3,
    baths: 3,
    area: "2,650",
  },
];

const services = [
  { n: "01", t: "Acquisition", d: "Discreet sourcing of on- and off-market properties tailored to your brief." },
  { n: "02", t: "Sales", d: "Bespoke marketing for distinguished homes, presented to a private network." },
  { n: "03", t: "Advisory", d: "Investment strategy, valuations, and portfolio guidance from market experts." },
];

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex items-center justify-between text-background">
        <Link to="/" className="font-serif text-2xl tracking-widest">PLINTH</Link>
        <nav className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide">
          <a href="#listings" className="hover:opacity-70 transition">Properties</a>
          <a href="#services" className="hover:opacity-70 transition">Services</a>
          <a href="#about" className="hover:opacity-70 transition">About</a>
          <a href="#contact" className="hover:opacity-70 transition">Contact</a>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex bg-transparent border-background/60 text-background hover:bg-background hover:text-foreground rounded-none px-6">
          Book a viewing
        </Button>
        <button className="md:hidden" aria-label="Menu"><Menu className="h-6 w-6" /></button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroVilla}
        alt="Modern luxury villa at golden hour with infinity pool"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/20 to-foreground/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 h-full flex flex-col justify-end pb-24 text-background">
        <p className="text-xs tracking-[0.3em] uppercase mb-6 opacity-80">Est. 2014 — Curated Real Estate</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
          Homes with
          <br />
          a sense of place.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg font-light opacity-90">
          Plinth is a boutique studio specialising in distinguished residences,
          architectural villas, and considered investment properties.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" className="rounded-none px-8 h-12 bg-background text-foreground hover:bg-background/90">
            Browse properties
          </Button>
          <Button size="lg" variant="outline" className="rounded-none px-8 h-12 bg-transparent border-background/70 text-background hover:bg-background hover:text-foreground">
            Speak with an advisor
          </Button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "£1.2B+", l: "Property transacted" },
    { v: "240+", l: "Homes placed" },
    { v: "18", l: "Years of practice" },
    { v: "6", l: "International offices" },
  ];
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-serif text-4xl md:text-5xl text-primary">{s.v}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Listings() {
  return (
    <section id="listings" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Featured properties</p>
            <h2 className="font-serif text-4xl md:text-6xl max-w-2xl leading-tight">
              A considered selection of homes.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm tracking-wide hover:text-accent transition">
            View all properties <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((l) => (
            <article key={l.title} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={l.img}
                  alt={l.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-xs tracking-wide">
                  For Sale
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {l.location}
                </div>
                <h3 className="font-serif text-2xl mt-3">{l.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-serif text-xl text-accent">{l.price}</div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> {l.beds}</span>
                    <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {l.baths}</span>
                    <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {l.area} ft²</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={aboutInterior}
            alt="Refined interior of a Plinth home"
            loading="lazy"
            width={1200}
            height={1400}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">About Plinth</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A practice built on patience, taste, and trust.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            For nearly two decades we have represented architecturally significant
            homes and the people who love them. Our work is quiet, considered, and
            deeply personal — guided by a belief that a home should outlast trends.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From restored townhouses in London to coastal villas across the
            Mediterranean, every Plinth listing is selected with intention.
          </p>
          <Button className="mt-10 rounded-none px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90">
            Our story
          </Button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">What we do</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Three disciplines, one standard.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.n} className="bg-background p-10 md:p-12">
              <div className="font-serif text-accent text-xl mb-8">{s.n}</div>
              <h3 className="font-serif text-3xl mb-4">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm hover:text-accent transition">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase opacity-70 mb-6">Get in touch</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Looking for a home, or the right buyer for one?
        </h2>
        <p className="mt-8 opacity-80 max-w-2xl mx-auto">
          Our advisors work confidentially and without obligation. Tell us a little
          about what you have in mind.
        </p>
        <Button size="lg" className="mt-10 rounded-none px-10 h-12 bg-background text-foreground hover:bg-background/90">
          Arrange a consultation
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <div className="font-serif text-2xl tracking-widest">PLINTH</div>
          <p className="mt-4 text-sm opacity-70 max-w-xs">
            Boutique real estate studio. London · Marbella · Lisbon · Dubai.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Studio</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Properties</li><li>Services</li><li>About</li><li>Journal</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Contact</div>
          <ul className="space-y-2 text-sm opacity-90">
            <li>hello@plinth.co</li><li>+44 20 7946 0000</li><li>14 Mount Street, W1K</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mt-12 pt-8 border-t border-background/15 text-xs opacity-60 flex justify-between">
        <span>© {new Date().getFullYear()} Plinth Real Estate.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

function PlinthLanding() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Stats />
      <Listings />
      <About />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
