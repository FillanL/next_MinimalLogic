import styled from "styled-components";
import Image from "next/image";
import BlogPost from "../interfaces";
import { articleSlug, readMinutes } from "../utils";
import React from "react";
import Link from "next/link";

interface FeaturedPostImpl {
  blogPost: any;
  styleType?: string;
  showLeft?: boolean;
}
const FeaturedPost = ({
  blogPost,
  styleType,
  showLeft,
}: FeaturedPostImpl): React.ReactElement => {
  return (
    <FeaturedContainer styleType={styleType}>
      <ImageContainer styleType={styleType} showLeft={showLeft}>
        <Image
          src="https://images.unsplash.com/photo-1621634466709-d9680f672d3d"
          layout="fill"
          objectFit="cover"
          alt={blogPost.title}
          loading="lazy"
        />
      </ImageContainer>
      <ContentInfo styleType={styleType} showLeft={showLeft}>
        <Link
          aria-label={blogPost.title}
          href={`/article/${articleSlug(blogPost.title)}`}
        >
          <PostTitle>{blogPost.title}</PostTitle>
        </Link>
        <div>
          <PostDetails>
            {/* date &nbsp; ~ &nbsp; */}
            {readMinutes(blogPost.content ? blogPost.content : "") +
              " mins read"}
          </PostDetails>
        </div>
        <Link
          aria-label={blogPost.title}
          href={`/article/${articleSlug(blogPost.title)}`}
        >
          <PostDescript>{blogPost.description}</PostDescript>
        </Link>
        <Link
          aria-label={blogPost.title}
          href={`/article/${articleSlug(blogPost.title)}
          `}
        >
          read
        </Link>
      </ContentInfo>
    </FeaturedContainer>
  );
};

export default FeaturedPost;
const cardwidth = "100%";
interface ComponentProps {
  styleType?: string;
  showLeft?: boolean;
}
const FeaturedContainer = styled.div<ComponentProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => (props.styleType ? "100%" : "30% 70%")};
  grid-template-rows: ${(props) => (props.styleType ? "50% 50%" : null)};
  height: ${(props) => (props.styleType ? "400px" : null)};
  padding: ${(props) => (props.styleType ? "30px 15px" : "10px")};
`;
const ContentInfo = styled.div<ComponentProps>`
  width: ${(props) => (props.styleType ? "80%" : "100%")};
  margin: ${(props) => (props.styleType ? "0 0 0 auto" : "0 10px")};
  margin: ${(props) =>
    props.showLeft && props.styleType ? "0 auto 0 0" : null};
  text-align: ${(props) => (props.styleType ? "left" : "center")};
  background-color: white;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  width: ${(props) => (props.styleType ? cardwidth : null)};
`;
const ImageContainer = styled.div<ComponentProps>`
  position: relative;
  width: ${(props) => (props.styleType ? "80%" : "100%")};
  margin: ${(props) => (props.styleType ? "0 0 0 auto" : null)};
  margin: ${(props) =>
    props.showLeft && props.styleType ? "0 auto 0 0" : null};
  width: ${(props) => (props.styleType ? cardwidth : null)};
  height: 100%;
`;
const PostTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color: #2e2e2e;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
const PostDescript = styled.p`
  text-align: left;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 14px;
`;
const PostDetails = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 11px;
  letter-spacing: 1.2px;
`;
