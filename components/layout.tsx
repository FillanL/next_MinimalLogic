import Nav from "./Nav";
import Footer from "./Footer";
import React, { ReactChild } from "react";
import styled from "styled-components";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
}: {
  children: React.ReactChild | React.ReactElement;
}): React.ReactElement {
  return (
    <LayoutContainer>
      <Nav />
      <ChildComponentWrapper>{children}</ChildComponentWrapper>
      <Footer />
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
