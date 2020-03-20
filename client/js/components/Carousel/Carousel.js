import React, {Component} from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

export default class Carousel extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          scrollHorizontal={true}
          backdropOpacity={0.3}>
          <View
            style={{
              position: 'absolute',
              bottom: 61,
              right: 12,
            }}>
            <Button title="Hide modal" onPress={this.toggleModal} />
            <View
              style={{
                height: 250,
                width: 350,
                backgroundColor: 'white',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}>
              <ScrollView horizontal={true}>
                <Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est
                </Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
