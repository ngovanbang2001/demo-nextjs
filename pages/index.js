import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <link />
      </Head>
      <main>
        <div>
          <h1>This is my next app</h1>
          <Link href="/post">
            <button>Go to Post</button>
          </Link>
        </div>
      </main>
    </>
  );
}
