import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Inputfields from "./other/Inputfields";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : ""}>
        <View>
          <Text style={styles.headerText}>Log In</Text>
          <Text style={{color: '#fff', fontFamily: 'Inter_900Black', textAlign: 'center'}}>Welcome back to Artisans</Text>
        </View>
        <View style={styles.content}>
          <View>
            <Inputfields placeholder="username" />
          </View>
          <View style={{ marginTop: 20 }}>
            <Inputfields placeholder="email" />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ textAlign: "right", color: "#fff" }}>
              Forgot Password?
            </Text>
          </View>
          <View style={{ marginTop: 10, display: "flex", marginBottom: 20 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={styles.btnContent}>
                <Text style={styles.btnText}>Login</Text>
                {/* <Icon name={"check"} color={"#ffb07c"} size={16} /> */}
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ textAlign: "center", color: "#fff" }}>or</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{ backgroundColor: "#fff", width: "60%", padding: 8 }}
            >
              <Text style={{ textAlign: "center", fontFamily: 'Inter_900Black' }}>Login with google</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={{ marginTop: 20 }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                fontFamily: 'Inter_900Black'
              }}
            >
              New to Artisans? SIgn up
            </Text>
          </View> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232B2B",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: 10,
  },
  content: {
    height: "50%",
    backgroundColor: "#232B2B",
    marginTop: 50,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    padding: 20,
    fontWeight: "700",
    color: "#ffb07c",
    textAlign: "center",
    fontFamily: 'Inter_900Black'
  },
  btnContent: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#000",
    padding: 20,
    borderColor: "#fff",
    borderTopRightRadius: 15,
    borderBottomStartRadius: 15,
  },
  btnText: {
    marginHorizontal: 10,
    color: "#ffb07c",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: 'Inter_900Black'
  },
});
