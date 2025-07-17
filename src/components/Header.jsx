import React from 'react';

function Header({ onInfoClick }) {
  return (
    <header className="w-full bg-surface py-4 px-4 md:px-8 flex items-center justify-between border-b border-border shadow-md">
      <div className="flex items-center space-x-3 min-w-0">
        <div className="bg-primary p-2 rounded-md flex-shrink-0">
          <span className="font-bold text-text-primary text-xl">FP</span>
        </div>
        <span className="text-lg sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end overflow-hidden text-ellipsis">
          Front Generator
        </span>
      </div>

      <button
        onClick={onInfoClick}
        className="bg-primary hover:bg-primary-hover text-text-primary font-semibold py-2 px-4 rounded-lg flex-shrink-0
                   shadow-sm hover:shadow-md transition duration-200 ease-in-out
                   flex items-center justify-center space-x-2 ml-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Info</span>
      </button>
    </header>
  );
}

export default Header;