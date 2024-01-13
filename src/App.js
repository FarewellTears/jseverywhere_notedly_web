import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

// 导入路由
import Pages from "./pages";
// 导入全局样式
import GlobalStyle from "./components/GlobalStyle";
import "./App.css";

// 配置 API URI 和缓存
const uri = process.env.REACT_APP_API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

// 检测有无令牌，然后将首部返回给上下文
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});

// 设置 Apollo 客户端
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

const WriteUserState = gql`
  query WriteUserState($target: String!) {
    state(target: $target) {
      target
      isLoggedIn
    }
  }
`;

// 首次加载时写入缓存数据
client.writeQuery({
  query: WriteUserState,
  data: {
    state: {
      __typename: "UserState",
      target: "local",
      // 检查本地有无令牌
      isLoggedIn: !!localStorage.getItem("token"),
    },
  },
  variables: {
    target: "local",
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

export default App;
