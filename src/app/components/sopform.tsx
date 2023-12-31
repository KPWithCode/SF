import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SopForm = () => {
  const [steps, setSteps] = useState([{ step: "Step 1", substeps: ["1a"] }]);
  const [resources, setResources] = useState(["Resource #1"]);
  const [substepClicked, setSubstepClicked] = useState<boolean[]>([]);

  const addStep = () => {
    setSteps([...steps, { step: `Step ${steps.length + 1}`, substeps: [] }]);
    setSubstepClicked([...substepClicked, false]);
  };

  const removeStep = () => {
    if (steps.length > 1) {
      const updatedSteps = [...steps];
      updatedSteps.pop();
      setSteps(updatedSteps);
      const updatedSubstepClicked = [...substepClicked];
      updatedSubstepClicked.pop();
      setSubstepClicked(updatedSubstepClicked);
    }
  };

  const toggleSubstep = (stepIndex: number) => {
    const updatedSubstepClicked = [...substepClicked];
    updatedSubstepClicked[stepIndex] = !updatedSubstepClicked[stepIndex];
    setSubstepClicked(updatedSubstepClicked);
  };

  const addSubstep = (stepIndex: number) => {
    const updatedSteps = [...steps];
    const substepLabel = String.fromCharCode(
      97 + updatedSteps[stepIndex].substeps.length
    );
    const stepLabel = updatedSteps[stepIndex].step.split(" ")[1]; // Extract the step label
    updatedSteps[stepIndex].substeps.push(`${stepLabel}${substepLabel}`);
    setSteps(updatedSteps);
    setSubstepClicked([...substepClicked.slice(0, stepIndex), true]);
  };

  const removeSubstep = (stepIndex: number, substepIndex: number) => {
    const updatedSteps = [...steps];
    updatedSteps[stepIndex].substeps.splice(substepIndex, 1);
    setSteps(updatedSteps);
  };

  const addResource = () => {
    setResources([...resources, `Resource #${resources.length + 1}`]);
  };

  const removeResource = () => {
    if (resources.length > 1) {
      const updatedResources = [...resources];
      updatedResources.pop();
      setResources(updatedResources);
    }
  };


  return (
    <div className="p-4 sm:p-8 md:p-12">
      <h1 className="sm:text-4xl text-white text-xl  font-semibold tracking-wide mb-1 sm:mb-8">
        Create SOP
      </h1>
      <div className="overflow-auto">
        <h2 className="m-1 uppercase font-bold text-xl sm:text-2xl">TITLE</h2>
        <input
          type="text"
          placeholder="Title of Procedure"
          className="input input-bordered input-primary w-full mb-4 sm:mb-8"
        />

        {/* Purpose Section */}
        <h2 className="m-1 uppercase font-bold text-xl sm:text-2xl">
          TABLE OF CONTENTS/PURPOSE
        </h2>
        <textarea
          className="textarea textarea-primary w-full mb-4 sm:mb-8"
          placeholder="Describe the purpose of this SOP..."
        />

        {/* Scope Section */}
        <div className="m-1 uppercase font-bold text-xl sm:text-2xl">Scope</div>
        <textarea
          placeholder="Identify the areas, processes, or departments that the procedure covers..."
          className="textarea textarea-bordered textarea-primary w-full mb-4 sm:mb-8"
        />

        {/* Responsibilities Section */}
        <div className="m-1 uppercase font-bold text-xl sm:text-2xl">
          Responsibilities
        </div>
        {/* Add your logic for responsibilities here */}
        <textarea
          placeholder="Add all responsibilities here"
          className="textarea textarea-bordered textarea-primary w-full mb-4 sm:mb-8"
        />
        {/* Procedure Section */}
        <div className="uppercase font-bold text-xl sm:text-2xl">
          Proceduere
        </div>
        <div className="self-center w-full">
          <button
            className="mx-2 button-primary w-28 sm:w-40 h-12"
            onClick={addStep}
          >
            <AiOutlinePlus /> Add Step
          </button>
          <button
            className="mx-4 button-primary w-28 w-40 h-12"
            onClick={removeStep}
          >
            <AiOutlineMinus /> Remove Step
          </button>
        </div>
        {steps.map((step, stepIndex) => (
          <div className="flex-row" key={step.step}>
            <input
              placeholder={`Describe ${step.step}`}
              className="input input-bordered input-primary w-full"
            />
            <button
              className="ml-4 sm:ml-12 my-1"
              onClick={() => toggleSubstep(stepIndex)}
            >
              {!substepClicked[stepIndex] && (
                <div className="">
                  Add Substep <AiOutlinePlus />
                </div>
              )}
            </button>
            {substepClicked[stepIndex] && (
              <div className="flex-row w-full">
                <button
                  className="ml-4 sm:ml-12 my-0"
                  onClick={() => addSubstep(stepIndex)}
                >
                  <AiOutlinePlus /> Add Substep
                </button>
                {step.substeps.map((substep, substepIndex) => (
                  <div key={substep}>
                    <input
                      placeholder={`${substep}`}
                      className="input input-bordered input-primary w-2/3 w-1/2 mb-4 sm:mb-8 ml-4 sm:ml-12"
                    />
                    <button
                      className="mx-4"
                      onClick={() => removeSubstep(stepIndex, substepIndex)}
                    >
                      <AiOutlineMinus /> Remove Substep
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Supporting Documentation Section */}
        <div className="mt-4 sm:mt-8 lg:mt-12 sm:mt-12 uppercase font-bold text-xl sm:text-2xl">
          Supporting Documentation
        </div>
        <button
          className="mx-2 button-primary w-28 sm:w-40 h-12"
          onClick={addResource}
        >
          <AiOutlinePlus /> Add Resource
        </button>
        <button
          className="mx-2 button-primary w-28 sm:w-40 h-12"
          onClick={removeResource}
        >
          <AiOutlineMinus /> Remove Resource
        </button>
        {resources.map((resource, index) => (
          <div key={resource}>
            <input
              type="text"
              placeholder={`Link or description for ${resource}`}
              className="input input-bordered input-primary w-full"
            />
          </div>
        ))}

        {/* <div className="m-1 badge badge-primary">Revision History</div>
        <button onClick={addRevision}>
          <AiOutlinePlus /> Add Revision
        </button>

        <div className="m-1 badge 
        Include a section for approvals, where the procedure is reviewed, signed off, and dated by the appropriate individuals
        badge-primary">Approval</div> */}
      </div>
    </div>
  );
};

export default SopForm;
