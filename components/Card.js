import React from "react";
import Link from "next/link";
import { RiPlayFill } from "react-icons/ri";

const Card = () => {
  return (
    <Link
      href="/"
      className="bg-spotify-lightgray p-4 rounded-lg hover:bg-spotify-lightgraHover transition-all group"
    >
      <div className="mb-4 relative">
        <img
          src="https://www.lahiguera.net/musicalia/artistas/shakira/disco/5863/shakira_shakira-portada.jpg"
          alt="shakira"
          className="rounded-md drop-shadow-2xl mx-auto w-56 h-56 md:w-44 md:h-44"
        />
        <button className="p-3 text-3xl bg-spotify-green rounded-full text-spotify-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">Todays Top Hits</h5>
        <p className="text-gray-400 text-sm w-[18ch] ">
          SZA is on top of the Hottest 50!
        </p>
      </div>
    </Link>
  );
};

export default Card;
