import { Card } from "@/components/ui/card";
import { Shield, Server, Code } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Autentický Roleplay",
    description: "Ponořte se do realistického světa s propracovaným systémem rolí a interakcí.",
  },
  {
    icon: Server,
    title: "Stabilní Prostředí",
    description: "Používáme nejnovější technologie pro zajištění plynulého herního zážitku.",
  },
  {
    icon: Code,
    title: "Unikátní Skripty",
    description: "Vlastní herní mechaniky a systémy vytvořené přímo pro náš server.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">O Luminara FiveM</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jsme komunitní roleplay server zaměřený na autentický herní zážitek. Nabízíme stabilní 
            infrastrukturu, unikátní skripty a přátelskou komunitu pro všechny hráče GTA V.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:shadow-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-background" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
