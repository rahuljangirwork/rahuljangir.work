import Link from "next/link";
import { GitHub, Twitter } from "react-feather";

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
];

export default function Socials() {
  return (
    <div className="flex space-x-2">
      {socialLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.name}`}
            className="bg-palette-1 p-1 rounded transition-all duration-200 hover:bg-[#5E7E61] hover:shadow-[0_0_10px_rgba(94,126,97,0.8)]"
          >
            <LinkIcon size={25} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
