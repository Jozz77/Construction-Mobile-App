import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ActivityIndicator } from 'react-native';
import '../global.css'

SplashScreen.preventAutoHideAsync();

import { useFonts } from 'expo-font';

export default function Layout() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const [fontsLoaded, error] = useFonts({
    'Gilroy': require('../../assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Regular': require('../../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
  });

  // Check authentication status on mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!userToken); // If userToken exists, user is logged in
      SplashScreen.hideAsync();
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (fontsLoaded && isLoggedIn !== null) {
      if (isLoggedIn) {
        router.replace('/home'); // Redirect to the home screen if logged in
      } else {
        router.replace('/'); // Redirect to the onboarding screen if not logged in
      }
    }
  }, [isLoggedIn, fontsLoaded]);

  // Show a loading indicator while determining status
  if (!fontsLoaded || isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack>
      {/* Specific configuration for the index.tsx page */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Hide the top navigation bar on the index page
          contentStyle: { backgroundColor: 'white' },
        }}
      />
      {/* Other pages will show the default navigation */}
      <Stack.Screen name="home" options={{ headerShown: true }} />
      <Stack.Screen name="login" options={{ headerShown: true }} />
    </Stack>
  );
}
