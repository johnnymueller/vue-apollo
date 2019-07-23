import gql from "graphql-tag"

export default gql `query {
  # Speaker(id:"cji5oo5sh12ba01272zbhrx3g") {
  #   bio
  #   name
  # }

  entry(id:169) {
    title
		...on SansMatrix {
      article {
        totalPages
        content
      }
      image {
        id
      }
      product
    }
  }

  # entry(id: 2) {
  #   ... on GeneralCollectionLanding {
  #     __typename
  #     id
  #     title
  #     # layoutBuilder {
  #     #   ... on LayoutBuilderArticle {     # Block Type
  #     #     __typename          # Ensures the response has a field describing the type of block
  #     #     article {
  #     #       # totalPages
  #     #       content
  #     #     }
  #     #   }
  #     #   # ... on LayoutBuilderBillboard {
  #     #   #   __typename
  #     #   #   header
  #     #   #   description
  #     #   # }
  #   	# }
  #   }
  # }
}`