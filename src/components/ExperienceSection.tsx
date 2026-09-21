import { ArrowUpRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Surface } from "@/components/common/Surface";
import { Reveal } from "@/components/common/Reveal";
import { stagger } from "@/lib/motion";
import { ProjectCover } from "@/components/experience/ProjectCover";

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" tone="muted">
      <SectionHeader title={t.experience.title} subtitle={t.experience.subtitle} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {t.experience.items.map((exp, index) => {
          return (
            <Reveal key={index} delay={stagger(index % 3)} className="h-full">
              <Surface interactive padding="none" className="group flex h-full flex-col overflow-hidden">
                <ProjectCover project={exp.project} title={exp.title} images={exp.images} />

                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  <header>
                    <h3 className="font-heading text-xl font-semibold leading-tight text-foreground">{exp.project}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{exp.title}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                      <span>{exp.company}</span>
                      {exp.period && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {exp.period}
                          </span>
                        </>
                      )}
                    </p>
                  </header>

                  <p className={cn("text-sm leading-relaxed text-muted-foreground", !exp.description && "italic")}>
                    {exp.description || t.experience.detailsSoon}
                  </p>

                  {exp.tech.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                      {exp.tech.map((tg) => (
                        <li key={tg}>
                          <Badge variant="soft" className="font-medium">{tg}</Badge>
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-auto space-y-1.5 border-t border-border pt-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.link && (
                    <Button asChild variant="outline" size="sm" className="self-start">
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        {t.experience.visitProject}
                        <ArrowUpRight />
                      </a>
                    </Button>
                  )}
                </div>
              </Surface>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default ExperienceSection;
