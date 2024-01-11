import React from "react";
import { useQuery, gql } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
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
    <React.Fragment>
      <NoteFeed notes={data.noteFeed.notes} />
      {/* 仅当 hasNextPage 为 true 时显示 Load more 按钮 */}
      {data.noteFeed.hasNextPage && (
        <Button
          onClick={() => {
            fetchMore({
              variables: {
                cursor: data.noteFeed.cursor,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  noteFeed: {
                    cursor: fetchMoreResult.noteFeed.cursor,
                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                    notes: [
                      ...previousResult.noteFeed.notes,
                      ...fetchMoreResult.noteFeed.notes,
                    ],
                    __typename: "noteFeed",
                  },
                };
              },
            });
          }}
        >
          Load more
        </Button>
      )}
    </React.Fragment>
  );
};

export default Home;
