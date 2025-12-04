const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jamil Raúl Turpo Arocutipa. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Desarrollador Full Stack & Gestor de Proyectos Tecnológicos
        </p>
      </div>
    </footer>
  );
};

export default Footer;
