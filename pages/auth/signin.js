import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function signin({ providers }) {
  const datas = Object.values(providers);

  console.log(datas);

  return (
    <div>
      <Header />

      <div className="mt-40">
        {datas.map((data) => (
          <div className="flex flex-col items-center" key={data.id}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
              className="w-52 object-cover"
            />

            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>

            <button
              onClick={() => signIn(data.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
            >
              Sign in with {data.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
