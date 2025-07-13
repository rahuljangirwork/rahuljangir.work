import Link from "next/link";

import { IconBrandInstagram, IconBrandGithub, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';
import { cn } from "@/app/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rahuljangirwork",
    icon: IconBrandGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rahuljangirwork",
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rahuljangirwork",
    icon: IconBrandLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rahuljangirwork/",
    icon: IconBrandInstagram,
  },
];

export default function Socials({
  className,
  iconSize = 25,
  linkClass,
}: {
  className?: string;
  iconSize?: number;
  linkClass?: string;
}) {
  return (
    <div className={cn(className)}>
      {socialLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.name}`}
            className={cn(linkClass)}
          >
            <LinkIcon size={iconSize} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
