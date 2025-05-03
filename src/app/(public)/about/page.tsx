import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main className="flex justify-center gap-10 mt-4 px-32 pb-8">
      <div className="flex flex-col gap-6 px-6 min-w-[400px]">
        <h1 className="max-w-[600px] text-4xl leading-none font-medium text-blue">
          About Us
        </h1>
        <div className="text-lg text-blue leading-6 text-justify max-w-[510px]">
          <p className="mb-3 text-base">
            My Budget Planner is an application designed to help you take
            control of your finances and achieve your financial goals. Our
            mission is to provide you with a powerful yet easy-to-use tool that
            simplifies the management of your expenses, budgets, and credit
            cards, allowing you to make informed decisions and stay on top of
            your financial health.
          </p>
          <p className="text-base">
            We understand that managing money can be challenging, that&apos;s
            why we&apos;ve created an intuitive application that streamlines the
            process of tracking your spending, setting budgets, and monitoring
            your credit card balances. Whether you&apos;re saving for a big
            purchase, trying to reduce debt, or simply want to understand where
            your money goes, My Budget Planner is here to support you every step
            of the way.
          </p>
        </div>
        <div className="flex justify-left gap-6">
          <Link href={"/login"}>
            <button className="transition-all text-lg font-medium text-white bg-blue px-8 py-2 rounded-lg hover:bg-darkblue">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          className="max-h-[600px]"
          alt="about-art"
          src={"/images/about-art.png"}
          width={750}
          height={360}
        />
      </div>
    </main>
  );
};

export default AboutPage;
