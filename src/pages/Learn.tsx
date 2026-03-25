import { BookOpen, BarChart3, Shield, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: BookOpen,
    title: "Beginner Forex Lessons",
    desc: "Master the fundamentals of forex trading — pips, lots, leverage, and how the market works.",
    level: "Beginner",
    lessons: 12,
  },
  {
    icon: LineChart,
    title: "Gold Trading Strategy",
    desc: "Learn DeleonFX's proprietary approach to reading XAUUSD price action and identifying high-probability setups.",
    level: "Intermediate",
    lessons: 8,
  },
  {
    icon: Shield,
    title: "Risk Management",
    desc: "Protect your capital with proper position sizing, risk-to-reward ratios, and portfolio management techniques.",
    level: "All Levels",
    lessons: 6,
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    desc: "Technical and fundamental analysis frameworks for gold. Read charts, news, and economic data like a pro.",
    level: "Advanced",
    lessons: 10,
  },
];

const levelColor = (l: string) => {
  if (l === "Beginner") return "text-success bg-success/10 border-success/20";
  if (l === "Intermediate") return "text-primary bg-primary/10 border-primary/20";
  if (l === "Advanced") return "text-loss bg-loss/10 border-loss/20";
  return "text-muted-foreground bg-muted border-border";
};

const Learn = () => (
  <div className="min-h-screen bg-gradient-to-b from-background/50 via-background to-background pt-24 pb-16">
    {/* Hero Section */}
    <div className="container max-w-5xl px-4 text-left">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
        Trading <span className="gold-text">Education</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-full">
        Structured courses designed to take your gold trading skills from beginner to pro. Learn strategies, risk management, and market analysis directly from DeleonFX experts.
      </p>
      <Link to="/membership">
        <button className="bg-gold text-background font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-[1.03] transition-transform flex items-center gap-2 mb-12">
          Start Your Trial <ArrowRight className="w-5 h-5" />
        </button>
      </Link>
    </div>

    {/* Courses Grid */}
    <div className="container max-w-5xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {resources.map((r) => (
        <div
          key={r.title}
          className="glass-card p-6 rounded-2xl hover:glow-gold transition-shadow group cursor-pointer flex flex-col justify-between"
        >
          <div className="flex items-start justify-between mb-4">
            
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColor(r.level)}`}>
              {r.level}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2">{r.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{r.desc}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{r.lessons} lessons</span>
            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ))}
    </div>

    {/* CTA / Engagement Section */}
    <div className="container max-w-4xl mt-20 px-4 text-left">
      <div className="relative rounded-2xl border border-border bg-background/60 backdrop-blur-md shadow-xl p-8 md:p-14 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-br from-[#7c7eec]/20 via-transparent to-[#c07b00]/20" />
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Ready to Trade <span className="gold-text">Gold</span> Like a Pro?
          </h2>
          <p className="text-muted-foreground max-w-full mb-8 sm:mb-10">
            Get high-probability XAUUSD signals, precise entry points, and disciplined risk management directly inside our private Telegram channel.
            <span className="block mt-2">Join serious traders already compounding with DeleonFX.</span>
          </p>
          <Link to="/membership">
            <button className="bg-gold text-background font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base rounded-xl shadow-lg hover:scale-[1.02] transition-transform flex items-center gap-2">
              Start Your Trial <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Learn;