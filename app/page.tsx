import PostCards from "./components/cards/post-cards";
import Hero from "./components/hero";
import About from "./components/about";
import BentoGrid from "./components/cards/bento-grid";
import { getSortedPostsMetaData } from "@/app/lib/posts";
import { CalendarBento } from "./components/cards/CalendarBento";

// 🟢 Import these for your WakaTime dashboard:
import { getWakaTimeStats } from "@/app/lib/wakatime/wakatime-service";
import { CodingDashboard } from "./components/wakatime-dashboard";
import { Suspense } from "react";

function CodingDashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="w-full h-32 bg-palette-2 animate-pulse rounded-lg" />
      <div className="w-full h-32 bg-palette-2 animate-pulse rounded-lg" />
      <div className="w-full h-32 bg-palette-2 animate-pulse rounded-lg" />
    </div>
  );
}


async function WakaTimeSection() {
  try {
    const wakaTimeData = await getWakaTimeStats("last_7_days");
    return <CodingDashboard data={wakaTimeData} />;
  } catch (error) {
    return (
      <div className="bg-red-100 border border-red-200 rounded-lg p-6 text-red-700 text-center">
        Error loading coding stats. Please try again later.
      </div>
    );
  }
}




export default async function Home() {
  const posts = await getSortedPostsMetaData();

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0">
      <Hero />
      <BentoGrid />
      <CalendarBento />

      {/* 🟢 Coding Dashboard Section */}
      <section className="my-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Coding Activity</h2>
          <p className="text-palette-3">
            My development insights and coding patterns
          </p>
        </div>
        <Suspense fallback={<CodingDashboardSkeleton />}>
          {/* This triggers server call and renders all your cards! */}
          <WakaTimeSection />
        </Suspense>
      </section>

      {/* Projects/posts/etc */}
      <section id="projects" className="scroll-mt-24 text-palette-2">
        <PostCards posts={posts} />
      </section>
      <About />
    </div>
  );
}

