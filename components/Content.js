import Image from "next/image";
import React, { useRef } from "react";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function Content() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  const randomSearch = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://random-word-api.herokuapp.com/word?number=1`
    );

    const randomTerm = await response.json();

    if (!randomTerm) return;

    router.push(`/search?term=${randomTerm}&searchType=`);
  };

  return (
    <form className="flex flex-col items-center mt-40">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        width="300"
        height="100"
        objectFit="cover"
      />

      <div
        className="flex mt-5 w-full max-w-[90%] border border-gray-200 
        mx-auto items-center px-5 py-3 rounded-full hover:shadow-lg
        focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl"
      >
        <SearchIcon className="h-5 text-gray-500 mr-3" />
        <input
          type="text"
          ref={searchInputRef}
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div className="flex flex-col w-[50%] space-y-2 mt-8 justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
        <button className="btn" onClick={search}>
          Google Search
        </button>

        <button className="btn" onClick={randomSearch}>
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}
