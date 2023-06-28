import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading"; //TODO: deprecated. expo-splash-screen 사용해서 변경하기
import * as Font from "expo-font";

import ResearchApprovementScreen from "./screens/ResearchApprovementScreen";
import LoginScreen from "./screens/LoginScreen";
import ExperimentDescriptionScreen from "./screens/ExperimentDescriptionScreen";
import FirstExperimentDescriptionScreen from "./screens/FirstExperimentDescriptionScreen";
import SecondExperimentDescriptionScreen from "./screens/SecondExperimentDescriptionScreen";
import ThirdExperimentDescriptionScreen from "./screens/ThirdExperimentDescriptionScreen";
import SoundCheckDescriptionScreen from "./screens/SoundCheckDescriptionScreen";
import SoundCheckScreen from "./screens/SoundCheckScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReadyFont, setIsReadyFont] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      heavy: require("./assets/fonts/suite_heavy.otf"),
      medium: require("./assets/fonts/suite_medium.otf"),
      regular: require("./assets/fonts/suite_regular.otf"),
    });
  };

  return isReadyFont ? (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ResearchApprovement">
        <Stack.Screen name="ResearchApprovement" component={ResearchApprovementScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ExperimentDescription" component={ExperimentDescriptionScreen} />
        <Stack.Screen name="FirstExperimentDescription" component={FirstExperimentDescriptionScreen} />
        <Stack.Screen name="SecondExperimentDescription" component={SecondExperimentDescriptionScreen} />
        <Stack.Screen name="ThirdExperimentDescription" component={ThirdExperimentDescriptionScreen} />
        <Stack.Screen name="SoundCheckDescription" component={SoundCheckDescriptionScreen} />
        <Stack.Screen name="SoundCheck" component={SoundCheckScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setIsReadyFont(true)}
      onError={() => {}} // TODO: 로딩에 에러가 났을 때, 대응 추가
    />
  );
}
