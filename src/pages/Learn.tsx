import { BookOpen, BarChart3, Shield, LineChart, ArrowRight } from "lucide-react";

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
    desc: "Learn MushkertFX's proprietary approach to reading XAUUSD price action and identifying high-probability setups.",
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
  <div className="min-h-screen pt-24 pb-16">
    <div className="container max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Trading <span className="gold-text">Education</span></h1>
      <p className="text-muted-foreground mb-10">Structured courses to take your gold trading to the next level.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((r) => (
          <div key={r.title} className="glass-card rounded-xl p-6 hover:glow-gold transition-shadow group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${levelColor(r.level)}`}>
                {r.level}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{r.lessons} lessons</span>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Learn;
