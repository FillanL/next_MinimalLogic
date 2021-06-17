import styled from "styled-components";
import { readMinutes, articleUnSlug, articleSlug } from "../../utils";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogPost from "../../interfaces";

export const getStaticPaths: GetStaticPaths = async () => {
  const s = await fetch("http://localhost:3004/articles");
  const allBlogPost = await s.json();
  const paths = allBlogPost.map((article) => {
    return {
      params: {
        slug: article.articleTitle
          ? articleSlug(article.articleTitle)
          : "admin-admin",
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const s = await fetch(`http://localhost:3004/articles`);
  const allBlogPost = await s.json();
  const blogPost = allBlogPost.filter(
    (post) =>
      post.articleTitle === articleUnSlug(context.params.slug.toString())
  )[0];
  return {
    props: {
      blogPost,
    },
  };
};

const Article = ({ blogPost }) => {
  const router = useRouter();
  const { slug } = router.query;
  // console.log(blogPost , nm)
  // const blogPost = nm.filter(post=> post.articleTitle === articleUnSlug(slug.toString()))[0]
  return (
    <>
      <Seo
        title={blogPost.articleTitle ? blogPost.articleTitle : "undef"}
        description={blogPost.articleDescription}
        content={`content regards to this post`}
      />
      <PostTitle>
        {blogPost.articleTitle ? blogPost.articleTitle : "undef"} title
      </PostTitle>
      <PostDetails>
        date &nbsp; ~ &nbsp;
        {readMinutes(blogPost.articleContent ? blogPost.articleContent : "") +
          " mins read"}
      </PostDetails>
      <ImageContainer>
        <FeatImage
          src="https://images.unsplash.com/photo-1621634466709-d9680f672d3d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1"
          alt={blogPost.articleTitle}
        />
      </ImageContainer>
      <ContentContainer>
        <article
          dangerouslySetInnerHTML={{ __html: blogPost.articleContent }}
        />
      </ContentContainer>
    </>
  );
};

export default Article;

const ContentInfo = styled.div`
  width: 100%;
  text-align: center;
`;
const ImageContainer = styled.div`
  width: 70vw;
  height: 60vh;
  margin: 0 auto 30px;
`;
const PostTitle = styled.h1`
  text-transform: capitalize;
  color: #2e2e2e;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 20px 0px 0px;
`;
const FeatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ContentContainer = styled.div`
  padding: 5px 30px;
  margin-bottom: 20px;
`;
const PostDetails = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 0px 10px;
  color: #5f5f5f;
  margin-bottom: 15px;
`;
