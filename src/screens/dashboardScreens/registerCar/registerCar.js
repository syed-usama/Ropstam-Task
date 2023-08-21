import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../../styles/globle.style';
import styles from './registerCar.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {AuthContext} from '../../../services/auth/authProvider';
import colors from '../../../Assets/colors/colors';
import ImagePicker from 'react-native-image-crop-picker';
import {
  get_cars_list,
  get_colors_list,
  register_Car,
} from '../../../services/endPoints';
import {showToast} from '../../../services/toast/shortToast';
const RegisterCar = ({navigation, route}) => {
  const [carBrand, setCarBrand] = useState({name: '-- Select --'});
  const [carColor, setCarColor] = useState({name: '-- Select --'});
  const [carRegistration, setcarRegistration] = useState('');
  const [carModal, setCarModal] = useState('');
  const [carVariant, setCarVariant] = useState('');
  const [carAmount, setCarAmount] = useState('');
  const [carDate, setCarDate] = useState('');
  const [carImage, setCarImage] = useState('');
  const [dateString, setDateString] = useState('');

  const [cars, setCars] = useState([]);
  const [colorsList, setColorsList] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [loader, setLoader] = useState(false);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'December',
  ];
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const mdate = new Date();
    handleConfirm(mdate);
    getData();
  }, []);
  const getData = async () => {
    console.log('getData');
    if (colorsList == '' || colorsList == undefined || colorsList == []) {
      const colorsl = await get_colors_list();
      setColorsList(colorsl);
    }
    if (cars == '' || cars == undefined || cars == []) {
      const carsl = await get_cars_list();
      // console.log('vars',carsl)
      setCars(carsl);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    let seleDate =
      date.getDate() +
      ' ' +
      monthNames[date.getMonth()] +
      ' ' +
      date.getFullYear();
    var selMonth = date.getMonth() + 1;
    let seleDate2 = date.getFullYear() + '-' + selMonth + '-' + date.getDate();
    setCarDate(seleDate);
    setDateString(seleDate2);
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      includeBase64: true,
    })
      .then(image => {
        // console.log(image.data);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setCarImage(imageUri);
        setImageBase64(image.data);
        SheetManager.hide('sheet5');
      })
      .catch(e => {
        console.log(e);
      });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      includeBase64: true,
    })
      .then(image => {
        // console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setCarImage(imageUri);
        setImageBase64(image.data);
        SheetManager.hide('sheet5');
      })
      .catch(e => {
        console.log(e);
      });
  };
  const changeLoader = () => {
    setLoader(false);
    Alert.alert('Alert..!', 'Data uploaded successfully');
    navigation.goBack();
  };
  const save = () => {
    if (
      carBrand.name != '-- Select --' &&
      carColor.name != '-- Select --' &&
      carRegistration != '' &&
      carModal != '' &&
      carVariant != '' &&
      carAmount != ''
    ) {
      uploadData();
    } else {
      showToast('All fields are required');
    }
  };
  const uploadData = () => {
    setLoader(true);
    var xdata = {
      carBrand: carBrand.name,
      carColor: carColor.name,
      carRegistration: carRegistration,
      carModal: carModal,
      carVariant: carVariant,
      carAmount: carAmount,
      carImage: carImage,
      carDate: carDate,
    };
    register_Car(xdata, changeLoader);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size={50} color={colors.primary} />
        </View>
      ) : null}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <FontAwesome
            name="chevron-left"
            size={22}
            style={{marginLeft: 25}}
            color={'white'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Register a new car</Text>
        <Text />
      </View>

      <View style={styles.mainx}></View>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={style.label}>Car Brand *</Text>
          <TouchableOpacity
            style={style.textfield2}
            onPress={() => {
              SheetManager.show('sheet2');
            }}>
            <Text style={style.picker}>{carBrand.name}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={style.label}>Car Color *</Text>
          <TouchableOpacity
            style={style.textfield2}
            onPress={() => {
              SheetManager.show('sheet4');
            }}>
            <Text style={style.picker}>{carColor.name}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={styles.email}>
          <Text style={style.label}>Car Registration No *</Text>
          <View style={[style.textfield2]}>
            <TextInput
              placeholder="Enter car registration no"
              placeholderTextColor={'#949693'}
              style={[style.textfieldText]}
              value={carRegistration}
              onChangeText={value => setcarRegistration(value)}
            />
          </View>
        </View>

        <View style={styles.email}>
          <Text style={style.label}>Car modal *</Text>
          <View style={[style.textfield2]}>
            <TextInput
              placeholder="Enter car modal"
              placeholderTextColor={'#949693'}
              style={[style.textfieldText]}
              value={carModal}
              onChangeText={value => setCarModal(value)}
            />
          </View>
        </View>

        <View style={styles.email}>
          <Text style={style.label}>Car variant *</Text>
          <View style={[style.textfield2]}>
            <TextInput
              placeholder="Enter car variant"
              placeholderTextColor={'#949693'}
              style={[style.textfieldText]}
              value={carVariant}
              onChangeText={value => setCarVariant(value)}
            />
          </View>
        </View>

        <View style={styles.email}>
          <Text style={style.label}>Amount *</Text>
          <View style={[style.textfield2]}>
            <TextInput
              placeholder={'Enter amount of the car'}
              placeholderTextColor={'#949693'}
              style={[style.textfieldText]}
              keyboardType="number-pad"
              value={carAmount}
              onChangeText={value => setCarAmount(value)}
            />
          </View>
        </View>

        <View>
          <Text style={style.label}>Buy Date *</Text>
          <TouchableOpacity
            onPress={() => showDatePicker()}
            style={[style.textfield2, {justifyContent: 'center'}]}>
            <Text style={style.picker}>
              {carDate ? carDate : 'Select Date'}
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={style.label}>Upload Image </Text>
          <TouchableOpacity
            style={[style.textfield2, {justifyContent: 'center'}]}
            onPress={() => {
              SheetManager.show('sheet5');
            }}>
            <Text style={style.picker}>Upload Image</Text>
          </TouchableOpacity>
          {carImage ? (
            <Image
              source={{uri: carImage}}
              style={{
                height: 60,
                width: 60,
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 5,
              }}
            />
          ) : null}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => save()} disabled={loader}>
            <View
              style={[
                style.blueButton,
                {backgroundColor: colors.primary, alignItems: 'center'},
              ]}>
              {loader ? (
                <ActivityIndicator size={24} color={'white'} />
              ) : (
                <Text style={style.whiteButtonText}>Save</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ActionSheet id="sheet2">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select Car Brand</Text>
          <View style={styles.sheet1}>
            <FlatList
              data={cars}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.itemWrapper}
                  onPress={() => {
                    setCarBrand(item);
                    SheetManager.hide('sheet2');
                  }}>
                  <Text style={styles.sheetItem}>{item.name}</Text>
                  {carBrand.name == item.name ? (
                    <Feather
                      name="check"
                      size={14}
                      style={styles.checkIcon}
                      color={'white'}
                    />
                  ) : null}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ActionSheet>
      <ActionSheet id="sheet4">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <Text style={styles.title}>Select car Color</Text>
          <View style={styles.sheet1}>
            {colorsList.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemWrapper}
                onPress={() => {
                  setCarColor(item);
                  SheetManager.hide('sheet4');
                }}>
                <Text style={styles.sheetItem}>{item.name}</Text>
                {carColor.name == item.name ? (
                  <Feather
                    name="check"
                    size={14}
                    style={styles.checkIcon}
                    color={'white'}
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>

      <ActionSheet id="sheet5">
        <View style={styles.sheetContainer}>
          <View style={styles.line}></View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => openCamera()}
              style={{alignItems: 'center'}}>
              <FontAwesome name="camera" size={28} color="black" />
              <Text style={{color: 'black'}}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openGallery()}
              style={{alignItems: 'center', marginLeft: 20}}>
              <FontAwesome name="image" size={28} color="black" />
              <Text style={{color: 'black'}}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
};

export default RegisterCar;
