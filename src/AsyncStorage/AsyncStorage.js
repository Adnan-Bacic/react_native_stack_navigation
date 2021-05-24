import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);

    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();

    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    return items;
  } catch (err) {
    console.log(err);
    return err;
  }
};
