import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";
import User from "./User";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) {
      return;
    } else if (router.query.searchType === "image") {
      router.push(`/search?term=${term.trim()}&searchType=image`);
    } else {
      router.push(`/search?term=${term.trim()}&searchType=`);
    }
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center p-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google-image"
          width="120"
          height="40"
          className="cursor-pointer"
          objectFit="contain"
          onClick={() => router.push("/")}
        />

        <form
          className="flex flex-grow border border-gray-200 rounded-full
           px-6 py-3 shadow-lg ml-10 mr-5 max-w-3xl items-center"
        >
          <input
            type="text"
            className="w-full focus:outline-none"
            ref={searchInputRef}
            defaultValue={router.query.term}
          />

          <XIcon
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />

          <button type="submit" onClick={search} hidden></button>
        </form>

        <User className="ml-auto whitespace-nowrap" />
      </div>

      <SearchHeaderOptions />
    </header>
  );
}
