import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PHONE } from "@/data/profile";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Surface } from "@/components/common/Surface";
import { IconTile } from "@/components/common/IconTile";
import { SocialButtons } from "@/components/common/SocialButtons";
import { Reveal } from "@/components/common/Reveal";
import { stagger } from "@/lib/motion";

interface ContactRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const rowClass = "flex items-center gap-4";

const ContactRow = ({ icon, label, value, href }: ContactRowProps) => {
  const content = (
    <>
      <IconTile icon={icon} size="md" />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="break-all font-medium text-foreground">{value}</p>
      </div>
    </>
  );

  return href ? (
    <Surface asChild interactive padding="sm">
      <a href={href} className={rowClass}>{content}</a>
    </Surface>
  ) : (
    <Surface padding="sm" className={rowClass}>{content}</Surface>
  );
};

const ContactSection = () => {
  const { t } = useLanguage();

  const rows: ContactRowProps[] = [
    { icon: Mail, label: t.contact.email, value: t.landing.email, href: `mailto:${t.landing.email}` },
    { icon: Phone, label: t.contact.phone, value: PHONE.display, href: PHONE.href },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue },
  ];

  return (
    <Section id="contact">
      <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

      <ul className="grid gap-3 sm:max-w-xl">
        {rows.map((row, i) => (
          <Reveal as="li" key={row.label} delay={stagger(i)}>
            <ContactRow {...row} />
          </Reveal>
        ))}
      </ul>

      <Reveal delay={stagger(3)} className="mt-6 flex flex-col gap-3 sm:max-w-xl sm:flex-row [&>a]:flex-1">
        <SocialButtons size="lg" />
      </Reveal>
    </Section>
  );
};

export default ContactSection;
