import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Seo from "../components/Seo";
import React from "react";
import FeaturedPost from "../components/featuredPost";
import styled from "styled-components";

import { BlogPost } from "../interfaces";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): React.ReactElement {
  const dummyffeat: BlogPost = {
    title: "sfsdf",
    imgUrl:
      "https://images.unsplash.com/photo-1527239441953-caffd968d952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: "csome content",
    description: "some descpt",
    keywords: "dsfsd",
    id: "safa",
    author: "admin",
  };
  return (
    <>
      <section>
        <Seo
          title="fill"
          content="testing out next"
          description="this is the descriptions"
        />
        <GrindLayout>
          <FeaturedPost {...dummyffeat} />
          <Blockk />
        </GrindLayout>

        <GrindSecondLayout>
          <Block />
          <Block />
          <Block />
        </GrindSecondLayout>
      </section>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
const GrindLayout = styled.div`
  width: 97%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 40%;
`;
const GrindSecondLayout = styled.div`
  padding: 30px 0;
  height: 400px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  justify-items: center;
`;
const Blockk = styled.div`
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  background-color: blue;
`;
const Block = styled.div`
  padding: 10px;
  width: 80%;
  background-color: blue;
`;
