import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { isEmailValid, isPasswordValid } from "utils/userform";
import User from "../../services/user";
import { FormError } from "interfaces";
import Seo from "components/Seo";
import { useRouter } from "next/router";
import { UserContext } from "context/userContext";

const signin: React.FC = () => {
    const router = useRouter();
    const { isloggedIn, setIsloggedin } = useContext(UserContext);

    useEffect(() => {
        if (isloggedIn) {
            router.push("/admin/dashboard");
        }
    }, [isloggedIn]);

    const initUserCredentials = {
        email: "abc@aol.com",
        password: "zxcASD123!@#",
    };
    const [userCredentials, setUserCredentials] = useState(initUserCredentials);
    const initalFormError: FormError = {
        active: false,
        message: "",
    };
    const [error, setError] = useState(initalFormError);

    const formInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUserCredentials({
            ...userCredentials,
            [e.currentTarget.name]: e.currentTarget.value,
        });
        if (error.active) setError(initalFormError);
    };
    const validateCredentials = (userEmail: string, userPassword: string) => {
        const email = isEmailValid(userEmail);
        const password = isPasswordValid(userPassword);
        if (email && password) return true;
        return false;
    };
    const submitForm = async (e) => {
        e.preventDefault();

        const isValid = validateCredentials(
            userCredentials.email,
            userCredentials.password
        );
        if (!isValid) {
            setError({
                ...error,
                active: true,
                message: "Invalid Credentials, Try Again",
            });
            setUserCredentials({
                ...userCredentials,
                password: initUserCredentials.password,
            });
            return;
        }
        const response = await User.loginUser(userCredentials);

        if (response.loginUser.token) {
            setIsloggedin(true);
            return router.push("/admin/dashboard");
        }
        setError({
            ...error,
            active: true,
            message: "Invalid Credentials, Try Again",
        });
        setUserCredentials({
            ...userCredentials,
            password: initUserCredentials.password,
        });
        return;
    };
    const isDisabled =
        userCredentials.email.length === 0 ||
        userCredentials.password.length === 0;
    return (
        <FormContainer>
            <Seo
                title={"MinitmalSyntax - sign in "}
                description={"have an account? sign in"}
                content={"tech blog progaming and all tech"}
            />
            <Form onSubmit={(e) => submitForm(e)}>
                <h2>Welcome to MinimalSyntax</h2>
                <InputError>{error.active ? error.message : null}</InputError>
                <InputContainer>
                    <InputField
                        type="email"
                        name="email"
                        value={userCredentials.email}
                        placeholder="Emaill / Username"
                        onChange={(e) => formInputChange(e)}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userCredentials.password}
                        onChange={(e) => formInputChange(e)}
                        required
                    />
                </InputContainer>
                <BtnContainer>
                    <SigninBtn
                        name="submitBtn"
                        id="submitBtn"
                        disabled={isDisabled}
                        onClick={(e) => submitForm(e)}
                    >
                        <label htmlFor="submitBtn">sign in</label>
                    </SigninBtn>
                </BtnContainer>
            </Form>
        </FormContainer>
    );
};

export default signin;

const FormContainer = styled.div`
    padding: 20px;
    width: 100%;
    min-height: 100vh;
    background-color: #a8dadc;
`;
const Form = styled.form`
    background-color: var(--light-primary-color);
    border-radius: 2px;
    position: relative;
    padding: 50px;
    width: min-content;
    margin: 100px auto 0px;
    box-shadow: var(--basic-box-shadow);
    h2 {
        text-align: center;
        margin: 20px;
        text-transform: capitalize;
    }
`;
const InputContainer = styled.div`
    padding: 10px;
    width: min-content;
    margin: auto;
`;
const InputField = styled.input`
    width: 200px;
    padding: 10px;
    height: 2rem;
    border-style: none;
    outline: none;
    font-style: italic;
    box-shadow: var(--basic-box-shadow);
    margin: auto;
`;
const InputError = styled.p`
    text-align: center;
    color: red;
`;
const SigninBtn = styled.button`
    padding: 5px 10px;
    text-align: center;
    margin: auto;
`;
const BtnContainer = styled.div`
    margin-top: 25px;
    text-align: center;
`;
