import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';

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
          marginTop: 15,
        }}>
        <Text style={{fontSize: 24, fontFamily: 'Montserrat'}}>
          Avalanche Safety
        </Text>
      </View>

      <ScrollView
        style={{
          marginTop: 24,
          backgroundColor: 'white',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: '100%',
        }}>
        <View style={{padding: 25, color: '#343434'}}>
          <Text
            style={{
              fontSize: 20,
              paddingVertical: 16,
              textDecorationLine: 'underline',
              fontWeight: '500',
            }}>
            Quick Tips
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            If you become caught in an avalanche, try to:
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingVertical: 16,
            }}>
            Push machinery, equipment or heavy objects away from you to avoid
            injury. {'\n\n'}Grab onto anything solid (trees, rocks, etc.) to
            avoid being swept away. {'\n\n'}Keep your mouth closed and your
            teeth clenched. {'\n\n'}If you start moving downward with the
            avalanche, stay on the surface using a swimming motion. {'\n\n'}Try
            to move yourself to the side of the avalanche.
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            When the avalanche slows, attempt to:
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingVertical: 16,
            }}>
            Push yourself towards the surface.{'\n\n'}Make an air pocket in
            front of your face using one arm.{'\n\n'}Push the other arm towards
            the surface.
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            When the avalanche stops, begin to:
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingVertical: 16,
            }}>
            Dig yourself out, if possible.{'\n\n'}Relax your breathing,
            particularly if you cannot dig yourself out. {'\n\n'}Stay calm and
            shout only when a searcher is near.
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            Before your trip
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingVertical: 16,
            }}>
            Preparedness is key to safety in avalanche-prone areas.{'\n\n'}We
            recommend taking the short education program offered by Avalanche
            Canada. It is available at:
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.avalanche.ca/tutorial')
            }>
            <Text style={{color: '#0000EE', textDecorationLine: 'underline'}}>
              Avalanche Canada - Tutorial{'\n'}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Gear and Safety Equipment{'\n'}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Pre-trip Planning{'\n'}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Risk Reduction{'\n'}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Rescue{'\n'}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Incident Reporting
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Safety;
