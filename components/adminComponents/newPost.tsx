import styled from "styled-components";

const newPost = () => {
    return (
        <NewPostContainer>
            new post
            <NewPostForm action="" method="post">
                <InputContainer>
                    <label htmlFor="postDate">date to be posted</label>&nbsp;
                    <input type="date" name="postDate" id="postDate" />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="featuredImage">Image</label>&nbsp;
                    <input
                        type="file"
                        name="featuredImage"
                        id="featuredImage"
                    />
                </InputContainer>
                <InputContainer>
                    <input type="checkbox" id="isFeatured" /> &nbsp;
                    <label htmlFor="isFeatured">featured post</label>
                </InputContainer>
            </NewPostForm>
            <button>Submit Post</button>
        </NewPostContainer>
    );
};

export default newPost;

const NewPostContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`;
const NewPostForm = styled.form`
    width: 80%;
    padding: 20px;
    margin: auto;
    border: 1px solid black;
`;
const InputContainer = styled.div`
    margin: 10px 0;
    label{
        text-transform: capitalize;
    }
`;
