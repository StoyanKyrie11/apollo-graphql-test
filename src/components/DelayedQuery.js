import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_DOG_PHOTO } from "./DogPhoto";

export default function DelayedQuery() {
  const [getDog, { data, error, loading }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;
  if (!data) return;

  return (
    <div>
      {data.dog && <img src={data.dog.displayImage} alt="display-reference" />}
      <button onClick={() => getDog({ variables: { breed: "bulldog" } })}>
        Get a new dog breed!
      </button>
    </div>
  );
}
