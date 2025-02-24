import { getSortedPostsMetaData } from "@/app/lib/posts";
import BlogCards from "@/app/components/cards/blog-cards";
import type { PostMetadata } from "@/app/lib/posts";
import EmailToast from "@/app/components/ui/email-toast";
import { MailPlus } from "lucide-react";
import FilterDropdown from "@/app/components/navigation/filter-dropdown";

export default async function Blog() {
  const allPostsData: PostMetadata[] = await getSortedPostsMetaData();

  return (
    <main className="mt-8 flex flex-col md:flex-row md:items-start w-full max-w-4xl gap-2 px-4 lg:px-0 mx-auto text-palette-3 min-h-[70vh]">
      <section className="pb-2 text-palette-2 w-full md:w-1/4 flex flex-col items-start gap-1">
        <h1 className="text-4xl font-extrabold">
          Blog Posts<span className="text-palette-4">.</span>
        </h1>
        <p className="text-md mb-2">
          Personal insights on small worlds within engineering and my life
          <span className="text-palette-4">.</span>
        </p>
        {/*
        <p className="text-palette-2 hover:text-palette-4 text-sm flex items-center mt-2 transition-all duration-300 ease-in-out hover:cursor-pointer">
          Shoot me an email
          <EmailToast iconSize={0}>
            <MailPlus className="w-4 h-4" />
          </EmailToast>
        </p>
        */}
        {/*<FilterDropdown posts={allPostsData} />*/}
      </section>

      <section className="w-full mx-auto md:w-3/4">
        <BlogCards posts={allPostsData} />
      </section>
    </main>
  );
}
