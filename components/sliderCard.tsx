import styled from "styled-components";
import { readMinutes } from "../utils";

const SliderCard = ({ blogPost }) => {
  return (
    <SliderCardContainer>
      <FeatImage
        src="https://images.unsplash.com/photo-1621634466709-d9680f672d3d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1"
        alt={blogPost.articleTitle}
      />
      <ContentInfo>
        <PostTitle>{blogPost.articleTitle}</PostTitle>
        <PostDetails>
          date &nbsp; ~ &nbsp;
          {readMinutes(blogPost.articleContent ? blogPost.articleContent : "") +
            " mins read"}
        </PostDetails>
      </ContentInfo>
    </SliderCardContainer>
  );
};

export default SliderCard;

const SliderCardContainer = styled.article`
  display: grid;
  grid-template-columns: 100%;
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
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.432);
`;
const PostTitle = styled.h1`
  font-size: 20px;
  padding: 5px 10px;
  text-transform: capitalize;
  color: #ebebeb;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
const FeatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PostDetails = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 2px 10px;
  color: gray;
`;
