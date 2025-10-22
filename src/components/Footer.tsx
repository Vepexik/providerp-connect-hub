import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Luminara FiveM
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#rules" className="hover:text-foreground transition-colors">
              Pravidla
            </a>
            <a href="#whitelist" className="hover:text-foreground transition-colors">
              Whitelist
            </a>
            <a href="#statistics" className="hover:text-foreground transition-colors">
              Statistiky
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Luminara FiveM. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
