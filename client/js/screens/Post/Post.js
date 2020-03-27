import React from 'react';
import CText from '../../components/CustomText';
import PageLayout from '../../components/PageLayout';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PageLayout
        imageSource={require('../../assets/P3_ORC_ImagePool/hikingpeople.jpg')}
        title="community"
        onPress={() => {
          this.props.navigation.goBack();
        }}
        arrowDisplay="flex"
        pageContent={<CText>Post a Review</CText>}></PageLayout>
    );
  }
}
export default Post;
