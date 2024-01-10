import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// 导入路由
import Pages from "./pages";
// 导入全局样式
import GlobalStyle from "./components/GlobalStyle";
import "./App.css";

// 配置 API URI 和缓存
const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();

// 设置 Apollo 客户端
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
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
