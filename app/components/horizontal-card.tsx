import Carousel from "@/app/components/carousel";

export default function HorizontalCard() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl border border-palette-2 rounded-md overflow-hidden">
      <section className="w-full md:w-1/2 p-4 border-r border-r-palette-2 bg-palette-2 bg-opacity-10">
        <h2 className="text-xl text-center mb-2">College</h2>
        <p className="p-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero.{" "}
        </p>
      </section>
      <section className="w-full md:w-1/2">
        <Carousel />
      </section>
    </div>
  );
}
