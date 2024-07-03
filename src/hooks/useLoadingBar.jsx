import React from "react";
import { Bars } from "react-loader-spinner";

const useLoadingBar = () => {
  const LoadingBar = () => (
    <div className="flex flex-col items-center">
      <Bars
        height="80"
        width="100"
        color="white"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h1 className="text-1xl text-zinc-200 font-light animate-pulse">Fetching....</h1>
    </div>
  );

  return {
    LoadingBar,
  };
};

export default useLoadingBar;
