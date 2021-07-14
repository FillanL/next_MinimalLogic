import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import NavHandler from "components/adminComponents/navHandler";
import { Tab } from "interfaces/enums";
import { UserContext } from "context/userContext";
import { useRouter } from "next/router";

const dashboard: React.FC = () => {
    const { isloggedIn } = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (!isloggedIn) router.push("/admin/signin");
    }, [isloggedIn]);
    const initialTab = {
        showing: Tab.HOME,
    };
    const [tab, setTab] = useState(initialTab);
    const { showing } = tab;
    const isActiveTab = (tabName) =>
        showing === tabName ? "active-admin-nav" : null;
    if (!isloggedIn) return <>Loading...</>;
    return (
        <DashBoardContainer>
            <DashBoardNav>
                <UnOrderedList>
                    <NavItem
                        onClick={() => setTab({ ...tab, showing: Tab.HOME })}
                        className={isActiveTab(Tab.HOME)}
                    >
                        Home
                    </NavItem>
                    <NavItem
                        onClick={() => setTab({ ...tab, showing: Tab.NEWPOST })}
                        className={isActiveTab(Tab.NEWPOST)}
                    >
                        add new Post
                    </NavItem>
                    <NavItem
                        onClick={() => setTab({ ...tab, showing: Tab.VIEWALL })}
                        className={isActiveTab(Tab.VIEWALL)}
                    >
                        View all Post
                    </NavItem>
                    <NavItem>log out</NavItem>
                </UnOrderedList>
            </DashBoardNav>
            <NavHandler tab={tab.showing} />
        </DashBoardContainer>
    );
};

export default dashboard;
const DashBoardContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 20% 80%;
`;
const DashBoardNav = styled.div`
    background-color: var(--dark-primary-color);
    color: var(--light-primary-color);
    text-align: center;
`;
const NavItem = styled.li`
    width: 95%;
    margin-left: 5%;
    position: relative;
    list-style: none;
    align-self: center;
    padding: 10px;
    text-transform: capitalize;

    &:hover {
        background-color: var(--light-primary-color);
        border-radius: 20px 0 0 20px;
        cursor: pointer;
        color: black;
    }
`;
const UnOrderedList = styled.ul`
    align-self: center;
    padding: 50px 0px 20px 0px;
`;
