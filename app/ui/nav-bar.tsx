import { lusitana } from "./fonts";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={`${lusitana.className} bg-palette-1`}>
      <nav className="flex justify-center items-center border-2 border-sky-800 ">
        <ul className="list-none m-0 p-0 border-2 border-sky-200" id="my-list">
          <li className="inline-block m-5 p-2 hover:border-b-2 border-[#E64833]">
            <Link
              href="/"
              className="font-medium text-base no-underline text-[#E64833]"
            >
              Home
            </Link>
          </li>
          <li className="inline-block m-5 p-2 hover:border-b-2 border-[#E64833]">
            <Link
              href="/"
              className="font-medium text-base no-underline text-[#E64833]"
            >
              About
            </Link>
          </li>
          <li className="inline-block m-5 p-2 hover:border-b-2 border-[#E64833]">
            <Link
              href="/"
              className="font-medium text-base no-underline text-[#E64833]"
            >
              Portfolio
            </Link>
          </li>
          <li className="inline-block m-5 p-2 hover:border-b-2 border-[#E64833]">
            <Link
              href="/"
              className="font-medium text-base no-underline text-[#E64833]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
