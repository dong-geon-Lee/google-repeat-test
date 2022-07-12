import PaginationButtons from "./PaginationButtons";

export default function ImageResults({ results }) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 px-3 sm:grid-cols-2 space-x-4 lg:grid-cols-3 xl:grid-cols-4">
        {results.items?.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="group-hover:shadow-xl h-60 w-full object-contain"
                />
              </a>

              <a
                href={result.image.contextLink}
                className="group-hover:underline"
              >
                <h2 className="truncate text-xl">{result.title}</h2>
              </a>

              <a
                href={result.image.contextLink}
                className="group-hover:underline"
              >
                <p className="text-gray-600">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      <PaginationButtons className="ml-16 justify-center" />
    </div>
  );
}
