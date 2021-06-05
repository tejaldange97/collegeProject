import React, {useState} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
//local import
import horizontalScale from '../../../res/Scale';
import {RootView, SimpleButton, TextData} from '../../components/index';
import R from '../../R';

export const Uhome = (props) => {
  return (
    <RootView customStyle={styles.root}>
      <View
        style={{
          width: '90%',
          borderWidth: 1,
          padding: horizontalScale(5),
          marginTop: horizontalScale(25),
        }}>
        <View style={{flexDirection: 'row', marginTop: horizontalScale(10)}}>
          <Text style={{fontSize: horizontalScale(18), fontWeight: 'bold'}}>
            Name :-
          </Text>
          <Text
            style={{
              fontSize: horizontalScale(18),
              paddingLeft: horizontalScale(5),
            }}>
            Tejal Dange
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: horizontalScale(15)}}>
          <Text style={{fontSize: horizontalScale(18), fontWeight: 'bold'}}>
            Location :-
          </Text>
          <Text
            style={{
              fontSize: horizontalScale(18),
              paddingLeft: horizontalScale(5),
              width: '70%',
            }}>
            Kopargaon, Ahmednagar, Maharashtra, 423601, India
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: horizontalScale(15)}}>
          <Text style={{fontSize: horizontalScale(18), fontWeight: 'bold'}}>
            Menu :-
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  fontSize: horizontalScale(18),
                  padding: horizontalScale(5),
                  borderWidth: 1,
                  marginLeft: horizontalScale(10),
                }}>
                Veg : 1
              </Text>
              <Text
                style={{
                  fontSize: horizontalScale(18),
                  padding: horizontalScale(5),
                  borderWidth: 1,
                  marginTop: horizontalScale(10),
                  marginLeft: horizontalScale(10),
                }}>
                Chapati : 2
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: horizontalScale(18),
                  padding: horizontalScale(5),
                  borderWidth: 1,
                  marginLeft: horizontalScale(10),
                }}>
                Dal : 1
              </Text>
              <Text
                style={{
                  fontSize: horizontalScale(18),
                  padding: horizontalScale(5),
                  borderWidth: 1,
                  marginTop: horizontalScale(10),
                  marginLeft: horizontalScale(10),
                }}>
                Rice : 1
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.view}>
          <SimpleButton
            title="Decline"
            customTxtStyle={{color: '#fff', fontSize: horizontalScale(18)}}
            customStyle={{
              backgroundColor: '#808080',
              width: '45%',
            }}
            onPress={() => alert('Order Cancel Sucessfully')}
          />
          <SimpleButton
            title="Accept"
            customTxtStyle={{color: '#fff', fontSize: horizontalScale(18)}}
            customStyle={{
              backgroundColor: 'green',
              width: '45%',
            }}
            onPress={() => alert('Order Accepted')}
          />
        </View>
      </View>
    </RootView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: R.colors.white,
    alignItems: 'center',
  },
  view: {
    marginTop: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: horizontalScale(20),
  },
  customTxtStyle: {
    color: '#fff',
    fontSize: horizontalScale(18),
  },
});
