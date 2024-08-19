import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { getSortedPostsData } from "@/app/lib/projectposts";
import Link from "next/link";

export default async function ProjectCards({
  className,
}: {
  className?: string;
}) {
  const allPostsData = await getSortedPostsData();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-palette-3 mb-12">
      <ul className="flex gap-3">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/projects/${id}`}>
              <Card className="flex flex-col h-full">
                <CardHeader className="flex-grow">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{date}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
