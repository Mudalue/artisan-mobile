import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Artisans</Text>
        <Text style={styles.intro}>bringing artisans together...</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Register")}>
          <Text style={styles.btntext}>Get started</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#232B2B",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 60,
    fontWeight: "800",
    color: "#ffb07c",
    fontFamily: 'Inter_900Black'
  },
  btn: {
    marginTop: 40,
  },
  button: {
    backgroundColor: "#ffb07c",
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  header: {
    marginVertical: "50%",
  },
  btntext: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: 'Inter_900Black'
  },
  statusbar: {
    color: "#ffb07c",
  },
  intro: {
    fontStyle: "italic",
    color: "#fff",
    marginVertical: 10,
    fontSize: 17,
    fontFamily: 'Inter_900Black'
  },
});
