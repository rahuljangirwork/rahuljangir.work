import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Socials from "./socials";

interface LinkType {
  name: string;
  href: string;
}

interface DropdownMenuProps {
  links: LinkType[];
  setIsOpen: (isOpen: boolean) => void;
}
export default function DropdownMenu({ links, setIsOpen }: DropdownMenuProps) {
  const pathname = usePathname();

  return (
    <div className="absolute right-0 mt-2 w-48 bg-palette-1 rounded-md shadow-lg py-1">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={clsx(
            "block font-medium px-4 py-2 text-palette-2",
            pathname === link.href
              ? "text-palette-3 bg-palette-2 bg-opacity-10 underline underline-offset-2"
              : "text-palette-2 hover:underline hover:bg-palette-2 hover:bg-opacity-10 hover:underline-offset-2 hover:shadow-inner",
          )}
        >
          {link.name}
        </Link>
      ))}
      <Socials className="flex justify-end" />
    </div>
  );
}
