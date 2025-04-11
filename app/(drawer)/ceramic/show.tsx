import IconButton from "@/components/IconButton/IconButton";
import StackBar from "@/components/StackBar/StackBar";
import useGetCeramic from "@/core/ceramic/infrastructure/hooks/useGetCeramic";
import LayoutScreen from "@/layouts/LayoutScreen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const StackShow = () => {
  const { code } = useLocalSearchParams<{ code: string }>();
  const { ceramic } = useGetCeramic(code);

    // Hooks
    const router = useRouter();
  
    const handleNavigationUpdate = () => {
      router.push({
        pathname: "/ceramic/update",
        params: { ceramic: JSON.stringify(ceramic) },
      });
    };
  

  const rows = [
    { label: "Código", value: ceramic.code },
    { label: "Caja - m² por caja", value: ceramic.box.meterBox },
    { label: "Caja - m² por pieza", value: ceramic.box.meterPiece },
    { label: "Caja - Nº piezas", value: ceramic.box.numPieces },
    { label: "Caja - Formato", value: ceramic.box.format },
    { label: "Stock - Bodega", value: ceramic.stock.warehouse },
    { label: "Stock - Exhibición", value: ceramic.stock.exhibition },
    { label: "Stock - Pendiente", value: ceramic.stock.pending },
    { label: "Despacho - m² por pieza", value: ceramic.dispatch.meterPiece },
  ];

  return (
    <LayoutScreen>
      <StackBar title="Info Cerámica" />
      <View style={styles.container}>
        <Text style={styles.name}>{ceramic.name}</Text>
        <ScrollView>
          {rows.map((row, index) => (
            <View
              key={index}
              style={[
                styles.row,
                index % 2 === 0 ? styles.rowEven : styles.rowOdd,
              ]}
            >
              <Text style={styles.label}>{row.label}</Text>
              <Text style={styles.value}>{row.value}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
        }}
      >
        <IconButton iconName="edit" variant="RAISED" shape="square" onPress={handleNavigationUpdate} />
      </View>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 6,
  },
  rowEven: {
    backgroundColor: "#f0f4f8",
  },
  rowOdd: {
    backgroundColor: "#e1eaf2",
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
    flex: 1,
  },
  value: {
    fontSize: 14,
    textAlign: "right",
    flex: 1,
  },
});

export default StackShow;
