import { StyleSheet } from "react-native";

// Preset Colours
export const colors = {
    Button: "#a700cf",
    backgroundColor:"#FFFFFB",
    ListColor:"#F3F4F6"
}
const styles = StyleSheet.create({
    SignIn: {
        Layout: {
            alignItems: "center",
            justifyContent: "center",
            flex: 1
        },
        Submit: {
            margin: "auto",
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: "10",
            paddingRight: "5",
            backgroundColor: colors.Button,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 25,
            ContainerText: {
                color: "white",
                fontWeight: 'bold',
                fontSize: 16,
                width: "80%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                text: {
                    color: "white",
                    fontWeight: 'bold',
                    fontSize: 16,
                    paddingLeft: 15
                }
            }
        },
        SignUp: {
            color: "gray"
        }
    },
    svg: {
        position: 'absolute',
        bottom: -10,
        left: 0,
        right: 0,
    },
    ProtectFrame: {
        paddingTop: 0,
        flex: 1
    },
    Chart: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1c1c1e',
        },
        chart: {
            borderRadius: 20,
        },
    },
    Home: {
        container: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap', // Makes the items wrap to the next row
            justifyContent: 'space-between', // Spaces the boxes evenly
            padding: 10,
            
        },
        box: {
            width: '49%', // Adjust based on number of columns
            aspectRatio: 1, // Keeps the box square
            backgroundColor: colors.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            borderRadius:5,
            overflow:"hidden"
        },
        text: {
            color: 'black',
            fontSize: 16,
            marginLeft:5,
        },
    }
})


export default styles