import Link from "next/link";
import styled from "styled-components";
const Nav = (): React.ReactElement => {
  return (
    <NavBar>
      <LogoContainer>
        <Link href="/">Minimal Syntax</Link>
      </LogoContainer>
      <NavItemList>
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

const NavBar = styled.nav`
  width: 90%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  box-sizing: border-box;
  margin: auto;
`;
const NavItemList = styled.ul`
  list-style: none;
  text-align: center;
  align-self: center;
`;
const NavItem = styled.li`
  display: inline;
  a {
    color: #000000;
    padding: 0 1rem;
    text-decoration: none;
    text-transform: capitalize;
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
`;
