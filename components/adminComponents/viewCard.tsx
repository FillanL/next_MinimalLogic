import React from "react";
import styled from "styled-components";

const viewCard = () => {
    return (
        <ViewCardContainer>
            <h2>title</h2>
            <UnOrderedList>
                <NavItem>livee</NavItem>
                <NavItem>edit</NavItem>
                <NavItem>active?</NavItem>
            </UnOrderedList>
        </ViewCardContainer>
    );
};

export default viewCard;
const ViewCardContainer = styled.div`
    display: grid;
    grid-template-rows: 50% 50%;
    text-align: center;
    padding: 10px;
    /* border: 1px black solid; */
    height: 100px;
    box-shadow: var(--basic-box-shadow);
    h2 {
        font-size: 18px;
        text-transform: capitalize;
    }
`;

const NavItem = styled.li`
    display: inline;
    list-style: none;
    align-self: center;
    margin: 0 5px;
    padding: 5px;
    border: 1px solid black;
    &:hover {
        background-color: lightblue;
        cursor: pointer;
    }
`;
const UnOrderedList = styled.ul`
    align-self: center;
    /* height: 30px */
`;
