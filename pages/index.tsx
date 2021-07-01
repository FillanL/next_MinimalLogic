import { GetStaticProps, GetStaticPaths } from "next";
import Seo from "../components/Seo";
import FeaturedPost from "../components/featuredPost";
import styled from "styled-components";
import BlogPost from "../interfaces";
import MainFeaturedCard from "../components/sliderCard";
import Image from "next/image";
import Post from "services/post";

interface HomeImpl {
  // blogPost: BlogPost;
  // allBlogPost: any;
}
export default function Home({ allBlogPost }): React.ReactElement {
  return (
    <>
      <Seo title="Minimal Syntax" content="testing out next" />
      <HeroSection>
        <MainFeaturedCard key={allBlogPost[0]._id} blogPost={allBlogPost[0]} />
        <FeaturedPostContainer>
          {allBlogPost.slice(0, 3).map((post) => (
            <FeaturedPost key={post._id} blogPost={post} />
          ))}
        </FeaturedPostContainer>
      </HeroSection>

      <BottomSection>
        <RandomArticle>
          {allBlogPost.slice(3, 8).map((post) => (
            <FeaturedPost
              key={post._id}
              blogPost={post}
              styleType={"stacked"}
            />
          ))}
        </RandomArticle>
        <div>section</div>
      </BottomSection>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogPost = await Post.getPost();
  return {
    props: {
      allBlogPost,
    },
  };
};

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 500px;
  max-height: 500px;
  background-color: aquamarine;
  margin-bottom: 50px;
`;
const FeaturedPostContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: #7e8f9e;
`;
const RandomArticle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const BottomSection = styled.div`
  height: 100%;
  /* display: grid;
  grid-template-columns: 50% 50%; */
`;
