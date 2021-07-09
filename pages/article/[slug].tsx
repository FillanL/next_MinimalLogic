import styled from "styled-components";
import { readMinutes, articleUnSlug, articleSlug } from "../../utils";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogPost from "../../interfaces";
import Post from "services/post";

export const getStaticPaths: GetStaticPaths = async () => {
    const allBlogPost = await Post.getPost();
    const paths = await allBlogPost.map((article) => {
        return {
            params: {
                slug: articleSlug(article.title),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps = async (context) => {
    const allBlogPost = await Post.getPost();
    const blogPost = allBlogPost.filter(
        (post) => post.title === articleUnSlug(context.params.slug.toString())
    )[0];

    return {
        props: {
            blogPost: blogPost,
        },
    };
};

const Article = ({ blogPost }) => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <Seo
                title={blogPost.title ? blogPost.title : "undef"}
                description={blogPost.description}
                content={`content regards to this post`}
            />
            <PostTitle>
                {blogPost.title ? blogPost.title : "undef"} title
            </PostTitle>
            <PostDetails>
                date &nbsp; ~ &nbsp;
                {readMinutes(blogPost.content ? blogPost.content : "") +
                    " mins read"}
            </PostDetails>
            <ImageContainer>
                <FeatImage
                    src={
                        blogPost.mainImageUrl
                            ? blogPost.mainImageUrl
                            : "https://images.unsplash.com/photo-1621634466709-d9680f672d3d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1"
                    }
                    alt={blogPost.title}
                />
            </ImageContainer>
            <ContentContainer>
                <article
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
            </ContentContainer>
        </div>
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
