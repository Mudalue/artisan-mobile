import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { Index } from './components/Index';
import Login from './components/Login';
import { Register } from './components/Register';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false, headerTitleStyle: { color: "#ffb07c" }, headerStyle: { backgroundColor: "#292826" }, headerTintColor: "#fff" }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, headerTitleStyle: { color: "#ffb07c" }, headerStyle: { backgroundColor: "#292826" }, headerTintColor: "#fff" }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
