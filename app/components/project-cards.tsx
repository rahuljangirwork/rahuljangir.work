import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { getSortedPostsData } from "@/app/lib/projectposts";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import Markdown from "react-markdown";

export default async function ProjectCards() {
  const allPostsData = await getSortedPostsData();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8">
      <ul className="flex justify-between gap-3">
        {allPostsData.map(({ id, date, description, title }) => (
          <li key={id}>
            <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <Link
                href={`/projects/${id}`}
                className={cn("block cursor-pointer")}
              >
                <CardHeader className="px-2">
                  <div className="space-y-1">
                    <CardTitle className="mt-1 text-base">{title}</CardTitle>
                    <time className="font-sans text-xs">{date}</time>
                    <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                      {description}
                    </Markdown>
                  </div>
                </CardHeader>
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
