import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 64px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 2rem;
  h1 {
    color: ${props => props.theme.colors.white};
    margin: 0;
  }
`;

const Header = ({ children }) => (
  <HeaderStyle>
    <h1>AppSync Demo</h1>
  </HeaderStyle>
);

export default Header;
