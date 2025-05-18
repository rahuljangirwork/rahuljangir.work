import { Mail } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-palette-2/10 backdrop-blur-md p-2 z-20 relative">
      <div className="flex justify-between items-center text-palette-2/70">
        <div className="w-full md:w-1/3">
          <p className="text-sm">© 2024 Isai Sanchez. All rights reserved.</p>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <h4 className="font-bold pr-2">
            <a href="mailto:isaisanchezcc@gmail.com">
              <Mail className="w-4 md:w-5" />
            </a>
          </h4>
        </div>
      </div>
    </footer>
  );
}
