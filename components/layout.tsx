import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import React, { ReactChild } from "react";
import styled from "styled-components";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
}: {
  children: React.ReactChild|React.ReactElement;
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
  *{
    margin:0;
    padding:0;
  }
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  padding: 10px 20px;
`;
const ChildComponentWrapper = styled.main`
  min-height: 100vh;
  padding: 10px 25px;
`;
