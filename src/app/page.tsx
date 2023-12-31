"use client";
import { useEffect, useState } from "react";
import AuthForm from "./components/auth-form";
import { getSession } from "@/app/auth/auth";

interface Session {
  user: {
    aud: string;
  };
}

const Home = () => {
  const [currentSession, setSession] = useState<Session | null>();

  const fetchUser = async () => {
    try {
      const session = await getSession();
      if (session && session.user) {
        setSession(session);
      } else {
        setSession(null);
      }
    } catch (err) {
      console.log("error fetching user session:", err);
      setSession(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 md:bg-deepBlue">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:self-start lg:ml-24 lg:pl-1">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300  bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-auto md:static lg:fixed lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:m-2 lg:dark:bg-zinc-800/40 sm:border md:ml-2  ">
          {/* lg:static changes format */}
          <code className="font-mono font-bold">
            {currentSession && currentSession.user.aud ? (
              <div className="flex flex-row">
                <p>Get Started With&nbsp;</p>
                <a href="/billing" className="text-blue-500 hover:underline">
                  Billing
                </a>
              </div>
            ) : (
              <div>
                Sign up/Log in&nbsp;
                <a className="text-blue-500">Below</a>
              </div>
            )}
          </code>
        </div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none ">
          <a
            className="pointer-events-none flex place-items-center  gap-2 p-8 lg:pointer-events-auto lg:p-0 font-extrabold sm:text-8xl text-4xl tracking-widest "
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stayfirm
            {/* By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center md:w-full md:pr-20 md:ml-52">
        {currentSession && currentSession.user.aud ? (
          <a
            href="/dashboard"
            className="border border-gray-300 p-8 rounded-lg text-lightBlue hover:bg-firmBlue"
          >
            <div className="col-6 auth-widget md:mx-28 md:w-2/5 lg:w-auto text-normal md:text-lg ">
              Navigate to Dashboard
            </div>
          </a>
        ) : (
          <div className="col-6 auth-widget md:mr-28 md:w-2/5 lg:w-auto">
            <AuthForm />
          </div>
        )}
        <div className="text-center sm:text-start sm:ml-0 md:ml-48 lg:ml-auto sm:mb-44 sm:mt-0 mt-12 font-bold text-xl  lg:text-5xl font-sans tracking-wide sm:text-white lg:mr-28">
          Redefine Processes in <br />
          <p>
            the Litigation
            <i className="dark:text-lightBlue sm:pb-28 lg:text-5xl">
              {" "}
              Assembly Line
            </i>
          </p>
          <div className="text-base sm:text-2xl font-bold pt-16 sm:pt-20 sm:pb-0 pb-10 ">
            <p>Improve Your Standard Operating Procedures</p>

            <p>
              in&nbsp;
              <i className="dark:text-lightBlue">seconds</i>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Fill out our template to create a structured SOP.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Keep all of your SOP's centralized.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Improve{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Our tooltip improves context and clarity of your legal documents
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Catch up on your procedures using speech to text
          </p>
        </a>
      </div>
      {/* <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer> */}
    </main>
  );
};

export default Home;
