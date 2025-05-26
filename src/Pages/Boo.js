import React from "react";
import "../output.css";

const Boo = () => {
  return (
    <>
      <main className="h-dvh w-dvw flex flex-col justify-center items-center gap-6 font-afacad">
        <div className="upper-container h-fit w-fit flex justify-center items-center gap-3 sm:gap-4">
          <span className="h-fit w-fit text-8xl md:text-9xl font-bold text-neutral-700">
            4
          </span>
          <img
            src="../../assets/Ghost.svg"
            alt="Ghost"
            className="Ghost-Img h-auto sm:h-full w-[130px] sm:w-auto"
          />
          <span className="h-fit w-fit text-8xl md:text-9xl font-bold text-neutral-700">
            4
          </span>
        </div>
        <div className="lower-container h-fit w-fit text-center flex flex-col gap-4">
          <div className="container-heading h-fit w-full font-bold  text-3xl sm:text-4xl md:text-5xl text-neutral-700">
            Boo! Page missing!
          </div>
          <div className="container-paragraph h-fit w-full font-medium text-base sm:text-lg md:text-xl text-neutral-500">
            Whoops! This page must be a ghost - it's not here!
          </div>
        </div>
      </main>
    </>
  );
};

export default Boo;
