import { useState } from "react";
// import yourJPGImage from "../assets/icons";
const Sample = () => {
  const steps = ["step1", "step2", "step3"];
  const [currentstep, setCurrentstep] = useState(1);
  return (
    <div className="">
      <div className="flex flex-row justify-between">
        {steps?.map((step: any, i) => (
          <div
            key={i}
            className={`step-item ${currentstep === i + 1 && "active"} ${
              i + 1 < currentstep && "completed"
            }`}
          >
            <div className="step">{i + 1}</div>
            <p className="text-color-blue">{step}</p>
          </div>
        ))}
      </div>

      <button
        className="bg-color-red p-2  m-2"
        onClick={() => setCurrentstep(currentstep + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Sample;
