import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Signal {
  id: number;
  pair: string;
  type: "BUY" | "SELL";
  entry: number;
  sl: number;
  tp1: number;
  tp2: number;
  status: "Running" | "TP1 Hit" | "TP2 Hit" | "SL Hit";
  time: string;
}

const signals: Signal[] = [
  { id: 1, pair: "XAUUSD", type: "BUY", entry: 2385, sl: 2375, tp1: 2395, tp2: 2405, status: "Running", time: "Today, 09:30 AM" },
  { id: 2, pair: "XAUUSD", type: "SELL", entry: 2410, sl: 2420, tp1: 2400, tp2: 2390, status: "TP1 Hit", time: "Today, 06:15 AM" },
  { id: 3, pair: "XAUUSD", type: "BUY", entry: 2365, sl: 2355, tp1: 2375, tp2: 2385, status: "TP2 Hit", time: "Yesterday, 02:00 PM" },
  { id: 4, pair: "XAUUSD", type: "BUY", entry: 2350, sl: 2340, tp1: 2360, tp2: 2370, status: "TP2 Hit", time: "Yesterday, 10:45 AM" },
  { id: 5, pair: "XAUUSD", type: "SELL", entry: 2395, sl: 2405, tp1: 2385, tp2: 2375, status: "SL Hit", time: "Mar 23, 08:00 AM" },
  { id: 6, pair: "XAUUSD", type: "BUY", entry: 2370, sl: 2360, tp1: 2380, tp2: 2390, status: "TP1 Hit", time: "Mar 22, 11:30 AM" },
];

const statusColor = (s: Signal["status"]) => {
  if (s === "Running") return "bg-primary/20 text-primary border-primary/30";
  if (s.includes("TP")) return "bg-success/20 text-success border-success/30";
  return "bg-loss/20 text-loss border-loss/30";
};

const Signals = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Trading <span className="gold-text">Signals</span></h1>
      <p className="text-muted-foreground mb-8">Live and recent XAUUSD trading signals from DeleonFX.</p>

      <div className="grid gap-4">
        {signals.map((s) => (
          <div key={s.id} className="glass-card rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4">
            {/* Pair & Type */}
            <div className="flex items-center gap-3 md:w-40">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.type === "BUY" ? "bg-success/20" : "bg-loss/20"}`}>
                {s.type === "BUY" ? <ArrowUp className="text-success" /> : <ArrowDown className="text-loss" />}
              </div>
              <div>
                <div className="font-bold text-sm">{s.pair}</div>
                <div className={`text-xs font-semibold ${s.type === "BUY" ? "text-success" : "text-loss"}`}>{s.type}</div>
              </div>
            </div>

            {/* Levels */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground text-xs">Entry</span>
                <div className="font-semibold">{s.entry}</div>
              </div>
              <div>
                <span className="text-muted-foreground text-xs">Stop Loss</span>
                <div className="font-semibold text-loss">{s.sl}</div>
              </div>
              <div>
                <span className="text-muted-foreground text-xs">TP 1</span>
                <div className="font-semibold text-success">{s.tp1}</div>
              </div>
              <div>
                <span className="text-muted-foreground text-xs">TP 2</span>
                <div className="font-semibold text-success">{s.tp2}</div>
              </div>
            </div>

            {/* Status & Time */}
            <div className="flex items-center gap-3 md:w-48 justify-between md:justify-end">
              <Badge className={`${statusColor(s.status)} border text-xs`}>{s.status}</Badge>
              <span className="text-xs text-muted-foreground">{s.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Signals;
