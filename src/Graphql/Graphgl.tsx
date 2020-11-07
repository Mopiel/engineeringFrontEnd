import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:4000/graphql`,
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query {
      beacons {
        id
        name
        positions {
          id
          device
          rssi
          date
          alarmcode
        }
      }
    }
  `,
});

export const GraphQl: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
