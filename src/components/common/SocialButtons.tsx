import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/profile";

interface SocialButtonsProps {
  size?: "default" | "lg";
}

/** Botones a LinkedIn y GitHub (URLs centralizadas en data/profile). */
export const SocialButtons = ({ size = "default" }: SocialButtonsProps) => (
  <>
    <Button asChild variant="outline" size={size}>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
        <Linkedin /> LinkedIn
      </a>
    </Button>
    <Button asChild variant="outline" size={size}>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        <Github /> GitHub
      </a>
    </Button>
  </>
);
