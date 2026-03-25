import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const benefits = [
  "Daily gold trading signals (3–5 per day)",
  "Telegram VIP group access",
  "Trade breakdown analysis",
  "Weekly mentorship sessions",
  "Trading psychology lessons",
  "Risk management frameworks",
  "Priority support from DeleonFX",
];

const Membership = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">VIP <span className="gold-text">Membership</span></h1>
        <p className="text-muted-foreground">Unlock premium gold trading signals and mentorship.</p>
      </div>

      <div className="glass-card rounded-2xl p-8 md:p-10 glow-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
            <Crown className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-bold">VIP Gold Signals</h2>
            <p className="text-sm text-muted-foreground">Full access membership</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold gold-text">KES 5,000</span>
            <span className="text-muted-foreground">/month</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground">{b}</span>
            </li>
          ))}
        </ul>

        <Button variant="gold" size="lg" className="w-full text-base">
          Join VIP Membership
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-4">Cancel anytime. Instant Telegram access after payment.</p>
      </div>
    </div>
  </div>
);

export default Membership;
