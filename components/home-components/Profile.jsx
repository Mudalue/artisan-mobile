import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
       
      }}
    >
      <View style={{ backgroundColor: "#232B2B" , height: '50%',  paddingTop: 40,}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 30,
            paddingBottom: 20,
          }}
        >
          <Image
            source={require("../../assets/profile.jpg")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 25,
            fontWeight: "800",
            fontFamily: "Inter_900Black",
          }}
        >
          Abiodun Mudalue
        </Text>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "500",
            marginTop: 5,
            fontFamily: "Inter_900Black",
          }}
        >
          Lagos, Nigeria
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Icon
            name="facebook"
            color="#fff"
            size={20}
            style={{ marginHorizontal: 10 }}
          />
          <Icon
            name="twitter"
            color="#fff"
            size={20}
            style={{ marginRight: 10 }}
          />
          <Icon name="linkedin" color="#fff" size={20} />
          <Icon
            name="instagram"
            color="#fff"
            size={20}
            style={{ marginHorizontal: 10 }}
          />
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              backgroundColor: "#ffb07c",
              paddingHorizontal: 20,
              marginTop: 10,
              paddingVertical: 10,
              fontFamily: "Inter_900Black",
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          height: '50%'
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text style={styles.statisticsText}>120</Text>
            <Text style={styles.statisticsText2}>Customers</Text>
          </View>
          <View>
            <Text style={styles.statisticsText}>200</Text>
            <Text style={styles.statisticsText2}>Transactions</Text>
          </View>

          <View>
            <Text style={styles.statisticsText}>{"\u20A6"}500k</Text>
            <Text style={styles.statisticsText2}>Balance</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 20,
              fontWeight: "800",
              color: "#232B2B",
              fontFamily: "Inter_900Black",
            }}
          >
            Activities
          </Text>
          <ScrollView style={{ marginTop: 10, paddingHorizontal: 20 }}>
            <View
              style={{
                height: 70,
                borderTopColor: "#232B2B",
                borderTopWidth: 1,
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                borderLeftWidth: 10,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderColor: "#232B2B",
                borderLeftColor: "#ffb07c",
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    color: "#232B2B",
                    fontFamily: "Inter_900Black",
                  }}
                >
                  Boladale bodulas
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "800",
                    marginTop: 5,
                    color: "#232B2B",
                    fontFamily: "Inter_900Black",
                  }}
                >
                  {"\u20A6"}400000
                </Text>
              </View>
              <View>
                <Icon
                  name="paypal"
                  color="#232B2B"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
              </View>
            </View>
            <View
              style={{
                height: 70,
                borderTopColor: "#232B2B",
                borderTopWidth: 1,
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                borderLeftWidth: 10,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginVertical: 10,
                borderColor: "#232B2B",
                borderLeftColor: "#ffb07c",
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    fontFamily: "Inter_900Black",
                  }}
                >
                  Boladale bodulas
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "800",
                    marginTop: 5,
                    fontFamily: "Inter_900Black",
                  }}
                >
                  {"\u20A6"}200000
                </Text>
              </View>
              <View>
                <Icon
                  name="bitcoin"
                  color="#232B2B"
                  size={25}
                  style={{ marginHorizontal: 10 }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  statisticsText: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    color: "#232B2B",
    fontFamily: "Inter_900Black",
  },
  statisticsText2: {
    textAlign: "center",
    fontFamily: "Inter_900Black",
  },
});
