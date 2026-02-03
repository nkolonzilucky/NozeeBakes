import { ChefHat, User, Search, ShoppingBasket } from "lucide-react-native";
import { Colors } from "@/constants/theme";

type Props = {
  focused: boolean;
  tabIcon: string;
};

export function TabIcon(props: Props) {
  const { focused, tabIcon } = props;
  const size = 24;
  const color = focused
    ? Colors.light.tabIconSelected
    : Colors.light.tabIconDefault;
  const icons = {
    chef_hat: focused ? (
      <ChefHat size={size} color={color} fill={undefined} />
    ) : (
      <ChefHat size={size} color={color} />
    ),
    search: focused ? (
      <Search size={size} color={color} fill={undefined} />
    ) : (
      <Search size={size} color={color} />
    ),
    shopping_bag: focused ? (
      <ShoppingBasket size={size} color={color} fill={undefined} />
    ) : (
      <ShoppingBasket size={size} color={color} />
    ),
    user: focused ? (
      <User size={size} color={color} fill={undefined} />
    ) : (
      <User size={size} color={color} />
    ),
  };
  return <>{icons[tabIcon as keyof typeof icons]}</>;
}
