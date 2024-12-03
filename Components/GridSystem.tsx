import React from "react";

function GridSystem() {
  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-10 p-10 bg-amber-100 h-screen">
      {/* AG1 */}
      <div className="col-span-2 row-span-10 bg-sky-400 rounded-lg text-center p-5 text-xl font-bold">
        AG1 <br /> <span className="font-thin">2 of 10</span>
      </div>

      {/* {AG2} */}
      <div className="col-span-6 row-span-10 bg-yellow-200 rounded-lg text-center font-bold pt-6 ">
        {/* Full-Height Inner Div */}
        <div className="h-full grid grid-cols-6 gap-x-8  grid-rows-10 rounded-lg">
          <div className="col-span-6 row-span-1 ">
            {" "}
            AG2 <br /> <span className="font-thin">6 of 10</span>
          </div>

          <div className="col-span-3 row-span-3 bg-rose-300 rounded-lg p-4 text-center content-center">
            AG4 <br /> <span className="font-thin">3 of 8</span>
          </div>
          <div className="col-span-3 row-span-3 bg-rose-300 rounded-lg p-4 text-center content-center">
            AG5 <br /> <span className="font-thin">3 of 8 (omega)</span>
          </div>

          <div className="col-span-2 row-span-7 bg-orange-500 rounded-lg p-4 h-full">
            AG6 <br />
            <span className="font-thin">2 to 6</span>
          </div>

          <div className="bg-yellow-400 col-span-4 row-span-7 rounded-lg pt-5 ">
            <div className="grid grid-cols-4 grid-rows-8 gap-x-7 h-full">
              <div className=" col-span-4 row-span-1 rounded-lg content-center">
                AG7 4 of 6 (Omega){" "}
              </div>
              <div className="bg-red-300 col-span-2 row-span-3 rounded-lg content-center">
                AG8 <br />2 of 4{" "}
              </div>
              <div className="bg-red-300 col-span-2 row-span-3 rounded-lg content-center">
                AG9 <br />2 of 4{" "}
              </div>
              <div className="bg-red-400 col-span-4 row-span-4 rounded-lg content-center">
                AG9 <br />2 of 4{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AG3 */}
      <div className="col-span-2 row-span-10 bg-sky-400 rounded-lg text-center p-5 text-xl font-bold">
        AG3 <br /> <span className="font-thin">2 of 10</span>
      </div>
    </div>
  );
}

export default GridSystem;
