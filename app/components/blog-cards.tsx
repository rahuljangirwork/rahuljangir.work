import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { getSortedPostsMetaData } from "@/app/lib/blogposts";
import Link from "next/link";

export default async function BlogCards() {
  const allPostsData = await getSortedPostsMetaData();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-palette-3">
      <ul className="flex flex-col gap-3">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
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
