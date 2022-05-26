import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Inputfields = ({ placeholder, color }) => {
  const [value, setValue] = useState("");
  const OnChange = (e) => {
    let value = e.target.value;
    setValue(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={OnChange}
        placeholderStyle={styles.placeholder}
        placeholderTextColor="#fff"
        selectionColor="#fff"
      />
    </View>
  );
};

export default Inputfields;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "#ffb07c",
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    color: "#fff",
  },
  placeholder: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
  },
});
