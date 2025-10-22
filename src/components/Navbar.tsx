import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Luminara FiveM
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              O nás
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Funkce
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tým
            </a>
            <a href="#partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Partneři
            </a>
          </div>

          <Button size="sm">Připojit se</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
