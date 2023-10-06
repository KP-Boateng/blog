import Image from "next/image";
import Link from "next/link";
import nextjspicture from "../../public/Nextjs-Image.png";
import { AccountCircleRounded, LightbulbCircle } from "@mui/icons-material";
import { SpaceBold } from "../(fonts)/font";

const Nextjs = () => {
  return (
    <div
      className={`bg-slate-200 min-h-screen flex flex-col items-center p-2 `}
    >
      <div className=" w-full flex flex-col items-center gap-4 sm:w-1/2">
        <h1 className={` text-2xl text-center sm"text-3xl font-extrabold`}>
          Welcome to the Next.js Tutorial Series!
        </h1>
        <div className="flex justify-center items-center">
          <AccountCircleRounded />
          <p>Boateng Paul Okeoghene.</p>
        </div>
        <p>September 25, 2023</p>

        <Image alt="next.js image" src={nextjspicture} />

        <p1>
          Are you ready to dive into the exciting world of web development with
          Next.js 13? Whether you are a seasoned developer looking to level up
          your skills or a beginner eager to embark on your coding journey.
          You&apos;ve come to the right place! In this article, we breakdown
          comprehensively the nitty-gritty details of the new Nextjs 13.
        </p1>
        <div className=" border-2  border-black w-full"></div>
        <div className="w-1/2 border-2 border-gray-500 rounded-md">
          <p className=" text-center">In this chapter</p>
          <ol className="flex flex-col gap-2 p-2">
            <li>
              <Link href={"/nextjs-tutorial#what-is-nextjs"}>
                1. What is Next.js?
              </Link>
            </li>
            <li>
              <Link href={"/nextjs-tutorial#why-nextjs"}>2. Why Next.js?</Link>
            </li>
            <li>
              <Link href={"nextjs-tutorial#what-to-expect"}>
                3. What to Expect.
              </Link>
            </li>
          </ol>
        </div>

        <div className="mt-4" id="what-is-nextjs">
          <h1 className={` text-2xl `}>What is Next.js?</h1>
          <p className="mt-2">
            Next.js is a React Framework that gives you building blocks to
            create web applications.
            <br />
            By framework, we mean Next.js handles the tooling and configuration
            needed for React, and provides additional structure, features and
            optimizations for your application.
          </p>
        </div>
        <div className=" border-2  border-black w-full"></div>
        <div className="mt-4 flex flex-col gap-4" id="why-nextjs">
          <h1 className={` text-2xl `}>Why Next.js?</h1>
          <p>
            1. Next.js simplifies the setup process for React applications. You
            don&apos;t need to configure complex build tools from scratch.
            It&apos;s like having a pre-built foundation for your project.
          </p>
          <p>
            2. Improved Performance: Next.js optimizes your website for speed.
            It uses server-side rendering (SSR) to serve pages faster, making
            your site load quickly, which is crucial for user experience and
            SEO.
          </p>
          <p>
            3. SEO-Friendly: Search engines often struggle with single-page
            applications. Next.js solves this problem with SSR, making it easier
            for search engines to crawl and index your site, improving its
            visibility in search results.
          </p>
          <p>
            4. Automatic Code Splitting: Next.js automatically splits your
            JavaScript code into smaller, optimized chunks. This means that only
            the code needed for a particular page is loaded, reducing initial
            loading times.
          </p>
          <p>
            5. Hot Module Replacement: During development, Next.js provides a
            feature called Hot Module Replacement (HMR). It allows you to see
            your changes instantly without a full page refresh, making
            development faster and more enjoyable.
          </p>
          <p>
            6. Static Site Generation (SSG): Besides SSR, Next.js offers SSG.
            This means you can pre-render entire pages at build time, resulting
            in lightning-fast loading even for dynamic content.
          </p>
          <p>
            7. Built-in Routing: Next.js includes a simple and intuitive routing
            system. You don&apos;t need to configure routing separately;
            it&apos;s ready to use out of the box.
          </p>
          <p>
            8. Support for API Routes: You can easily create API routes within
            your Next.js application. This is handy for handling server-side
            logic and data fetching.
          </p>
          <p>
            9. Great Developer Experience: Next.js has a helpful developer
            community and offers features like error reporting, automatic code
            splitting, and a development server that makes coding smoother.
          </p>
          <p>
            10. Versatile: Whether you&apos;re building a simple blog,
            e-commerce site, or a complex web app, Next.js can handle it. Its
            versatility is one of its strong suits.
          </p>
        </div>
        <div className=" border-2  border-black w-full"></div>
        <div className=" mt-4 flex flex-col gap-4" id="what-to-expect">
          <h1 className={` text-2xl `}>What to Expect.</h1>
          <p>
            1. Simple English, Comprehensive Explanations:
            <br />
            We know that technical jargon can be intimidating, so we&apos;ll
            steer clear of confusing terminology. Instead, we&apos;ll use plain
            language to explain every concept and feature. Whether you&apos;re
            an experienced developer or just starting, you&apos;ll find our
            explanations accessible and easy to grasp.
          </p>
          <p>
            2. Deep Dive into Next.js Features:
            <br /> Next.js is a versatile framework, and we&apos;ll leave no
            stone unturned. Expect in-depth tutorials on server-side rendering
            (SSR), static site generation (SSG), routing, SEO optimization, and
            more. We&apos;ll not only show you how to use these features but
            also why they matter and how they improve your web projects.
          </p>
          <p>
            Everything in this tutorial article is based on the official
            documentation which can be accessed{" "}
            <Link
              href={"https://nextjs.org/docs"}
              className=" text-blue-800"
              title="nextjs official documentation"
              target="_blank"
              // rel="no referrer"
            >
              here
            </Link>
          </p>
          <p>
            Be on the lookout for the <LightbulbCircle /> icon. It indicates
            important points to remember.
          </p>
          <p>With all that said, let&apos;s get right into it.</p>
        </div>
        <div className="w-full flex justify-end p-2">
          <Link
            href={"/nextjs-tutorial/routing"}
            className={`p-2 bg-blue-500 text-white rounded-md ${SpaceBold.className}`}
          >
            Routing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nextjs;
