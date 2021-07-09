import styled from "styled-components";
import ViewCard from "./viewCard";
const viewAllPost = () => {
    const listofPost = [1, 2, 3, 4, 5];
    return (
        <ViewPostContainer>
            <h2>view all post</h2>
            <PostListContainer>
                {listofPost.map((post, index) => (
                    <ViewCard key={index} />
                ))}
            </PostListContainer>
        </ViewPostContainer>
    );
};

export default viewAllPost;
const ViewPostContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    h2{
        text-align: center;
    }
    padding-top: 25px;
`;

const PostListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* grid-template-rows: auto; */
    width: 100%;
    grid-gap: 10px;
    padding: 10px;
`;
