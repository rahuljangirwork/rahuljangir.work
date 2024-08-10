import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { getPostData } from "@/app/lib/posts";

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <div className="flex flex-col justify-center items-center">
      <div key={postData.title} className="prose prose-offwhite w-full m-1">
        <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
          {postData.content}
        </Markdown>
      </div>
    </div>
  );
}
