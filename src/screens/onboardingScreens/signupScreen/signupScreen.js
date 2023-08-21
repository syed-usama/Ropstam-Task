import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './signupScreen.style';
import style from '../../../styles/globle.style';
import color from '../../../Assets/colors/colors';
import colors from '../../../Assets/colors/colors';
import {showToast} from '../../../services/toast/shortToast';
import {getData} from '../../../services/AsyncStorageServices';
import {AuthContext} from '../../../services/auth/authProvider';

const SignupScreen = ({navigation}) => {
  const {user, register} = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = React.useState({
    fullname: '',
    email: '',
    password: '',
    check_textInputChange1: false,
    check_textInputChange2: false,
    secureTextEntry: true,
  });

  const textInputChange1 = val => {
    var checkVal = val.replace(/\s+/g, '');
    if (checkVal != '') {
      setData({
        ...data,
        fullname: val,
        check_textInputChange1: true,
      });
    } else {
      setData({
        ...data,
        fullname: val,
        check_textInputChange1: false,
      });
    }
  };
  const textInputChange2 = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === true) {
      setData({
        ...data,
        email: val,
        check_textInputChange2: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange2: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const changeLoader = () => {
    setLoading(false);
  };
  const validate = async () => {
    let newemail = data.email.toLowerCase();
    let newUser = {
      name: data.fullname,
      email: data.email,
      password: data.password,
    };
    var usersData = await getData('usersData');
    if (usersData && usersData.length > 0) {
      var found = false;
      for (var i = 0; i < usersData.length; i++) {
        if (usersData[i].email == newemail) {
          found = true;
          break;
        }
      }
      if (found) {
        showToast('Email is already registered');
        setLoading(false);
      } else {
        register(newUser, changeLoader);
      }
    } else {
      register(newUser, changeLoader);
    }
  };
  const signUp = () => {
    if (data.check_textInputChange1) {
      if (data.check_textInputChange2) {
        if (data.password.length >= 8) {
          setLoading(true);
          validate();
        } else {
          showToast('Enter a strong password');
        }
      } else {
        showToast('Enter a Valid Email Address');
      }
    } else {
      showToast('Enter your full Name');
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.white} />
        </View>
      ) : null}
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../../Assets/Images/logo1.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text_footer}>Full Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={color.white} size={20} />
            <TextInput
              placeholder="Enter Full Name"
              placeholderTextColor={'#e3d1d1'}
              style={styles.textInput}
              onChangeText={val => textInputChange1(val)}
            />
            {data.check_textInputChange1 ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={color.white} size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 15,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="email-outline"
              color={color.white}
              size={20}
            />
            <TextInput
              placeholder="Your Email Address"
              placeholderTextColor={'#e3d1d1'}
              keyboardType="email-address"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange2(val)}
            />
            {data.check_textInputChange2 ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color={color.white} size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 15,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={color.white} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor={'#e3d1d1'}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={color.white} size={20} />
              ) : (
                <Feather name="eye" color={color.white} size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/*
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={color.white} size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              placeholderTextColor={color.white}
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color={color.white} size={20} />
              ) : (
                <Feather name="eye" color={color.white} size={20} />
              )}
            </TouchableOpacity>
          </View> */}

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                signUp();
              }}>
              <LinearGradient
                colors={[color.white, color.white]}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: color.secondary,
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: color.white,
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: color.white,
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignupScreen;
