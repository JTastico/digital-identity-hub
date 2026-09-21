import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Surface } from "@/components/common/Surface";
import { IconTile } from "@/components/common/IconTile";
import { Reveal } from "@/components/common/Reveal";
import { stagger } from "@/lib/motion";

// Textos de idiomas (no están en el archivo de traducciones principal)
const langTexts = {
  ES: { title: "Idiomas", langName: "Inglés", level: "Intermedio" },
  EN: { title: "Languages", langName: "English", level: "Intermediate" },
};

const SoftSkillsSection = () => {
  const { t, language } = useLanguage();
  const lang = langTexts[language];

  return (
    <Section id="soft-skills" tone="muted">
      <SectionHeader title={t.softSkills.title} subtitle={t.softSkills.subtitle} />

      {/* Con cantidad impar, el último ocupa el ancho completo en móvil (2 por fila) */}
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {t.softSkills.items.map((skill, index) => (
          <Reveal as="li" key={skill.name} delay={stagger(index % 3)} className="max-md:last:odd:col-span-2">
            <Surface padding="sm" className="flex h-full items-center gap-3 max-sm:gap-2.5 max-sm:p-3">
              <IconTile icon={skill.icon} size="sm" />
              <span className="min-w-0 text-sm font-medium leading-tight text-foreground">{skill.name}</span>
            </Surface>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8">
        <Surface className="mx-auto flex max-w-md flex-col items-center gap-3 text-center">
          <IconTile icon={Globe} size="lg" />
          <div>
            <p className="text-sm text-muted-foreground">{lang.title}</p>
            <p className="mt-1 flex items-center justify-center gap-3 text-lg">
              <span className="font-semibold text-foreground">{lang.langName}</span>
              <span className="text-muted-foreground" aria-hidden="true">—</span>
              <span className="font-semibold text-primary">{lang.level}</span>
            </p>
          </div>
        </Surface>
      </Reveal>
    </Section>
  );
};

export default SoftSkillsSection;
