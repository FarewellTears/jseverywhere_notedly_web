import styled from "styled-components";

import logo from "../img/logo.svg";

const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0.5em 1em;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="Notedly Logo" height={40} />
    <LogoText>Notedly</LogoText>
  </HeaderBar>
);

export default Header;
