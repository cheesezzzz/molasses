import Button from "../Buttons/Button";

export default function Footer() {
  return (
    <>
      <footer className="bg-cream section-padding pb-8 rounded-t-2xl mt-16">
        <div className="text-bright-brown flex justify-between gap-x-32 mb-28">
          <h2 className="max-w-sm">
            Don’t be shy, give us a call, email or whatever
          </h2>
          <div className="space-y-12">
            <p className="max-w-xl">
              Our team is eagerly standing by to hear all about your exciting
              project, big ideas, or any questions you may have. Let&apos;s
              embark on this journey together and make your dreams a reality.
              We&apos;re here, ready to make magic happen!
            </p>
            <Button>Contact us now</Button>
          </div>
        </div>
        <div className="grid grid-cols-8">
          <span className="col-span-5 font-display text-5xl font-extrabold uppercase text-bright-brown">
            center molasses
          </span>
          <div className="flex flex-col text-bright-brown">
            <p className="font-black uppercase pb-4">menu</p>
            <ul className="flex flex-col gap-y-2 font-medium">
              <li>
                <a href="">Work</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Insights</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-bright-brown">
            <p className="font-black uppercase pb-4">menu</p>
            <ul className="flex flex-col gap-y-2 font-medium">
              <li>
                <a href="">Work</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Insights</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-bright-brown">
            <p className="font-black uppercase pb-4">menu</p>
            <ul className="flex flex-col gap-y-2 font-medium">
              <li>
                <a href="">Work</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Insights</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          
        </div>
      </footer>
    </>
  );
}
