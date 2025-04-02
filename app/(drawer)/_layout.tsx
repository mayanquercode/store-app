import CustomDrawerContent from '@/components/CustomDrawerContent/CustomDrawerContent'
import { Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from "react-native-gesture-handler"

const itemsDrawer = [
  {
    name: 'index',
    drawerLabel: 'Inicio',
    headerTitle: 'Inicio',
    drawerIcon: ({ size, color }: { size: number, color: string }) => (
      <Ionicons name='home' size={17} color={color} />
    )
  },
  {
    name: 'todo',
    drawerLabel: 'Tareas',
    headerTitle: 'Tareas',
    drawerIcon: ({ size, color }: { size: number, color: string }) => (
      <FontAwesome5 name='tasks' size={17} color={color} />
    )
  },
  {
    name: 'box',
    drawerLabel: 'Cajas',
    headerTitle: 'Cajas',
    drawerIcon: ({ size, color }: { size: number, color: string }) => (
      <Entypo name="box" size={17} color={color} />
    )
  },
  {
    name: 'invoices',
    drawerLabel: 'Facturar',
    headerTitle: 'Facturar',
    drawerIcon: ({ size, color }: { size: number, color: string }) => (
      <FontAwesome5 name="file-invoice-dollar" size={17} color={color} />
    )
  },
  {
    name: 'ceramic',
    drawerLabel: 'Ceramica',
    headerTitle: 'Ceramica',
    drawerIcon: ({ size, color }: { size: number, color: string }) => (
      <Entypo name="grid" size={17} color={color} />
    )
  }
]

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveBackgroundColor: '#5363DF',
          drawerActiveTintColor: '#F5F5F5',
          drawerLabelStyle: {
            fontSize: 15
          },
          drawerItemStyle: {
            borderRadius: 5
          }
        }}
      >
        {itemsDrawer.map(item => (
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
  )
}

export default DrawerLayout