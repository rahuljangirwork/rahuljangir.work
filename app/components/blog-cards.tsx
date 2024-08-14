import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { getSortedPostsData } from "@/app/lib/blogposts";
import Link from "next/link";

export default async function BlogCards() {
  const allPostsData = await getSortedPostsData();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-palette-3">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {allPostsData.map(({ id, date, title, src }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              <Card src={src} className="flex flex-col h-full">
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
