import LayoutScreen from '@/layouts/LayoutScreen';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';


export default function DrawerTodoScreen() {
  return (
    <LayoutScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Drawer Todo Screen</Text>
        <View style={styles.separator} />
      </View>
    </LayoutScreen>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
