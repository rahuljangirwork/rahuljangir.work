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

export default function Socials({ className }: { className?: string }) {
  return (
    <div className={cn(className, "gap-2")}>
      {socialLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.name}`}
            className="border border-palette-1 p-2 rounded-full transition-all duration-200 transform hover:scale-110 hover:bg-[#5E7E61] hover:shadow-[0_0_10px_rgba(94,126,97,0.8)]"
          >
            <LinkIcon size={25} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
