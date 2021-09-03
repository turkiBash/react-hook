import { Grid, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  if (loading) return <Heading as="h3"> Loading !!!</Heading>;

  if (error) console.log(error);

  return (
    <Grid padding="15" justifyItems="center" templateColumns="repeat(3, 1fr)" gap={4}>
      {data.slice(0,30).map((data, id) => {
        return <Image boxSize="250px" src={data.url} key={id}></Image>;
      })}
    </Grid>
  );
};

export default Posts;
