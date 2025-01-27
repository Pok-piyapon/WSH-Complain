import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
// app starter
import { AppProvider } from "./wrapers/startapp"
const Stack = createStackNavigator();
// Routes
import SignIn from './routes/auth/signin';
import SignUp from './routes/auth/signup';
import Home from './routes/home';
import ListReport from './routes/list';
import ContentPage from './routes/content';
import ComplainPage from './routes/complain';
import FollowPage from './routes/follow';
import LoadingPage from './routes/loading';

// use Any custom
import { View , Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function App() {
  return (
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='loading'>
            <Stack.Screen options={{
              headerShown: false
            }} name="signin" component={SignIn} />
            <Stack.Screen options={{
              headerShown: false
            }} name="signup" component={SignUp} />
            <Stack.Screen options={{ headerShown:false }} name="home" component={Home} />
            <Stack.Screen options={{ headerShown:false }} name='list' component={ListReport} />
            <Stack.Screen name='content' component={ContentPage} />
            <Stack.Screen name='complain' component={ComplainPage} />
            <Stack.Screen options={{ headerShown:false }} name='follow' component={FollowPage} />
            <Stack.Screen options={{ headerShown : false }} name='loading' component={LoadingPage} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </AppProvider>
  );
}
