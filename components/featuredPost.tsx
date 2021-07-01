import styled from "styled-components";
import Image from "next/image";
import BlogPost from "../interfaces";
import { articleSlug, readMinutes } from "../utils";
import React from "react";
import Link from "next/link";

interface FeaturedPostImpl {
  blogPost: any;
  styleType?: string;
}
const FeaturedPost = ({ blogPost, styleType }: FeaturedPostImpl): React.ReactElement => {
  
  return (
    <FeaturedContainer styleType={styleType}>
      <ImageContainer styleType={styleType}>
          <Image
            src="https://images.unsplash.com/photo-1621634466709-d9680f672d3d"
            layout="fill"
            objectFit="cover"
            alt={blogPost.title}
            loading="lazy"
          />
      </ImageContainer>
      <ContentInfo styleType={styleType}>
        <Link
          aria-label={blogPost.title}
          href={`/article/${articleSlug(blogPost.title)
          }`}
        >
          <PostTitle>{blogPost.title}{styleType}</PostTitle>
        </Link>
        <div>
          <PostDetails>
            date &nbsp; ~ &nbsp;
            {readMinutes(
              blogPost.content ? blogPost.content : ""
            ) + " mins read"}
          </PostDetails>
        </div>
        <Link
          aria-label={blogPost.title}
          href={`/article/${articleSlug(blogPost.title)
          }`}
        >
          <PostDescript>{blogPost.description}</PostDescript>
        </Link>
        <Link
          aria-label={blogPost.title}
          href={`/article/${articleSlug(blogPost.title)
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
interface ComponentProps {
  styleType?: string
}
const FeaturedContainer = styled.div<ComponentProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${props => props.styleType ? "100%" :"30% 65%"};
  grid-template-rows: ${props => props.styleType ?"50% 50%": null};
  height: ${props => props.styleType ? "400px": null};
  padding: ${props => props.styleType ? "30px 10px": "10px"};
  background-color: brown;
/* width: ${props => props.styleType ? "400px": null}; */
/* padding: 10px; */

`;
const ContentInfo = styled.div<ComponentProps>`
  width: ${props => props.styleType ? "80%": "100%"};
  margin: ${props => props.styleType ? "0 0 0 auto": "0 10px"};
  background-color: white;
  text-align: center;
  
  padding: 10px;
  /* width: 100%; */
  /* padding: ${props => props.styleType ? "0": "10px"}; */
  /* margin: 0 10px; */
`;
const ImageContainer = styled.div<ComponentProps>`
  position: relative; 
  width: ${props => props.styleType ? "80%": "100%"};
  margin: ${props => props.styleType ? "0 0 0 auto": "0 10px"};
  height: 100%;
`;
const PostTitle = styled.h1`
  font-size: 22px;
  text-transform: capitalize;
  color: #2e2e2e;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
const PostDescript = styled.p`
  text-align: left;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 16px;
`;
const PostDetails = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 2px 10px;
  background-color: aqua;
`;
