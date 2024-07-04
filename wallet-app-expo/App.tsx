import React, { useEffect } from 'react';
import Welcome from './screens/Welcome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RootStack from './navigators/RootStack';

export default function App() {
  let [fontsloaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });


  // Prevent splash screen from hiding automatically
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsloaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsloaded]);

  if (!fontsloaded) {
    return null; // Return null until fonts are loaded
  }

  return (
    <RootStack Welcome={undefined} />
  );
};

