import {StyleSheet,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../Assets/colors/colors';
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.white
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
      logo: {
          width: 280,
          height: 90
      },
      title: {
          color: '#05375a',
          fontSize: 30,
          fontWeight: 'bold'
      },
      text: {
          color: colors.white,
          marginTop:5
      },
      button: {
          alignItems: 'flex-end',
          marginTop: 30
      },
      signIn: {
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row'
      },
      textSign: {
          color: 'white',
          fontWeight: 'bold'
      }
});
