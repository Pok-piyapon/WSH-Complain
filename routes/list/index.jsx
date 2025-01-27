import { View } from 'react-native'
import ListReport from '../../components/ListReport'
import Wave from '../../components/Wave'

export default function ListReportPage() {
    return (<>
        <Wave>
            <View style={{ width:"90%" , margin:"auto" , marginTop:40 , marginBottom: 20 }}>
                <ListReport />
            </View>
        </Wave>
    </>)
}