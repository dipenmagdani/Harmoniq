import React from 'react';
import { Bars } from 'react-loader-spinner';

const useLoadingBar = () => {
  const LoadingBar = () => (
    <div className="flex flex-col items-center transition-all ease-in-out duration-300">
      <Bars
        height="80"
        width="100"
        color="white"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* <h1 className="text-sm text-zinc-200 font-light line-height-1">
        Fetching....
      </h1> */}
    </div>
  );

  return {
    LoadingBar,
  };
};

export default useLoadingBar;
