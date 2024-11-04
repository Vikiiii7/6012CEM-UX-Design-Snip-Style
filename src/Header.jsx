import React from 'react';
import StatusBar from './StatusBar';

function Header() {
  return (
    <header className="flex justify-center w-full min-h-[53px]">
      <div className="flex flex-col flex-1 shrink justify-center items-center text-lg font-semibold tracking-tight leading-none text-center text-black whitespace-nowrap basis-0">
        <div className="px-3 pt-px pb-2 rounded-3xl w-[54px]">9:41</div>
      </div>
      <div className="flex flex-col items-center pt-2 w-[125px]">
        <div className="flex gap-2 justify-center max-w-full bg-black rounded-[100px] w-[125px]">
          <div className="flex shrink-0 w-20 bg-black h-[37px] rounded-[100px]" />
          <div className="flex shrink-0 bg-black h-[37px] rounded-[100px] w-[37px]" />
        </div>
      </div>
      <StatusBar />
    </header>
  );
}

export default Header;