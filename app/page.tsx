import PostCards from "./components/cards/post-cards";
import Hero from "./components/hero";
import About from "./components/about";
import BentoGrid from "./components/cards/bento-grid";
import { getSortedPostsMetaData } from "@/app/lib/posts";
import { CalendarBento } from "./components/cards/CalendarBento";

// Interactive client WakaTime dashboard with range-switcher
import { WakaTimeSection } from "./components/wakatimes-range";

export default async function Home() {
  const posts = await getSortedPostsMetaData();

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0">
      <Hero />
      <BentoGrid />
      <CalendarBento />

      {/* Coding Dashboard Section */}
      <section className="my-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Coding Activity</h2>
          <p className="text-palette-3">
            My development insights and coding patterns
          </p>
        </div>
        <WakaTimeSection />
      </section>

      {/* Projects/posts/etc */}
      <section id="projects" className="scroll-mt-24 text-palette-2">
        <PostCards posts={posts} />
      </section>
      <About />
    </div>
  );
}
