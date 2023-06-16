import { StyleSheet } from "react-native";
import colors from "./theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 44,
    paddingHorizontal: 24,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontFamily: "medium",
    fontSize: 20,
    color: colors.GRAY_900,
  },
  content: {
    fontFamily: "regular",
    fontSize: 16,
    color: colors.GRAY_700,
  },
  button: {
    fontFamily: "heavy",
    fontSize: 20,
    color: colors.WHITE,
  },
  bigButton: {
    fontFamily: "heavy",
    fontSize: 26,
    color: colors.WHITE,
  },
});
