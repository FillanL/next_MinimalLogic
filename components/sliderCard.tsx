import Image from "next/image";
import styled from "styled-components";
import { readMinutes } from "../utils";

const SliderCard = ({ blogPost }) => {
  return (
    <SliderCardContainer>
      <ImageContainer>
        <Image
          src="https://images.unsplash.com/photo-1621634466709-d9680f672d3d"
          layout="fill"
          alt={blogPost.title}
          objectFit="cover"
          loading="lazy"
        />
      </ImageContainer>
      <ContentInfo>
        <PostTitle>{blogPost.title}</PostTitle>
        <PostDetails>
          date &nbsp; ~ &nbsp;
          {readMinutes(blogPost.content ? blogPost.content : "") +
            " mins read"}
        </PostDetails>
      </ContentInfo>
    </SliderCardContainer>
  );
};

export default SliderCard;

const SliderCardContainer = styled.div`
position: relative;
padding: 10px;
`;
const ContentInfo = styled.div`
position: absolute;
bottom: 0;
width: 100%;
margin-bottom: 10px;
height: 100px;
background-color: #ffffff76;
text-align: center;
`;
const PostTitle = styled.h1`
font-size: 20px;
color: black;
`;
const FeatImage = styled.img`
`;
const PostDetails = styled.p`
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height:100% ;
`