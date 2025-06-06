import { CheckCircle } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkflowSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center sm:text-5xl lg:text-6xl mt-10 lg-mt-20 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 p-2">
          <img src={codeImg} alt="" />
        </div>
        <div className="w-full lg:w-1/2 p-12">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
