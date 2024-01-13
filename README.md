本库为《JavaScript Everywhere》样例 web 代码实操

JavaScript Everywhere 源库指路 [JavaScript Everywhere - Web](https://github.com/javascripteverywhere/web)

自行创建 .env 文件并添加部署 api 项目的地址：REACT_APP_API_URI

相较于原项目，本项目基于最新的 react-router-dom v6 等库的新特性对原项目部分代码做改造，可以直接运行。

踩坑点：

1. 本项目使用 react-router-dom v6
   1. props.history.push 不起作用，推荐使用 useNavigate 的 hook 进行跳转
2. 本项目中的 `@apollo/client` 版本 >= 3.8.9
   1. client|cache.writeData 已经移除，请使用 client|cache.writeQuery, client|cache.writeFragment, 和/或者 cache.modify，本项目使用 client|cache.writeQuery
