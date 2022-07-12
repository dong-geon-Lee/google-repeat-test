import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  const urlLink = `/search?term=${router.query.term}&searchType=${router.query.searchType}`;
  const previousLink = `${urlLink}&start=${startIndex - 10}`;
  const nextLink = `${urlLink}&start=${startIndex + 10}`;

  return (
    <div
      className="text-blue-700 flex px-9 pb-4 justify-between 
      sm:justify-center sm:space-x-44 sm:mr-[25%]"
    >
      {startIndex > 10 && (
        <Link href={previousLink}>
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex < 90 && (
        <Link href={nextLink}>
          <div
            className={`cursor-pointer flex flex-col items-center hover:underline`}
          >
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
