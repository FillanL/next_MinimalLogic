import Link from "next/link";
import styled from "styled-components";
const Nav = (): React.ReactElement => {
  return (
    <NavBar>
      <LogoContainer>
        <Link href="/">Minimal Logic</Link>
      </LogoContainer>
      <NavItemList>
        <NavItem>
          <Link href="/">home</Link>
        </NavItem>
        <NavItem>
          <Link href="/explore">Explore</Link>
        </NavItem>
      </NavItemList>
      <LoginSection>
        <p>sign in</p>
      </LoginSection>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  box-sizing: border-box;
`;
const NavItemList = styled.ul`
  text-align: center;
  list-style: none;
`;
const NavItem = styled.li`
  display: inline;
  a {
    background-color: #353637;
    color: #fff;
    padding: 1rem;
    text-decoration: none;
  }
`;
const LogoContainer = styled.span`
  a {
    font-size: 30px;
    color: #fff;
    text-decoration: none;
  }
`;
const LoginSection = styled.div`
  text-align: right;
`;
