import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <header className="h-40 flex justify-between items-center px-32 py-6">
      <Image width={240} height={300} alt="logo" src={'/images/logo-side.png'}/>
      <NavBar/>      
    </header>
    <main className="flex justify-around mt-4 px-20">
      <div className="flex flex-col gap-8 px-8 min-w-[400px]">
        <h1 className="max-w-[510px] text-[3.2rem] leading-none  text-blue font-semibold">Take control of your money</h1>
        <p className="text-xl text-blue leading-2 max-w-[510px]">Track your expenses, manage your debts, and plan for a brighter financial future. Start now and experience having full control and knowing where your money is going.</p>
        <div className="flex justify-left gap-6">
          <Link href={'/register'}>
            <button className="transition-all text-lg font-medium text-white bg-blue px-8 py-2 rounded-lg hover:bg-darkblue">Get Started</button>
          </Link>
          <Link href={'/about'}>
            <button className="transition-all text-lg font-medium text-orange ring ring-orange ring-inset px-8 py-2 rounded-lg  hover:bg-orange hover:text-white">Learn More</button>
          </Link>
        </div>
      </div>
      <Image alt="homepage-art" src={"/images/home-art.png"} width={520} height={500}/>
    </main>
    
    </>
  );
}
