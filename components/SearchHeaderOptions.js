import { useRouter } from "next/router";
import { PhotographIcon, SearchIcon } from "@heroicons/react/solid";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div
      className="flex space-x-8 select-none w-full mx-auto justify-center 
      text-sm text-gray-700 border-b sm:pr-[18%] md:pr-[35%] lg:pl-52 lg:justify-start"
    >
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.term === "" || !router.query.searchType}
      />

      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
