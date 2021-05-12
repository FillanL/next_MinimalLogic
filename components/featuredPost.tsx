import styled from "styled-components";
import { BlogPost } from "../interfaces";

const FeaturedPost = (post: BlogPost): React.ReactElement => {
  return (
    <FeaturedContainer>
      <FeatImage srcSet={post.imgUrl} />
      <ContentInfo>
        <h3>{post.title}</h3>
        <p>{post.author}</p>
      </ContentInfo>
    </FeaturedContainer>
  );
};

export default FeaturedPost;

// export async function getStaticProps() {
//     const post: BlogPost = {
//         title: "sfsdf",
//         imgUrl:
//           "https://images.unsplash.com/photo-1527239441953-caffd968d952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//         content :"csome content",
//         description : "some descpt",
//         keywords : "dsfsd",
//         id: "safa",
//       };
//     return {
//       props: {
//         post
//       }
//     };
// }
const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  box-sizing:border-box;
`;
const ContentInfo = styled.div`
  width: 100%;
  text-align: center;
  background-color: green;
`;
const FeatImage = styled.img`
  width: 95%;
  height: 400px;
`;
