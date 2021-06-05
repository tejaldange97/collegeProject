import React, {Component} from 'react';
import {View, Text} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView} from '../components/RootView';

export const MyOrder = (props) => {
  return (
    <RootView style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: horizontalScale(23),
          fontWeight: 'bold',
          color: '#ff1313',
          marginVertical: horizontalScale(60),
          alignSelf: 'center',
        }}>
        Welcome to myOrder
      </Text>
    </RootView>
  );
};
