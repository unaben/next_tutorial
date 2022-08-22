import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const NonFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Contact List | Not-Found-page</title>
        <meta name="keywords" content="contacts" />
      </Head>

      <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NonFound;
