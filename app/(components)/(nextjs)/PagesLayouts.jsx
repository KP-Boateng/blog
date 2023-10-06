import { LightbulbCircle } from "@mui/icons-material";
import Link from "next/link";
import projectColocation from "../../../public/project-organization-colocation.avif";
import Image from "next/image";
import layoutSpecialFile from "../../../public/layout-special-file.avif";
import layoutCode from "../../../public/layoutcode.png";
import fileHeirachy from "../../../public/file-conventions-component-hierarchy.avif";
import nestedLayout from "../../../public/nested-layout.avif";
import nestedLayoutUI from "../../../public/nested-layouts-ui.avif";
import { SpaceBold } from "@/app/(fonts)/font";

export default function PagesLayouts() {
  return (
    <div className=" bg-slate-200 min-h-screen flex flex-col items-center p-2 ">
      <div className=" w-full flex flex-col items-center gap-4 sm:w-1/2">
        <h1 className={`text-2xl sm:text-3x font-extrabold`}>
          Next.js: Pages and Layouts.
        </h1>
        <div>
          <Image alt={"project colocation"} src={projectColocation} />
        </div>

        <p>
          In this page, i&apos;ll basically be going over what what said{" "}
          <Link
            href={"/nextjs-tutorial/routing#accessible-files"}
            className=" text-blue-500"
          >
            here
          </Link>
        </p>
        <p>
          In the diagram above is the visualization of the files that make a
          route segment accessible and the files that can&apos;t make a route
          segment accessible
          <br />
          By accessible, we mean will be displayed on screen. ie, can be
          accessed by the browser.
        </p>
        <h1 className={` text-2xl text-center `}>The Page Special File</h1>

        <p>
          The page.js file is the file that is responsible for the rendering of
          the content of a page (just like this tutorial&apos;s page).
        </p>
        <p>
          <span>
            <LightbulbCircle />
          </span>{" "}
          Page.js is a server component by default. This basically means the
          server first renders an uninteractive version of page.js before
          pushing it to the client(browser) so you can interact with it.
        </p>

        <h1 className={` text-2xl text-center `}>The Layout Special File</h1>

        <p>
          The layout as previously stated is the file responsible for the
          layout/blueprint/architecture of your route segment
        </p>
        <div className="my-2">
          <Image alt={"layout special file"} src={layoutSpecialFile} />
        </div>
        <p>
          The diagram above shows how you would define a layout file - by
          creating a layout.js file. Remember it doesn&apos;t have to be a .js
          file.
        </p>
        <div className="my-2 w-full flex items-center justify-center">
          <Image alt={"layout code"} src={layoutCode} />
        </div>
        <p>
          Let&apos;s take a look at the code of the above layout.jsx file. There
          are keywords to remember.
        </p>
        <ul className=" self-start">
          <li>1. RootLayout</li>
          <li>2. children</li>
        </ul>
        <div className="my-2">
          <p>
            <span className=" font-bold">Children: </span> Now this tutorial is
            not a React tutorial so I am going to assume you already know
            React.(I mean, NextJs is a framework built on top of React.)
            <br />
            <span>
              <LightbulbCircle />
            </span>{" "}
            In React, children refers to the components a component encompasses/
            covers.
          </p>
          <div className="my-2 w-full flex items-center justify-center">
            <Image alt={"file heirachy"} src={fileHeirachy} />
          </div>
          <p>
            As illustrated by the above layout.jsx file, all other special files
            like the page.js file are covered by the layout.js file(layout.js
            can even conver another layout.js. Well talk about it later. You can
            think about it.)
          </p>
          <div className=" my-2">
            <p>
              <span className=" font-bold">RootLayout: </span>As the name
              implies, this is the Main layout of your entire app.
            </p>
            <p className=" mt-4">
              With all that said, it implies the RootLayout(app layout) displays
              a Header component up top, the webpage itself in the middle, and
              the footer component down.
              <br />
              In fact, this is the code for this website. - The main
              design/layout is, as you can see, Header up, pages in the middle,
              and the Footer down.
            </p>
          </div>
        </div>

        <h1 className={` text-2xl text-center `}>Nested Layouts</h1>

        <p>
          I mentioned earlier that you can nest/put a layout.js file inside
          another layout.js file. The end product of this is Nested layouts.
        </p>
        <div className=" my-2">
          <Image alt={"nested layout"} src={nestedLayout} />
        </div>
        <p>
          In the above diagram, there are two defined layouts - one for the root
          route segment and another for the /dashboard route.
          <br />
          The diagram below gives the visualization of the above statement.
        </p>
        <div className=" my-2">
          <Image alt={"nested layout ui"} src={nestedLayoutUI} />
        </div>
        <div className="w-full flex justify-end p-2">
          <Link
            href={"/nextjs-tutorial/templates"}
            className={`p-2 bg-blue-500 text-white rounded-md ${SpaceBold.className}`}
          >
            Templates
          </Link>
        </div>
      </div>
    </div>
  );
}
