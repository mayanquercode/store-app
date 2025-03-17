import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import LayoutScreen from '@/layouts/LayoutScreen';


export default function DrawerInvoicesScreen() {
  return (
    <LayoutScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Drawer Invoices Screen</Text>
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
