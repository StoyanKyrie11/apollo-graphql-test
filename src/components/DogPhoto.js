import React from "react";
import { useQuery, gql, NetworkStatus } from "@apollo/client";

export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, data, error, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      pollInterval: 500,
      notifyOnNetworkStatusChange: true,
    }
  );

  if (networkStatus === NetworkStatus.refetch) return "Refetching data!";
  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;

  return (
    <>
      <img
        src={data.dog.displayImage}
        alt="display-reference"
        style={{ height: 100, width: 100 }}
      />
      <button onClick={() => refetch({ breed: "new_dog_breed" })}>
        Refetch dog breed!
      </button>
    </>
  );
}

export default DogPhoto;
