import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  return (
    <section className="mb-[-100vh] ">
      <div className="sticky top-0 ">
        <div className="relative overflow-hidden">
          <div className="section-padding absolute  bottom-1 z-10 py-4 font-satoshi text-white">
            <div className=" font-medium pl-1 text-xl">
              <p className="mix-blend-exclusion">
                A creative web & branding agency
              </p>
            </div>
            <h1 className="flex flex-col font-display text-display font-extrabold uppercase">
              <span>Center</span>
              <span>Molasses</span>
            </h1>
          </div>
          <video
            className="-z-10 h-screen w-full rounded-md object-cover brightness-75"
            autoPlay={true}
            muted
            loop={true}
          >
            <source src="/src/assets/videos/hero1.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
}
