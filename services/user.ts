import axios from "axios";
interface UserSigninCredentials {
    email: string;
    password: string;
    matchPassword?: string;
}
export default class User {
    static loginUserMutation = (userSignin: UserSigninCredentials) => {
        return {
            query: "mutation LoginUser($email: String!, $password: String!){ loginUser(email: $email, password: $password ){token}}",
            operationName: "LoginUser",
            variables: {
                email: userSignin.email,
                password: userSignin.password,
            },
        };
    };
    static logoutUserMutation = () => {
        return {
            query: "query LogoutUser{logoutUser}",
            operationName: "LogoutUser",
        };
    };
    static signupUserMutation = (userSignup: UserSigninCredentials) => {
        return {
            query: "mutation SignupUser($email: String!, $password: String!, $matchPassword:String!){signupUser(email: $email, password: $password, matchPassword: $matchPassword){ token }}",
            operationName: "SignupUser",
            variables: {
                email: userSignup.email,
                matchPassword: userSignup.matchPassword,
                password: userSignup.password,
            },
        };
    };
    static isAuthUserMutation = () => {
        return {
            query: "query IsUserAuthenicated{ isUserAuthenicated{ token }}",
            operationName: "IsUserAuthenicated",
        };
    };
    static loginUser = async (userSignin: UserSigninCredentials) => {
        const encodedString: string = process.env.NEXT_PUBLIC_AUTH_TOKEN || "";
        const encodedToken: string =
            Buffer.from(encodedString).toString("base64");
        const encodedPassword: string = Buffer.from(
            userSignin.password
        ).toString("base64");
        userSignin.password = encodedPassword;
        const responsePost = await axios.post(
            process.env.NEXT_PUBLIC_BASE_URL,
            User.loginUserMutation(userSignin),
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: "Basic " + encodedToken,
                },
            }
        );
        if (responsePost.status === 200) return await responsePost.data.data;
        return null;
    };

    static logoutUser = async () => {
        const encodedString: string = process.env.NEXT_PUBLIC_AUTH_TOKEN || "";
        const encodedToken: string =
            Buffer.from(encodedString).toString("base64");
        const responsePost = await axios.post(
            process.env.NEXT_PUBLIC_BASE_URL,
            User.logoutUserMutation(),
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: "Basic " + encodedToken,
                },
            }
        );
        if (responsePost.status === 200) return await responsePost.data.data;
        return null;
    };

    static signupUser = async (userSignup: UserSigninCredentials) => {
        const encodedString: string = process.env.NEXT_PUBLIC_AUTH_TOKEN || "";
        const encodedToken: string =
            Buffer.from(encodedString).toString("base64");
        const encodedPassword: string = Buffer.from(
            userSignup.password
        ).toString("base64");
        userSignup.password = encodedPassword;
        const responsePost = await axios.post(
            process.env.NEXT_PUBLIC_BASE_URL,
            User.signupUserMutation(userSignup),
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: "Basic " + encodedToken,
                },
            }
        );
        if (responsePost.status === 200) return await responsePost.data.data;
        return null;
    };

    static isAuthUser = async () => {
        const encodedString: string = process.env.NEXT_PUBLIC_AUTH_TOKEN || "";
        const encodedToken: string =
            Buffer.from(encodedString).toString("base64");
        const responsePost = await axios.post(
            process.env.NEXT_PUBLIC_BASE_URL,
            User.isAuthUserMutation(),
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: "Basic " + encodedToken,
                },
            }
        );
        if (responsePost.status === 200) return await responsePost.data.data;
        return null;
    };
}
