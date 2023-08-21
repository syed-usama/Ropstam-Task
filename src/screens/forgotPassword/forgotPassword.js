import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from '../../styles/globle.style';
import styles from './forgotPassword.style';
import {AuthContext} from '../../services/auth/authProvider';
import colors from '../../Assets/colors/colors';
import { showToast } from '../../services/toast/shortToast';
//FontAwesome.loadFont();
const ForgotPassword = ({navigation}) => {
  const [email, setemail] = useState('');
  const [response, setresponse] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {passwordReset} = useContext(AuthContext);
  const forgotPassword = () => {
    if(email){
      setLoading(true);
    passwordReset(email,changeLoader);
    }else{
      showToast("Enter a valid Email")
    }
  };
  const changeLoader = (check) => {
    setLoading(false);
    if(check == 'true'){
        setresponse('Password reset email sent successfully. Kindly check your email to reset your Password')
    }else{
        setresponse('There is no user record found corresponding to this email !')
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.top}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>
              <FontAwesome
                style={styles.backButton}
                name="chevron-left"
                size={22}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={style.titleText}>Forgot Password?</Text>
            <Text style={style.subtitleText}>
              Enter your Email to continue
            </Text>
          </View>
          <View style={styles.email}>
            <Text style={style.label}>Email</Text>
            <View style={style.textfield1}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={'#949693'}
                autoCapitalize='none'
                style={style.textfieldText}
                value={email}
                keyboardType="email-address"
                onChangeText={email => setemail(email)}
              />
              {email != '' ? (
                <AntDesign
                  style={{flex: 1}}
                  name="checkcircleo"
                  size={22}
                  color="green"
                />
              ) : null}
            </View>
          </View>
          {response ?
          <View style={styles.response}>
              <Text style={styles.responseText}>{response}</Text>
              </View>:null
              }
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => forgotPassword()}>
              <View style={style.blueButton}>
                <Text style={style.whiteButtonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
