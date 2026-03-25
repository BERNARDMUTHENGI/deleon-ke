const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      {/* Logo + Name - hidden on mobile */}
      <div className="hidden md:flex items-center gap-2">
        <img
          src="/assets/Mushkert Logo.jpg"
          alt="MushkertFX Logo"
          className="h-20 w-20 rounded-full object-cover"
        />
        <span className="font-bold gold-text text-sm md:text-base">Deleon_ke</span>
      </div>

      <span>© {new Date().getFullYear()} Deleon_ke. All rights reserved.</span>
      <span>Professional Gold Trading Signals</span>
    </div>
  </footer>
);

export default Footer;