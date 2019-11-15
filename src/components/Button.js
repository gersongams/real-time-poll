import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  box-shadow: 0px 3px 25px rgba(228, 55, 118, 0.35);
  border-radius: 35px;
  border: none;
  width: 250px;
  height: 55px;
  cursor: pointer;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin-top: 2rem;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
