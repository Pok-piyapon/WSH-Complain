import { View, Image, Text } from 'react-native'
import { useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Wave from '../../components/Wave'
import { GetData , RemoveData } from '../../services/storage';
import Toast from 'react-native-toast-message';
export default function LoadingPage() {
    const router = useNavigation()
    useFocusEffect(
        useCallback(() => {
            const fetchToken = async () => {
                try {
                    const refreshToken = await GetData("refreshToken");
                    if (!refreshToken) {
                        router.push('signin')
                    } else {
                        router.push('home')
                    }
                } catch (e) {
                    Toast.show({
                        type:"success",
                        text1:e.message
                    })
                    await RemoveData("refreshToken")
                    await RemoveData("accessToken")
                    router.push('signin')
                }
            };
            fetchToken();
        }, [])
    );

    return (
        <Wave>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <Image style={{ width: 90, height: 90 }} source={require("../../assets/icons/icon.png")} />
                    <Text style={{ marginTop: 10, fontWeight: "bold" }}>กำลังโหลด...</Text>
                </View>
            </View>
        </Wave>
    )
}