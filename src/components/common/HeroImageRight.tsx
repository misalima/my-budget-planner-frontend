import Image from "next/image";

export default function HeroImageRight() {
    return (
      <div className="flex flex-col items-center justify-center col-span-5">
        <Image alt="hero-img" width={480} height={394} src={"/images/login-art.png"} />
      </div>
    );
}