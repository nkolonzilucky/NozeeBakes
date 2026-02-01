import { View } from "react-native";
import { ChefHat, User, Search, ShoppingBasket } from "lucide-react-native";
import { Colors } from "@/constants/theme";


type Props = {
    focused:boolean,
    tabIcon: string
}

export function TabIcon(props: Props) {
    const { focused, tabIcon } = props
    const size = 28;
    const icons = {
      chef_hat: (
        <ChefHat
          size={size}
          color={focused ? Colors.light.accent : Colors.light.icon}
        />
      ),
      search: (
        <Search
          size={size}
          color={focused ? Colors.light.accent : Colors.light.icon}
        />
      ),
      shopping_bag: (
        <ShoppingBasket
          size={size}
          color={focused ? Colors.light.accent : Colors.light.icon}
        />
      ),
      user: (
        <User
          size={size}
          color={focused ? Colors.light.accent : Colors.light.icon}
          
        />
      ),
    };
  return (
    <View
      style={{
        backgroundColor: focused ? Colors.light.surface : "transparent",
        padding: 10,
        borderRadius: 999,
      }}
      >
          {icons[tabIcon as keyof typeof icons]}
      
    </View>
  );
}
