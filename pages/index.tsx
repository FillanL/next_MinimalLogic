import { GetStaticProps, GetStaticPaths } from "next";
import Seo from "../components/Seo";
import FeaturedPost from "../components/featuredPost";
import styled from "styled-components";
import BlogPost from "../interfaces";
import SliderCard from "../components/sliderCard";
import Image from "next/image";
import axios from "axios";

interface HomeImpl {
  // blogPost: BlogPost;
  // allBlogPost: any;
}
export default function Home({ allBlogPost }): React.ReactElement {
  if (!allBlogPost) return <div> loading</div>;
  return (
    <>
      <Seo title="fill" content="testing out next" />
      <GrindLayout>
        <SliderCard key={allBlogPost[0]._id} blogPost={allBlogPost[0]} />

        <SideFeat>
          {allBlogPost.slice(0, 3).map((post) => (
            <FeaturedPost key={post._id} blogPost={post} />
          ))}
        </SideFeat>
      </GrindLayout>
      <div>small banner</div>
      <BottomContainer>
        <RandomArticle>
          {allBlogPost.slice(3, 8).map((post) => (
            <FeaturedPost key={post._id} blogPost={post} />
          ))}
        </RandomArticle>
        <div>section</div>
      </BottomContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const query = {
    query: `query {
    getPosts {
      post {
        _id
        title
        description
        content
        mainImageUrl
        createdBy
      }
    }
  }`,
  };

  const s = await axios.post("http://localhost:8000/graphql", query);

  const allBlogPost = await s.data.data.getPosts.post;
  return {
    props: {
      allBlogPost,
    },
  };
};

const GrindLayout = styled.div`
  width: 100%;
  min-height: 450px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 55% 45%;
`;
const SideFeat = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(31%, 33.33%));
  row-gap: 5px;
  box-sizing: border-box;
`;
const RandomArticle = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 5px;
  box-sizing: border-box;
`;
const BottomContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 70% 30%;
  height: 500px;
  row-gap: 5px;
  box-sizing: border-box;
`;
