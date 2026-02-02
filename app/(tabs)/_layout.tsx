import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import HeaderComponent from "@/components/HeaderComponent";
import { TabIcon } from "@/components/TabIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarIconStyle: {
          flex: 1,
          alignSelf: "center",
          justifyContent: "center",
          padding: 20,
        },
        tabBarLabelStyle: {
          color: Colors.light.tabIconDefault,
        },
        // tabBarItemStyle: {
        //   // backgroundColor: "red",
        //   justifyContent: "flex-start",
        //   alignItems: "center", //vertical
        // },
        tabBarStyle: {
          flex: 1,
          position: "absolute",
          borderRadius: 40,
          backgroundColor: "#7EDC91",
          height: "auto",
          alignItems: "center",
          justifyContent: "flex-end",

          // paddingTop: 18,
          // paddingBottom: 0,
        },
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          height: 110,
          borderRadius: 40,
          backgroundColor: "#7EDC91",
        },
        sceneStyle: {
          backgroundColor: "#9BE7AE",
          marginBottom: 70,
        },
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: () => <HeaderComponent />,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} tabIcon="chef_hat" />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} tabIcon="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} tabIcon="shopping_bag" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} tabIcon="user" />
          ),
        }}
      />
    </Tabs>
  );
}
