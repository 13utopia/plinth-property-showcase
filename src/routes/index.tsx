import { createFileRoute } from "@tanstack/react-router";
import { memo, useCallback, useId, useMemo, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Heart } from "lucide-react";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Store,
  Phone as PhoneIcon,
  Leaf,
  ArrowUp,
  Layers,
  MoveVertical,
  Car,
  MapPin,
  Award,
  Landmark,
  Key,
  Tv,
  Video,
  Dumbbell,
  Coffee,
  Snowflake,
  Building,
  Briefcase,
  ShoppingBag,
  TrainFront,
  Check,
  Menu,
  Sparkles,
  AlertCircle,
  Calendar,
  Download,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  X,
} from "lucide-react";
import tower from "@/assets/Tower.jpeg";
import office from "@/assets/Plinth-office.jpeg";
import showroom from "@/assets/Plinth-showroom.jpeg";
import plinthOffice from "@/assets/plinth-office.jpg";
import listing1 from "@/assets/listing-1.jpg";
import plinthShowroom from "@/assets/plinth-showroom.jpg";
import listing2 from "@/assets/listing-2.jpg";


export const Route = createFileRoute("/")({
  component: PlinthLanding,
  head: () => ({
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    meta: [
      { title: "Plinth | Premium Commercial Space" },
      {
        name: "description",
        content:
          "Invest in Plinth — Ahmedabad's most prestigious G+38 storey commercial landmark on Sindhu Bhavan Road. Office spaces from 1265 sq.ft & showrooms from 2700 sq.ft. 15–18% expected annual ROI. Starting ₹91 Lakhs.",
      },
      {
        name: "keywords",
        content:
          "office space Sindhu Bhavan Road, commercial property Ahmedabad, commercial investment Ahmedabad, Plinth commercial tower, high ROI commercial property",
      },
      {
        property: "og:title",
        content: "Plinth | Premium Commercial Property — Sindhu Bhavan Road, Ahmedabad",
      },
      {
        property: "og:description",
        content:
          "G+38 landmark commercial tower. Offices from ₹91L, 15–18% expected annual ROI, IGBC green certified. Book your site visit today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Plinth | Premium Commercial Space — Ahmedabad" },
      {
        name: "twitter:description",
        content:
          "G+38 landmark on Sindhu Bhavan Road. Office & showroom spaces with 15-18% annual ROI.",
      },
      { name: "twitter:image", content: "/favicon.png" },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

/* ---------- shared bits ---------- */

const SectionLabel = ({ n, t }: { n: string; t: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="h-px w-16 bg-[var(--gold-soft)]" />
    <span className="text-xs tracking-[0.3em] text-[#E3C98B]">
      {n} / {t}
    </span>
  </div>
);

const goldText = "bg-[var(--gradient-gold)] bg-clip-text text-transparent";

function TiltCard({
  children,
  className,
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return (
    <div
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}

function PremiumButton({
  children,
  className,
  innerClassName,
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden rounded-full bg-gradient-to-r from-[#E3C98B] via-[#D4A865] to-[#C69A57] p-[1.5px] transition-all hover:shadow-[0_0_30px_-5px_rgba(227,201,139,0.6)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 ${fullWidth ? "w-full" : ""} ${className || ""}`}
    >
      <div
        className={`relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-[#E3C98B] via-[#D4A865] to-[#C69A57] text-black font-semibold transition-colors group-hover:from-[#F5E9C8] group-hover:via-[#E3C98B] group-hover:to-[#D4A865] group-hover:text-black ${innerClassName || "px-8 py-4 text-[13px]"}`}
      >
        {children}
      </div>
    </button>
  );
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ---------- 1. NAV ---------- */

function Nav({ onEnquireClick }: { onEnquireClick?: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["Home", "ROI", "Highlights", "Spaces", "Amenities", "Location", "Contact"];
  const handleEnquireClick = () => {
    setIsMobileMenuOpen(false);
    onEnquireClick?.();
  };

  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-24 xl:px-25 py-4 sm:py-5 flex items-center justify-between gap-2">
        {/* Left Side: Mobile Menu Trigger */}
        <div className="flex-1 md:hidden">
          <button className="text-foreground p-2 -ml-2" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[14px] tracking-wide font-light text-foreground/80 flex-1 justify-center">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[#E3C98B] transition">
              {l}
            </a>
          ))}
        </nav>

        {/* Right Side: Enquire Button */}
        <div className="ml-auto flex justify-end flex-1">
          <PremiumButton
            onClick={handleEnquireClick}
            innerClassName="px-4 py-2.5 sm:px-5 md:px-6 md:py-3 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-widest whitespace-nowrap"
          >
            Enquire Now
          </PremiumButton>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black/95  px-6 py-5 md:hidden">
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-widest text-[#E3C98B]">PLINTH</span>
            <button
              className="text-foreground p-2 bg-white/10 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 mt-4">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-white/5 pb-4 text-foreground/80"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- 2. HERO ---------- */

const Hero = memo(function Hero({ onBrochureClick }: { onBrochureClick?: () => void }) {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-14 lg:pt-24 lg:pb-14">
      {/* radial gold glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_55%,oklch(0.78_0.13_75/0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_85%_10%,oklch(0.78_0.13_75/0.08),transparent_70%)]" />
      {/* decorative concentric arcs top-right */}
      <svg
        className="absolute -top-40 -right-40 w-[700px] h-[700px] opacity-[0.18] pointer-events-none"
        viewBox="0 0 700 700"
        fill="none"
      >
        {[180, 240, 300, 360, 420, 480, 540].map((r) => (
          <circle key={r} cx="500" cy="200" r={r} stroke="oklch(0.78 0.13 75)" strokeWidth="0.6" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1080px] px-5 md:px-8 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* LEFT */}
        <div className="pt-4 lg:pt-2 z-10">
          {/* Top Pill */}
          <div className="lg:mt-[-80px] inline-flex items-center gap-2 rounded-full border border-[#E3C98B]/30 bg-[#0A0A0A]/60  px-4 py-2 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E3C98B]" />
            <span className="text-[11px] tracking-[0.2em] text-white/70 font-medium">
              NOW LAUNCHING <span className="mx-1 text-[#E3C98B]/50">·</span>{" "}
              <span className="font-semibold text-[12px] text-white tracking-[0.1em]">
                SINDHU BHAVAN ROAD
              </span>
            </span>
          </div>

          <p className="font-serif text-[22px] text-[#E8E1CF]/90 mb-2">Looking For</p>
          <h1 className="font-serif text-[40px] sm:text-[48px] md:text-[52px] lg:text-[50px] leading-[1.08] text-white mb-8">
            Premium Commercial
            <br />
            Space?
          </h1>

          <div className="flex items-center gap-4 mb-2">
            <span className="h-px w-8 bg-[#C69A57]/60" />
            <span className="text-[10px] tracking-[0.3em] text-[#C69A57]">EXPECTED ANNUAL ROI</span>
          </div>
          <div className="roi-display font-serif text-[62px] sm:text-[86px] lg:text-[98px] leading-[1.1] italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent drop-shadow-md mb-5">
            15-18<span className="text-[42px] sm:text-[58px] lg:text-[70px]">%</span>
          </div>
          <p className="text-white/70 text-[14px] leading-relaxed max-w-[390px] mb-10">
            A high-growth commercial investment opportunity in Ahmedabad's most prestigious business
            corridor.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <PremiumButton
              onClick={onBrochureClick}
              className="w-full sm:w-auto"
              innerClassName="w-full px-8 py-4 text-[13px] gap-3"
            >
              Download Brochure
              <Download className="h-3.5 w-3.5" />
            </PremiumButton>
            <a
              href="tel:+919898709370"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[13px] font-medium text-white/90 border border-white/20 bg-transparent hover:border-white/40 transition duration-300"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-white/70" />
              Talk to Advisor
            </a>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 lg:max-w-[480px]">
            {[
              { icon: TrendingUp, label: "STARTING", v: "₹91 Lakhs" },
              { icon: Building2, label: "OFFICE FROM", v: "1265 Sq.ft" },
              { icon: Store, label: "SHOWROOM FROM", v: "2700 Sq.ft" },
            ].map(({ icon: Icon, label, v }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center sm:items-start sm:text-left rounded-2xl border border-[#E3C98B]/20 bg-[#0A0A0A]/50  p-5 sm:p-3.5 hover:border-[#E3C98B]/40 transition duration-300 group"
              >
                <Icon
                  className="h-5 w-5 text-[#C69A57] mb-4 transition-transform group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <div className="w-full">
                  <div className="text-[8px] tracking-[0.25em] text-white/40 mb-1.5 uppercase">
                    {label}
                  </div>
                  <div className="text-white/90 text-[12px] font-medium">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - tower */}
        <div className="relative pt-8 sm:pt-10 lg:pt-0">
          {/* Main Image Frame */}
          <div className="lg:mt-[-90px] relative mx-auto w-full max-w-[420px] rounded-[32px] border border-[#C69A57]/30 bg-[#0A0A0A] aspect-[9/13] sm:aspect-[4/5] lg:aspect-[3/4] overflow-visible shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <img
                src={tower}
                alt="Plinth tower"
                decoding="async"
                loading="eager"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Top Tags */}
              <div className="absolute top-5 inset-x-5 flex justify-between gap-2 z-20">
                <div className="rounded-full border border-[#E3C98B]/40 bg-black/40  px-4 py-2 text-[8px] sm:text-[9px] tracking-[0.2em] text-white/90 font-medium">
                  G + 38 STOREY
                </div>
                <div className="rounded-full border border-[#E3C98B]/40 bg-black/40  px-4 py-2 text-[8px] sm:text-[9px] tracking-[0.2em] text-white/90 font-medium">
                  LANDMARK
                </div>
              </div>
            </div>

            {/* floating PROPERTY APPRECIATION card */}
            <div className="absolute -left-4 sm:-left-12 top-[22%] rounded-2xl border border-[#E3C98B]/40 bg-black/70 px-5 py-7 shadow-lg z-10 w-48 sm:w-56 min-h-[160px] sm:min-h-0 group transition-all hover:border-[#E3C98B]/60">
              <div className="text-[8px] tracking-[0.15em] text-[#E3C98B]/80 mb-3 font-medium">
                PROPERTY APPRECIATION
              </div>
              <div className="roi-display font-serif text-[40px] sm:text-[42px] leading-none text-[#E3C98B] mb-3">
                15-18%
              </div>
              <p className="text-[10px] sm:text-[11px] text-white/60 leading-relaxed font-light max-w-[140px]">
                Expected annual returns on investment
              </p>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
            </div>

            {/* CEILING HEIGHT card */}
            <div className="absolute -right-4 sm:-right-8 bottom-[20%] rounded-2xl border border-[#E3C98B]/40 bg-black/70 px-5 py-5 shadow-lg z-10 w-36 sm:w-44 group transition-all hover:border-[#E3C98B]/60">
              <div className="text-[8px] tracking-[0.15em] text-[#E3C98B]/80 mb-2 font-medium">
                CEILING HEIGHT
              </div>
              <div className="roi-display text-[32px] sm:text-[38px] leading-none text-white/90">
                11.5 <span className="italic text-white/40 text-lg sm:text-xl ml-0.5">ft</span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
            </div>

            {/* bottom development bar */}
            <div className="absolute left-4 right-4 bottom-4 rounded-[20px] border border-[#E3C98B]/40 bg-black/70 px-5 py-4 flex items-center justify-between gap-4 z-10 group transition-all hover:border-[#E3C98B]/60">
              <div>
                <div className="text-[8px] tracking-[0.2em] text-[#E3C98B]/80 mb-1.5 font-medium uppercase">
                  THE DEVELOPMENT
                </div>
                <div className="font-serif text-[15px] sm:text-[17px] text-white tracking-wide">
                  Sindhu Bhavan, Ahmedabad
                </div>
              </div>
              <button
                type="button"
                aria-label="Explore"
                className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] text-black flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-[0_0_20px_-5px_rgba(227,201,139,0.5)]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

/* ---------- 3. INVESTMENT OPPORTUNITY (ROI) ---------- */

const ROISection = memo(function ROISection() {
  return (
    <section id="roi" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="02" t="INVESTMENT OPPORTUNITY" />
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground max-w-4xl">
          Earn up to{" "}
          <span className="roi-display italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
            15-18%
          </span>
          <br />
          Annual Returns.
        </h2>
        <p className="mt-5 max-w-2xl text-foreground/70 leading-relaxed text-lg">
          A rare opportunity to own a unit inside Ahmedabad's most in demand commercial corridor.
          Exceptional rental yields, sustained capital appreciation, and a tenant ready ecosystem.
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-4 lg:gap-5 items-start">
          {/* Chart card */}
          <div className="relative lg:col-span-3 rounded-3xl border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))]  p-5 lg:p-6 shadow-[0_55px_170px_-150px_oklch(0.78_0.13_75/0.55)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.06)] opacity-60" />
            <div className="relative flex justify-between items-start mb-8">
              <div>
                <div className="text-[10px] tracking-[0.3em] text-[#E3C98B] mb-3">
                  PROJECTED ROI CURVE
                </div>
                <h3 className="font-serif text-3xl text-foreground">Capital Appreciation</h3>
              </div>
              <div className="text-right">
                <div className="italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                  8%
                </div>
                <div className="text-[10px] tracking-[0.3em] text-foreground/60 mt-1">
                  PEAK YIELD
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-40">
              <svg viewBox="0 0 600 220" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.13 75)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="oklch(0.78 0.13 75)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 80, 120, 160, 200].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="600"
                    y2={y}
                    stroke="oklch(0.4 0.02 70)"
                    strokeDasharray="3 6"
                    strokeWidth="0.5"
                  />
                ))}
                <path
                  d="M 20 190 L 90 165 L 160 140 L 230 120 L 300 100 L 370 80 L 440 65 L 510 50 L 580 35 L 580 220 L 20 220 Z"
                  fill="url(#curveFill)"
                />
                <path
                  d="M 20 190 L 90 165 L 160 140 L 230 120 L 300 100 L 370 80 L 440 65 L 510 50 L 580 35"
                  stroke="oklch(0.78 0.13 75)"
                  strokeWidth="2"
                  fill="none"
                />
                {[
                  [20, 190],
                  [90, 165],
                  [160, 140],
                  [230, 120],
                  [300, 100],
                  [370, 80],
                  [440, 65],
                  [510, 50],
                  [580, 35],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="oklch(0.78 0.13 75)" />
                ))}
              </svg>
            </div>
            <div className="grid grid-cols-9 text-[10px] tracking-widest text-foreground/50 mt-3">
              {["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9"].map((y) => (
                <span key={y} className="text-center">
                  {y}
                </span>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-[#E3C98B]/20 grid grid-cols-3 gap-3">
              {[
                { l: "ENTRY YIELD", v: "8%" },
                { l: "STABILIZED", v: "15-18%" },
                { l: "HORIZON", v: "4 Yrs" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[10px] tracking-[0.3em] text-foreground/60 mb-2">{s.l}</div>
                  <div className="italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side stat cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: TrendingUp,
                v: "92%",
                t: "High Rental Demand Zone",
                d: "Occupancy rate in the corridor",
              },
              {
                icon: MapPin,
                v: "A+",
                t: "Prime Sindhu Bhavan Location",
                d: "Premium commercial grade",
              },
              {
                icon: TrendingUp,
                v: "2.4x",
                t: "Property Appreciation",
                d: "Projected 5-year growth",
              },
              { icon: Award, v: "IGBC", t: "Grade-A Commercial", d: "Green building certified" },
            ].map(({ icon: Icon, v, t, d }) => (
              <div
                key={t}
                className="group relative rounded-[20px] border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))]  p-5 min-h-[220px] sm:min-h-[200px] flex flex-col items-center text-center sm:items-start sm:text-left justify-center transition-all duration-300 
      transform-gpu hover:scale-[1.02] active:scale-[0.98]
      hover:border-[oklch(0.78_0.13_75/0.45)] 
      active:border-[oklch(0.78_0.13_75/0.45)] 
      hover:shadow-[0_40px_130px_-120px_oklch(0.78_0.13_75/0.65)]
      active:shadow-[0_40px_130px_-120px_oklch(0.78_0.13_75/0.65)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.06)] opacity-55 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />
                <div className="relative h-9 w-9 rounded-full bg-[linear-gradient(135deg,oklch(0.86_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center mb-4 sm:mb-3 shadow-[0_22px_60px_-40px_oklch(0.78_0.13_75/0.80)] mx-auto sm:mx-0">
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                  <Icon className="h-4 w-4 text-[oklch(0.16_0.012_60)]" />
                </div>
                <div className="relative font-serif text-[22px] sm:text-[20px] leading-none mb-2 sm:mb-1.5 bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                  {v}
                </div>
                <div className="relative text-[13px] sm:text-[12px] text-foreground/90 font-medium leading-snug">
                  {t}
                </div>
                <p className="relative text-[11px] sm:text-[10px] text-foreground/55 mt-1 sm:mt-0.5 leading-snug max-w-[160px] sm:max-w-none">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

/* ---------- 4. HIGHLIGHTS ---------- */

function Highlights() {
  const items = [
    {
      icon: Building,
      t: "G + 38 Storey",
      d: "Landmark tower defining the skyline of Sindhu Bhavan Road.",
    },
    {
      icon: Leaf,
      t: "Green Building",
      d: "IGBC certified, energy-efficient and sustainably engineered.",
    },
    {
      icon: ArrowUp,
      t: "18 Lifts",
      d: "High-speed vertical transport - no wait times, zero downtime.",
    },
    {
      icon: Layers,
      t: "18 Offices / Floor",
      d: "Thoughtfully planned floor plates for productivity & flow.",
    },
    {
      icon: MoveVertical,
      t: "11.5 ft Ceilings",
      d: "Double-volume interiors for a grand, open workspace.",
    },
    {
      icon: Car,
      t: "-4 Basement Parking",
      d: "Ample secured parking across four basement levels.",
    },
  ];
  return (
    <section id="highlights" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="03" t="PROJECT HIGHLIGHTS" />
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-[1.02] text-foreground tracking-tight">
            Engineered to
            <br />
            <span className="italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
              Impress.
            </span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed lg:mt-8">
            Every number has been carefully considered - floor plates, ceiling heights, basements,
            elevators. Premium scale that tenants and investors recognize instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto">
          {items.map(({ icon: Icon, t, d }, i) => (
            <TiltCard
              key={t}
              className="group relative rounded-2xl border border-[#E3C98B]/20 bg-gradient-to-br from-card/70 to-card/35  p-6 sm:p-4 min-h-[180px] sm:min-h-[140px] flex flex-col items-center text-center sm:items-start sm:text-left hover:border-[var(--gold)]/20 hover:shadow-[0_36px_110px_-78px_oklch(0.78_0.13_75/0.75)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.08)] opacity-60 group-hover:opacity-60 transition-opacity" />
              <div className="relative flex flex-col items-center sm:items-start sm:flex-row sm:justify-between w-full mb-5 sm:mb-4">
                <div className="relative h-14 w-14 sm:h-12 sm:w-12 rounded-2xl bg-[linear-gradient(135deg,oklch(0.86_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center shadow-[0_22px_60px_-40px_oklch(0.78_0.13_75/0.85)] mx-auto sm:mx-0">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                  <Icon className="h-6 w-6 sm:h-5 sm:w-5 text-[oklch(0.16_0.012_60)]" />
                </div>
                <div className="relative hidden sm:block">
                  <div className="pointer-events-none absolute -inset-3 rounded-xl bg-[radial-gradient(ellipse_at_center,oklch(0.86_0.12_80/0.22),transparent_65%)] opacity-70" />
                  <span className="relative text-xs tracking-widest text-[oklch(0.83_0.11_78/0.55)]">
                    0{i + 1}
                  </span>
                </div>
              </div>
              <h3 className="relative font-serif text-[21px] sm:text-[19px] text-foreground mb-2 sm:mb-1.5 mt-1">
                {t}
              </h3>
              <p className="relative text-[13px] sm:text-sm text-foreground/65 leading-relaxed max-w-[240px] sm:max-w-none">
                {d}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. SPACES ---------- */

function Spaces() {
  const goldText =
    "bg-gradient-to-r from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent";

  const cards = [
    {
      tag: "OFFICE SPACE",
      imgs: [office, plinthOffice, listing1],
      size: "1265",
      unit: "Sq.ft",
      title: "Starting ₹91 Lakhs",
      features: [
        "18 offices per floor · customizable layouts",
        "11.5 ft ceilings, floor-to-ceiling glass",
        "Dedicated high-speed elevators",
        "Central air-conditioning",
      ],
    },
    {
      tag: "SHOWROOM SPACE",
      imgs: [showroom, plinthShowroom, listing2],
      size: "2700",
      unit: "Sq.ft",
      title: "Premium ground retail",
      features: [
        "Double-height frontage",
        "High footfall, high visibility",
        "Signage rights on key elevation",
        "Front + rear access",
      ],
    },
  ];

  return (
    <section id="spaces" className="py-12 lg:py-16 bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="text-[10px] tracking-[0.4em] text-[#C69A57] font-bold mb-6 uppercase">
            04 / SPACE OPTIONS
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight text-foreground">
            Designed for <span className={`italic ${goldText}`}>Business &amp;</span>{" "}
            <span className={`italic ${goldText}`}>Brands.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 max-w-[860px] mx-auto">
          {cards.map((c) => (
            <div
              key={c.tag}
              className="rounded-[24px] border border-[#C69A57]/40 bg-[#141414] overflow-hidden group transition-all duration-700 hover:border-[#E3C98B]/60 hover:shadow-[0_0_50px_-15px_#C69A57] active:shadow-[0_0_50px_-15px_#C69A57]"
            >
              <div className="relative h-[195px] sm:h-[195px] md:h-[230px] overflow-hidden group/image border-b-2 border-b-[#C69A57]/30 transition-colors duration-300 group-hover:border-b-[#E3C98B]/60">
                <img
                  src={c.imgs[0]}
                  alt={c.tag}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#141414] via-[#141414]/20 to-black/20" />
                <div className="absolute inset-0 pointer-events-none rounded-[2px] ring-1 ring-inset ring-[#E3C98B]/0 transition-all duration-300 group-hover/image:ring-[#E3C98B]/60 group-active/image:ring-[#E3C98B]/60" />
                <div className="absolute top-4 left-5 rounded-full border border-[#E3C98B]/40 bg-black/60  px-5 py-2 text-[9px] tracking-[0.3em] text-white/90 font-medium uppercase shadow-lg transition-colors duration-300 group-hover/image:border-[#E3C98B] group-hover/image:bg-[#E3C98B]/10">
                  {c.tag}
                </div>
                <div className="absolute bottom-2 left-6 flex flex-col gap-2">
                  <div className="text-[10px] tracking-[0.4em] text-[#C69A57] font-bold uppercase">
                    STARTING FROM
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl md:text-[2rem] text-white leading-[0.7] tracking-tighter">
                      {c.size}
                    </span>
                    <span className="font-serif text-2xl text-white/50 italic lowercase">
                      {c.unit}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <h3 className="font-serif text-[17px] md:text-[19px] italic tracking-wide bg-gradient-to-r from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent leading-snug">
                    {c.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] text-[#C69A57] font-bold uppercase">
                    15-18% ROI
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {c.features.map((f) => (
                    <li
                      key={f}
                      className="group/item flex items-start gap-3 text-[13px] text-white/50 font-light leading-relaxed cursor-pointer transition-colors duration-300 hover:text-[#E3C98B] active:text-[#E3C98B]"
                    >
                      <span className="mt-1 h-5 w-5 rounded-full border border-[#C69A57]/30 flex items-center justify-center shrink-0 bg-[#C69A57]/5 transition-all duration-300 group-hover/item:border-[#C69A57] group-hover/item:bg-[#C69A57]/20 group-active/item:border-[#C69A57] group-active/item:bg-[#C69A57]/20">
                        <Check className="h-2.5 w-2.5 text-[#C69A57] transition-transform duration-300 group-hover/item:scale-125 group-active/item:scale-125" />
                      </span>
                      <span className="transition-transform duration-300 group-hover/item:translate-x-1 group-active/item:translate-x-1">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="w-full mt-4 flex">
                  <PremiumButton
                    fullWidth
                    innerClassName="w-full py-2.5 text-[12px] gap-2"
                  >
                    Check Availability <ArrowRight className="h-4 w-4" />
                  </PremiumButton>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ANIMATION HOOKS ---------- */

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function TypewriterTitle() {
  return (
    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-5">
      Why{" "}
      <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>
        Invest Now?
      </span>
    </h2>
  );
}

/* ---------- 6. WHY INVEST ---------- */

function WhyInvest() {
  const [active, setActive] = useState(0);
  const items = [
    {
      icon: Landmark,
      t: "Pre-Launch Pricing Advantage",
      d: "Secure your investment at exclusive early-bird rates before the official market launch. Maximize capital appreciation from day zero.",
    },
    {
      icon: Building,
      t: "High Rental Yield Potential",
      d: "Strategic location ensures high occupancy rates and premium rental returns from day one, driven by unparalleled corporate demand.",
    },
    {
      icon: Building2,
      t: "Future Landmark Development",
      d: "Be part of an iconic structure that will redefine the skyline and set new standards for luxury commercial spaces.",
    },
    {
      icon: Key,
      t: "Limited Entry Opportunity",
      d: "Exclusive availability with a limited number of units remaining in this premium phase. Rarity dictates value.",
    },
  ];
  const { ref, inView } = useInView();
  return (
    <section id="whyinvest" className="py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <SectionLabel n="05" t="EXCLUSIVE OPPORTUNITY" />
          <TypewriterTitle />
          <p className="max-w-3xl text-foreground/70 text-[16px] leading-relaxed mb-12 text-center">
            The convergence of strategic location, architectural brilliance, and optimal market
            timing creates an unprecedented window for discerning investors.
          </p>
        </div>

        <div
          ref={ref}
          onMouseLeave={() => setActive(0)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[410px] max-w-5xl mx-auto w-full"
        >
          {items.map(({ icon: Icon, t, d }, i) => {
            const isActive = i === active;
            return (
              <div
                key={t}
                className={`h-full w-full flex flex-col transition-all duration-1000 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <TiltCard
                  className={[
                    "h-full group relative w-full rounded-[16px] p-5 min-h-[250px] flex flex-col transition-colors cursor-pointer",
                    isActive
                      ? "bg-gradient-to-b from-[#D4A865] via-[#C69A57] to-[#9B7335] text-black shadow-[0_55px_170px_-140px_oklch(0.78_0.13_75/0.80)]"
                      : "border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))]  text-foreground hover:border-[oklch(0.78_0.13_75/0.45)]",
                  ].join(" ")}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  onTouchStart={() => setActive(i)}
                >
                  {!isActive && (
                    <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.07)] opacity-55 group-hover:opacity-100 transition-opacity" />
                  )}
                  <div
                    className={[
                      "relative h-10 w-10 rounded-full flex items-center justify-center mb-5",
                      isActive
                        ? "bg-[oklch(0.16_0.012_60/0.18)] shadow-[0_26px_70px_-44px_oklch(0.16_0.012_60/0.35)]"
                        : "bg-background/10 border border-[oklch(0.65_0.10_70/0.26)] shadow-[inset_0_0_0_1px_oklch(0.85_0.12_80/0.06)]",
                    ].join(" ")}
                  >
                    {isActive ? (
                      <Icon className="h-4 w-4 text-[oklch(0.16_0.012_60)]" />
                    ) : (
                      <Icon className="h-4 w-4 text-[#C69A57] drop-shadow-sm" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="relative font-serif text-[17px] mb-1.5 leading-snug mt-4">{t}</h3>
                  <p
                    className={`relative text-[12px] leading-relaxed ${isActive ? "text-[oklch(0.16_0.012_60/0.82)]" : "text-foreground/65"}`}
                  >
                    {d}
                  </p>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. WORKSPACE AMENITIES ---------- */

function Amenities() {
  const items = [
    { icon: Tv, t: "Conference Room", d: "Fully-equipped boardrooms" },
    { icon: Video, t: "Projector Room", d: "Dedicated presentation suite" },
    { icon: Dumbbell, t: "Gym & Wellness", d: "Premium fitness floor" },
    { icon: Coffee, t: "Cafeteria", d: "Artisanal coffee & cuisine" },
    { icon: Building, t: "Double Height Reception", d: "Grand arrival experience" },
    { icon: Snowflake, t: "Central Air-Conditioning", d: "Uniform climate control" },
  ];
  return (
    <section id="amenities" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="06" t="AMENITIES" />
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
            A Workspace that{" "}
            <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>
              Performs.
            </span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed lg:mt-8">
            Sindhu Bhavan isn't only an address - it's an ecosystem. Wellness, productivity,
            hospitality and convenience, all engineered into one landmark building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, t, d }) => (
            <TiltCard
              key={t}
              className="group relative rounded-[16px] border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))]  p-6 sm:p-4 min-h-[150px] flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-5 sm:gap-2.5 hover:border-[oklch(0.78_0.13_75/0.45)] hover:shadow-[0_32px_110px_-78px_oklch(0.78_0.13_75/0.75)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.07)] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-14 w-14 sm:h-12 sm:w-12 rounded-[14px] bg-[linear-gradient(135deg,oklch(0.85_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center shrink-0 shadow-[0_22px_60px_-36px_oklch(0.78_0.13_75/0.85)] mx-auto sm:mx-0">
                <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                <Icon className="h-5 w-5 sm:h-4 sm:w-4 text-[oklch(0.16_0.012_60)]" />
              </div>
              <div className="relative flex flex-col items-center sm:items-start">
                <h3 className="font-serif text-[19px] sm:text-[17px] text-foreground leading-snug">
                  {t}
                </h3>
                <p className="text-[12.5px] sm:text-[11.5px] leading-snug text-foreground/55 mt-1 sm:mt-0.5">
                  {d}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. LOCATION ---------- */

function Location() {
  const places = [
    { icon: Briefcase, t: "Corporate Park", d: "0.5 km" },
    { icon: ShoppingBag, t: "Luxury Retail Hub", d: "1.2 km" },
    { icon: TrainFront, t: "Metro Station", d: "2.8 km" },
    { icon: MapPin, t: "Airport", d: "12 km" },
  ];
  return (
    <section id="location" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="07" t="LOCATION ADVANTAGE" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl leading-tight text-foreground mb-8">
              In the Heart of
              <br />
              <span className="italic text-[#E3C98B]">Sindhu Bhavan Road.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-xl">
              Ahmedabad's most celebrated commercial stretch. Home to premium brands, corporate
              headquarters, fine dining, and a business ecosystem that is already delivering
              industry-leading yields.
            </p>

            <div className="space-y-3">
              {places.map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="group rounded-2xl border border-[#E3C98B]/20 bg-[#0A0A0A]/40 px-6 py-5 flex items-center justify-between transition-all duration-300 hover:border-[#E3C98B]/40 hover:shadow-[0_0_28px_-14px_#C69A57] active:border-[#E3C98B]/45 active:shadow-[0_0_28px_-14px_#C69A57] focus-within:border-[#E3C98B]/45 focus-within:shadow-[0_0_28px_-14px_#C69A57]"
                >
                  <div className="flex items-center gap-5">
                    <div className="h-10 w-10 rounded-full border border-[#E3C98B]/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-[#E3C98B]/40 group-active:border-[#E3C98B]/45">
                      <Icon className="h-4 w-4 text-[#E3C98B]" />
                    </div>
                    <span className="text-white/80 text-[15px] font-light tracking-wide">{t}</span>
                  </div>
                  <span className="font-serif italic text-[#E3C98B] tracking-widest">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mb-6 relative rounded-2xl sm:rounded-3xl border border-[#E3C98B]/20 bg-[#0A0A0A] aspect-[1/1.06] sm:aspect-[4/3] lg:aspect-[1.45/1] min-h-[300px] sm:min-h-0 max-h-[440px] overflow-hidden shadow-[0_40px_160px_-120px_oklch(0.78_0.13_75/0.55)]">
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 rounded-full border border-[#E3C98B]/30 bg-black/60  px-3.5 sm:px-5 py-2 text-[9px] sm:text-[11px] tracking-[0.16em] sm:tracking-widest text-white flex items-center gap-2 z-20 max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-3rem)]">
              <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#E3C98B] shrink-0" />
              <span className="font-medium text-white/90 truncate">
                Sindhu Bhavan Rd, Ahmedabad - 380054
              </span>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-xl border border-[#E3C98B]/30 bg-black/60  px-3.5 sm:px-6 py-3 sm:py-4 text-right z-20 flex flex-col gap-1.5 sm:gap-2 w-[9.75rem] sm:w-auto">
              <div className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] text-[#E3C98B] whitespace-nowrap">
                CONNECTIVITY SCORE
              </div>
              <div className="flex items-baseline justify-end gap-1">
                <span className="font-serif text-[2rem] sm:text-4xl leading-none text-[#E3C98B]">
                  9.6
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-widest text-white/50">
                  / 10
                </span>
              </div>
            </div>
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full z-0">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.03"
                    strokeWidth="1"
                  />
                </pattern>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E3C98B" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E3C98B" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="800" height="600" fill="url(#grid)" />
              <path
                d="M 0 320 C 300 320, 500 280, 800 280"
                fill="none"
                stroke="#E3C98B"
                strokeWidth="1.5"
                className="opacity-50"
              />
              <path
                d="M 400 0 C 400 250, 400 350, 400 600"
                fill="none"
                stroke="#E3C98B"
                strokeWidth="1.5"
                className="opacity-50"
              />
              <path
                d="M 0 0 L 800 600"
                fill="none"
                stroke="#E3C98B"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="opacity-10"
              />
              <path
                d="M 0 600 L 800 0"
                fill="none"
                stroke="#E3C98B"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="opacity-10"
              />
              {[
                [250, 200],
                [550, 220],
                [280, 400],
                [580, 420],
              ].map(([x, y], i) => (
                <g key={i}>
                  <rect
                    x={x - 25}
                    y={y - 15}
                    width="50"
                    height="30"
                    fill="#E3C98B"
                    fillOpacity="0.02"
                    stroke="#E3C98B"
                    strokeOpacity="0.1"
                  />
                  <circle cx={x} cy={y} r="3" fill="#E3C98B" opacity="0.8" />
                </g>
              ))}
              <circle cx="400" cy="300" r="100" fill="url(#centerGlow)" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <div className="absolute h-16 w-16 rounded-full border border-[#E3C98B]/30 bg-[#E3C98B]/10" />
              <div className="relative h-3.5 w-3.5 rounded-full bg-[#E3C98B] shadow-[0_0_15px_#E3C98B]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. DEVELOPER LEGACY ---------- */

function DeveloperLegacy() {
  const stats = [
    { icon: Building2, v: "24+", label: "Delivered Projects", serif: true },
    { icon: Award, v: "22", label: "Years of Experience", serif: true },
    { icon: Users, v: "8,500+", label: "Happy Clients", serif: true },
    { icon: ShieldCheck, v: "New Launch", label: "Certified & Approved", serif: true },
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.3em] text-[#E3C98B] mb-6">08 / DEVELOPER LEGACY</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight text-foreground">
            Built on Two Decades of{" "}
            <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>
              Trust.
            </span>
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-foreground/70 leading-relaxed text-lg">
            A track record of landmark commercial projects delivered on time, every time across
            Ahmedabad's most prestigious corridors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {stats.map(({ icon: Icon, v, label }) => (
            <TiltCard
              key={label}
              className="group relative overflow-hidden rounded-[16px] border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))]  p-4 text-center min-h-[140px] flex flex-col items-center justify-center hover:border-[oklch(0.78_0.13_75/0.45)] hover:shadow-[0_40px_140px_-110px_oklch(0.78_0.13_75/0.80)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[oklch(0.85_0.12_80/0.07)] opacity-55 group-hover:opacity-100 transition-opacity" />
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full blur-[2px]" />
              <div className="relative h-12 w-12 rounded-full bg-[linear-gradient(135deg,oklch(0.85_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center mb-4 shadow-[0_26px_70px_-44px_oklch(0.78_0.13_75/0.85)]">
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[oklch(0.20_0.014_60/0.18)]" />
                <Icon className="h-5 w-5 text-[oklch(0.16_0.012_60)]" />
              </div>
              <div className="relative font-serif text-3xl leading-[1.1] mb-1.5 bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                {v}
              </div>
              <div className="relative text-[11px] tracking-wide text-foreground/65">{label}</div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INVESTMENT OPPORTUNITY CTA ---------- */

function InvestmentCTA({ onBrochureClick }: { onBrochureClick?: () => void }) {
  return (
    <section className="py-14 lg:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.78_0.13_75/0.12),transparent_70%)] pointer-events-none" />
      <div className="relative mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[oklch(0.65_0.10_70/0.26)] bg-background/20  px-6 py-3 mb-10">
          <span className="h-2 w-2 rounded-full bg-[#E3C98B] animate-pulse" />
          <span className="text-[10px] tracking-[0.35em] text-foreground/70">
            INVESTMENT OPPORTUNITY
          </span>
        </div>
        <div className="text-[12px] tracking-[0.35em] text-[#E3C98B]/90 mb-3">
          EXPECTED ANNUAL ROI
        </div>
        <div className="roi-display font-serif leading-[1.1] text-[2.9rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
          15-18
          <span className="text-[1.8rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[6.5rem]">%</span>
        </div>
        <h3 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-7 sm:mt-8">
          A Landmark Address.{" "}
          <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>
            A Landmark Return.
          </span>
        </h3>
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto">
            <PremiumButton
              className="w-full sm:w-auto"
              innerClassName="w-full px-8 py-4 text-[12px] gap-3"
            >
              <Calendar className="h-4 w-4" /> Book Site Visit
            </PremiumButton>
          </a>
          <button
            onClick={onBrochureClick}
            className="w-full sm:w-auto rounded-full px-8 py-4 border border-[oklch(0.65_0.10_70/0.30)] bg-background/10 text-foreground/90 font-medium flex items-center justify-center gap-3 hover:border-[oklch(0.78_0.13_75/0.55)] transition cursor-pointer"
          >
            <Download className="h-4 w-4 text-[#E3C98B]" /> Download Brochure{" "}
            <ArrowRight className="h-4 w-4 text-[#E3C98B]" />
          </button>
        </div>
        <div className="mt-10 text-[10px] tracking-[0.30em] text-foreground/60">
          SINDHU BHAVAN ROAD <span className="text-[#E3C98B]">·</span> AHMEDABAD{" "}
          <span className="text-[#E3C98B]">·</span> 380054
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. ENQUIRE NOW ---------- */

function EnquiryForm() {
  const rawServiceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
  const rawTemplateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim();
  const rawPublicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim();

  const serviceId = rawServiceId && rawServiceId !== "your_service_id" ? rawServiceId : "service_74f661d";
  const templateId = rawTemplateId && rawTemplateId !== "your_template_id" ? rawTemplateId : "template_a2596on";
  const publicKey = rawPublicKey && rawPublicKey !== "your_public_key" ? rawPublicKey : "63d0_DVu3zixdIdYV";

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[535px] sm:h-[545px] bg-transparent" />;
  }

  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: transparent;
            font-family: 'Manrope', 'Inter', sans-serif;
            color: #ffffff;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
          }
          .form-container {
            position: relative;
            width: 100%;
            border-radius: 1.5rem; /* 24px */
            border: 1px solid #1f1b16;
            background: #0d0b08;
            padding: 1.25rem;
            box-sizing: border-box;
            box-shadow: 0 50px 160px -130px oklch(0.78 0.13 75 / 0.75);
          }
          @media (min-width: 640px) {
            .form-container {
              padding: 2rem;
            }
          }
          .relative-z {
            position: relative;
            z-index: 10;
          }
          .badge-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }
          .badge-text {
            font-size: 0.75rem;
            letter-spacing: 0.25em;
            color: #E3C98B;
            font-weight: 500;
          }
          .title {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: 1.75rem; /* 28px */
            color: #ffffff;
            margin: 0 0 1.25rem 0;
            font-weight: 400;
            line-height: 1.25;
          }
          @media (min-width: 640px) {
            .title {
              font-size: 2.25rem; /* 36px */
            }
          }
          .grid-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .input-group {
            position: relative;
          }
          .input-group.full-width {
            grid-column: span 2;
          }
          .label {
            font-size: 0.65rem;
            letter-spacing: 0.25em;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            font-weight: 600;
            display: block;
            margin-bottom: 0.5rem;
          }
          .input-field {
            width: 100%;
            border-radius: 0.75rem; /* 12px */
            border: 1px solid #2e2a24;
            background-color: #0d0b09;
            padding: 0.875rem 1rem;
            color: #ffffff;
            font-size: 0.9rem;
            outline: none;
            box-sizing: border-box;
            font-family: 'Manrope', sans-serif;
            height: 3.25rem;
          }
          .input-field::placeholder {
            color: rgba(255, 255, 255, 0.25);
          }
          .input-field:focus {
            border-color: #C69A57;
          }
          .custom-dropdown {
            position: relative;
            width: 100%;
          }
          .dropdown-trigger {
            width: 100%;
            border-radius: 0.75rem; /* 12px */
            border: 1px solid #2e2a24;
            background-color: #0d0b09;
            padding: 0.875rem 1.25rem;
            color: #ffffff;
            font-size: 0.9rem;
            outline: none;
            box-sizing: border-box;
            font-family: 'Manrope', sans-serif;
            height: 3.25rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s ease;
          }
          .dropdown-trigger:focus {
            border-color: #C69A57;
          }
          .dropdown-arrow {
            height: 1.25rem;
            width: 1.25rem;
            transition: transform 0.3s ease;
          }
          .custom-dropdown.open .dropdown-arrow {
            transform: rotate(180deg);
          }
          .custom-dropdown.open .dropdown-trigger {
            border-color: #C69A57;
          }
          .dropdown-menu {
            position: absolute;
            top: calc(100% + 0.5rem);
            left: 0;
            width: 100%;
            background-color: #0f0d0b;
            border: 1px solid #C69A57;
            border-radius: 0.75rem;
            z-index: 100;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
          }
          .custom-dropdown.open .dropdown-menu {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
          .dropdown-item {
            padding: 0.875rem 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            cursor: pointer;
            font-family: 'Manrope', sans-serif;
            transition: all 0.2s ease;
          }
          .dropdown-item:hover {
            background-color: rgba(198, 154, 87, 0.1);
            color: #E3C98B;
          }
          .dropdown-item.active {
            background-color: rgba(198, 154, 87, 0.2);
            color: #E3C98B;
            font-weight: 600;
          }
          .purpose-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
            height: 3.25rem;
          }
          .purpose-btn {
            width: 100%;
            height: 100%;
            border-radius: 0.75rem;
            border: 1px solid #2e2a24;
            background: transparent;
            color: #ffffff;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Manrope', sans-serif;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .purpose-btn.active {
            background: #D4A865;
            color: #000000;
            border-color: #D4A865;
            box-shadow: 0 4px 20px rgba(212, 168, 101, 0.3);
          }
          .divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.08);
            margin: 1.25rem 0;
          }
          .disclaimer {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 1.25rem;
            line-height: 1.5;
          }
          .submit-btn {
            width: 100%;
            height: 3.25rem;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 9999px; /* Fully rounded pill shape */
            color: #000000;
            background: #D4A865;
            border: none;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(212, 168, 101, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-sizing: border-box;
            font-family: 'Manrope', sans-serif;
            transition: all 0.2s ease;
          }
          .submit-btn:hover {
            background: #E3C98B;
            transform: scale(1.01);
          }
          .submit-btn:active {
            transform: scale(0.99);
          }
        </style>
      </head>
      <body class="bg-transparent antialiased">
        <form id="enquiry-form" class="form-container">
          <div class="relative-z">
            <div class="badge-row">
              <svg class="sparkle-icon" viewBox="0 0 24 24" fill="none" stroke="#E3C98B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="height: 1.25rem; width: 1.25rem;">
                <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
                <path d="M6 6c0 1.5-1 2.5-2.5 2.5 1.5 0 2.5 1 2.5 2.5 0-1.5 1-2.5 2.5-2.5-1.5 0-2.5-1-2.5-2.5z" />
              </svg>
              <span class="badge-text">PRIORITY ENQUIRY</span>
            </div>
            <h3 class="title">
              Schedule a private<br />consultation.
            </h3>

            <div class="grid-layout">
              <div class="input-group">
                <label class="label">FULL NAME</label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  autocomplete="name"
                  required
                  class="input-field"
                />
              </div>
              <div class="input-group">
                <label class="label">PHONE NUMBER</label>
                <input
                  name="user_phone"
                  type="tel"
                  placeholder="10 digits only"
                  inputmode="numeric"
                  pattern="[0-9]{10}"
                  maxlength="10"
                  autocomplete="tel"
                  required
                  class="input-field"
                />
              </div>
              <div class="input-group">
                <label class="label">EMAIL ADDRESS</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="name@example.com"
                  autocomplete="email"
                  required
                  class="input-field"
                />
              </div>
              <div class="input-group">
                <label class="label">BUDGET RANGE</label>
                <input type="hidden" name="budget" id="budget-input" value="90 Lacs - 1.1 Cr" />
                <div class="custom-dropdown" id="budget-dropdown">
                  <button type="button" class="dropdown-trigger" onclick="toggleDropdown(event)">
                    <span id="dropdown-selected">90 Lacs - 1.1 Cr</span>
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="#C69A57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div class="dropdown-menu" id="dropdown-menu">
                    <div class="dropdown-item active" onclick="selectOption('90 Lacs - 1.1 Cr', event)">90 Lacs - 1.1 Cr</div>
                    <div class="dropdown-item" onclick="selectOption('1.1 Cr - 1.5 Cr', event)">1.1 Cr - 1.5 Cr</div>
                    <div class="dropdown-item" onclick="selectOption('1.5 Cr+', event)">1.5 Cr+</div>
                  </div>
                </div>
              </div>
              <div class="input-group full-width">
                <label class="label">PURPOSE</label>
                <input type="hidden" name="purpose" id="purpose-input" value="Investor" />
                <div class="purpose-container">
                  <button type="button" id="purpose-investor" class="purpose-btn active" onclick="selectPurpose('Investor')">Investor</button>
                  <button type="button" id="purpose-enduser" class="purpose-btn" onclick="selectPurpose('End User')">End User</button>
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <p class="disclaimer">
              By submitting, you agree to receive project details via email.
            </p>
            <button id="submit-btn" type="submit" class="submit-btn">
              Get Complete Investment Details →
            </button>
          </div>
        </form>

        <script>
          (function() {
            emailjs.init({
              publicKey: "${publicKey}"
            });
          })();

          function selectPurpose(val) {
            document.getElementById('purpose-input').value = val;
            if (val === 'Investor') {
              document.getElementById('purpose-investor').classList.add('active');
              document.getElementById('purpose-enduser').classList.remove('active');
            } else {
              document.getElementById('purpose-enduser').classList.add('active');
              document.getElementById('purpose-investor').classList.remove('active');
            }
          }

          function toggleDropdown(e) {
            e.stopPropagation();
            const dropdown = document.getElementById('budget-dropdown');
            dropdown.classList.toggle('open');
          }
          
          function selectOption(val, e) {
            e.stopPropagation();
            document.getElementById('budget-input').value = val;
            document.getElementById('dropdown-selected').innerText = val;
            
            const menu = document.getElementById('dropdown-menu');
            const items = menu.getElementsByClassName('dropdown-item');
            for (let item of items) {
              if (item.innerText === val) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            }
            
            document.getElementById('budget-dropdown').classList.remove('open');
          }

          // Close dropdown when clicking outside
          window.addEventListener('click', function(e) {
            const dropdown = document.getElementById('budget-dropdown');
            if (dropdown) {
              dropdown.classList.remove('open');
            }
          });

          document.getElementById("enquiry-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const btn = document.getElementById("submit-btn");
            btn.disabled = true;
            btn.innerHTML = "Submitting...";

            emailjs.sendForm("${serviceId}", "${templateId}", this)
              .then(function() {
                document.body.innerHTML = \`
                  <div class="form-container text-center" style="padding: 5rem 1.25rem;">
                    <div class="relative-z" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                      <div style="height: 4rem; width: 4rem; border-radius: 9999px; background: #D4A865; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 10px 25px rgba(212, 168, 101, 0.2);">
                        <svg style="height: 2rem; width: 2rem; color: #000000;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 class="title" style="font-size: 2rem; margin-bottom: 1rem;">
                        Thank you for submitted!
                      </h3>
                      <p style="color: rgba(255, 255, 255, 0.7); line-height: 1.6; margin-bottom: 2rem; max-width: 400px; font-size: 0.95rem;">
                        Your inquiry has been received. Our investment advisor will get in touch with you shortly.
                      </p>
                      <a href="/brouchure.pdf" download="Plinth_Brochure.pdf" target="_blank" class="submit-btn" style="width: auto; padding: 0.75rem 2.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; border-radius: 9999px;">
                        <svg style="height: 1.2rem; width: 1.2rem; color: #000000;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Brochure
                      </a>
                      <button onclick="window.location.reload()" class="submit-btn" style="width: auto; padding: 0.75rem 2rem; border-radius: 9999px; background: rgba(255, 255, 255, 0.05); color: rgba(255, 255, 255, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: none; font-size: 0.8rem; text-transform: none; letter-spacing: normal;">
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                \`;
              }, function(error) {
                console.error("FAILED...", error);
                const errMsg = error && (error.text || error.message) ? (error.text || error.message) : "Please verify your .env file credentials and restart your dev server.";
                alert("Failed to send enquiry: " + errMsg);
                btn.disabled = false;
                btn.innerHTML = "Get Complete Investment Details →";
              });
          });
        </script>
      </body>
    </html>
  `;

  return (
    <iframe
      srcDoc={iframeSrcDoc}
      className="w-full h-[535px] sm:h-[545px] border-0 overflow-hidden hide-scrollbar bg-transparent"
      scrolling="no"
      title="Priority Enquiry Form"
    />
  );
}

function EnquireNow() {
  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-4 lg:px-6 xl:px-8">
        <SectionLabel n="09" t="ENQUIRE NOW" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-6xl leading-[1.05] text-foreground">
              Get{" "}
              <span className="italic" style={{ color: "oklch(0.83 0.11 78)" }}>
                Complete
              </span>
              <br />
              Investment Details.
            </h2>
            <p className="mt-4 sm:mt-5 text-foreground/70 leading-relaxed text-base sm:text-lg max-w-xl">
              Priority access to pricing, floor plans, rental projections &amp;
              exclusive pre-launch offers.
            </p>

            <div className="mt-7 sm:mt-8 rounded-[22px] border border-[oklch(0.65_0.10_70/0.22)] hover:border-[#C69A57] transition-colors duration-300 bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))]  p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
              <div className="h-10 w-12 rounded-full bg-[linear-gradient(135deg,oklch(0.85_0.12_80),oklch(0.65_0.13_65))] flex items-center justify-center shrink-0 shadow-[0_22px_60px_-40px_oklch(0.78_0.13_75/0.80)]">
                <AlertCircle className="h-5 w-5 text-[oklch(0.16_0.012_60)]" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground">
                  Limited Premium Units Available
                </h3>
                <p className="text-sm text-foreground/65 mt-2">
                  Only a handful of high-floor units remain in this phase.
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-[22px] border border-[oklch(0.65_0.10_70/0.22)] hover:border-[#C69A57] transition-colors duration-300 bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.55),oklch(0.17_0.012_60/0.35))]  p-4 sm:p-6">
              <div className="text-[10px] tracking-[0.3em] text-[#E3C98B] mb-2">WHY INVEST NOW</div>
              <div className="font-serif leading-[1.1] text-5xl sm:text-7xl md:text-[6rem] lg:text-[6rem] bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                15-18<span className="text-5xl sm:text-6xl md:text-[4rem] lg:text-[4rem]">%</span>
              </div>
              <p className="text-sm text-foreground/65 mt-4">
                Expected annual ROI - rental yield + capital appreciation.
              </p>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

/* ---------- NAVBAR MODAL FORM ---------- */

function NavbarEnquiryForm() {
  const rawServiceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
  const rawTemplateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim();
  const rawPublicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim();

  const serviceId = rawServiceId && rawServiceId !== "your_service_id" ? rawServiceId : "service_74f661d";
  const templateId = rawTemplateId && rawTemplateId !== "your_template_id" ? rawTemplateId : "template_a2596on";
  const publicKey = rawPublicKey && rawPublicKey !== "your_public_key" ? rawPublicKey : "63d0_DVu3zixdIdYV";

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[535px] sm:h-[545px] bg-transparent" />;
  }

  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: transparent;
            font-family: 'Manrope', 'Inter', sans-serif;
            color: #ffffff;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
          }
          .form-container {
            position: relative;
            width: 100%;
            border-radius: 1.5rem; /* 24px */
            border: 1px solid #1f1b16;
            background: #0d0b08;
            padding: 1.25rem;
            box-sizing: border-box;
            box-shadow: 0 50px 160px -130px oklch(0.78 0.13 75 / 0.75);
          }
          @media (min-width: 640px) {
            .form-container {
              padding: 2rem;
            }
          }
          .relative-z {
            position: relative;
            z-index: 10;
          }
          .badge-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }
          .badge-text {
            font-size: 0.75rem;
            letter-spacing: 0.25em;
            color: #E3C98B;
            font-weight: 500;
          }
          .title {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: 1.75rem; /* 28px */
            color: #ffffff;
            margin: 0 0 1.25rem 0;
            font-weight: 400;
            line-height: 1.25;
          }
          @media (min-width: 640px) {
            .title {
              font-size: 2.25rem; /* 36px */
            }
          }
          .grid-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .input-group {
            position: relative;
          }
          .input-group.full-width {
            grid-column: span 2;
          }
          .label {
            font-size: 0.65rem;
            letter-spacing: 0.25em;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            font-weight: 600;
            display: block;
            margin-bottom: 0.5rem;
          }
          .input-field {
            width: 100%;
            border-radius: 0.75rem; /* 12px */
            border: 1px solid #2e2a24;
            background-color: #0d0b09;
            padding: 0.875rem 1rem;
            color: #ffffff;
            font-size: 0.9rem;
            outline: none;
            box-sizing: border-box;
            font-family: 'Manrope', sans-serif;
            height: 3.25rem;
          }
          .input-field::placeholder {
            color: rgba(255, 255, 255, 0.25);
          }
          .input-field:focus {
            border-color: #C69A57;
          }
          .custom-dropdown {
            position: relative;
            width: 100%;
          }
          .dropdown-trigger {
            width: 100%;
            border-radius: 0.75rem; /* 12px */
            border: 1px solid #2e2a24;
            background-color: #0d0b09;
            padding: 0.875rem 1.25rem;
            color: #ffffff;
            font-size: 0.9rem;
            outline: none;
            box-sizing: border-box;
            font-family: 'Manrope', sans-serif;
            height: 3.25rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s ease;
          }
          .dropdown-trigger:focus {
            border-color: #C69A57;
          }
          .dropdown-arrow {
            height: 1.25rem;
            width: 1.25rem;
            transition: transform 0.3s ease;
          }
          .custom-dropdown.open .dropdown-arrow {
            transform: rotate(180deg);
          }
          .custom-dropdown.open .dropdown-trigger {
            border-color: #C69A57;
          }
          .dropdown-menu {
            position: absolute;
            top: calc(100% + 0.5rem);
            left: 0;
            width: 100%;
            background-color: #0f0d0b;
            border: 1px solid #C69A57;
            border-radius: 0.75rem;
            z-index: 100;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
          }
          .custom-dropdown.open .dropdown-menu {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
          .dropdown-item {
            padding: 0.875rem 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            cursor: pointer;
            font-family: 'Manrope', sans-serif;
            transition: all 0.2s ease;
          }
          .dropdown-item:hover {
            background-color: rgba(198, 154, 87, 0.1);
            color: #E3C98B;
          }
          .dropdown-item.active {
            background-color: rgba(198, 154, 87, 0.2);
            color: #E3C98B;
            font-weight: 600;
          }
          .purpose-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
            height: 3.25rem;
          }
          .purpose-btn {
            width: 100%;
            height: 100%;
            border-radius: 0.75rem;
            border: 1px solid #2e2a24;
            background: transparent;
            color: #ffffff;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Manrope', sans-serif;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .purpose-btn.active {
            background: #D4A865;
            color: #000000;
            border-color: #D4A865;
            box-shadow: 0 4px 20px rgba(212, 168, 101, 0.3);
          }
          .divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.08);
            margin: 1.25rem 0;
          }
          .disclaimer {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 1.25rem;
            line-height: 1.5;
          }
          .submit-btn {
            width: 100%;
            height: 3.25rem;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 9999px; /* Fully rounded pill shape */
            color: #000000;
            background: #D4A865;
            border: none;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(212, 168, 101, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-sizing: border-box;
            font-family: 'Manrope', sans-serif;
            transition: all 0.2s ease;
          }
          .submit-btn:hover {
            background: #E3C98B;
            transform: scale(1.01);
          }
          .submit-btn:active {
            transform: scale(0.99);
          }
        </style>
      </head>
      <body class="bg-transparent antialiased">
        <form id="enquiry-form" class="form-container">
          <div class="relative-z">
            <div class="badge-row">
              <svg class="sparkle-icon" viewBox="0 0 24 24" fill="none" stroke="#E3C98B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="height: 1.25rem; width: 1.25rem;">
                <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
                <path d="M6 6c0 1.5-1 2.5-2.5 2.5 1.5 0 2.5 1 2.5 2.5 0-1.5 1-2.5 2.5-2.5-1.5 0-2.5-1-2.5-2.5z" />
              </svg>
              <span class="badge-text">PRIORITY ENQUIRY</span>
            </div>
            <h3 class="title">
              Schedule a private<br />consultation.
            </h3>

            <div class="grid-layout">
              <div class="input-group">
                <label class="label">FULL NAME</label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  autocomplete="name"
                  required
                  class="input-field"
                />
              </div>
              <div class="input-group">
                <label class="label">PHONE NUMBER</label>
                <input
                  name="user_phone"
                  type="tel"
                  placeholder="10 digits only"
                  inputmode="numeric"
                  pattern="[0-9]{10}"
                  maxlength="10"
                  autocomplete="tel"
                  required
                  class="input-field"
                />
              </div>
              <div class="input-group">
                <label class="label">EMAIL ADDRESS</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="name@example.com"
                  autocomplete="email"
                  required
                  class="input-field"
                />
              </div>
              <div class="input-group">
                <label class="label">BUDGET RANGE</label>
                <input type="hidden" name="budget" id="budget-input" value="90 Lacs - 1.1 Cr" />
                <div class="custom-dropdown" id="budget-dropdown">
                  <button type="button" class="dropdown-trigger" onclick="toggleDropdown(event)">
                    <span id="dropdown-selected">90 Lacs - 1.1 Cr</span>
                    <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="#C69A57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div class="dropdown-menu" id="dropdown-menu">
                    <div class="dropdown-item active" onclick="selectOption('90 Lacs - 1.1 Cr', event)">90 Lacs - 1.1 Cr</div>
                    <div class="dropdown-item" onclick="selectOption('1.1 Cr - 1.5 Cr', event)">1.1 Cr - 1.5 Cr</div>
                    <div class="dropdown-item" onclick="selectOption('1.5 Cr+', event)">1.5 Cr+</div>
                  </div>
                </div>
              </div>
              <div class="input-group full-width">
                <label class="label">PURPOSE</label>
                <input type="hidden" name="purpose" id="purpose-input" value="Investor" />
                <div class="purpose-container">
                  <button type="button" id="purpose-investor" class="purpose-btn active" onclick="selectPurpose('Investor')">Investor</button>
                  <button type="button" id="purpose-enduser" class="purpose-btn" onclick="selectPurpose('End User')">End User</button>
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <p class="disclaimer">
              By submitting, you agree to receive project details via email.
            </p>
            <button id="submit-btn" type="submit" class="submit-btn">
              Get Complete Investment Details →
            </button>
          </div>
        </form>

        <script>
          (function() {
            emailjs.init({
              publicKey: "${publicKey}"
            });
          })();

          function selectPurpose(val) {
            document.getElementById('purpose-input').value = val;
            if (val === 'Investor') {
              document.getElementById('purpose-investor').classList.add('active');
              document.getElementById('purpose-enduser').classList.remove('active');
            } else {
              document.getElementById('purpose-enduser').classList.add('active');
              document.getElementById('purpose-investor').classList.remove('active');
            }
          }

          function toggleDropdown(e) {
            e.stopPropagation();
            const dropdown = document.getElementById('budget-dropdown');
            dropdown.classList.toggle('open');
          }
          
          function selectOption(val, e) {
            e.stopPropagation();
            document.getElementById('budget-input').value = val;
            document.getElementById('dropdown-selected').innerText = val;
            
            const menu = document.getElementById('dropdown-menu');
            const items = menu.getElementsByClassName('dropdown-item');
            for (let item of items) {
              if (item.innerText === val) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            }
            
            document.getElementById('budget-dropdown').classList.remove('open');
          }

          // Close dropdown when clicking outside
          window.addEventListener('click', function(e) {
            const dropdown = document.getElementById('budget-dropdown');
            if (dropdown) {
              dropdown.classList.remove('open');
            }
          });

          document.getElementById("enquiry-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const btn = document.getElementById("submit-btn");
            btn.disabled = true;
            btn.innerHTML = "Submitting...";

            emailjs.sendForm("${serviceId}", "${templateId}", this)
              .then(function() {
                document.body.innerHTML = \`
                  <div class="form-container text-center" style="padding: 5rem 1.25rem;">
                    <div class="relative-z" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                      <div style="height: 4rem; width: 4rem; border-radius: 9999px; background: #D4A865; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 10px 25px rgba(212, 168, 101, 0.2);">
                        <svg style="height: 2rem; width: 2rem; color: #000000;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 class="title" style="font-size: 2rem; margin-bottom: 1rem;">
                        Thank you for submitted!
                      </h3>
                      <p style="color: rgba(255, 255, 255, 0.7); line-height: 1.6; margin-bottom: 2rem; max-width: 400px; font-size: 0.95rem;">
                        Your inquiry has been received. Our investment advisor will get in touch with you shortly.
                      </p>
                      <a href="/brouchure.pdf" download="Plinth_Brochure.pdf" target="_blank" class="submit-btn" style="width: auto; padding: 0.75rem 2.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; border-radius: 9999px;">
                        <svg style="height: 1.2rem; width: 1.2rem; color: #000000;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Brochure
                      </a>
                      <button onclick="window.location.reload()" class="submit-btn" style="width: auto; padding: 0.75rem 2rem; border-radius: 9999px; background: rgba(255, 255, 255, 0.05); color: rgba(255, 255, 255, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: none; font-size: 0.8rem; text-transform: none; letter-spacing: normal;">
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                \`;
              }, function(error) {
                console.error("FAILED...", error);
                const errMsg = error && (error.text || error.message) ? (error.text || error.message) : "Please verify your .env file credentials and restart your dev server.";
                alert("Failed to send enquiry: " + errMsg);
                btn.disabled = false;
                btn.innerHTML = "Get Complete Investment Details →";
              });
          });
        </script>
      </body>
    </html>
  `;

  return (
    <iframe
      srcDoc={iframeSrcDoc}
      className="w-full h-[535px] sm:h-[545px] border-0 overflow-hidden hide-scrollbar bg-transparent"
      scrolling="no"
      title="Priority Enquiry Form Modal"
    />
  );
}
/* ---------- FOOTER ---------- */

function SiteFooter() {
  const navLinks = [
    { name: "ROI & Returns", href: "#roi" },
    { name: "Project Highlights", href: "#highlights" },
    { name: "Space Options", href: "#spaces" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];
  const socials = [
    { Icon: Instagram, href: "https://www.instagram.com/plinth.reality/", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
  ];
  return (
    <footer className="relative border-t border-[oklch(0.65_0.10_70/0.18)] pt-10 sm:pt-12 pb-10 sm:pb-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_30%,oklch(0.78_0.13_75/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-[1120px] px-4 sm:px-5 lg:px-6 xl:px-8">
        <div className="grid lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          <div className="text-center sm:text-left">
            <div className="relative h-12 w-12 rounded-full bg-[linear-gradient(135deg,oklch(0.86_0.12_80),oklch(0.65_0.13_65))] mb-6 sm:mb-8 shadow-[0_26px_70px_-44px_oklch(0.78_0.13_75/0.85)] mx-auto sm:mx-0">
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,oklch(0.86_0.12_80/0.22),transparent_70%)]" />
            </div>
            <p className="text-sm text-foreground/65 leading-relaxed max-w-md mx-auto sm:mx-0">
              Looking for{" "}
              <span className="text-[#E3C98B]">office space in Sindhu Bhavan Ahmedabad</span>? This
              premium commercial project offers modern office spaces and showroom units with{" "}
              <span className="text-[#E3C98B]">high ROI potential (15-18% annual returns)</span>,
              G+38 storey landmark design, green building certification, 18 high-speed lifts, and
              4-level basement parking in Ahmedabad's most prestigious business corridor.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center justify-center sm:justify-start gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="h-10 w-10 rounded-full border border-[oklch(0.65_0.10_70/0.24)] bg-background/10  flex items-center justify-center hover:border-[oklch(0.78_0.13_75/0.55)] hover:bg-[oklch(0.78_0.13_75/0.06)] transition"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-[#E3C98B]" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left lg:pl-20 xl:pl-28">
            <div className="text-[11px] sm:text-[12px] tracking-[0.30em] text-[#E3C98B]/90 mb-5 sm:mb-8">
              NAVIGATE
            </div>
            <ul className="space-y-4 sm:space-y-5 text-sm text-foreground/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#E3C98B] transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left lg:pl-8 xl:pl-12">
            <div className="text-[11px] sm:text-[12px] tracking-[0.30em] text-[#E3C98B]/90 mb-5 sm:mb-8">
              CONTACT
            </div>
            <ul className="space-y-4 sm:space-y-5 text-sm text-foreground/80">
              <li className="flex items-start justify-center sm:justify-start gap-3 sm:gap-4">
                <MapPin className="h-4 w-4 text-[#E3C98B] mt-1 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Sindhu+Bhavan+Road,+Bodakdev,+Ahmedabad,+Gujarat+380054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3C98B] transition"
                >
                  Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <Phone className="h-4 w-4 text-[#E3C98B]" />
                <a href="tel:+919898709370" className="hover:text-[#E3C98B] transition">
                  +91 9898709370
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <Mail className="h-4 w-4 text-[#E3C98B]" />
                <a
                  href="mailto:info@plinthreality.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3C98B] transition"
                >
                  info@plinthreality.com
                </a>
              </li>
            </ul>

            <div className="mt-6 sm:mt-8 relative rounded-2xl border border-[oklch(0.65_0.10_70/0.22)] bg-[linear-gradient(180deg,oklch(0.20_0.014_60/0.50),oklch(0.17_0.012_60/0.30))]  p-4 sm:p-6 overflow-hidden">
              <div className="pointer-events-none absolute -top-12 -left-12 h-48 w-48 rounded-full transparent_68%)]" />
              <div className="relative text-[9px] sm:text-[10px] tracking-[0.32em] sm:tracking-[0.35em] text-[#E3C98B]/90 mb-2 sm:mb-3">
                EXPECTED ROI
              </div>
              <div className="roi-display relative font-serif text-[2rem] sm:text-4xl italic bg-gradient-to-b from-[#F5E9C8] via-[#E3C98B] to-[#C69A57] bg-clip-text text-transparent">
                15-18% p.a.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[oklch(0.65_0.10_70/0.16)] flex flex-col md:flex-row items-center md:items-center justify-between gap-3 sm:gap-4 text-xs text-foreground/45 text-center md:text-left">
          <span>© {new Date().getFullYear()} Sindhu Bhavan. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Made with
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
            by{" "}
            <a
              href="https://13utopia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C69A57] transition-colors"
            >
              13UTOPiA
            </a>
          </span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 sm:gap-x-8 gap-y-2">
            <a href="#" className="hover:text-[#E3C98B]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E3C98B]">
              Terms
            </a>
            <a href="#" className="hover:text-[#E3C98B]">
              Pre-Launch Project
            </a>
            <a href="#" className="hover:text-[#E3C98B]">
              Disclaimer
            </a>
          </div>
        </div>
        <p className="mt-5 sm:mt-6 text-[11px] text-foreground/40 leading-relaxed text-center md:text-left">
          Disclaimer: Images are artistic impressions. ROI projections are based on current market
          analysis and may vary. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */

function EnquiryModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl max-h-[min(90vh,900px)] overflow-y-auto rounded-2xl border border-[oklch(0.65_0.10_70/0.22)] bg-[oklch(0.17_0.012_60)] p-4 pt-10 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-black/50 p-2 text-white/80 hover:text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <NavbarEnquiryForm />
      </div>
    </div>
  );
}

function BrochureModal({ onClose }: { onClose: () => void }) {
  const rawServiceId = (import.meta.env.VITE_EMAILJS_BROCHURE_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
  const rawTemplateId = (import.meta.env.VITE_EMAILJS_BROCHURE_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim();
  const rawPublicKey = (import.meta.env.VITE_EMAILJS_BROCHURE_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim();

  const serviceId = rawServiceId && rawServiceId !== "your_service_id" && rawServiceId !== "your_brochure_service_id" ? rawServiceId : "service_74f661d";
  const templateId = rawTemplateId && rawTemplateId !== "your_template_id" && rawTemplateId !== "your_brochure_template_id" ? rawTemplateId : "template_a2596on";
  const publicKey = rawPublicKey && rawPublicKey !== "your_public_key" && rawPublicKey !== "your_brochure_public_key" ? rawPublicKey : "63d0_DVu3zixdIdYV";

  const brochureIframeSrcDoc = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: transparent;
            font-family: 'Manrope', 'Inter', sans-serif;
            color: #ffffff;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
          }
          .form-container {
            position: relative;
            width: 100%;
            border-radius: 1.5rem; /* 24px */
            background: #0d0b08;
            padding: 1rem;
            box-sizing: border-box;
          }
          .badge-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }
          .badge-text {
            font-size: 0.7rem;
            letter-spacing: 0.25em;
            color: #E3C98B;
            font-weight: 500;
            text-transform: uppercase;
          }
          .title {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: 1.65rem; /* 26px */
            color: #ffffff;
            margin: 0 0 1.25rem 0;
            font-weight: 400;
            line-height: 1.25;
            text-transform: uppercase;
          }
          .input-group {
            position: relative;
            margin-bottom: 1.15rem;
          }
          .label {
            font-size: 0.65rem;
            letter-spacing: 0.25em;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            font-weight: 700;
            display: block;
            margin-bottom: 0.5rem;
          }
          .input-field {
            width: 100%;
            border-radius: 0.75rem; /* 12px */
            border: 1px solid #2e2a24;
            background-color: #0d0b09;
            padding: 0.875rem 1rem;
            color: #ffffff;
            font-size: 0.9rem;
            outline: none;
            box-sizing: border-box;
            font-family: 'Manrope', sans-serif;
            height: 3.25rem;
            transition: border-color 0.2s;
          }
          .input-field::placeholder {
            color: rgba(255, 255, 255, 0.2);
          }
          .input-field:focus {
            border-color: #C69A57;
          }
          .submit-btn {
            width: 100%;
            border-radius: 9999px;
            border: none;
            background: linear-gradient(90deg, #E3C98B, #D4A865, #C69A57);
            color: #000000;
            font-family: 'Manrope', sans-serif;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 1rem;
            cursor: pointer;
            box-shadow: 0 20px 40px -15px rgba(227, 201, 139, 0.35);
            transition: all 0.3s ease;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          .submit-btn:hover {
            box-shadow: 0 25px 45px -10px rgba(227, 201, 139, 0.5);
            transform: translateY(-1px);
          }
          .submit-btn:active {
            transform: translateY(1px);
          }
          .submit-btn:disabled {
            background: #2e2a24;
            color: rgba(255, 255, 255, 0.3);
            cursor: not-allowed;
            box-shadow: none;
          }
          .disclaimer {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.35);
            line-height: 1.5;
            margin: 1.25rem 0;
            font-weight: 300;
          }
          .text-center {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="form-container">
          <form id="brochure-form">
            <input type="hidden" name="user_phone" value="N/A (Brochure Request)" />
            <input type="hidden" name="budget" value="N/A (Brochure Request)" />
            <input type="hidden" name="purpose" value="Brochure Download Request" />
            
            <div class="badge-row">
              <span style="height: 6px; width: 6px; border-radius: 9999px; background: #E3C98B;"></span>
              <span class="badge-text">Exclusive Access</span>
            </div>
            
            <h3 class="title">FILL THE FORM FOR BROCHURE</h3>
            
            <div class="input-group">
              <label class="label">Full Name</label>
              <input type="text" name="user_name" class="input-field" placeholder="Enter your name" required autocomplete="name" />
            </div>
            
            <div class="input-group">
              <label class="label">Email Address</label>
              <input type="email" name="user_email" class="input-field" placeholder="name@example.com" required autocomplete="email" />
            </div>
            
            <p class="disclaimer">
              By submitting, you agree to receive project details via email.
            </p>
            
            <button id="submit-btn" type="submit" class="submit-btn">
              Send Brochure to Email →
            </button>
          </form>
        </div>

        <script>
          (function() {
            emailjs.init({
              publicKey: "${publicKey}"
            });
          })();

          document.getElementById("brochure-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const btn = document.getElementById("submit-btn");
            btn.disabled = true;
            btn.innerHTML = "Submitting...";

            emailjs.sendForm("${serviceId}", "${templateId}", this)
              .then(function() {
                // Show success view (no direct download, only email message)
                document.body.innerHTML = \`
                  <div class="form-container text-center" style="padding: 2.5rem 1.25rem;">
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                      <div style="height: 4rem; width: 4rem; border-radius: 9999px; background: #D4A865; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 10px 25px rgba(212, 168, 101, 0.2);">
                        <svg style="height: 2rem; width: 2rem; color: #000000;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 class="title" style="font-size: 1.75rem; margin-bottom: 0.75rem;">
                        Thank You!
                      </h3>
                      <p style="color: rgba(255, 255, 255, 0.7); line-height: 1.6; margin-bottom: 2rem; max-width: 400px; font-size: 0.9rem;">
                        We have sent an email with the download link for the brochure to your email address. Please check your inbox (and spam folder) shortly.
                      </p>
                      <button onclick="window.parent.postMessage('close-brochure-modal', '*')" class="submit-btn" style="width: auto; padding: 0.75rem 2.5rem; border-radius: 9999px; text-decoration: none; display: inline-flex; align-items: center; color: #000000;">
                        Okay, Got It
                      </button>
                    </div>
                  </div>
                \`;
              }, function(error) {
                console.error("FAILED...", error);
                const errMsg = error && (error.text || error.message) ? (error.text || error.message) : "Please verify your .env file credentials and restart your dev server.";
                alert("Failed to process request: " + errMsg);
                btn.disabled = false;
                btn.innerHTML = "Send Brochure to Email →";
              });
          });
        </script>
      </body>
    </html>
  `;

  return (
    <div
      className="fixed inset-0 z-[220] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-[#C69A57]/30 bg-[#0d0b08] p-2 sm:p-4 shadow-[0_50px_160px_-120px_oklch(0.78_0.13_75/0.85)] overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition duration-200"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <iframe
          srcDoc={brochureIframeSrcDoc}
          className="w-full h-[410px] border-0 overflow-hidden hide-scrollbar bg-transparent"
          scrolling="no"
          title="Download Brochure Form"
        />
      </div>
    </div>
  );
}

function LandingBelowFold({ onBrochureClick }: { onBrochureClick?: () => void }) {
  return (
    <>
      <ROISection />
      <Highlights />
      <Spaces />
      <WhyInvest />
      <Amenities />
      <Location />
      <DeveloperLegacy />
      <InvestmentCTA onBrochureClick={onBrochureClick} />
      <EnquireNow />
      <SiteFooter />
    </>
  );
}

function PlinthLanding() {
  const [showBelowFold, setShowBelowFold] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [hasTriggeredScroll, setHasTriggeredScroll] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data === "close-brochure-modal") {
        setIsBrochureModalOpen(false);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (showBelowFold) return;

    const revealBelowFold = () => {
      setShowBelowFold((current) => (current ? current : true));
    };
    const onScroll = () => {
      if (window.scrollY > 120) {
        revealBelowFold();
        window.removeEventListener("scroll", onScroll);
      }
    };
    const timer = window.setTimeout(revealBelowFold, 2500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [showBelowFold]);

  // Scroll-based popup trigger
  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggeredScroll) return;
      if (isBrochureModalOpen || isModalOpen) return;

      // Show popup when user scrolls past 150px
      if (window.scrollY > 150) {
        setIsModalOpen(true);
        setHasTriggeredScroll(true);
      }
    };

    // Check on mount in case the page was reloaded already scrolled down
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggeredScroll, isBrochureModalOpen, isModalOpen]);

  // Lock body scrolling when a modal is active
  useEffect(() => {
    if (isModalOpen || isBrochureModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen, isBrochureModalOpen]);

  const handleEnquireClick = useCallback(() => {
    setIsBrochureModalOpen(false);
    setIsModalOpen(true);
    setHasTriggeredScroll(true); // Disable scroll-based popups once engaged
    // Ensure below-fold content is rendered
    setShowBelowFold(true);
  }, []);

  const handleBrochureClick = useCallback(() => {
    setIsModalOpen(false);
    setIsBrochureModalOpen(true);
    setHasTriggeredScroll(true); // Disable scroll-based popups once engaged
    // Ensure below-fold content is rendered
    setShowBelowFold(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden hide-scrollbar">
      <Nav onEnquireClick={handleEnquireClick} />
      <Hero onBrochureClick={handleBrochureClick} />
      {showBelowFold && <LandingBelowFold onBrochureClick={handleBrochureClick} />}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919898709370"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[90] h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
        <span className="absolute right-16 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none  border border-white/10">
          Chat with us
        </span>
      </a>

      {isModalOpen && <EnquiryModal onClose={() => setIsModalOpen(false)} />}
      {isBrochureModalOpen && <BrochureModal onClose={() => setIsBrochureModalOpen(false)} />}
    </main>
  );
}
