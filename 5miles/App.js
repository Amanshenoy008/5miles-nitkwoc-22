import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Image} from 'react-native';
import Input from './input.js'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Chatroom from './pages/main.js';

function Login() {


  return (
    <View style={styles.container}>
      <Image source={require('./assets/5miles-logo.png')} style={{ width: 310, height: 310 , borderRadius:40 }} />
      <Input />
      <StatusBar style="auto" />
    </View>
  )
}

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown:false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown:false }} name="Chatroom" component={Chatroom} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20D789',
    alignItems: 'center',
    justifyContent: 'center',
    
  },


})
