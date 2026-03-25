import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Signals", path: "/signals" },
  { label: "Performance", path: "/performance" },
  { label: "Membership", path: "/membership" },
  { label: "Learn", path: "/learn" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-extrabold gold-text tracking-tight">
          MushkertFX
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/membership">
            <Button variant="gold" size="sm" className="ml-2">Join VIP</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-border ${
                pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/membership" onClick={() => setOpen(false)}>
            <Button variant="gold" size="sm" className="mt-3 w-full">Join VIP</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
