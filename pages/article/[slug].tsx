import styled from "styled-components";
import { readMinutes, articleUnSlug, articleSlug } from "../../utils";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogPost from "../../interfaces";
const Article = ({ nm }) => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(typeof slug, slug);
  if (slug) console.log("string", nm);
  // const articleTile = articleUnSlug(slug.toString())
  // const readTime =  readMinutes(article)
  return (
    <>
      <Seo
        title={nm.title}
        description={nm.title}
        content={`content regards to this  post`}
      />
      <div>{slug} slug</div>
      <div>{nm.title} title</div>
      {/* <Seo
        content={"content"}
        description={"postData"}
        title={postData.title}
      />
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article> */}
    </>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
  const dummyffeat: BlogPost[] = [
    {
      title: "sfsdf",
      imgUrl:
        "https://images.unsplash.com/photo-1527239441953-caffd968d952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      content: "csome content",
      description: "some descpt",
      keywords: "dsfsd",
      id: "safa",
      author: "admin",
    },
  ];
  const paths = dummyffeat.map((article) => {
    return {
      params: { slug: articleSlug(article.title) },
    };
  });
  // console.log("paths", path)
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async () => {
  // const allPostsData = getSortedPostsData();
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

  return {
    props: {
      nm: dummyffeat,
    },
  };
};
