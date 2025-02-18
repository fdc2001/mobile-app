import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import {NavigationContainer,  DefaultTheme, DarkTheme,} from "@react-navigation/native";
import StackNavigation from "./src/Navigation/StackNavigation";
import i18n from "./src/services/i18n/index.js";
import {useColorScheme} from "react-native";

import * as Sentry from '@sentry/react-native';
import Constants from "expo-constants";

if (Constants.expoConfig.extra.sentry.enabled === "true") {
    Sentry.init({
        dsn: Constants.expoConfig.extra.sentry.dns,
        enableNative: false,
    });
}

export const theme = extendTheme({
    config:{
        useSystemColorMode: true,
        initialColorMode: "dark",
    }
});

function App() {
  const scheme = useColorScheme();

  return (
    <NativeBaseProvider theme={theme}>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
              <StackNavigation />
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default Sentry.wrap(App);

// Color Switch Component