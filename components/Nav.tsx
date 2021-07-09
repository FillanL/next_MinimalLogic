import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Breakpoint from "../styles/responsive";

const Nav = (): React.ReactElement => {
  const showNav = {
    show: false,
  };
  const [state, setstate] = useState(showNav);
  const toggleBar = () => {
    setstate({ ...showNav, show: !state.show });
  };

  return (
    <NavBar>
      <ToggleBar
        viewBox="0 0 100 80"
        width="40"
        height="40"
        onClick={() => toggleBar()}
      >
        <rect width="75" height="10" rx="8"></rect>
        <rect y="20" width="75" height="10" rx="8"></rect>
        <rect y="40" width="75" height="10" rx="8"></rect>
      </ToggleBar>
      <LogoContainer>
        <Link href="/">Minimal Syntax</Link>
      </LogoContainer>
      <NavItemList toggle={state.show}>
        <NavItem>
          <Link href="/">home</Link>
        </NavItem>
        <NavItem>
          <Link href="/explore">Explore</Link>
        </NavItem>
      </NavItemList>
    </NavBar>
  );
};

export default Nav;

interface componentProps {
  toggle?: boolean;
}
const NavBar = styled.nav`
  width: 100%;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  box-sizing: border-box;
  margin: auto;
  box-shadow: var(--basic-box-shadow);
  ${Breakpoint.max.sm} {
    grid-template-columns: 25% 75%;
    text-align: center;
    grid-template-areas:
      "toggle logo"
      ". navitems ";
  }
`;
const NavItemList = styled.ul<componentProps>`
  list-style: none;
  text-align: center;
  align-self: center;
  ${Breakpoint.max.sm} {
    text-align: center;
    display: ${(props) => (props.toggle ? "block" : "none")};
    grid-area: navitems;
    margin-right: 25%;
  }
`;
const NavItem = styled.li`
  display: inline;
  a {
    color: #000000;
    padding: 0 1rem;
    text-decoration: none;
    text-transform: capitalize;
  }
  ${Breakpoint.max.sm} {
    display: block;
    border-top: 1px solid #d6d6d6;
  }
`;
const LogoContainer = styled.span`
  a {
    font-size: 25px;
    color: #000000;
    text-decoration: none;
    margin: auto;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-family: Arial, Helvetica, sans-serif;
  }
  ${Breakpoint.max.sm} {
    margin-right: 25%;
  }
`;
const ToggleBar = styled.svg`
  display: none;
  cursor: pointer;
  ${Breakpoint.max.sm} {
    text-align: left;
    display: block;
    align-self: center;
    margin: auto auto auto 0;
  }
`;
