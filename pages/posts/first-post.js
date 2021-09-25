import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <article className="prose prose-xl prose-indigo hover:bg-green-500">
        <h1>First Post</h1>
      </article>
    </Layout>
  );
}
