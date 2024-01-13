import styled from "styled-components";
import { useApolloClient, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import logo from "../img/logo.svg";

const IS_LOGGED_IN = gql`
  fragment isLoggedIn on UserState {
    isLoggedIn
  }
`;
const READ_USER_STATE = gql`
  query ReadUserState($target: String!) {
    state(target: $target) {
      isLoggedIn
    }
  }
`;

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

const UserState = styled.div`
  margin-left: auto;
`;

const Header = () => {
  const client = useApolloClient();
  // 查看用户登录状态
  const { state } = client.readQuery({
    query: READ_USER_STATE,
    variables: {
      target: "local",
    },
  });

  console.log(state.isLoggedIn);

  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height={40} />
      <LogoText>Notedly</LogoText>
      {/* 如果用户已登录，则显示退出链接，否则显示注册等链接 */}
      <UserState>
        {state.isLoggedIn ? (
          <p>Sign out</p>
        ) : (
          <p>
            <Link to="/signin">Sign in</Link> or{" "}
            <Link to="/signup">Sign up</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default Header;
