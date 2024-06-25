import { X } from "react-feather";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface LinkType {
  name: string;
  href: string;
}

interface MenuScreenProps {
  links: LinkType[];
  onClose: () => void;
  isOpen: boolean;
}
export default function MenuScreen({
  links,
  onClose,
  isOpen,
}: MenuScreenProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-primary z-50">
      <button onClick={onClose} className="absolute top-4 right-4">
        <X />
      </button>
      <nav className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "font-medium px-3 py-2 rounded-md transition-all duration-200",
                  pathname === link.href
                    ? "text-palette-2 bg-palette-2 bg-opacity-10 underline underline-offset-2"
                    : "text-palette-3 hover:underline hover:bg-palette-2 hover:bg-opacity-10 hover:underline-offset-2 hover:shadow-xl",
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
