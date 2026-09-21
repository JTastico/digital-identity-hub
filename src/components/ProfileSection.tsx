import { Briefcase, Code, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/common/Reveal";
import { stagger } from "@/lib/motion";

const ProfileSection = () => {
  const { t } = useLanguage();
  const { stats } = t.profile;

  const highlights = [
    { icon: Code, ...stats.fullstack },
    { icon: Briefcase, ...stats.leader },
    { icon: Target, ...stats.agile },
  ];

  return (
    <Section id="about">
      <SectionHeader title={t.profile.title} subtitle={t.profile.subtitle} />

      <Reveal delay={60}>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t.profile.description}</p>
      </Reveal>

      <ul className="mt-8 flex flex-wrap gap-3">
        {highlights.map(({ icon: Icon, title, subtitle }, index) => (
          <Reveal as="li" key={title} delay={stagger(index + 2)}>
            <Badge variant="muted" className="gap-2 px-4 py-2 text-sm font-medium">
              <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {title}
              <span className="text-muted-foreground">· {subtitle}</span>
            </Badge>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};

export default ProfileSection;
