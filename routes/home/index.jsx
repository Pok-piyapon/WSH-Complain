import { Text, View, TouchableOpacity, Image , Linking } from 'react-native'
import Wave from '../../components/Wave'
import Chart from '../../components/Chart'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import ListReport from '../../components/ListReport';

import styles from '../../styles/styles.css';
import { colors } from '../../styles/styles.css';
import Toast from 'react-native-toast-message';
import { AppContext } from '../../wrapers/startapp';
import { useContext } from 'react';
import api from '../../services/api';
import wsh from '../../services/webservice_api';
export default function Home() {
    const user = useContext(AppContext)
    const router = useNavigation()
    return (<>
        <Wave top={true} bottom={true}>
            <View style={{ zIndex:999 , alignItems: "center", justifyContent: "center", marginTop: "10%" }}>
                {/* Profile*/}
                <View style={{ borderWidth:0.5 , backgroundColor:colors.backgroundColor, padding:5 , borderRadius:10 , flexDirection:"row" , alignItems:"center" , justifyContent:"space-between", width:"93%" , margin:"auto",marginTop:10,marginBottom:10  }}>
                    <View style={{ flexDirection:"row" , alignItems:"center" }}>
                        <Image style={{ width: 40, height: 40 , marginRight:5 }} source={{ uri:`${api.defaults.baseURL}/images/${user.state.data?.profile}` }} />
                        <Text>{user.state.data?.firstname} {user.state.data?.lastname}</Text>
                    </View>
                    <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between" , width:"25%"}}>
                        <FontAwesome style={{ opacity:0.7 }} onPress={()=> {}} name='bell-o' size={30} />
                        <FontAwesome style={{ opacity:0.7 }} onPress={()=> SignOut(router)} name='sign-out' size={30} />
                    </View>
                </View>
                <Chart />
                <View style={styles.Home.container}>
                    <TouchableOpacity onPress={() => router.push("list")} style={{ ...styles.Home.box }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <FontAwesome name='th-list' size={20} color={colors.Button} />
                            <Text style={styles.Home.text}>รายการร้องเรียน</Text>
                            <Svg style={{
                                position: "absolute",
                                opacity: 0.7,
                                bottom: -86,
                                right: -10,
                            }} viewBox="0 0 800 800" width={100} height={100} xmlns="http://www.w3.org/2000/svg">
                                <Circle r="245" cx="400" cy="400" fill="#a700aa" stroke="#a700aa" strokeWidth="10" />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('complain')} style={styles.Home.box}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <FontAwesome name='pencil' size={20} color={colors.Button} />
                            <Text style={styles.Home.text}>ร้องเรียน</Text>
                            <Svg style={{
                                position: "absolute",
                                opacity: 0.7,
                                bottom: -86,
                                right: -10,
                            }} viewBox="0 0 800 800" width={100} height={100} xmlns="http://www.w3.org/2000/svg">
                                <Rect x="200" y="200" width="400" height="400" fill="#a700aa"></Rect>
                            </Svg>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('follow')} style={styles.Home.box}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <FontAwesome name='bookmark' size={20} color={colors.Button} />
                            <Text style={styles.Home.text}>สถานะร้องเรียน</Text>
                            <Svg style={{
                                position: "absolute",
                                opacity: 0.7,
                                bottom: -86,
                                right: -10,
                            }} viewBox="0 0 800 800" width={100} height={100} xmlns="http://www.w3.org/2000/svg">
                                <Path
                                    d="M 50 400 Q 100 0 250 400 Q 400 800 550 400 Q 700 0 750 400"
                                    fill="#a700aa"
                                    stroke="#a700aa"
                                    strokeWidth={50}
                                />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> Linking.openURL(wsh.defaults.baseURL.split("/Api")[0])} style={styles.Home.box}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <FontAwesome name='comments' size={20} color={colors.Button} />
                            <Text style={styles.Home.text}>ติดตามเรา</Text>
                            <Svg style={{
                                position: "absolute",
                                opacity: 0.7,
                                bottom: -86,
                                right: -10,
                            }} viewBox="0 0 800 800" width={100} height={100} xmlns="http://www.w3.org/2000/svg">
                                <Path
                                    d="M 50 400 Q 100 0 250 400 Q 400 800 550 400 Q 700 0 750 400"
                                    fill="#a700aa"
                                    stroke="#a700aa"
                                    strokeWidth={50}
                                />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{  borderWidth:0.5 , borderRadius:10 , marginTop: "55%", width: "95%", height: "32%" }}>
                    <ListReport />
                </View>
            </View>
        </Wave>
    </>)
}

// Logout Function
import { RemoveData } from '../../services/storage';
async function SignOut(router) {
    try {
        await RemoveData("refreshToken")
        await RemoveData("accessToken")
        router.push('loading')
    }catch(e) {
        Toast.show({
            type:"success",
            text1:e.message
        })
    }
}