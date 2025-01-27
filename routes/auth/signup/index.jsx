import { Text, View, TouchableOpacity, Image } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInput from "react-native-text-input-interactive";
import Wave from "../../../components/Wave";
import { useNavigation } from "@react-navigation/native";
import { SignUpForm } from "../../../services/forms";
import Toast from 'react-native-toast-message';

import styles from "../../../styles/styles.css";
import { colors } from "../../../styles/styles.css";
import { useState } from "react";
export default function SignUp() {

    const router = useNavigation()
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    return (<>
        <Wave>
            <View style={styles.SignIn.Layout}>
                <Image style={{ width: 70, height: 70, marginBottom: 20 }} source={require("../../../assets/icons/icon.png")}></Image>
                <TextInput onChangeText={(t)=> setFirstname(t)} defaultValue={firstname} textInputStyle={{ borderWidth: 1, borderColor: colors.Button }} placeholder="Firstname" style={{ marginBottom: 20 }} />
                <TextInput onChangeText={(t)=> setLastname(t)} defaultValue={lastname} textInputStyle={{ borderWidth: 1, borderColor: colors.Button }} placeholder="Lastname" style={{ marginBottom: 20 }} />
                <TextInput onChangeText={(t)=> setEmail(t)} defaultValue={email} textInputStyle={{ borderWidth: 1, borderColor: colors.Button }} placeholder="Email" style={{ marginBottom: 20 }} />
                <TextInput onChangeText={(t)=> setPassword(t)} defaultValue={password} textInputStyle={{ borderWidth: 1, borderColor: colors.Button }} placeholder="Password" style={{ marginBottom: 20 }} />
                <TouchableOpacity onPress={()=> (SignUpForm({ email , firstname , lastname , password , Toast }))} style={styles.SignIn.Submit}>
                <View style={styles.SignIn.Submit.ContainerText}>
                    <Text style={styles.SignIn.Submit.ContainerText.text}>
                        สมัครสมาชิก
                    </Text>
                </View>
                <FontAwesome name="check-circle-o" size={50} color="white" />
            </TouchableOpacity>
            {/* SignUp Alternative */}
            <View>
                <TouchableOpacity onPress={() => router.push("signin")}>
                    <Text style={styles.SignIn.SignUp}>
                        มีบัญชีอยู่แล้ว? <Text style={{ color: colors.Button }}>เข้าสู่ระบบ</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Wave >
    </>)
}
