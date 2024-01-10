import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Navigation from "./Navigation";

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    position: relative;
    flex: auto;
    flex-direction: column;
    top: 64px;
    height: calc(100% - 64px);
    width: 100%;
  }
`;

const Main = styled.main`
  position: flex;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <Wrapper className="wrapper">
      <Navigation />
      <Main>{children}</Main>
    </Wrapper>
  </React.Fragment>
);

export default Layout;
