import { Award, BookOpen, Heart, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Surface } from "@/components/common/Surface";
import { IconTile } from "@/components/common/IconTile";
import { Reveal } from "@/components/common/Reveal";
import { stagger } from "@/lib/motion";

interface Entry {
  title: string;
  year: string;
  icon: LucideIcon;
  institution?: string;
  description?: string;
}

const educationIcons: LucideIcon[] = [BookOpen, Award];

const EntryCard = ({ title, year, icon, institution, description }: Entry) => (
  <Surface padding="sm" className="flex items-start gap-4 sm:p-5">
    <IconTile icon={icon} size="md" />
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <Badge variant="soft">{year}</Badge>
      </div>
      {institution && <p className="mt-1 text-sm text-muted-foreground">{institution}</p>}
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
    </div>
  </Surface>
);

const EntryColumn = ({ title, subtitle, entries, offset = 0 }: {
  title: string;
  subtitle: string;
  entries: Entry[];
  offset?: number;
}) => (
  <div>
    <SectionHeader title={title} subtitle={subtitle} size="sm" />
    <ul className="space-y-4">
      {entries.map((entry, i) => (
        <Reveal as="li" key={entry.title} delay={stagger(i + offset)}>
          <EntryCard {...entry} />
        </Reveal>
      ))}
    </ul>
  </div>
);

const EducationSection = () => {
  const { t } = useLanguage();
  const { education } = t;

  const studies: Entry[] = education.items.map((item, i) => ({
    title: item.title,
    year: item.year,
    icon: educationIcons[i] ?? BookOpen,
    institution: `${item.institution} · ${item.type}`,
  }));

  const volunteering: Entry[] = education.volunteeringItems.map((item) => ({
    title: item.title,
    year: item.year,
    icon: Heart,
    institution: item.institution,
    description: item.description,
  }));

  return (
    <Section id="education">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
        <EntryColumn title={education.title} subtitle={education.subtitle} entries={studies} />
        <EntryColumn
          title={education.volunteeringTitle}
          subtitle={education.volunteeringSubtitle}
          entries={volunteering}
          offset={1}
        />
      </div>
    </Section>
  );
};

export default EducationSection;
