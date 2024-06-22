import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/isai7710",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/isaisanzy",
    icon: Twitter,
  },
];

export default function MySocials() {
  return (
    <div className="flex flex-row gap-2 mr-2">
      {socialLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="bg-palette-1 p-1 pr-1 pl-1 rounded transition-all duration-200 hover:bg-[#5E7E61] hover:shadow-[0_0_10px_rgba(94,126,97,0.8)]"
          >
            <LinkIcon />
          </Link>
        );
      })}
    </div>
  );
}
