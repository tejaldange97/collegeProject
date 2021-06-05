import React, {useState} from 'react';
import {Text, StyleSheet, Button, TextInput} from 'react-native';

//local import
import horizontalScale from '../../res/Scale';
import {
  RootView,
  SimpleTextInput,
  SimpleButton,
  CircleImage,
} from '../components/index';
import R from '../R';
import firebaseSetup from './SetUp';

export const Login = (props) => {
  const {auth} = firebaseSetup();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [flag, setFlag] = useState(false);

  // const validation = () => {
  //   if (mobileNo == '' || mobileNo.length != 10) {
  //     setFlag(true);
  //   } else {
  //     setMobileNo('');
  //     props.navigation.navigate('Otp');
  //   }
  // };
  const signInWithPhoneNumber = async (phoneNumber) => {
    console.log(phoneNumber);
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('**', confirmation);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      alert('succesfully');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={
          () => auth().signInWithPhoneNumber('+91 8600140815')
          // signInWithPhoneNumber('+8600140815')
        }
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );

  // return (
  //   <RootView customStyle={styles.View}>
  //     <CircleImage
  //       source={R.images.man}
  //       style={{marginTop: horizontalScale(50)}}
  //     />
  //     <SimpleTextInput
  //       placeholder="Enter Mobile Number"
  //       keyboardType="numeric"
  //       placeholderTextColor={R.colors.maroon}
  //       onChangeText={(mobileNo) => setMobileNo(mobileNo)}
  //       customViewStyle={styles.customViewStyle}
  //     />
  //     {flag ? (
  //       <Text style={style.errorText}>Pleasr Enter Mobile No</Text>
  //     ) : null}
  //     <SimpleButton
  //       title="Get OTP"
  //       customTxtStyle={styles.customTxtStyle}
  //       customStyle={styles.customStyle}
  //       //onPress={validation}
  //       onPress={() => props.navigation.navigate('Otp')}
  //     />
  //   </RootView>
  // );
};

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    backgroundColor: R.colors.maroon,
  },
  customStyle: {
    backgroundColor: R.colors.lightPink,
    marginTop: horizontalScale(30),
  },
  customViewStyle: {
    marginTop: horizontalScale(50),
    backgroundColor: R.colors.white,
  },
  customTxtStyle: {
    color: R.colors.maroon,
    fontSize: horizontalScale(18),
  },
  errorText: {
    fontSize: horizontalScale(12),
    color: '#FF1493',
  },
});
