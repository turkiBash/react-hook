import { Grid, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetch";
import { logInValidation } from './../Utilities/Validation';

const Posts = () => {
  // let localStorageData = JSON.parse(localStorage.getItem("data"))
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=15"
  );

  if (loading) return <Heading as="h3"> Loading !!!</Heading>;

  if (error) console.log(error);

  return (
    <>
      {logInValidation ?  
    <Grid padding="15" justifyItems="center" templateColumns="repeat(3, 1fr)" gap={4}>
      {data.map((data, id) => {
        return <Image boxSize="250px" src={data.url} key={id}></Image>;
      })}
    </Grid> : "Not Autorized"}
    </>
  );
};

export default Posts;
