import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <Heading as="h3"> Loading !!!</Heading>;

  if (error) console.log(error);

  return (
    <Container>
      {data.slice(0, 20).map((data, id) => {
        return (
          <Heading size="sm" key={id}>
            {data.title} : {data.body}
          </Heading>
        );
      })}
    </Container>
  );
};

export default Posts;
