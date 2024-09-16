import Link from "next/link";
import { GitHub, Twitter, Linkedin } from "react-feather";
import { cn } from "@/app/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/isai7710",
    icon: GitHub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/isaisanzy",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "/",
    icon: Linkedin,
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
