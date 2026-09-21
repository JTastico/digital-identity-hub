import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiAstro, SiLaravel, SiTailwindcss,
  SiDjango, SiFastapi, SiSpringboot, SiNodedotjs, SiDotnet,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSupabase,
  SiKotlin, SiFlutter, SiSwift,
  SiGithub, SiDocker, SiSwagger, SiPostman, SiFigma, SiAmazonwebservices
} from "react-icons/si";
import {
  Monitor, Server, Database, Wrench, Users, Smartphone,
  GitBranch, ClipboardList, Target, Timer, Hexagon,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { translations } from "@/data/translations";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Surface } from "@/components/common/Surface";
import { IconTile } from "@/components/common/IconTile";
import { Reveal } from "@/components/common/Reveal";
import { stagger } from "@/lib/motion";

type SkillIcon = IconType | LucideIcon;
type CategoryId = keyof typeof translations.ES.skills.categories;
type MethodKey = keyof typeof translations.ES.skills.methods;

interface Skill {
  icon: SkillIcon;
  color: string;
  /** Nombre propio de una tecnología (no se traduce). */
  name?: string;
  /** Clave en skills.methods para los conceptos que sí se traducen. */
  labelKey?: MethodKey;
}

interface SkillCategory {
  id: CategoryId;
  icon: LucideIcon;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    icon: Monitor,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "Astro", icon: SiAstro, color: "#FF5D01" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vue 3", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" }
    ]
  },
  {
    id: "backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" }
    ]
  },
  {
    id: "database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" }
    ]
  },
  {
    id: "tools",
    icon: Wrench,
    skills: [
      { name: "GitHub", icon: SiGithub, color: "currentColor" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" }
    ]
  },
  {
    id: "methodologies",
    icon: Users,
    skills: [
      { labelKey: "scrum", icon: GitBranch, color: "#0EA5E9" },
      { labelKey: "sprints", icon: Timer, color: "#F43F5E" },
      { labelKey: "kanban", icon: ClipboardList, color: "#8B5CF6" },
      { labelKey: "hexagonal", icon: Hexagon, color: "#14B8A6" },
      { labelKey: "projectManagement", icon: Target, color: "#10B981" },
      { labelKey: "requirements", icon: ClipboardList, color: "#F59E0B" }
    ]
  },
  {
    id: "mobile",
    icon: Smartphone,
    skills: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "SwiftUI", icon: SiSwift, color: "#F05138" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" }
    ]
  }
];

const SkillTile = ({ label, icon: Icon, color }: { label: string; icon: SkillIcon; color: string }) => (
  <li className="group/tile flex aspect-square min-h-[110px] flex-col items-center justify-center gap-5 rounded-2xl border border-border/60 bg-background/40 p-4 text-center transition-[transform,border-color,background-color] duration-300 ease-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5">
    <Icon
      className="h-9 w-9 transition-transform duration-300 ease-smooth group-hover/tile:scale-110 sm:h-10 sm:w-10"
      style={{ color }}
      aria-hidden="true"
    />
    <span className="text-base font-semibold leading-tight text-foreground">{label}</span>
  </li>
);

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <SectionHeader title={t.skills.title} subtitle={t.skills.subtitle} />

      <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delay={stagger(index % 3)}>
            <Surface>
              <div className="mb-5 flex items-center gap-3">
                <IconTile icon={category.icon} size="md" />
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {t.skills.categories[category.id]}
                </h3>
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => {
                  const label = skill.name ?? (skill.labelKey ? t.skills.methods[skill.labelKey] : "");
                  return <SkillTile key={label} label={label} icon={skill.icon} color={skill.color} />;
                })}
              </ul>
            </Surface>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
