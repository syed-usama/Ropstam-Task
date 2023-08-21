import AsyncStorage from '@react-native-async-storage/async-storage';
export async function setData(key, data) {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}
export async function getData(key) {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      resolve(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (error) {
      reject(error);
    }
  });
}


export async function Clear(key) {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem(key);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
}
