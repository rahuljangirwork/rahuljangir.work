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

export default function BentoGridSkeleton() {
  return (
    <div className="w-full mx-auto py-4 transition-colors duration-1000 ease-in-out text-palette-2 my-10 md:my-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {/* About Card Skeleton */}
        <Card className="col-span-full md:col-span-4 row-span-2 px-4 py-6 bg-palette-1/60 border-none shadow-xl">
          <div className="flex items-center mb-2">
            <Atom className="h-7 w-7 mr-2 text-gray-300" />
            <div className="h-8 w-40 bg-green-900 rounded animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-green-900 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-green-900 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-green-900 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-green-900 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-green-900 rounded w-3/4 animate-pulse"></div>
          </div>
        </Card>

        {/* Education Card Skeleton */}
        <Card className="col-span-full sm:col-span-4 p-4 bg-palette-1/60 border-none shadow-xl">
          <div className="flex items-center mb-2">
            <GraduationCap className="h-6 w-6 text-palette-4 mr-2" />
            <div className="h-6 w-48 bg-green-900 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-32 bg-green-900 rounded animate-pulse"></div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-300" />
              <div className="h-4 w-16 bg-green-900 rounded animate-pulse"></div>
            </div>
          </div>
        </Card>

        {/* Coding Card Skeleton */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-palette-1/60 border-none shadow-xl">
          <div className="flex items-center mb-2">
            <Braces className="h-5 w-5 mr-2 text-gray-300" />
            <div className="h-6 w-16 bg-green-900 rounded animate-pulse"></div>
          </div>
          <div className="flex gap-1 justify-start">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-9 h-9 bg-green-900 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </Card>

        {/* Web Development Card Skeleton */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-palette-1/60 border-none shadow-xl">
          <div className="flex items-center mb-2">
            <Code className="h-5 w-5 mr-2 text-gray-300" />
            <div className="h-6 w-20 bg-green-900 rounded animate-pulse"></div>
          </div>
          <div className="flex gap-1 justify-start">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-9 h-9 bg-green-900 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </Card>

        {/* Contact Card Skeleton */}
        <Card className="col-span-full sm:col-span-4 order-1 md:order-none p-4 bg-palette-1/60 border-none shadow-xl">
          <div className="flex items-center mb-2">
            <Mail className="h-5 w-5 mr-2 text-palette-4" />
            <div className="h-6 w-28 bg-green-900 rounded animate-pulse"></div>
          </div>
          <div className="h-4 w-3/4 bg-green-900 rounded animate-pulse"></div>
        </Card>

        {/* Hardware Card Skeleton */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-palette-1/60 border-none shadow-xl">
          <div className="flex items-center mb-2">
            <Cpu className="h-5 w-5 mr-2 text-gray-300" />
            <div className="h-6 w-24 bg-green-900 rounded animate-pulse"></div>
          </div>
          <div className="flex space-x-1">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-9 h-9 bg-green-900 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </Card>

        {/* CAD Card Skeleton */}
        <Card className="col-span-1 md:col-span-2 p-4 bg-palette-1/60 border-none shadow-xl">
          <div className="flex items-center mb-2">
            <Cog className="h-5 w-5 mr-2 text-gray-300" />
            <div className="h-6 w-12 bg-green-900 rounded animate-pulse"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-9 h-9 bg-green-900 rounded animate-pulse"></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
