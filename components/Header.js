import React from "react";
import {
  RiHome4Fill,
  RiMore2Fill,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";
import Link from "next/link";

const Header = (props) => {
  const { setShowSidebar } = props;

  return (
    <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-[#0A0A0A]/90 flex items-center justify-between p-4 z-40">
      <div >
        <RiMore2Fill
          onClick={() => setShowSidebar(true)}
          className="text-2xl hover:cursor-pointer p-2 box-content md:hidden"
        />
        <div className="hidden md:flex items-center text-2xl gap-2">
          <RiArrowLeftSLine className="p-2 box-content hover:cursor-pointer bg-spotify-gray rounded-full"/>
          <RiArrowRightSLine className="p-2 box-content hover:cursor-pointer bg-spotify-gray rounded-full"/>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="hover:text-white  hover:scale-105 transition-transform"
        >
          Registrate
        </Link>
        <Link
          href="/"
          className="py-2 md:py-3 px-4 md:px-6 rounded-full bg-white text-spotify-gray font-medium hover:scale-105 transition-transform"
        >
          Iniciar Sesion
        </Link>
      </div>
    </header>
  );
};

export default Header;
