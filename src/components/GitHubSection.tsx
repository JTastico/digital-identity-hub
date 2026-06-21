import {
  Github, FolderGit2, ExternalLink,
  Activity, MapPin, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import profileImage from "@/assets/jamil-profile.png";

const GITHUB_USER = "JTastico";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
const GITHUB_ORG = "Equip-for-manage-software";

const GitHubSection = () => {
  const { t } = useLanguage();
  const gh = t.github;

  // Datos numéricos (neutrales al idioma) tomados del perfil de GitHub
  const stats = [
    { value: "73", label: gh.statsLabels.repos, note: "", icon: FolderGit2, color: "from-cyan-500 to-blue-500" },
    { value: "329", label: gh.statsLabels.contributions, note: gh.statsLabels.contributionsNote, icon: Activity, color: "from-green-500 to-emerald-500" },
  ];

  // Metadata de repos alineada por índice con gh.repos (mismo orden).
  // Solo repos públicos verificados vía la API de GitHub.
  const repoMeta = [
    { language: "Swift", color: "#F05138", url: `${GITHUB_URL}/CodeLink` },
    { language: "JavaScript", color: "#F1E05A", url: `${GITHUB_URL}/Dot-s` },
    { language: "Python", color: "#3572A5", url: `${GITHUB_URL}/Gasteko-finance` },
  ];
  const repos = gh.repos.map((repo, i) => ({ ...repo, ...repoMeta[i] }));

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-primary/10 -top-40 -left-40" />
        <div className="floating-orb w-80 h-80 bg-purple-500/5 bottom-0 -right-32" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center animate-pulse-glow border border-primary/20">
              <Github className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{gh.title}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">{gh.subtitle}</p>
        </div>

        {/* Profile + Stats */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <div className="glass-card-elevated p-6 animate-slide-up flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full blur-sm opacity-60" />
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-card">
                <img src={profileImage} alt="Jamil Turpo" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-foreground font-heading">Jamil Turpo</h3>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-primary/15 text-primary border border-primary/30">PRO</span>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors mb-3"
            >
              @{GITHUB_USER}
            </a>
            <p className="text-sm text-muted-foreground mb-4">{gh.bio}</p>
            <a
              href={`https://github.com/${GITHUB_ORG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-5"
            >
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span>{gh.orgLabel}: @{GITHUB_ORG}</span>
            </a>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:opacity-90 rounded-xl"
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" /> {gh.viewProfile}
              </a>
            </Button>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass-card-glow p-6 flex flex-col items-center justify-center text-center group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} p-0.5 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <p className="text-3xl font-bold gradient-text font-heading">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                {s.note && (
                  <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wide mt-0.5">{s.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mb-8 animate-slide-up">
          <div className="glass-card-glow p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground font-heading">{gh.aboutTitle}</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {gh.about.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured repos */}
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
              <FolderGit2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground font-heading">{gh.reposTitle}</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-glow p-5 group flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-primary" />
                    <span className="font-bold text-foreground group-hover:text-primary transition-colors">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {repo.desc && (
                  <p className="text-sm text-muted-foreground mb-4">{repo.desc}</p>
                )}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.color }} />
                  <span className="text-xs text-muted-foreground">{repo.language}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border/50 hover:bg-secondary hover:border-primary/30 rounded-xl"
          >
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" /> {gh.fullProfile}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
