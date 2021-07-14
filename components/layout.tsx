import Nav from "./Nav";
import Footer from "./Footer";
import React, { ReactChild, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { UserContext } from "context/userContext";
import User from "services/user";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
    children,
}: {
    children: ReactChild | React.ReactElement;
}): React.ReactElement {
    const [isloggedIn, setIsloggedin] = useState(false);
    const loggedinVal = useMemo(
        () => ({ setIsloggedin, isloggedIn }),
        [isloggedIn, setIsloggedin]
    );
    useEffect(() => {
        const isUserLoggedIn = async () => {
            const res = await User.isAuthUser();
            if (res.isUserAuthenicated.token !== null) return setIsloggedin(true);
            return setIsloggedin(false);
        };
        isUserLoggedIn();
        return () => {
            User.isAuthUser();
        };
    }, [User.isAuthUser]);
    return (
        <LayoutContainer>
            <UserContext.Provider value={loggedinVal}>
                <Nav />
                <ChildComponentWrapper>{children}</ChildComponentWrapper>
                <Footer />
            </UserContext.Provider>
        </LayoutContainer>
    );
}

const LayoutContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
`;
const ChildComponentWrapper = styled.main`
    min-height: 100vh;
`;
