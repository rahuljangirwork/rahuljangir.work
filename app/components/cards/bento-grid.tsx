import { Card } from "@/app/components/ui/card";
import {
  GraduationCap,
  Code,
  Braces,
  Cpu,
  Cog,
  Mail,
  Atom,
  MapPin,
} from "lucide-react";
import EmailToast from "../ui/email-toast";
import Arduino from "@/app/components/media/icons/arduino";
import React from "@/app/components/media/icons/react";
import NextJS from "@/app/components/media/icons/next-js";
import Typescript from "@/app/components/media/icons/typescript";
import TailwindCSS from "@/app/components/media/icons/tailwindcss";
import Cpp from "../media/icons/cpp";
import Python from "../media/icons/python";
import Numpy from "../media/icons/numpy";
import Raspbi from "../media/icons/raspbi";
import SolidWorks from "../media/icons/solidworks";

export default function BentoGrid() {
  return (
    <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {/* About Card */}
        <Card className="col-span-full md:col-span-4 row-span-2 px-4 py-6 bg-white/10 backdrop-blur-sm flex flex-col justify-between border-none shadow-xl">
          <div>
            <div className="flex items-center mb-2">
              <Atom className="h-7 w-7 mr-2" />
              <h2 className="text-2xl font-bold">
                About Me<span className="text-palette-4">.</span>
              </h2>
            </div>
            <p className="text-sm">
              My technical proficiencies span advanced CAD software, robotics
              systems, high-level math & physics, computer programming, and
              hardware integration.
            </p>
          </div>
        </Card>

        {/* Education Card */}
        <Card className="col-span-full sm:col-span-4 p-4 border-palette-1 shadow-xl">
          <div className="flex items-center mb-2">
            <GraduationCap className="h-6 w-6 text-palette-4 mr-2" />
            <h3 className="text-md lg:text-lg font-semibold whitespace-nowrap">
              B.S. Mechanical Engineering
            </h3>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p>Brigham Young University</p>
            <p className="flex items-center gap-1">
              <MapPin className="w-4 h-4 inline-block" />
              Provo, UT
            </p>
          </div>
        </Card>

        {/* Coding Card */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-card border-palette-1 shadow-xl">
          <div className="flex items-center mb-2">
            <Braces className="h-5 w-5 mr-2" />
            <h3 className="text-md lg:text-lg font-semibold">Coding</h3>
          </div>
          <div className="flex gap-1 justify-start md:justify-between">
            <Cpp className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-2 rounded-md" />
            <Python className="inline-block w-9 h- text-palette-3 bg-white/10 backdrop-blur-sm p-2 rounded-md" />
            <Numpy className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-2 rounded-md" />
          </div>
        </Card>

        {/* Web Development Card */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-card border-palette-1 shadow-xl">
          <div className="flex items-center mb-2">
            <Code className="h-5 w-5 mr-2" />
            <h3 className="font-semibold">Web Dev</h3>
          </div>
          <div className="flex gap-1 justify-start md:justify-between">
            <NextJS className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-2 rounded-md" />
            <Typescript className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-2 rounded-md" />
            <TailwindCSS className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-2 rounded-md" />
          </div>
        </Card>

        {/* Contact Card */}
        <Card className="col-span-full sm:col-span-4 order-1 md:order-none p-4 bg-card border-palette-1 shadow-xl">
          <div className="flex items-center mb-2">
            <Mail className="h-5 w-5 mr-2 text-palette-4" />
            <h3 className="text-lg font-semibold">Contact Me</h3>
          </div>
          <p className="text-sm text-balance">
            Shoot me an email!
            <EmailToast className="inline-flex gap-1 text-sm text-palette-4 hover:underline focus:outline-none" />
          </p>
        </Card>

        {/* Hardware Card */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-card border-palette-1 shadow-xl">
          <div className="flex items-center mb-2">
            <Cpu className="h-5 w-5 mr-2" />
            <h3 className="font-semibold">Hardware</h3>
          </div>
          <div className="flex space-x-1">
            <Arduino className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-1 rounded-md" />
            <Raspbi className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-1 rounded-md" />
          </div>
        </Card>

        {/* CAD Card */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-card border-palette-1 shadow-xl">
          <div className="flex items-center mb-2">
            <Cog className="h-5 w-5 mr-2" />
            <h3 className="font-semibold">CAD</h3>
          </div>
          <div className="flex space-x-2">
            <SolidWorks className="inline-block w-9 h-9 text-palette-3 bg-white/10 backdrop-blur-sm p-2 rounded-md" />
          </div>
        </Card>
      </div>
    </div>
  );
}
