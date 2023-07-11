import { BackHandler } from "react-native";

const disableBack = () => {
  const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
  return () => backHandler.remove();
};

export default disableBack;
