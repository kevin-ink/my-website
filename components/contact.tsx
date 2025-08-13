import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="h-auto mb-10 mx-auto w-11/12 xl:w-7/12 2xl:w-6/12 flex flex-col items-center">
      <h1 className="text-3xl relative text-white" id="contact">
        reach me at
      </h1>
      <a
        href="mailto:kevinsli0902@gmail.com"
        className="text-3xl text-slate-300 hover:text-4xl transition-all duration-300 ease-in-out mt-2"
      >
        kevinsli0902@gmail.com
      </a>
      <div className="flex flex-row gap-x-2 text-slate-300 text-2xl mt-8 items-center justify-between w-1/5">
        <Link href="https://github.com/kevin-ink">
          <Image
            className="h-10 w-auto hover:scale-110 transition-all duration-300 ease-in-out"
            src="/Github_Logo_White.png"
            alt="Github"
            width="1920"
            height="1080"
            priority
          />
        </Link>
        <Link href="hhttps://www.linkedin.com/in/kevin-li-519465356/">
          <Image
            className="h-9 w-auto hover:scale-110 transition-all duration-300 ease-in-out"
            src="/InBug-White.png"
            alt="LinkedIn"
            width="1920"
            height="1080"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
