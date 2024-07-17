import { getSortedPostsData } from "@/app/lib/posts.js";

export default async function Gallery() {
  const allPostsData = await getSortedPostsData();
  return (
    <section className="flex flex-col items-center text-palette-3">
      <h2 className="text-3xl p-3">Blog Posts</h2>
      <ul className="grid grid-cols-3 gap-3">
        {allPostsData.map(({ id, date, title }) => (
          <li className="" key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  );
}
