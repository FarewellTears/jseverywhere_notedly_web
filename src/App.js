// 导入路由
import Pages from "./pages";
// 导入全局样式
import GlobalStyle from "./components/GlobalStyle";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Pages />
    </div>
  );
}

export default App;
