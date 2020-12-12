import Container from "../components/container";
import Intro from "../components/intro";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { Layout } from "../components";
import { Hero, CallToAction, Blog, Services, HowWeWork } from "../sections";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Codú</title>
        </Head>
        <Hero />
        <HowWeWork />
        <Services />
        <Blog posts={allPosts} />
        <CallToAction />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
