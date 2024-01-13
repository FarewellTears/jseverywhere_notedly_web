import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }

  .req {
    color: red;
  }

  input:invalid {
    border: 1px solid red;
  }
`;

const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const SignUp = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  // Apollo Client
  const client = useApolloClient();
  const [signUp, { loading, error, data }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      // 变更操作执行完成后把 JSON Web Token 存储到 localStorage 中
      localStorage.setItem("token", data.signUp);
      // 更新本地缓存
      // client.writeData({ data: { isLoggedIn: true } });
      // 注册用户重定向到首页
      navigate("/");
    },
  });

  useEffect(() => {
    document.title = "Sign Up - Notedly";
  }, []);

  // 当用户在表单中输入内容是更新状态
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          signUp({ variables: { ...values } });
        }}
      >
        <label htmlFor="username">
          Username: <span className="req">*</span>
        </label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />
        <label htmlFor="email">
          Email: <span className="req">*</span>
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">
          Password: <span className="req">*</span>
        </label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button>Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
