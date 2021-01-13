import AsyncStorage from '@react-native-async-storage/async-storage';
import {showError} from '../showMessage';

//favMovie

export const storeData = async (key: any, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    showError(`Store Data ${err}`);
  }
};

export const getData = async (key: any) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    showError(`Get Data ${err}`);
  }
};
