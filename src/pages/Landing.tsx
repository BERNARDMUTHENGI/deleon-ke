import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Award,
  Star,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { label: "Win Rate", value: "87%", icon: TrendingUp },
  { label: "Monthly Pips", value: "2,450+", icon: BarChart3 },
  { label: "Active Members", value: "1,200+", icon: Users },
  { label: "Signals/Day", value: "3–5", icon: Zap },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Precision Signals",
    desc: "Exact entry, stop loss, and take profit levels for XAUUSD – delivered instantly to Telegram.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Shield,
    title: "Risk-First Approach",
    desc: "Every signal includes a clear risk-to-reward ratio. We protect your capital first.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Users,
    title: "VIP Community",
    desc: "Private Telegram group with real‑time discussions, trade reviews, and direct access to Mushkert.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Award,
    title: "Weekly Mentorship",
    desc: "Live sessions covering market analysis, psychology, and advanced gold strategies.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    name: "James K.",
    text: "MushkertFX signals changed my trading completely. Consistent profits every week.",
    rating: 5,
    role: "Full‑time Trader",
  },
  {
    name: "Sarah M.",
    text: "The mentorship alone is worth 10x the price. I finally understand gold price action.",
    rating: 5,
    role: "Swing Trader",
  },
  {
    name: "David O.",
    text: "87% win rate is real. I've tracked every signal for 3 months. Life‑changing.",
    rating: 5,
    role: "VIP Member",
  },
  {
    name: "Michael T.",
    text: "Risk management is spot on. I've grown my account steadily without blowing up.",
    rating: 5,
    role: "Forex Trader",
  },
];

const Landing = () => (
  <div className="min-h-screen">
{/* Hero Section */}
<section className="relative h-screen flex items-center md:bg-black">
  {/* Mobile Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  >
    <source src="/assets/TELEGRAM LINK ON BIO.mp4" type="video/mp4" />
  </video>

  {/* Overlay for mobile only */}
  <div className="absolute inset-0 bg-black/70 md:hidden"></div>

  <div className="container px-6 md:px-0 relative z-10">
    <div className="grid md:grid-cols-[2fr_1fr] items-center gap-8 md:gap-12 max-w-6xl mx-auto">
      {/* Video Column - visible only on desktop */}
      <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-2xl h-[70vh] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/TELEGRAM LINK ON BIO.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Text Column */}
      <div className="text-white space-y-6 text-center md:text-left">
        <div className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm text-white/90 mx-auto md:mx-0">
  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
  Live signals running now – 87% win rate
</div>
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
          <span className="text-yellow-400">MushkertFX</span> <span>Gold Signals</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-xl text-white/80">
          Professional XAUUSD signals with verified performance. Join 1,200+ traders who profit consistently.
        </p>

  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between">
  <Link to="/membership" className="w-full md:w-auto">
    <Button variant="gold" size="lg" className="shadow-lg w-full md:w-auto">
      Start Trading <ArrowRight className="ml-1 w-4 h-4" />
    </Button>
  </Link>
  <Link to="/signals" className="w-full md:w-auto">
    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full md:w-auto">
      View Sample Signals
    </Button>
  </Link>
</div>
        <div className="hidden md:flex flex-wrap justify-center md:justify-start gap-6 text-white/70 text-sm">
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
    <span>87% Win Rate (Verified)</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
    <span>2,450+ Pips / Month</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
    <span>Risk‑First Signals</span>
  </div>
</div>
      </div>
    </div>
  </div>
</section>

    {/* Stats Section */}
    <section className="py-8 md:py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

   {/* About Section */}
<section className="py-12 md:py-20">
  <div className="container max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-center">
      About <span className="gold-text">MushkertFX</span>
    </h2>
    <p className="text-muted-foreground text-lg leading-relaxed text-left md:text-center px-4 md:px-0">
      MushkertFX is a professional forex trader and educator specializing exclusively in XAUUSD (Gold).
      With over 8 years of experience navigating volatile gold markets, Mushkert provides high‑probability
      trading signals and structured mentorship that have helped hundreds of traders achieve consistent profitability.
    </p>
  </div>
</section>

    {/* Meet Mushkert Section */}
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="flex-1">
            <img
              src="/assets/mushkert.jpg"
              alt="Mushkert - Gold Trading Expert"
              className="rounded-2xl shadow-xl w-full object-cover h-80 md:h-[500px]"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">Meet <span className="gold-text">Mushkert</span></h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Meet Mushkert – a passionate gold trader who lives and breathes XAUUSD. With over a decade of
              experience analyzing market movements, he has honed strategies that focus on consistency, risk
              management, and disciplined trading. Today, Mushkert personally shares his insights with a
              community of traders committed to growing their skills and profiting smartly in the gold markets.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              His approach combines technical analysis, risk management, and market psychology to deliver
              signals that actually work. Join the community and learn directly from a mentor who cares
              about your success.
            </p>
            <div className="flex items-center gap-2 pt-2 sm:pt-4">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">8+ years trading gold</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Verified 87% win rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-12 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Join the <span className="gold-text">Community</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white">
              <div className="h-48 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold text-black mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    {/* Verified Performance Section */}
<section className="py-12 md:py-20 bg-background/50">
  <div className="container">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
      Verified <span className="gold-text">Performance</span>
    </h2>
    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
      Real results from real trades. Every signal is tracked and verified.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left side: Metrics */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card rounded-xl p-5 text-center shadow-sm border border-border/50">
            <div className="text-3xl font-bold text-primary">87%</div>
            <div className="text-sm text-muted-foreground mt-1">Win Rate</div>
            <div className="text-xs text-muted-foreground mt-1">(Last 200 Trades)</div>
          </div>
          <div className="bg-card rounded-xl p-5 text-center shadow-sm border border-border/50">
            <div className="text-3xl font-bold text-primary">2.4:1</div>
            <div className="text-sm text-muted-foreground mt-1">Avg Risk/Reward</div>
          </div>
          <div className="bg-card rounded-xl p-5 text-center shadow-sm border border-border/50">
            <div className="text-3xl font-bold text-primary">2,450+</div>
            <div className="text-sm text-muted-foreground mt-1">Pips / Month</div>
          </div>
          <div className="bg-card rounded-xl p-5 text-center shadow-sm border border-border/50">
            <div className="text-3xl font-bold text-primary">$1,247</div>
            <div className="text-sm text-muted-foreground mt-1">Avg Monthly Gain*</div>
            <div className="text-[10px] text-muted-foreground mt-1">*Based on 0.1 lot per signal</div>
          </div>
        </div>

        {/* Live Trade Feed Preview */}
        <div className="bg-card rounded-xl p-5 border border-border/50 shadow-sm">
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span>XAUUSD BUY</span>
              <span className="text-green-500 font-mono">+87 pips</span>
              <span className="text-xs text-muted-foreground">2h ago</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span>XAUUSD SELL</span>
              <span className="text-green-500 font-mono">+52 pips</span>
              <span className="text-xs text-muted-foreground">5h ago</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span>XAUUSD BUY</span>
              <span className="text-green-500 font-mono">+124 pips</span>
              <span className="text-xs text-muted-foreground">Yesterday</span>
            </div>
            <div className="flex justify-between items-center">
              <span>XAUUSD SELL</span>
              <span className="text-green-500 font-mono">+38 pips</span>
              <span className="text-xs text-muted-foreground">Yesterday</span>
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-muted-foreground">
            Real-time signals delivered via Telegram
          </div>
        </div>
      </div>

      {/* Right side: Member experiences */}
      <div className="space-y-6">
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              {/* <Users className="w-5 h-5 text-primary" /> */}
            </div>
            <span className="font-semibold">James K.</span>
          </div>
          <p className="text-muted-foreground italic">
            "I've been following MushkertFX for 6 months. The signals are precise, and the community is solid. My account has grown steadily without the stress."
          </p>
          <div className="flex gap-1 mt-3">
            {[1,2,3,4,5].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              {/* <Award className="w-5 h-5 text-primary" /> */}
            </div>
            <span className="font-semibold">Sarah M.</span>
          </div>
          <p className="text-muted-foreground italic">
            "The mentorship alone changed how I trade. I used to chase losses; now I have a plan. Highly recommend for anyone serious about gold."
          </p>
          <div className="flex gap-1 mt-3">
            {[1,2,3,4,5].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </div>

        
      </div>
    </div>

    
  </div>
</section>

   {/* Final CTA */}
<section className="py-16 md:py-24 relative">
  <div className="container max-w-4xl">
    <div className="relative rounded-2xl border border-border bg-background/60 backdrop-blur-md shadow-xl p-8 md:p-14 text-left md:text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-br from-[#7c7eec]/20 via-transparent to-[#c07b00]/20" />
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Ready to Trade <span className="gold-text">Gold</span> Like a Pro?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-0 md:mx-auto mb-8 sm:mb-10">
          Get high-probability XAUUSD signals, precise entry points, and disciplined
          risk management directly inside our private Telegram channel.
          <span className="block mt-2">
            Join serious traders already compounding with MushkertFX.
          </span>
        </p>
        <Link to="/membership">
          <Button
            variant="gold"
            size="lg"
            className="px-6 sm:px-8 py-4 sm:py-6 text-base font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Start Your 7-Day Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
       
        <div className="flex flex-wrap justify-start md:justify-center gap-4 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            Beginner Friendly
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            Clear Risk Management
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            Real-time Telegram Signals
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
);

export default Landing;