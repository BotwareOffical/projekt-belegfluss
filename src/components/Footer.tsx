const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-narrow">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-foreground">Nurturious Ltd</p>
          <div className="body-sm space-y-1">
            <p>128 City Road, London EC1V 2NX, UK</p>
            <p>
              <a href="mailto:contact@nurturious.com" className="hover:text-foreground transition-colors">
                contact@nurturious.com
              </a>
            </p>
            <p>
              <a href="tel:+4917621398420" className="hover:text-foreground transition-colors">
                +49 176 21398420
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="/impressum" className="body-sm hover:text-foreground transition-colors">
              Impressum
            </a>
            <span className="text-border">|</span>
            <a href="/datenschutz" className="body-sm hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
