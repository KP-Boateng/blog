import Link from "next/link";
import urlanatomy from "../.././../public/terminology-url-anatomy.avif";
import Image from "next/image";
import routeSegmentFolders from "../../../public/route-segments-to-path-segments.avif";
import { LightbulbCircle } from "@mui/icons-material";
import { SpaceBold } from "@/app/(fonts)/font";

export default function Routing() {
  return (
    <div className=" bg-slate-200 min-h-screen flex flex-col items-center p-2 ">
      <div className=" w-full flex flex-col items-center gap-4 sm:w-1/2">
        <h1 className={` text-3xl font-extrabold`}>Next.js: Routing</h1>
        <p>
          We are going to use &ldquo;www.acme.com&rdquo; - the same domain used
          in the documentation - as our domain just for the sake of explanation.
        </p>
        <p>
          Routing in Next.js is fairly simple. Routes in simple english are
          pathways.
        </p>

        <Image src={urlanatomy} alt="the structure of a route" quality={75} />
        <p>
          The diagram above shows the structure of a route- in this case is
          www.acme.com/dashboard/settings.
        </p>
        <div className="border-2 border-black w-full my-2"></div>
        <h1 className={` text-center text-2xl `}>Creating route segments</h1>
        <Image alt="route segment folders" src={routeSegmentFolders} />
        <p>
          <span>
            <LightbulbCircle />
          </span>{" "}
          Creating route segments is achieved by the creation of folders in your
          project tree.
          <br /> In the above diagram, the created folders that have been nested
          in the &ldquo;app&rdquo; folder generates two route segments:
          <br /> First: /dashboard <br />
          Second: /dashboard/settings
        </p>
        <p>
          Notice the &ldquo;app&rdquo; word was under an apostrophe? This is
          because the latest version of Next.js uses something called App
          Router.
          <br />
          <span>
            <LightbulbCircle />
          </span>{" "}
          The App Router basically means all route segment folders and files
          -we&apos;ll come to that- are created in a &ldquo;special&rdquo;
          folder titled app.
        </p>
        <p>
          Hold on a sec tho! For now you won&apos;t be able to access the route
          by just using folders. You need a &ldquo;page&rdquo; for each route
          segment.
          <br />
          To be able to access a route segment, you need either of these two
          special files - page.js or route.js
        </p>
        <p id="accessible-files">
          <span>
            <LightbulbCircle />
          </span>{" "}
          Due to page.js and route.js being the only files that make a route
          accessible, you can include custom files like Header.js or Footer.js
          and it won&apos;t be included as part of your route structure.This is
          called <span className=" font-bold">co-location.</span>
        </p>
        <p>
          In the last two paragraphs, I mention files and said i would come to
          it later. Well, now is the time. In fact, i&apos;ve said a little
          about it.
        </p>
        <div className="border-2 border-black w-full my-2"></div>
        <h1 className={` text-center text-2xl `}>Special FIles</h1>
        <p>
          Well, I already talked about the page.js and route.js being the only
          &ldquo;special&rdquo; files that can make a route segment accessible.
          Well, there are other special files having special functions.
        </p>
        <h1 className={` text-center text-xl `}>
          Special files and their functions
        </h1>
        <div className=" grid grid-cols-1 gap-2 ">
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500 ">
            <div className=" w-1/5" id="layout-file">
              <h1>layout</h1>
            </div>
            <div className=" w-4/5">
              <h1>
                Shared UI for a segment and its children. Does not re-render.
              </h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>page</h1>
            </div>
            <div className=" w-4/5">
              <h1>Unique UI for a route and makes the routes accessible</h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>loading</h1>
            </div>
            <div className=" w-4/5">
              <h1>
                Holds the UI for the loading state of the page/route special
                file.
              </h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>not-found</h1>
            </div>
            <div className=" w-4/5">
              <h1>
                If the page/route special file isn&apos;t present, this files
                renders its UI
              </h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>error</h1>
            </div>
            <div className=" w-4/5">
              <h1>Holds the UI for unexpected runtime errors</h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>global-error</h1>
            </div>
            <div className=" w-4/5">
              <h1>Global error UI</h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>route</h1>
            </div>
            <div className=" w-4/5">
              <h1>Server-side API endpoint.</h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>template</h1>
            </div>
            <div className=" w-4/5">
              <h1>Kind of like layout, but re-renders </h1>
            </div>
          </div>
          <div className="flex-1 flex gap-10 border-b-2 border-gray-500">
            <div className=" w-1/5">
              <h1>default</h1>
            </div>
            <div className=" w-4/5">
              <h1>
                Fallback UI for{" "}
                <span>
                  <Link
                    href={"/nextjs-tutorial/parallel-routes"}
                    className="text-blue-500"
                  >
                    Parallel Routes
                  </Link>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <p className=" mt-4">
          The special files mentioned above can end in .js, .jsx, .ts, or .tsx
        </p>
        <div className="w-full flex justify-end p-2">
          <Link
            href={"/nextjs-tutorial/pages-and-layouts"}
            className={`p-2 bg-blue-500 text-white rounded-md ${SpaceBold.className}`}
          >
            Pages and Layouts
          </Link>
        </div>
      </div>
    </div>
  );
}
