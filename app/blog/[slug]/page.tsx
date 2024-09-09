import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { getPostData } from "@/app/lib/blogposts";
import { TracingBeam } from "@/app/components/ui/tracing-beam";

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <TracingBeam className="px-6">
      <div
        key={postData.title}
        className="mx-auto prose prose-offwhite w-full mt-8 px-6"
      >
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {postData.content}
        </Markdown>
      </div>
    </TracingBeam>
  );
}
