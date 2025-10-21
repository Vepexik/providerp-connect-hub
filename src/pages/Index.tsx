import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <div className="pt-10">
        <Navbar />
        <Hero />
        <Features />
        <Partners />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
