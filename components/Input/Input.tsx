import React from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
  containerStyle?: object;
}

const Input: React.FC<CustomInputProps> = ({
  label,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholderTextColor="#999" {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: "#444",
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    height: 45,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#fff",
    color: "#333",
  },
});

export default Input;
