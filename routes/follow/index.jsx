import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { WebView } from 'react-native-webview';
import Inputer from "react-native-text-input-interactive";

import { colors } from "../../styles/styles.css";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import Wave from "../../components/Wave";
function SetTricketID(text, setValue, router) {
    try {
        if (text.length <= 0) {
            return Toast.show({
                type: "error",
                text1: "กรุณากรอกแบบฟอร์มให้ครบถ้วน"
            })
        }
        router.push('follow', { data: text })
    } catch (e) {
        Toast.show({
            type: "error",
            text1: e.message
        })
    }
}

export default function FollowPage({ route }) {

    const router = useNavigation()
    const [value, setValue] = useState("")
    const [text, setText] = useState("")
    useEffect(() => {
        setValue(route)
    }, [value])

    return (
        <Wave top={value.params?.data ? false : true} bottom={value.params?.data ? false : true}>
            <View style={{ flex: 1, marginTop: "10%" }}>
                {
                    value.params?.data ?
                        <WebView
                            source={{ uri: `https://c.webservicehouse.com/index.php/Homepage_mobile/ticket_follow_form/${value.params.data}` }}
                            style={styles.webview}
                            onNavigationStateChange={(e) => {
                                if (e.title == "Webservicehouse") {
                                    setTimeout(() => {
                                        router.goBack()
                                    }, 1000)
                                }
                            }}
                        />
                        :
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: "20%" }}>
                            <Inputer onChangeText={(t) => setText(t)} style={{ borderColor: colors.Button, borderWidth: 1, borderRadius: 5 }} placeholder="Tricket Follow" />
                            <TouchableOpacity onPress={() => SetTricketID(text, setValue, router)} style={styles.button}>
                                <Text style={styles.buttonText}>ติดตามสถานะ</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </Wave>
    )
}

const styles = StyleSheet.create({
    webview: {
        flex: 1,
        marginTop: -95
    },
    button: {
        backgroundColor: colors.Button,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});
