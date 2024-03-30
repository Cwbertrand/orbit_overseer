import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserName = async (userName: string) => {
    try {
    await AsyncStorage.setItem('userName', userName);
    } catch (error) {
    console.log(error);
    }
};

export const getUserName = async () => {
    try {
    return await AsyncStorage.getItem('userName');
    } catch (error) {
    console.log(error);
    }
};
