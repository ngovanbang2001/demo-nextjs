import { useRouter } from "next/router";
export default function About() {
  const router = useRouter();
  return (
    <>
      <h1>Hi About</h1>
      <button onClick={() => router.replace("/")}>Click</button>
    </>
  );
}
