import React from 'react';
import { ImageSourcePropType, ImageURISource, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { withLayoutContext } from "expo-router";
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import { AppleIcon } from 'react-native-bottom-tabs';

import MaterialIcons from '@react-native-vector-icons/material-icons';
console.log(Object.keys(MaterialIcons))
// MaterialIcons.getImageSourceSync

const homeIconSource = MaterialIcons.getImageSourceSync('home', 24, 'black');
const exploreIconSource = MaterialIcons.getImageSourceSync('explore', 24, 'black');


// Use the iconSource in an <Image> component
export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator
)

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    // screenOptions={{
    //   tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //   headerShown: false,
    //   tabBarButton: HapticTab,
    //   tabBarBackground: TabBarBackground,
    //   tabBarStyle: Platform.select({
    //     ios: {
    //       // Use a transparent background on iOS to show the blur effect
    //       position: 'absolute',
    //     },
    //     default: {},
    //   }),
    // }}

    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: (): ImageURISource | AppleIcon => Platform.OS === 'ios' ? ({ sfSymbol: "house" }) : homeIconSource!,
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: (): ImageURISource | AppleIcon => Platform.OS === 'ios' ? ({ sfSymbol: "globe" }) : exploreIconSource!,
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
