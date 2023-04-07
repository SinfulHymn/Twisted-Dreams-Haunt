import React from 'react';

export default function Loading() {
  return (
    <div className="relative flex flex-grow flex-col ">
      <div className="flex flex-grow items-center justify-center  bg-opacity-90">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-main-orange"></div>
      </div>
    </div>
  );
}
