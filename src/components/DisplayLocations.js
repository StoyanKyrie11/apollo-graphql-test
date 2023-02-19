import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return "Loading...";
  if (error) return <p>Error: {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img
        style={{ width: 400, height: 250 }}
        alt="location-reference"
        src={`${photo}`}
      />
      <br />
      <b>About this locations:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default DisplayLocations;
