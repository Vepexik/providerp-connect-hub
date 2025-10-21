import { Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary text-background py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <Sparkles className="w-4 h-4" />
        <span>Get VIP benefits and enjoy roleplay to the maximum!</span>
        <a 
          href="#store" 
          className="underline hover:no-underline ml-2 font-semibold"
        >
          Store
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
