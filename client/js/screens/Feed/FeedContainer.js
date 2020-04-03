import React from 'react';
import Feed from './Feed';
import gql from 'graphql-tag';
import CText from '../../components/CustomText';
import {Query} from '@apollo/react-components';

const GET_REVIEWS = gql`
  query {
    reviews {
      id
      comment
      author {
        name
      }
      site {
        campname
      }
    }
  }
`;

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Query query={GET_REVIEWS}>
        {({loading, error, data}) => {
          if (loading) return <CText>Please wait while the reviews load</CText>;
          if (error) return `Error! ${error.message}`;
          return (
            console.log(data.reviews),
            (<Feed reviews={data.reviews} navigation={this.props.navigation} />)
          );
        }}
      </Query>
    );
  }
}
export default FeedContainer;
