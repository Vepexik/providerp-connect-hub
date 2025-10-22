import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Shield, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Admin 1",
    role: "Majitel Serveru",
    icon: Crown,
    color: "text-yellow-500",
  },
  {
    name: "Admin 2",
    role: "Hlavní Admin",
    icon: Shield,
    color: "text-red-500",
  },
  {
    name: "Moderátor 1",
    role: "Moderátor",
    icon: Users,
    color: "text-blue-500",
  },
  {
    name: "Moderátor 2",
    role: "Moderátor",
    icon: Users,
    color: "text-blue-500",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Náš Tým</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poznejte oddané členy týmu, kteří tuto komunitu umožňují
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <member.icon className={`w-10 h-10 ${member.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {member.role}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
