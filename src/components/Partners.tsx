import { Card } from "@/components/ui/card";

const partners = [
  { name: "Partner 1", logo: "🎮" },
  { name: "Partner 2", logo: "🚀" },
  { name: "Partner 3", logo: "⚡" },
  { name: "Partner 4", logo: "🎯" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with the best developers in the community to offer you the highest quality gaming experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="p-8 bg-background border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <p className="text-sm text-muted-foreground">{partner.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
