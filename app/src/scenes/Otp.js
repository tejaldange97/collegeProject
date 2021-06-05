import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView, SimpleButton, CircleImage} from '../components/index';
import R from '../R';
import OtpInputs from 'react-native-otp-textinput';

export const Otp = (props) => {
  const [otp, setOtp] = useState('');
  const [flag, setFlag] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const validation = () => {
    // if (otp == '') {
    //   setFlag(true);
    // } else {
    //   setOtp('');
    //props.navigation.navigate('DrawerNavigator');
    props.navigation.navigate('UserType');
    // }
  };

  return (
    <RootView customStyle={styles.View}>
      <CircleImage
        source={R.images.man}
        style={{marginTop: horizontalScale(50)}}
      />
      <Text style={styles.text}>You Will Get OTP Via SMS</Text>
      <OtpInputs
        handleChange={(otp) => setOtp(otp)}
        numberOfInputs={4}
        textInputStyle={styles.textInputStyle}
        containerStyle={styles.containerStyle}
      />
      {flag ? <Text style={styles.otpText}>Pleasr Enter Otp</Text> : null}
      <SimpleButton
        title="Proceed To Login"
        customTxtStyle={styles.customTxtStyle}
        customStyle={styles.customStyle}
        onPress={validation}
      />
    </RootView>
  );
};

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    backgroundColor: R.colors.maroon,
  },
  otpText: {
    fontSize: horizontalScale(12),
    color: '#FF1493',
    marginTop: horizontalScale(10),
  },
  containerStyle: {
    backgroundColor: R.colors.maroon,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: horizontalScale(40),
  },
  textInputStyle: {
    borderRadius: 5,
    backgroundColor: R.colors.white,
    height: horizontalScale(45),
    width: horizontalScale(40),
  },
  text: {
    fontSize: horizontalScale(18),
    color: R.colors.white,
    fontWeight: 'bold',
    marginTop: horizontalScale(40),
  },
  customStyle: {
    backgroundColor: R.colors.lightPink,
    marginTop: horizontalScale(50),
  },
  customTxtStyle: {
    color: R.colors.maroon,
    fontSize: horizontalScale(18),
  },
});
