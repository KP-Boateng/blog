import PagesLayouts from "@/app/(components)/(nextjs)/PagesLayouts";
import Routing from "@/app/(components)/(nextjs)/Routing";
import ConstructionPage from "../../(components)/(nextjs)/ConstructionPage";

const NextjsTopic = ({ params }) => {
  // console.log(params.topic);
  return (
    // <div className="min-h-screen bg-slate-200">
    <>
      {params.topic[0] === "routing" ? (
        <Routing />
      ) : params.topic[0] === "pages-and-layouts" ? (
        <PagesLayouts />
      ) : (
        // <div
        //   className={` h-screen flex justify-center items-center bg-slate-200 text-xl`}
        // >
        <ConstructionPage />
        // </div>
      )}
    </>
  );
};

export default NextjsTopic;
