export default function Button({ children }) {
  return (
    <>
      <a className="flex flex-shrink-0 items-center justify-center px-20 py-4 rounded-full border-2 font-semibold tracking-wide border-brown text-brown overflow-hidden relative group" href="">
        <span className="absolute bg-brown bottom-0 w-full h-0 group-hover:h-full duration-200 ease-in-out">

        </span>
        <span className="z-50 group-hover:text-cream duration-200 ease-in-out">
          {children}
        </span>
        
      </a>
    </>
  );
}
