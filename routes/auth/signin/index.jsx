import { Text, View, TouchableOpacity, Image } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInput from "react-native-text-input-interactive";
import Wave from "../../../components/Wave";
import { useNavigation } from "@react-navigation/native";
import { SignInForm } from "../../../services/forms";
import Toast from "react-native-toast-message";

import styles from "../../../styles/styles.css";
import { colors } from "../../../styles/styles.css";
import { useState , useContext } from "react";
import { AppContext } from "../../../wrapers/startapp";
export default function SignIn() {

    const worldState = useContext(AppContext)
    const router = useNavigation()
    const [email, setEmail] = useState("s64209010013@kktech.ac.th")
    const [password, setPassword] = useState("Lion4333_-")
    return (<>
        <Wave>
            <View style={styles.SignIn.Layout}>
                <Image style={{ width: 70, height: 70, marginBottom: 20 }} source={require("../../../assets/icons/icon.png")}></Image>
                <TextInput onChangeText={(t)=> setEmail(t)} defaultValue={email} textInputStyle={{ borderWidth: 1, borderColor: colors.Button }} placeholder="Email" style={{ marginBottom: 20 }} />
                <TextInput onChangeText={(t)=> setPassword(t)} defaultValue={password} textInputStyle={{ borderWidth: 1, borderColor: colors.Button }} placeholder="Password" style={{ marginBottom: 20 }} />
                <TouchableOpacity onPress={()=> SignInForm({ email , password , Toast , router , worldState })} style={styles.SignIn.Submit}>
                    <View style={styles.SignIn.Submit.ContainerText}>
                        <Text style={styles.SignIn.Submit.ContainerText.text}>
                            เข้าสู่ระบบ
                        </Text>
                    </View>
                    <FontAwesome name="check-circle-o" size={50} color="white" />
                </TouchableOpacity>
                {/* SignUp Alternative */}
                <View>
                    <TouchableOpacity onPress={() => router.push("signup")}>
                        <Text style={styles.SignIn.SignUp}>
                            ไม่มีบัญชี? <Text style={{ color: colors.Button }}>สมัครสมาชิก</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Wave>
    </>)
}