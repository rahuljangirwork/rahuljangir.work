import BlogCards from "@/app/components/blog-cards";

export default async function Blog() {
  const intro = "I always wanted an online site to write about the things I found most interesting about the mechanical engineering field, and about life too. Here you can read about me babbling about everything from a how I set up my Neovim configuration to the way the Heat Equation was derived and everything in between. I'd love to hear your feedback or have a discussion about any of these topics, hit me up!"
  return (
    <>
      <div className="flex flex-col items-center text-palette-3">
        <h2 className="text-3xl m-1">Blog Posts</h2>
        <p className="mb-2 italic">Welcome to my blog posts!</p>
      </div>
      <p className="w-full text-palette-3 bold">{intro}
      </p>
      <BlogCards />
    </>
  );
}
