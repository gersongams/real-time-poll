import React from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

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
  button {
    margin-left: auto;
  }
`;

const Header = ({ children }) => {
  let history = useHistory();

  function SignOut() {
    history.push("/");
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <HeaderStyle>
      <h1>AppSync Demo</h1>
      <Button onClick={SignOut}>LogOut</Button>
    </HeaderStyle>
  );
};

export default Header;
