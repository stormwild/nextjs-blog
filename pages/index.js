import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="prose prose-xl prose-indigo">
        <p>Alex Torrijos</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <ul className="bg-gray-100 my-4 p-4">
          <li>
            <Link href="/posts/first-post">
              <a className="hover:bg-yellow-400 p-3 rounded">First Post</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
