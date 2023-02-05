import { gql } from '@apollo/client/core';

const GET_HOME_QUERY = gql`
  query ($uid: String!, ) {
    page(uid: $uid, lang: "en-us") {
      name
      body {
        __typename
        ... on PageBodySection_cta {
          primary {
            heading
            button_url
            button_text
            image
          }
        }
      }
    }
  }
`;

export { GET_HOME_QUERY };
