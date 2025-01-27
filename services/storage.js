import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log("Error Connot Save In function SaveData")
    }
}

const GetData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key)
        return data ?? undefined;
    } catch (e) {
        console.log("Error Cannot GetData")
    }
}

const RemoveData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)

    } catch (e) {
        console.log("Error Cannot Remove Data")
    }
}

export {
    SaveData,
    GetData,
    RemoveData
}