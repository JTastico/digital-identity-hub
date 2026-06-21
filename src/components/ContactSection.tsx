import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-80 h-80 bg-primary/10 -top-40 -left-40" />
        <div className="floating-orb w-96 h-96 bg-purple-500/5 -bottom-48 -right-48" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-green-500/20 flex items-center justify-center animate-bounce-subtle">
              <Send className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-5">
            {/* Email Card */}
            <a 
              href={`mailto:${t.landing.email}`}
              className="glass-card-glow p-5 flex items-center gap-5 group shine-effect"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-primary group-hover:animate-bounce-subtle" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{t.contact.email}</p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t.landing.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+51991010001"
              className="glass-card-glow p-5 flex items-center gap-5 group shine-effect"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-green-400 group-hover:animate-bounce-subtle" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{t.contact.phone}</p>
                <p className="font-semibold text-foreground group-hover:text-green-400 transition-colors">
                  +51 991010001
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{t.contact.location}</p>
                <p className="font-semibold text-foreground">{t.contact.locationValue}</p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:opacity-90 font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.3)]"
                asChild
              >
                <a href="https://www.linkedin.com/in/turpojamil/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  {t.hero.linkedIn}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-border/50 hover:bg-secondary hover:border-primary/30 font-semibold py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/JTastico" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  {t.hero.github}
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
