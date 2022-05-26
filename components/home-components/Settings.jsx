import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Settings = ({navigation}) => {
  return (
    <View style={{ display: "flex", width: "100%", padding: 15 }}>
      <TouchableOpacity style={{ height: 50, marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#232B2B', paddingTop: 15, borderLeftWidth: 10, borderRightWidth: 1  }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon
            name="lock"
            color="#232B2B"
            size={15}
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{fontFamily: 'Inter_900Black'}}>Change Password</Text>
        </View>
        <Icon
            name="chevron-right"
            color="#232B2B"
            size={25}
            style={{ marginHorizontal: 10 }}
          />
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 50, marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#232B2B', paddingTop: 15, borderLeftWidth: 10, borderRightWidth: 1 }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon
            name="user"
            color="#232B2B"
            size={15}
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{fontFamily: 'Inter_900Black'}}>Add customers</Text>
        </View>
        <Icon
            name="chevron-right"
            color="#000"
            size={25}
            style={{ marginHorizontal: 10 }}
          />
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 50, marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#232B2B', paddingTop: 15, borderLeftWidth: 10, borderRightWidth: 1  }} onPress={()=>navigation.navigate("Index")}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon
            name="arrow-right"
            color="#000"
            size={15}
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{fontFamily: 'Inter_900Black'}}>Logout</Text>
        </View>
        <Icon
            name="chevron-right"
            color="#000" 
            size={25}
            style={{ marginHorizontal: 10 }}
          />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
