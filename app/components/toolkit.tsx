import { CppIcon, CIcon, PythonIcon, MatlabIcon } from "@/public/icons";
import {
  ReactIcon,
  NextJsIcon,
  JavascriptIcon,
  TypescriptIcon,
  TailwindIcon,
} from "@/public/icons";

export default function Toolkit() {
  return (
    <div className="w-3/4 mx-auto flex gap-4">
      <div className="w-1/3 flex-col items-center">
        <div className="w-1/2 mx-auto grid grid-cols-2 gap-1 content-center">
          <CppIcon className="w-10 h-10 place-self-center" />
          <CIcon className="w-10 h-10 place-self-center" />
          <PythonIcon className="w-10 h-10 place-self-center" />
          <MatlabIcon className="w-10 h-10 place-self-center" />
        </div>
        <p className="text-center text-sm mt-2">Programming Languages</p>
      </div>
      <div className="w-1/3 flex-col items-center">
        <div className="w-1/2 mx-auto grid grid-cols-2 gap-1 content-center">
          <ReactIcon className="w-10 h-10 place-self-center" />
          <NextJsIcon className="w-10 h-10 place-self-center" />
          <TailwindIcon className="w-10 h-10 place-self-center" />
          <TypescriptIcon className="w-10 h-10 place-self-center" />
        </div>
        <p className="text-center text-sm mt-2">Website Development</p>
      </div>
      <div className="w-1/3 flex-col items-center">
        <div className="w-1/2 mx-auto grid grid-cols-2 gap-1 content-center">
          <ReactIcon className="w-10 h-10 place-self-center" />
          <NextJsIcon className="w-10 h-10 place-self-center" />
          <TailwindIcon className="w-10 h-10 place-self-center" />
          <TypescriptIcon className="w-10 h-10 place-self-center" />
        </div>
        <p className="text-center text-sm mt-2">Website Development</p>
      </div>
    </div>
  );
}
