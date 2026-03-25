import { TrendingUp, Target, BarChart3, Award } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { week: "W1", pips: 320 },
  { week: "W2", pips: 580 },
  { week: "W3", pips: 890 },
  { week: "W4", pips: 1250 },
  { week: "W5", pips: 1520 },
  { week: "W6", pips: 1840 },
  { week: "W7", pips: 2100 },
  { week: "W8", pips: 2450 },
];

const stats = [
  { icon: BarChart3, label: "Total Trades", value: "68", sub: "This month" },
  { icon: TrendingUp, label: "Win Rate", value: "87%", sub: "59 / 68 trades" },
  { icon: Target, label: "Total Pips", value: "2,450", sub: "+320 this week" },
  { icon: Award, label: "Best Streak", value: "14 Wins", sub: "Current: 7" },
];

const Performance = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Performance <span className="gold-text">Analytics</span></h1>
      <p className="text-muted-foreground mb-8">Transparent, verified trading performance from MushkertFX.</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-5">
            <s.icon className="w-6 h-6 text-primary mb-3" />
            <div className="text-2xl font-extrabold">{s.value}</div>
            <div className="text-sm font-medium text-foreground">{s.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-lg font-bold mb-6">Cumulative Pips Growth</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(43, 96%, 56%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(43, 96%, 56%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
              <XAxis dataKey="week" stroke="hsl(220, 10%, 55%)" fontSize={12} />
              <YAxis stroke="hsl(220, 10%, 55%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: "hsl(220, 18%, 10%)",
                  border: "1px solid hsl(220, 14%, 18%)",
                  borderRadius: "8px",
                  color: "hsl(40, 20%, 92%)",
                }}
              />
              <Area type="monotone" dataKey="pips" stroke="hsl(43, 96%, 56%)" fill="url(#goldGradient)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Win/Loss Breakdown */}
      <div className="glass-card rounded-xl p-6 mt-6">
        <h2 className="text-lg font-bold mb-4">Win / Loss Breakdown</h2>
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <div className="flex h-4 rounded-full overflow-hidden bg-muted">
              <div className="bg-success h-full rounded-l-full" style={{ width: "87%" }} />
              <div className="bg-loss h-full rounded-r-full" style={{ width: "13%" }} />
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-success font-semibold">59 Wins (87%)</span>
              <span className="text-loss font-semibold">9 Losses (13%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Performance;
