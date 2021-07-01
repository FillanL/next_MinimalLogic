import axios, { AxiosResponse } from "axios";

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
      const encodedString: string = process.env.NEXT_PUBLIC_AUTH_TOKEN ? process.env.NEXT_PUBLIC_AUTH_TOKEN : '';
      const encodedToken:string = Buffer.from(encodedString).toString('base64');
      const responsePost: AxiosResponse<any> = await axios.post(process.env.NEXT_PUBLIC_BASE_URL, this.getPostsQuery, {
        headers:{
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Basic ' + encodedToken,
        }
      });
      if(responsePost.status === 200 ) return await responsePost.data.data.getPosts.post;
      return null
    }
}