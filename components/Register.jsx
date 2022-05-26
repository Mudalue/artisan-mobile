import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Inputfields from "./other/Inputfields";
export const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : ""}>
        <View>
          <Text style={styles.headerText}>Create Account</Text>
          <Text style={{color: '#fff', fontFamily: 'Inter_900Black', textAlign: 'center'}}>Welcome to Artisans</Text>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.imageContainer}>
            <Icon
              name={"user"}
              color={"#fff"}
              size={30}
              style={{
                textAlign: "center",
                position: "absolute",
                top: 35,
                left: 40,
              }}
            />
            <TouchableOpacity
              style={{
                borderRadius: "50%",
                height: 45,
                width: 45,
                position: "absolute",
                top: 60,
                left: 70,
                backgroundColor: "#fff",
              }}
            >
              <Icon
                name={"plus"}
                size={20}
                style={{ textAlign: "center", padding: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: "50%",
            marginHorizontal: 20,
          }}
        >
          <View>
            <Inputfields placeholder="username" />
          </View>
          <View style={{ marginTop: 20 }}>
            <Inputfields placeholder="email" />
          </View>
          <View style={{ marginVertical: 20, display: "flex" }}>
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#000",
                  padding: 20,
                  borderColor: "#fff",
                  borderTopRightRadius: 15,
                  borderBottomStartRadius: 15,
                }}
              >
                <Text
                  style={{
                    marginHorizontal: 10,
                    color: "#ffb07c",
                    fontSize: 16,
                    fontWeight: "600",
                    fontFamily: 'Inter_900Black'
                  }}
                >
                  Continue
                </Text>
                <Icon name={"chevron-right"} color={"#ffb07c"} size={16} />
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
              <Text style={{ textAlign: "center", fontFamily: 'Inter_900Black' }}>Sign up with google</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{ marginTop: 20 }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Not New? Login
            </Text>
          </View> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "#232B2B",
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    padding: 10,
    fontWeight: "700",
    color: "#ffb07c",
    textAlign: "center",
    fontFamily: 'Inter_900Black'
  },
  firstContainer: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 100 / 2,
    backgroundColor: "#000",
    height: 100,
    width: 100,
    position: "relative",
  },
});
