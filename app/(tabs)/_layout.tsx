import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
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
        tabBarStyle: {
          flex: 1,
          position: "absolute",
          borderRadius: 40,
          backgroundColor: "#7EDC91",
          height: "auto",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingTop: 18,
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
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} tabIcon="shopping_bag" />
          ),
        }}
      />
    </Tabs>
  );
}
