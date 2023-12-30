import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const GoogleDocsStyleComponent = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12">
      <h1 className="sm:text-4xl text-white text-xl font-semibold tracking-wide mb-1 sm:mb-8">
            TITLE
      </h1>
      <div className="overflow-auto">
          <div  className="mb-8">
            <h2 className="m-1 uppercase font-bold text-xl sm:text-2xl">
              Section Title
            </h2>
              <input
                type="text"
                placeholder={"hIII"}
                className="input input-bordered input-primary w-full mb-4 sm:mb-8"
              />
              <textarea
                className="textarea textarea-primary w-full mb-4 sm:mb-8"
              />
        
              <>
                <div className="uppercase font-bold text-xl sm:text-2xl">
                  Substep title
                </div>
                  <div className="flex-row">
                    <input
                      placeholder={`Describe step`}
                      className="input input-bordered input-primary w-full"
                    />
                    <button className="ml-4 sm:ml-12 my-1">
                      Add Substep <AiOutlinePlus />
                    </button>
                    {/* Additional logic for substeps */}
                  </div>
              </>
   
            {/* Add more conditions based on your data structure */}
          </div>
      </div>
    </div>
  );
};

export default GoogleDocsStyleComponent;
