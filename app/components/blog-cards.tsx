import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { getSortedPostsData } from "@/app/lib/posts";

export default async function BlogCards() {
  const allPostsData = await getSortedPostsData();
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-palette-3">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {allPostsData.map(({ id, date, title, src }) => (
          <li key={id} className="h-full">
            <Card src={src} className="flex flex-col h-full">
              <CardHeader className="flex-grow">
                <CardTitle className="">{title}</CardTitle>
                <CardDescription className="">{id}</CardDescription>
              </CardHeader>
              {/*
              <CardContent>
                <p>{date}</p>
              </CardContent>
              */}
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
