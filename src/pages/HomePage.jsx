import Button from "../components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-[-100vh]">
        <div className="sticky top-0 ">
          <div className="relative overflow-hidden">
            <div className="absolute bottom-0  z-10 px-8 py-4 font-satoshi text-white">
              <div className=" pl-4 text-lg font-semibold">
                <p className=" tracking-wider mix-blend-exclusion">
                  A digital-first creative agency
                </p>
              </div>
              <h1 className="flex flex-col font-display text-9xl font-extrabold uppercase">
                <span>Center</span>
                <span>Molasses</span>
              </h1>
            </div>
            <video
              className="-z-10 h-screen w-full object-cover brightness-75"
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

      {/* Sticky wrapper */}
      <div className=" relative w-full overflow-hidden rounded-2xl bg-cream">
        <section>
          <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
            <h2 className="max-w-lg px-10 text-center font-satoshi text-5xl font-extrabold text-bright-brown">
              we are a dedicated team that makes your brand stand out.
            </h2>
            <img
              width="100px"
              height="100px"
              className="absolute bottom-0 left-3/4 w-60"
              src="/src/assets/images/a1.webp"
              alt=""
            />
            <img
              width="100px"
              height="100px"
              className="absolute -left-8 top-12 w-80"
              src="/src/assets/images/a2.webp"
              alt=""
            />
            <img
              width="100px"
              height="100px"
              className="absolute -top-4 right-0 w-96"
              src="/src/assets/images/a3.webp"
              alt=""
            />
            <img
              width="100px"
              height="100px"
              className="absolute bottom-0 left-14 w-96"
              src="/src/assets/images/a4.webp"
              alt=""
            />
          </div>
        </section>

        <section className="mt-40 px-8">
          <div className="grid grid-cols-12 gap-x-16 ">
            <div className="col-span-6 text-bright-brown">
              <p className=" text-base uppercase tracking-wider">— about us </p>
              <h2 className=" max-w-lg text-4xl  font-semibold">
                We believe in the power of simplicity and impeccable design
              </h2>
            </div>
            <div className="col-span-3 text-brown">
              Our mission is to create remarkable digital experiences that
              inspire and resonate with our clients and their audiences. With a
              relentless pursuit of excellence, we combine creativity,
              innovation, and technical expertise to deliver tailored solutions
              that drive tangible results.{" "}
            </div>
            <div className="col-span-3 text-brown">
              We are dedicated to transforming ideas into impactful realities,
              leaving a lasting impression in the digital landscape. Trust us to
              bring your vision to life with our passion for minimalistic design
              and uncompromising attention to detail.
            </div>
          </div>
        </section>

        <section className="mt-40 px-8">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl text-bright-brown">
              <p className=" text-base uppercase tracking-wider">
                — services we offer{" "}
              </p>
              <h2 className=" text-4xl  font-semibold">
                From crafting comprehensive digital presence to driving your
                success in the digital landscape.
              </h2>
            </div>
            <Button>View our work</Button>
          </div>
          {/* TODO: Extract this into a separate ui component */}
          <div className="mt-16 grid grid-cols-9 gap-x-10">
            <div className="col-span-3">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/src/assets/images/branding.webp"
                  className="h-full w-full object-cover"
                  alt=" "
                />
              </div>
              <h3 className="font-semibold text-bright-brown text-2xl">Branding & Identity</h3>
              <p>
                We craft powerful brand identities that leave a lasting
                impression. From logo design to brand strategy, we help
                businesses establish a cohesive and memorable presence that
                stands out in today&apos;s competitive landscape.
              </p>
            </div>
            <div className="col-span-3">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/src/assets/images/ux.webp"
                  className="h-full w-full object-cover"
                  alt=" "
                />
              </div>
              <h3 className="font-semibold text-bright-brown text-2xl">User Experience (UX) </h3>
              <p>
                Our UX design services prioritize intuitive and delightful user
                experiences. Through wireframing, prototyping, and user testing,
                we create interactions that are engaging and aligned with the
                needs of your target audience.
              </p>
            </div>
            <div className="col-span-3">
              <div className="aspect-square   overflow-hidden">
                <img
                  src="/src/assets/images/webdevelopment.webp"
                  className="h-full w-full object-cover"
                  alt=" "
                />
              </div>
              <h3 className="font-semibold text-bright-brown text-2xl">Web Development</h3>
              <p>
                We create visually stunning and functional websites that engage
                visitors and drive conversions. Our team leverages the latest
                technologies to deliver responsive and scalable solutions
                tailored to your needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
