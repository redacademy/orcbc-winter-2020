import React from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';

const Safety = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/Guide/images/avalanche.jpg')}
        style={{width: '100%', height: '100%', flex: 1}}
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 55,
          zIndex: 1,
        }}>
        <Text style={{fontSize: 24, fontFamily: 'Montserrat'}}>
          Avalanche Safety
        </Text>
      </View>
      <View
        style={{
          marginTop: 24,
          borderRadiusLeft: 50,
          borderRadiusRight: 50,
          backgroundColor: 'white',
          zIndex: 1,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: '100%',
        }}>
        <Text
          style={{
            fontSize: 20,
            paddingTop: 50,
            textDecorationLine: 'underline',
          }}>
          Quick Tips
        </Text>
        <Text style={{fontSize: 16, color: '#343434'}}>
          If you become caught in an avalanche, try to:
        </Text>
        <Text>
          Push machinery, equipment or heavy objects away from you to avoid
          injury. {'\n\n'}Grab onto anything solid (trees, rocks, etc.) to avoid
          being swept away. {'\n\n'}Keep your mouth closed and your teeth
          clenched. {'\n\n'}If you start moving downward with the avalanche,
          stay on the surface using a swimming motion. {'\n\n'}Try to move
          yourself to the side of the avalanche.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Safety;
