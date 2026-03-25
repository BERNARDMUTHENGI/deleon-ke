import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users, BarChart3, Award, Star, ArrowRight, Zap } from "lucide-react";

const stats = [
  { label: "Win Rate", value: "87%", icon: TrendingUp },
  { label: "Monthly Pips", value: "2,450+", icon: BarChart3 },
  { label: "Active Members", value: "1,200+", icon: Users },
  { label: "Signals/Day", value: "3–5", icon: Zap },
];

const benefits = [
  { icon: TrendingUp, title: "Precision Signals", desc: "Accurate XAUUSD entries with defined TP and SL levels." },
  { icon: Shield, title: "Risk Management", desc: "Every signal comes with proper risk-to-reward ratios." },
  { icon: Users, title: "VIP Community", desc: "Join a network of serious gold traders on Telegram." },
  { icon: Award, title: "Mentorship", desc: "Weekly sessions to sharpen your trading edge." },
];

const testimonials = [
  { name: "James K.", text: "MushkertFX signals changed my trading completely. Consistent profits every week.", rating: 5 },
  { name: "Sarah M.", text: "The mentorship alone is worth 10x the price. I finally understand gold price action.", rating: 5 },
  { name: "David O.", text: "87% win rate is real. I've tracked every signal for 3 months. Life-changing.", rating: 5 },
];

const Landing = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="container relative text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-gold" />
          Live signals running now
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in">
          <span className="gold-text">MushkertFX</span>{" "}
          <span className="text-foreground">Gold Signals Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Professional gold trading signals, verified performance, and structured forex mentorship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/signals"><Button variant="gold" size="lg">View Signals <ArrowRight className="ml-1 w-4 h-4" /></Button></Link>
          <Link to="/membership"><Button variant="gold-outline" size="lg">Join VIP Membership</Button></Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 border-y border-border">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-3xl font-extrabold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* About */}
    <section className="py-20">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="gold-text">MushkertFX</span></h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          MushkertFX is a professional forex trader and mentor specializing in XAUUSD (Gold) trading.
          With years of experience navigating volatile gold markets, MushkertFX provides high-probability
          trading signals and structured mentorship to help traders at every level achieve consistent profitability.
        </p>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join the <span className="gold-text">Community</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card rounded-xl p-6 hover:glow-gold transition-shadow">
              <b.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our <span className="gold-text">Members</span> Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
              <p className="font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-secondary/30">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Trade <span className="gold-text">Gold</span> Profitably?</h2>
        <p className="text-muted-foreground mb-8">Join MushkertFX VIP today and start receiving professional trading signals directly on Telegram.</p>
        <Link to="/membership"><Button variant="gold" size="lg">Join VIP Membership <ArrowRight className="ml-1 w-4 h-4" /></Button></Link>
      </div>
    </section>
  </div>
);

export default Landing;
