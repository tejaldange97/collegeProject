import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView, Menu, SimpleButton, CircleImage} from '../components/index';
import R from '../R';

export const Home = (props) => {
  const [veg, setVeg] = useState(0);
  const [chapati, setChapati] = useState(0);
  const [dal, setDal] = useState(0);
  const [rice, setRice] = useState(0);
  const [price, setPrice] = useState(0);

  const calculate = () => {
    var total = 0;
    total = 15 * veg + 5 * chapati + 15 * dal + 15 * rice;
    props.navigation.navigate('TotalPrice', {total: total});
  };
  return (
    <RootView customStyle={styles.root}>
      <CircleImage
        source={R.images.tiffinBox}
        style={{
          alignSelf: 'center',
          height: horizontalScale(160),
          width: horizontalScale(160),
        }}
      />
      <Menu name={'Veg'} price={'Rs.15'} onChangeText={(veg) => setVeg(veg)} />
      <Menu
        name={'Chapati'}
        price={'Rs.5'}
        onChangeText={(chapati) => setChapati(chapati)}
      />
      <Menu name={'Dal'} price={'Rs.15'} onChangeText={(dal) => setDal(dal)} />
      <Menu
        name={'Rice'}
        price={'Rs.15'}
        onChangeText={(rice) => setRice(rice)}
      />

      <SimpleButton
        title="Calculate"
        customTxtStyle={styles.customTxtStyle}
        customStyle={styles.customStyle}
        onPress={calculate}
      />
    </RootView>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: R.colors.white,
  },
  customTxtStyle: {
    color: '#fff',
    fontSize: horizontalScale(18),
  },
  customStyle: {
    backgroundColor: '#800000',
    alignSelf: 'center',
    marginTop: horizontalScale(50),
  },
});
