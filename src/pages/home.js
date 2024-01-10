import { useQuery, gql } from "@apollo/client";

import Button from "../components/Button";

// 把 GraphQL 查询存储为一个变量
const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  // 显示一个消息，指明正在加载数据
  if (loading) return <p>Loading...</p>;
  // 如果获取数据出错，显示一个错误信息
  if (error) return <p>Error: {error}</p>;

  // 成功获取数据后在 UI 中显示出来
  return (
    <div>
      {data.noteFeed.notes.map((note) => (
        <div key={note.id}>{note.author.username}</div>
      ))}
      <Button>Click</Button>
    </div>
  );
};

export default Home;
