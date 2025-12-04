import { Mail, Phone, Linkedin, Github, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://portfolio.lovable.app';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}&bgcolor=0a1628&color=0ea5e9&margin=10`;

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">¡Conectemos y creemos algo increíble!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div className="space-y-4">
            <a 
              href="mailto:jamilturpoarocutipa@gmail.com"
              className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">jamilturpoarocutipa@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+51991010001"
              className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p className="font-medium text-foreground">+51 991010001</p>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="https://www.linkedin.com/in/turpojamil/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-border hover:bg-secondary hover:border-primary/30"
                asChild
              >
                <a href="https://github.com/JTastico" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="glass-card-elevated p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <QrCode className="w-5 h-5 text-primary" />
                <p className="font-medium text-foreground">Escanea para visitar</p>
              </div>
              <div className="bg-background/50 p-4 rounded-xl inline-block">
                <img 
                  src={qrCodeUrl}
                  alt="QR Code para la tarjeta digital"
                  className="w-48 h-48 rounded-lg"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Tarjeta Digital de Presentación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
