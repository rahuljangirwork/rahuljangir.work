import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

export default function ProjectCardsSkeleton({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4 sm:px-6 lg:px-8">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
}

function ProjectCardSkeleton() {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xl border-2 border-palette-1 bg-palette-2/5 backdrop-blur-md shadow-xl">
      <CardHeader className="p-0">
        <Skeleton className="w-full aspect-video" />
      </CardHeader>
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <CardDescription className="mb-4">
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm px-3 pb-3">
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-9 w-28" />
      </CardFooter>
    </Card>
  );
}
