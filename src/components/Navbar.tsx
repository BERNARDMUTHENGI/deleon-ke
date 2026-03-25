import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 shadow-md">
      <div className="container flex items-center justify-between h-26 px-4 md:px-0">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/Mushkert Logo.jpg"
            alt="MushkertFX Logo"
            className="h-16 w-16 rounded-full object-cover"
          />
          <span className="text-xl font-extrabold gold-text tracking-tight">
            Deleon_Ke
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/membership">
            <Button variant="gold" size="sm" className="ml-3 hover:scale-105 transition-transform">
              Join VIP
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-md hover:bg-background/20 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-border transition-colors ${
                pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/membership" onClick={() => setOpen(false)}>
            <Button variant="gold" size="sm" className="mt-3 w-full">
              Join VIP
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;