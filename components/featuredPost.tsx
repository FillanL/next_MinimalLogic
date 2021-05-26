import styled from "styled-components";
import Image from "next/image";
import BlogPost from "../interfaces";
import { articleSlug, readMinutes } from "../utils";
import React from "react";
import Link from "next/link";

interface FeaturedPostImpl {
  blogPost: any;
}
const FeaturedPost = ({ blogPost }: FeaturedPostImpl): React.ReactElement => {
  console.log(blogPost);
  return (
    <FeaturedContainer>
      <ImageContainer>
        <Link
          aria-label={blogPost.articleTitle}
          href={`/article/${
            blogPost.articleTitle
              ? articleSlug(blogPost.articleTitle)
              : "admin-admin"
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1621634466709-d9680f672d3d"
            width="150"
            height="150"
            layout="responsive"
            // objectFit="cover"
            alt={blogPost.articleTitle}
            loading="lazy"
          />
          {/* <FeatImage
            src="https://images.unsplash.com/photo-1621634466709-d9680f672d3d"
            alt={blogPost.articleTitle}
          /> */}
        </Link>
      </ImageContainer>
      <ContentInfo>
        <Link
          aria-label={blogPost.articleTitle}
          href={`/article/${
            blogPost.articleTitle
              ? articleSlug(blogPost.articleTitle)
              : "admin-admin"
          }`}
        >
          <PostTitle>{blogPost.articleTitle}</PostTitle>
        </Link>
        <div>
          <PostDetails>
            date &nbsp; ~ &nbsp;
            {readMinutes(
              blogPost.articleContent ? blogPost.articleContent : ""
            ) + " mins read"}
          </PostDetails>
        </div>
        <Link
          aria-label={blogPost.articleTitle}
          href={`/article/${
            blogPost.articleTitle
              ? articleSlug(blogPost.articleTitle)
              : "admin-admin"
          }`}
        >
          <PostDescript>{blogPost.articleDescription}</PostDescript>
        </Link>
        <Link
          aria-label={blogPost.articleTitle}
          href={`/article/${
            blogPost.articleTitle
              ? articleSlug(blogPost.articleTitle)
              : "admin-admin"
          }
          `}
        >
          read
        </Link>
      </ContentInfo>
    </FeaturedContainer>
  );
};

export default FeaturedPost;

const FeaturedContainer = styled.article`
  display: grid;
  grid-template-columns: 35% 65%;
  border: 1px #f0f0f0 solid;
  box-sizing: border-box;
  padding: 10px;
  a {
    color: rgba(0, 0, 0, 0);
    cursor: pointer;
    &:hover {
      color: #6b6b6b;
    }
  }
`;
const ContentInfo = styled.div`
  width: 100%;
  text-align: center;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`;
const PostTitle = styled.h1`
  font-size: 22px;
  text-transform: capitalize;
  color: #2e2e2e;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
const FeatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const PostDescript = styled.p`
  text-align: left;
  padding: 2px 10px;
  color: #858585;
  text-transform: capitalize;
  max-height: 70px;
  cursor: pointer;
  font-size: 16px;
`;
const PostDetails = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 2px 10px;
  color: gray;
`;
