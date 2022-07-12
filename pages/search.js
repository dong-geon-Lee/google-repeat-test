import Head from "next/head";
import { useRouter } from "next/router";
import ImageResults from "../components/ImageResults";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";

export default function Search({ results }) {
  const router = useRouter();

  console.log(results, "데이터");

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      <SearchHeader />

      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }&start=${startIndex}`
  );

  const data = await response.json();

  return {
    props: { results: data },
  };
}
