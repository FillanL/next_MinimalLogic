import axios from "axios";

export default class User {
    static loginUserMutation = {
        mutation: `mutation {
       
      }`};

    static loginUser = async()=>{
        const responsePost = await axios.post(process.env.NEXT_PUBLIC_BASE_URL, this.loginUserMutation);
        if(responsePost.status === 200 ) return await responsePost.data.data;
        return null
    }
}