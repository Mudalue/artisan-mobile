import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Index from "./home-components/Index";
import Profile from "./home-components/Profile";
import Settings from './home-components/Settings'
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="initial"
        screenOptions={{ tabActiveTintColor: "#fff" }}
      >
        <Tab.Screen
          name="initial"
          component={Index}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => <Icon name="home" color="#232B2B" size={20} />,
            headerShown: false,
            tabBarLabelStyle: { color: "#232B2B", fontFamily: 'Inter_900Black' },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => <Icon name="user" color="#232B2B" size={20} />,
            headerShown: false,
            tabBarLabelStyle: { color: "#232B2B", fontFamily: 'Inter_900Black'},
          }}
        />
          <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: () => <Icon name="cog" color="#232B2B" size={20} />,
            headerShown: false,
            tabBarLabelStyle: { color: "#232B2B" ,fontFamily: 'Inter_900Black'},
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 5,
    backgroundColor: "#fff",
  },
});
