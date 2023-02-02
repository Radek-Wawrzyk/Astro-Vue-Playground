import { gql } from '@apollo/client/core';

const GET_HOME_QUERY = gql`
  query ($uid: String!, ) {
    page(uid: $uid, lang: "en-us") {
      name
    }
  }
`;

export { GET_HOME_QUERY };
