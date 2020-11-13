import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

import { CallToAction, Blog, Services } from "../sections";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Codú</title>
        </Head>
        <Container>
          <Intro />
        </Container>
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
