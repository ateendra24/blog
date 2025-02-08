import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-[#f5f5f7] text-black w-full  h-auto mx-auto p-10 dark:bg-[#1d1d1d] dark:text-white ">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" className="" />
          </span>
        </div>
        <p className="text-center text-base">
          &copy; {year} Travel. All rights reserved.
        </p>
        <p className="text-center text-base">
          Made with ❤️ by <a href="https://github.com/ateendra24" target="_blank" className="underline">Ateendra</a>
          <a
            href=""></a>
            </p>
            </div>
    </footer>
  );
}

export default Footer;
