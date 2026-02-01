/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = "#1fc04d"; // Primary brand green
const tintColorDark = '#6FE08D';  // Softer green for dark mode


export const Colors = {
  light: {
    // Core
    text: "#0E0E0E",
    textSecondary: "#6B6B6B",
    background: "#6FE08D", // Main app background
    surface: "#9AF0B2", // Cards / sections
    surfaceSoft: "#E9FBEF", // Inner containers

    // Brand
    tint: tintColorLight, // Primary brand green
    accent: "#0E0E0E", // CTA buttons (Add to cart, Checkout)

    // Icons & Tabs
    icon: "#1F1F1F",
    tabBarBackground: "#6FE08D",
    tabIconDefault: "#1F1F1F",
    tabIconSelected: "#0E0E0E",

    // UI Elements
    border: "#CDEFD8",
    inputBackground: "#F1FFF5",

    // Labels / Badges
    badgeHighlight: "#FFF2B3", // "New", "Vegan", "Low kcal"
    badgeText: "#0E0E0E",
  },

  dark: {
    // Core
    text: "#ECEDEE",
    textSecondary: "#9BA1A6",
    background: "#0F1F16", // Deep green-black
    surface: "#163F2B",
    surfaceSoft: "#1F5A3A",

    // Brand
    tint: tintColorDark,
    accent: "#FFFFFF",

    // Icons & Tabs
    icon: "#9BA1A6",
    tabBarBackground: "#0F1F16",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#FFFFFF",

    // UI Elements
    border: "#1F5A3A",
    inputBackground: "#163F2B",

    // Labels / Badges
    badgeHighlight: "#3A5F2B",
    badgeText: "#FFFFFF",
  },
};



export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
