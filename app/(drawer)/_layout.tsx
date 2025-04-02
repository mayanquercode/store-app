import CustomDrawerContent from "@/components/CustomDrawerContent/CustomDrawerContent";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const itemsDrawer = [
  {
    name: "index",
    drawerLabel: "Inicio",
    headerTitle: "Inicio",
    drawerIcon: ({ size, color }: { size: number; color: string }) => (
      <Ionicons name="home" size={17} color={color} />
    ),
  },
  {
    name: "ceramic",
    drawerLabel: "Ceramica",
    headerTitle: "Ceramica",
    drawerIcon: ({ size, color }: { size: number; color: string }) => (
      <Entypo name="box" size={17} color={color} />
    ),
  },
];

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#5363DF",
          drawerActiveTintColor: "#F5F5F5",
          drawerLabelStyle: {
            fontSize: 15,
          },
          drawerItemStyle: {
            borderRadius: 5,
          },
        }}
      >
        {itemsDrawer.map((item) => (
          <Drawer.Screen
            key={item.name}
            name={item.name}
            options={{
              drawerLabel: item.drawerLabel,
              headerTitle: item.headerTitle,
              drawerIcon: item.drawerIcon,
            }}
          />
        ))}
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
