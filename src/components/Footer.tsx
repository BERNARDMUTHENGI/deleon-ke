const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-bold gold-text">MushkertFX</span>
      <span>© {new Date().getFullYear()} MushkertFX. All rights reserved.</span>
      <span>Professional Gold Trading Signals</span>
    </div>
  </footer>
);

export default Footer;
