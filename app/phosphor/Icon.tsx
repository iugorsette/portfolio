"use client";
import {
  GithubLogo,
  IconContext,
  InstagramLogo,
  LinkedinLogo,
  WarningOctagon,
  WhatsappLogo,
} from "@phosphor-icons/react";

export function Icon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return <InstagramLogo size={32} />;
    case "linkedin":
      return <LinkedinLogo size={32} />;
    case "whatsapp":
      return <WhatsappLogo size={32} />;
    case "github":
      return <GithubLogo size={32} />;

    default:
      return <WarningOctagon size={32} className="blur-none" />;
  }
}
