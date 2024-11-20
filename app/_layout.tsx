import React, { useEffect, useState } from 'react';
import { Stack, usePathname, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import './global.css';

SplashScreen.preventAutoHideAsync();

import { useFonts } from 'expo-font';

function BottomNavigation({ activeTab, setActiveTab }: any) {
  const router = useRouter();
  const pathname = usePathname();
  type TabRoute = '/home' | '/login' | '/profile';
  
  const tabs = [
    { name: 'Home', route: '/home', icon: 'home-outline', iconActive: 'home' },
    { name: 'Profile', route: '/profile', icon: 'person-outline', iconActive: 'person' },
    
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navItem}
          onPress={() => {
            setActiveTab(tab.name);
            router.replace(tab.route as any);
          }}
        >
          <Ionicons
            name={activeTab === tab.name ? tab.iconActive : tab.icon}
            size={24}
            color={activeTab === tab.name ? '#F95E35' : '#A2A2A2'}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === tab.name ? '#F95E35' : '#A2A2A2', fontFamily: "Gilroy-Medium" },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState('Home');

  const [fontsLoaded, error] = useFonts({
    'Gilroy': require('../assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('../assets/fonts/Gilroy-Medium.ttf'),
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

  // Determine if the bottom navigation should be displayed
  // const showBottomNav = isLoggedIn && (activeTab === 'Home' || activeTab === 'Profile');
  const showBottomNav = pathname !== '/' && pathname !== '/login' &&  (activeTab === 'Home' || activeTab === 'Profile');

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false, // Hide the top navigation bar on the index page
            contentStyle: { backgroundColor: 'white' },
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            headerShown: false, // Hide header since bottom nav is shown
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerShown: false, // Hide header since bottom nav is shown
          }}
        />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
      {showBottomNav && <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    position: "fixed",
    bottom: 0,
    width: '100%',
    zIndex: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
  },
});
