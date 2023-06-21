export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="p-3">
        <div className="relative overflow-hidden rounded-md">
          <div className="absolute bottom-0 text-9xl font-extrabold font-display uppercase p-4 text-white">
            <h1>center</h1>
            <span></span>
            <h1>molasses</h1>
          </div>
          <video
            width="1920"
            height="1080"
            autoPlay={true}
            muted
            loop={true}
          >
            <source src="/src/assets/videos/hero.webm" type="video/webm" />
          </video>
        </div>
      </section>
    </>
  );
}
