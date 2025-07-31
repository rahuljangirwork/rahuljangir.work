import PostCards from "./components/cards/post-cards";
import Hero from "./components/hero";
import About from "./components/about";
import BentoGrid from "./components/cards/bento-grid";
import { getSortedPostsMetaData } from "@/app/lib/posts";
import { CalendarBento } from "./components/cards/CalendarBento";
import { WakaTimeSection } from "./components/wakatime/WakaTimeSection"; // Add this import

export default async function Home() {
  const posts = await getSortedPostsMetaData();

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0">
      <Hero />
      <BentoGrid />
      <CalendarBento />

      {/* WakaTime Coding Activity Section */}
      <WakaTimeSection />

      {/* Projects/posts/etc */}
      <section id="projects" className="scroll-mt-24 text-palette-2">
        <PostCards posts={posts} />
      </section>
      <About />
    </div>
  );
}
