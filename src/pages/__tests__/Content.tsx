import React from "react";
import rate from "../../data/rate.json";

const Content = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "/" + month + "/" + year;
  return (
    <div className="aa grid h-screen place-items-center ">
      <div className="bg-sky-100 p-4 text-center">
        ஒட்டன்சத்திரம் இன்றைய காய்கறி விலை நிலவரம் | oddanchatram vegetable
        market price today
        <p className="text-color-blue text-3xl font-semibold ">{currentDate}</p>
      </div>
      {/* 
      <div className="bg-color-gray-light flex flex-col">
        {Object.entries(rate?.[0]).map(([vegetable, price]) => (
          <div className="flex text-center w-full border border-color-blue">
            <div className="text-center bg-color-red">{vegetable}</div>
            <div className="text-center bg-green-100">₹{price}</div>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-2  border border-color-red">
        {Object.entries(rate?.[0]).map(([vegetable, price]) => (
          <>
            <div className="border border-r-2 p-1 border-color-red">
              {vegetable}
            </div>
            <div className="p-1 border text-center border-color-red">
              {price}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Content;
