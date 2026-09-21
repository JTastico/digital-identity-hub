import { Activity, Building2, ExternalLink, FolderGit2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import profileImage from "@/assets/jamil-profile.png";
import { GITHUB_ORG, GITHUB_URL, GITHUB_USER } from "@/data/profile";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Surface } from "@/components/common/Surface";
import { IconTile } from "@/components/common/IconTile";
import { Stat } from "@/components/common/Stat";
import { Reveal } from "@/components/common/Reveal";
import { stagger } from "@/lib/motion";

// Metadata de repos alineada por índice con gh.repos (mismo orden).
// Solo repos públicos verificados vía la API de GitHub.
const repoMeta = [
  { language: "Swift", color: "#F05138", url: `${GITHUB_URL}/CodeLink` },
  { language: "JavaScript", color: "#F1E05A", url: `${GITHUB_URL}/Dot-s` },
  { language: "Python", color: "#3572A5", url: `${GITHUB_URL}/Gasteko-finance` },
];

const GitHubSection = () => {
  const { t } = useLanguage();
  const gh = t.github;

  // Datos numéricos (neutrales al idioma) tomados del perfil de GitHub
  const stats = [
    { value: "73", label: gh.statsLabels.repos, note: "", icon: FolderGit2 },
    { value: "329", label: gh.statsLabels.contributions, note: gh.statsLabels.contributionsNote, icon: Activity },
  ];

  const repos = gh.repos.map((repo, i) => ({ ...repo, ...repoMeta[i] }));

  return (
    <Section id="github" tone="muted">
      <SectionHeader title={gh.title} subtitle={gh.subtitle} />

      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {/* Perfil */}
        <Reveal className="h-full">
          <Surface className="flex h-full flex-col items-center text-center">
            <img
              src={profileImage}
              alt="Jamil Turpo"
              loading="lazy"
              className="mb-4 h-24 w-24 rounded-full border border-border object-cover object-top"
            />
            <h3 className="font-heading text-xl font-semibold text-foreground">Jamil Turpo</h3>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              @{GITHUB_USER}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">{gh.bio}</p>
            <a
              href={`https://github.com/${GITHUB_ORG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <Building2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {gh.orgLabel}: @{GITHUB_ORG}
            </a>
            <div className="mt-auto w-full pt-5">
              <Button asChild className="w-full">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github /> {gh.viewProfile}
                </a>
              </Button>
            </div>
          </Surface>
        </Reveal>

        <div className="grid gap-5 lg:col-span-2 lg:gap-6">
          {/* Números */}
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={stagger(i + 1)}>
                <Surface className="flex h-full items-center gap-4">
                  <IconTile icon={s.icon} size="lg" />
                  <Stat value={s.value} label={s.label} note={s.note} />
                </Surface>
              </Reveal>
            ))}
          </div>

          {/* Sobre mí */}
          <Reveal delay={stagger(3)}>
            <Surface className="h-full">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">{gh.aboutTitle}</h3>
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {gh.about.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          </Reveal>
        </div>
      </div>

      {/* Repos destacados */}
      <h3 className="mb-5 mt-12 font-heading text-lg font-semibold text-foreground">{gh.reposTitle}</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <Reveal key={repo.name} delay={stagger(i)} className="h-full">
            <Surface asChild interactive>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                    <FolderGit2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {repo.name}
                  </span>
                  <ExternalLink
                    className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                {repo.desc && <p className="mt-3 text-sm text-muted-foreground">{repo.desc}</p>}
                <div className="mt-auto flex items-center gap-2 pt-4">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: repo.color }} aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">{repo.language}</span>
                </div>
              </a>
            </Surface>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default GitHubSection;
