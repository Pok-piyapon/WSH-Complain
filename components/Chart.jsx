import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit';
import styles from '../styles/styles.css';
const screenWidth = Dimensions.get('window').width;

export default function Chart() {
    return (<>
        <LineChart
            data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        data: [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10],
                        color: () => '#6A5AE0', // Gradient-like effect
                    },
                ],
            }}
            width={screenWidth - 20} // Fullscreen width
            height={180}
            chartConfig={{
                backgroundColor: '#FFFFFF',
                backgroundGradientFrom: '#FFFFFF',
                backgroundGradientTo: '#FFFFFF',
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffffff',
                },
            }}
            bezier
            style={styles.Chart.chart}
        />
    </>)
}