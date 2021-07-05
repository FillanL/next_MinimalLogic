import { GetStaticProps, GetStaticPaths } from "next";
import Seo from "../components/Seo";
import FeaturedPost from "../components/featuredPost";
import styled from "styled-components";
import MainFeaturedCard from "../components/sliderCard";
import Post from "services/post";
import Breakpoint from "../styles/responsive";

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
      <BottomSection bgColor={"#6c757d"}>
        <section>Recent Post</section>
        <section>About Us</section>
      </BottomSection>
      <BottomSection>
        <RandomArticle>
          {allBlogPost.slice(3, 8).map((post, index) => (
            <FeaturedPost
              key={post._id}
              blogPost={post}
              styleType={"stacked"}
              showLeft={index % 2 === 0 ? false : true}
            />
          ))}
        </RandomArticle>
        <div>About US</div>
      </BottomSection>
    </>
  );
}
// 14213d

export const getStaticProps: GetStaticProps = async () => {
  const allBlogPost = await Post.getPost();
  return {
    props: {
      allBlogPost,
    },
  };
};

interface ComponentsProps {
  bgColor?: string;
}
const HeroSection = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 500px;
  max-height: 500px;
  margin-bottom: 50px;
  margin-top: 50px;
  ${Breakpoint.max.sm} {
    grid-template-columns: 100%;
    height: 100%;
    max-height: 100%;
  }
`;
const FeaturedPostContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;
const RandomArticle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 80%;
  margin: auto;
  border-right: 1px solid rgba(212, 212, 212, 0.729);
  ${Breakpoint.max.sm} {
    grid-template-columns: 100%;
    border: none;
    width: 100%;
  }
`;
const BottomSection = styled.div<ComponentsProps>`
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  margin-bottom: 20px;
  width: 80%;
  margin: auto;
  section {
    width: 75%;
    margin: auto;
    text-align: center;
    background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
    color: var(--light-primary-color);
    margin-bottom: 10px;
  }
  ${Breakpoint.max.sm} {
    grid-template-columns: 100%;
    section {
      width: 100%;
    }
  }
`;
