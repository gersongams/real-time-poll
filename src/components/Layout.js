import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutStyle = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 64px);
  }
`;

const Layout = ({ children }) => (
  <LayoutStyle>
    <Header />
    <div className="container">{children}</div>
  </LayoutStyle>
);

export default Layout;
