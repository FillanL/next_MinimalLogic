import { useState } from "react";
import styled from "styled-components";

const signin = () => {
    const initUserCredentials = {
        email: "",
        password: "",
    };
    const [userCredentials, setUserCredentials] = useState(initUserCredentials);

    const formInputChange = (e: EventListener) => {};
    const submitForm = () => {};

    return (
        <FormContainer>
            <Form
            // onSubmit={() => submitForm}
            >
                <input
                    type="email"
                    name="email"
                    value={userCredentials.email}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={userCredentials.password}
                    required
                />
                <button>sign in</button>
            </Form>
        </FormContainer>
    );
};

export default signin;

const FormContainer = styled.div`
    padding: 10px;
    width: 100%;
    min-height: 100vh;
`;
const Form = styled.form`
    display: grid;
    padding: 10px;
    width: 50%;
    height: 400px;
    margin: auto;
    align-self: center;
    align-items: center;
`;
