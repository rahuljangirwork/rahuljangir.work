import {
  CppIcon,
  PythonIcon,
  MatlabIcon,
  ArduinoIcon,
  RaspberryPiIcon,
} from "@/public/icons";
import {
  ReactIcon,
  NextJsIcon,
  TypescriptIcon,
  TailwindIcon,
} from "@/public/icons";
import { SolidworksIcon } from "@/public/icons";

export default function Toolkit() {
  return (
    <div className="w-3/4 mx-auto flex gap-4">
      <div className="w-1/3 flex-col items-center">
        <div className="w-1/2 mx-auto grid grid-cols-2 gap-1 content-center">
          <CppIcon className="col-span-2 w-10 h-10 place-self-center" />
          <PythonIcon className="w-10 h-10 place-self-center" />
          <MatlabIcon className="w-10 h-10 place-self-center" />
        </div>
        <p className="text-center text-sm mt-2">Languages</p>
      </div>
      <div className="w-1/3 flex-col items-center">
        <div className="w-1/2 mx-auto grid grid-cols-2 gap-1 content-center">
          <ReactIcon className="w-10 h-10 place-self-center" />
          <NextJsIcon className="w-10 h-10 place-self-center" />
          <TailwindIcon className="w-10 h-10 place-self-center" />
          <TypescriptIcon className="w-10 h-10 place-self-center" />
        </div>
        <p className="text-center text-sm mt-2">Frontend</p>
      </div>
      <div className="w-1/3 flex flex-col items-center gap-4">
        <div className="w-3/4 mx-auto flex gap-2 items-center">
          <p className="text-center text-sm place-self-center">CAD</p>
          <SolidworksIcon className="w-24 h-auto" />
        </div>
        <div className="w-3/4 mx-auto flex gap-2 items-center">
          <p className="text-center text-sm">Hardware</p>
          <ArduinoIcon className="w-24 h-auto" />
          <RaspberryPiIcon className="w-24 h-auto" />
        </div>
      </div>
    </div>
  );
}
