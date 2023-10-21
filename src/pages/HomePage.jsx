import Button from "../components/UI/Buttons/Button";
import ServicesCard from "../components/UI/Cards/ServicesCard";
import ProjectsCard from "../components/UI/Cards/ProjectsCard";
import Heading2 from "../components/UI/Headings/SectionHeading";
import InsightsCardHome from "../components/UI/Cards/InsightsCardsHome";
import Hero from "../components/Homepage/Hero";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Sticky wrapper */}
      <div className=" relative w-full overflow-hidden rounded-2xl bg-cream">
        <section>
          <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
            <h2 className="max-w-lg px-10 text-center font-satoshi text-3xl font-extrabold text-bright-brown">
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

        <section className="section-padding">
          <div className="grid grid-cols-12 gap-x-16 ">
            {/* Extract this heading 2 as a component */}
            <Heading2
              tag="about us"
              title="We believe in the power of simplicity and impeccable design"
            />
            <p className="col-span-3 text-base font-medium text-brown">
              Our mission is to create remarkable digital experiences that
              inspire and resonate with our clients and their audiences. With a
              relentless pursuit of excellence, we combine creativity,
              innovation, and technical expertise to deliver tailored solutions
              that drive tangible results.{" "}
            </p>
            <p className="col-span-3 text-base font-medium text-brown">
              We are dedicated to transforming ideas into impactful realities,
              leaving a lasting impression in the digital landscape. Trust us to
              bring your vision to life with our passion for minimalistic design
              and uncompromising attention to detail.
            </p>
          </div>
        </section>

        <section className="section-padding grid grid-cols-1 lg:grid-cols-6">
          <div className="col-span-2 flex flex-row lg:flex-col items-center lg:items-start gap-y-12">
            <Heading2
              tag="Services"
              title="From crafting digital presence to driving your success in the digital landscape."
            />
            <Button>View our work</Button>
          </div>
          <div className="mt-16 lg:mt-0 grid grid-cols-9 gap-x-10 col-span-4">
            <ServicesCard
              img="/src/assets/images/branding.webp"
              alt="branding"
              title="Branding & Identity"
              description="We craft powerful brand identities that leave a lasting
                impression. From logo design to brand strategy, we help
                businesses establish a cohesive and memorable presence that
                stands out in today's competitive landscape."
            />

            <ServicesCard
              img="/src/assets/images/ux.webp"
              alt="ux"
              title="User Experience (UX)"
              description="Our UX design services prioritize intuitive and delightful user
              experiences. Through wireframing, prototyping, and user testing,
              we create interactions that are engaging and aligned with the
              needs of your target audience."
            />

            <ServicesCard
              img="/src/assets/images/webdevelopment.webp"
              alt="web development"
              title="Web Development"
              description="We create visually stunning and functional websites that engage
              visitors and drive conversions. Our team leverages the latest
              technologies to deliver responsive and scalable solutions
              tailored to your needs."
            />
          </div>
        </section>
      </div>
      <section className="section-padding ">
        <div className="flex items-center justify-between">
          <Heading2
            title="We understand your needs so you can leave your mark and stay ahead of the game"
            tag="our projects"
            tagStyle="text-cream"
            titleStyle="text-light-gray "
            lineStyle="bg-cream"
          />
          <Button>See more projects</Button>
        </div>
        <div className="grid grid-cols-8 mt-16 gap-5">
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
          <a href="" className="col-span-4">
            {/* card */}
            <ProjectsCard />
          </a>
        </div>
      </section>
      <section className="section-padding">
        <div className="flex items-center justify-between mb-16">
          <Heading2
            title="Stay within the loop, see our latest updates and news"
            tag="insights"
            tagStyle="text-cream"
            titleStyle="text-light-gray "
            lineStyle="bg-cream"
          />
          <Button>View more insights</Button>
        </div>
       <InsightsCardHome />
       <InsightsCardHome />
       <InsightsCardHome />
      </section>
    </>
  );
}
