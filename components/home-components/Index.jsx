import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Carousel from "react-native-snap-carousel";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Mr Saheed Oganla",
          text: "Plumber",
          ratings: "4 stars",
        },
        {
          title: "Abiodun Mudalue",
          text: "Carpenter",
          ratings: "5 stars",
        },
        {
          title: "Micheal John",
          text: "Hair Stylist",
          ratings: "5 stars",
        },
        {
          title: "Sanjay Gupta",
          text: "Barber",
          ratings: "6 stars",
        },
        {
          title: "Sophia Traore",
          text: "Event Planner",
          ratings: "4.5 stars",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "#232B2B",
          borderRadius: 5,
          height: "auto",
          padding: 20,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}
      >
        <View>
          <Icon
            name="ellipsis-v"
            color="#232B2B"
            size={20}
            style={{ textAlign: "right" }}
          />
        </View>
        <Image
          source={require("../../assets/placeholder.jpg")}
          style={{ width: "100%", height: 200, marginTop: 5, borderRadius: 8 }}
        ></Image>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "700",fontFamily: 'Inter_900Black', color: '#fff'}}>
          {item.title}
        </Text>
        <Text style={{fontFamily: 'Inter_900Black', color: '#fff'}}>{item.text}</Text>
        <Text style={{fontFamily: 'Inter_900Black', color: '#fff'}}>{item.ratings}</Text>
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#ffb07c",
                color: "#fff",
                width: "40%",
                padding: 10,
                fontFamily: 'Inter_900Black'
              }}
            >
              {" "}
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "#232B2B",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 30,
                fontWeight: "500",
                fontFamily: "Inter_900Black",
              }}
            >
              Advertise Here
            </Text>
          </View>
          <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="search for artisans"
              placeholderStyle={styles.placeholder}
              placeholderTextColor="#232B2B"
              selectionColor="#232B2B"
            />
          </View>
          <View>
            <Text style={styles.headers}>Top Rated Artisans</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Carousel
              layout={"default"}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
            />
          </View>
          <View>
            <Text style={[styles.headers, { marginVertical: 25 }]}>
              Artisans Category
            </Text>
            <ImageBackground
              source={require("../../assets/carpenter.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 200,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  fontWeight: "700",
                  color: "#fff",
                  fontFamily: "Inter_900Black",
                }}
              >
                Carpentry
              </Text>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/hairdresser.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 200,
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  fontWeight: "700",
                  color: "#fff",
                  fontFamily: "Inter_900Black",
                }}
              >
                Hair Stylist
              </Text>
            </ImageBackground>
            <ImageBackground
              source={require("../../assets/tailor.jpg")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 200,
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 40,
                  fontWeight: "700",
                  color: "#fff",
                  fontFamily: "Inter_900Black",
                }}
              >
                Fashion Design
              </Text>
            </ImageBackground>
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    backgroundColor: "#232B2B",
                    color: "#fff",
                    padding: 20,
                    fontWeight: "600",
                    fontFamily: "Inter_900Black",
                  }}
                >
                  see more Artisans
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 5,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#232B2B",
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    color: "#232B2B",
  },
  placeholder: {
    fontSize: 12,
    fontWeight: "400",
    color: "#232B2B",
    fontFamily: "Inter_900Black",
  },
  headers: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: "800",
    fontFamily: "Inter_900Black",
  },
});
