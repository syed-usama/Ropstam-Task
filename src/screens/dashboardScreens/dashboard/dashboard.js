import React, {useContext, useEffect, useState} from 'react';
import styles from './dashboard.style';
import style from '../../../styles/globle.style';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../Assets/colors/colors';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {AuthContext} from '../../../services/auth/authProvider';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {getData} from '../../../services/AsyncStorageServices';
import {useIsFocused} from '@react-navigation/core';

const Dashboard = ({navigation}) => {
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const {user, logout} = useContext(AuthContext);
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    getcarsData();
  }, [isFocused]);

  const getcarsData = async () => {
    console.log('getData');
    const carsData = await getData('carsData');
    if (carsData) {
      setCarData(carsData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <View style={styles.header}>
        <FontAwesome
          name="user"
          size={27}
          style={{marginLeft: 25, marginRight: 10}}
          color={'white'}
        />
        <Text style={styles.username}>Hi , {user.name}</Text>
        <View style={styles.leftIcons}>
          <Entypo
            onPress={() => logout()}
            name="log-out"
            size={27}
            style={{marginLeft: 25, marginRight: 10}}
            color={'white'}
          />
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.card}>
          <FontAwesome5 name="car" size={50} color="white" />
          <View>
            <Text style={styles.cardText}>Registerd Cars</Text>
            <Text style={styles.cardText}>{carData?.length}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.footer}>
          {show && (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterCar')}>
                <Animatable.View
                  animation="fadeInRight"
                  style={[
                    style.blueButton,
                    {
                      backgroundColor: colors.secondary,
                      height: 40,
                      width: widthPercentageToDP(50),
                    },
                  ]}>
                  <Text style={style.whiteButtonText}>Register new car</Text>
                </Animatable.View>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShow(!show)}>
            <Entypo name={show ? 'cross' : 'plus'} size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Dashboard;
