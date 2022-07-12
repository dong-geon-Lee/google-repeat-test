import React from "react";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-[19.5%]">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds )
      </p>

      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group">
            <a href={result.link} className="text-sm truncate">
              {result.formattedUrl}
            </a>

            <a
              href={result.link}
              className="group-hover:underline decoration-blue-800"
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>

          <p className="text-gray-600">{Parser(String(result.htmlSnippet))}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}
