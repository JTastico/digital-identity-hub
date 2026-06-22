import { useEffect, useState } from "react";
import { User, Code, Briefcase, Target, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const ProfileSection = () => {
  const { t } = useLanguage();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // Reconstruimos el array de stats usando las traducciones
  const stats = [
    { 
      icon: Code, 
      title: t.profile.stats.fullstack.title, 
      subtitle: t.profile.stats.fullstack.subtitle, 
      color: "from-cyan-500 to-blue-500" 
    },
    { 
      icon: Briefcase, 
      title: t.profile.stats.leader.title, 
      subtitle: t.profile.stats.leader.subtitle, 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      icon: Target, 
      title: t.profile.stats.agile.title, 
      subtitle: t.profile.stats.agile.subtitle, 
      color: "from-orange-500 to-red-500" 
    },
  ];

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentStatIndex(carouselApi.selectedScrollSnap());
    };

    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  return (
    <section className="page-section page-shell relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-64 h-64 bg-primary/5 -top-32 right-0" />
        <div className="floating-orb w-48 h-48 bg-purple-500/5 bottom-0 left-20" style={{ animationDelay: '2s' }} />
      </div>

      <div className="content-container mx-auto max-w-4xl relative z-10">
        <div className="glass-card-elevated animate-slide-up p-6 sm:p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 flex items-start gap-4 sm:items-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center animate-pulse-glow">
              <User className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="section-title mb-0">
                <span className="gradient-text">{t.profile.title}</span>
              </h2>
              <p className="text-sm text-muted-foreground">{t.profile.subtitle}</p>
            </div>
          </div>
          
          {/* Profile Text */}
          <div className="relative pl-6 border-l-2 border-gradient-to-b from-primary to-purple-500">
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary via-cyan-400 to-purple-500 -ml-0.5 rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.profile.description}
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-10 border-t border-border/30 pt-10 md:hidden">
            <Carousel
              opts={{ align: "start", loop: true }}
              setApi={setCarouselApi}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {stats.map((stat, index) => (
                  <CarouselItem key={index} className="pl-3">
                    <div className="group cursor-grab active:cursor-grabbing rounded-2xl border border-border/30 bg-card/30 px-5 py-6 text-center">
                      <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 transition-transform duration-300 group-hover:scale-110`}>
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-card">
                          <stat.icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary" />
                        </div>
                      </div>
                      <p className="font-heading text-2xl font-bold text-foreground transition-all group-hover:gradient-text">{stat.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{stat.subtitle}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-4 flex items-center justify-center gap-2">
              {stats.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`${t.profile.title} ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${currentStatIndex === index ? "w-6 bg-primary" : "w-2.5 bg-border"}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 hidden grid-cols-1 gap-6 border-t border-border/30 pt-10 md:grid md:grid-cols-3">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground font-heading group-hover:gradient-text transition-all">{stat.title}</p>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-6 right-6 opacity-20">
            <Rocket className="w-20 h-20 text-primary animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
