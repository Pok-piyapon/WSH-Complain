import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import wsh from '../services/webservice_api'
import { useEffect, useState } from 'react'
import { colors } from '../styles/styles.css'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function ListReport() {

    const router = useNavigation()
    const [list, setList] = useState(false)
    useEffect(() => {
        wsh.get(`/complain?Department=11`).then(({ data }) => {
            setList(data)
        })
    }, [])

    return (
        <ScrollView style={{ ...styles.Container, zIndex: 999 }}>
            {
                list ? list.Results.map((item, key) => (
                    <View style={styles.box} key={key}>
                        <View style={styles.box.title}>
                            {
                                item.ComplaintStatus == "อยู่ระหว่างดำเนินการ" ?
                                    <FontAwesome name='dot-circle-o' size={15} color={"#F59E0B"} />
                                    :
                                    <FontAwesome name='dot-circle-o' size={15} color={"#10B981"} />
                            }
                            <Text style={{ marginLeft: 10 }}>
                                {item.ComplaintNote}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => router.push("content", { data: item })} style={styles.box.info}>
                            <Text style={{ marginRight: 5, color: "gray", fontSize: 10 }}>
                                {
                                    item.ComplaintDate
                                }
                            </Text>
                            <FontAwesome name='arrow-right' color={colors.Button} />
                        </TouchableOpacity>
                    </View>
                )) : (new Array(20).fill(0)).map((item, key) => (
                    <View style={styles.box} key={key}>
                        <Text>กำลังโหลด...</Text>
                    </View>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.backgroundColor,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        margin:"auto",
        borderWidth:0.5
    },
    box: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: colors.ListColor,
        flexDirection: "row",
        justifyContent: "space-between",
        title: {
            flexDirection: "row"
        },
        info: {
            flexDirection: "row",
            alignItems: "center"
        }
    }
})