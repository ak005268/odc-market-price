import React from "react";
import rate from "../../data/rate.json";
import Test from "./Test";

const Content = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "/" + month + "/" + year;
  return (
    <div className="aa flex flex-col justify-center items-center w-full h-screen  ">
      <div className="bg-white border shadow-xl p-6 text-center">
        ஒட்டன்சத்திரம் இன்றைய காய்கறி விலை நிலவரம் | oddanchatram vegetable
        market price today
        <p className="text-color-blue text-3xl font-semibold ">{currentDate}</p>
      </div>

      <div className="grid grid-cols-2  border border-color-red">
        {Object.keys(rate).map((item: any) => {
          console.log("item:", item, rate[item]);

          return <></>;
        })}

        {/* {Object.entries(rate?.[0]).map(([vegetable, price]) => (
          <>
            <div className="border border-r-2 p-1 border-color-red">
              {vegetable}
            </div>
            <div className="p-1 border text-center border-color-red">
              {price}
            </div>
          </>
        ))} */}
      </div>
    </div>
  );
};

export default Content;
