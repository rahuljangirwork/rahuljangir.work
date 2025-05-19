export default function GalleryLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={`skeleton-${i}`}
          className="w-full bg-[#2a2a2a] animate-pulse"
          style={{
            height: `${Math.floor(Math.random() * 300) + 200}px`,
          }}
        />
      ))}
    </div>
  );
}
