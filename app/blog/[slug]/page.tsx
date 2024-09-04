import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { getPostData } from "@/app/lib/blogposts";

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <div
      key={postData.title}
      className="mx-auto prose prose-offwhite w-full mt-4 px-6"
    >
      <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {postData.content}
      </Markdown>
    </div>
  );
}
