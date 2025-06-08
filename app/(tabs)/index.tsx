import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text style={style.text}>Hello Expo!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: "white"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  }
});