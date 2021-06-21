import axios from "axios";

export default class Post {
    static getPostsQuery = {
        query: `query {
        getPosts {
          post {
            _id
            title
            description
            content
            mainImageUrl
            createdBy
          }
        }
      }`};

    static getPost = async()=>{
        const responsePost = await axios.post(process.env.NEXT_PUBLIC_BASE_URL, this.getPostsQuery);
        if(responsePost.status === 200 ) return await responsePost.data.data.getPosts.post;
        return null
    }
}