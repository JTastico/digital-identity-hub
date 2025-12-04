import { GraduationCap, Award, Heart } from "lucide-react";

const education = [
  {
    title: "Diseño y Desarrollo de Software",
    institution: "TECSUP",
    year: "2023",
    type: "education"
  },
  {
    title: "Scrum Master",
    institution: "ScrumAcademy",
    year: "2024",
    type: "certification"
  }
];

const volunteering = [
  {
    title: "FLIT Arequipa",
    year: "2025"
  },
  {
    title: "Patrimonio Game Jam",
    institution: "Ministerio de Cultura",
    year: "2024"
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground font-heading">Educación y Certificaciones</h2>
            </div>

            <div className="relative pl-6 border-l-2 border-primary/30 space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-primary" />
                  <div className="glass-card p-4">
                    <div className="flex items-center gap-2 mb-1">
                      {item.type === "certification" ? (
                        <Award className="w-4 h-4 text-primary" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      )}
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground font-heading">Voluntariados</h2>
            </div>

            <div className="space-y-4">
              {volunteering.map((item, index) => (
                <div key={index} className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    {item.institution && (
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    )}
                    <p className="text-xs text-primary">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
