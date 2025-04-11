import Dropdown from "@/components/Dropdown/Dropdown";
import IconButton from "@/components/IconButton/IconButton";
import StackBar from "@/components/StackBar/StackBar";
import useListCeramic from "@/core/ceramic/infrastructure/hooks/useListCeramic";
import LayoutScreen from "@/layouts/LayoutScreen";
import CeramicCardInventory from "@/ui/ceramic/CeramicCardInventory";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

interface DropdownItems {
  label: string;
  value: string;
}

const StackInventory = () => {
  const [dropdownSelect, setDropdownSelect] = useState<string>("");
  const { ceramics } = useListCeramic();

  const dropdownItems: DropdownItems[] = ceramics.map(({ name, code }) => ({
    label: name,
    value: code,
  }));

  const selectedCeramic = ceramics.find((item) => item.code === dropdownSelect);

  return (
    <LayoutScreen>
      <StackBar title="Inventario Cerámica" />
      <View style={styles.container}>
        <Dropdown
          label="Buscar cerámica"
          items={dropdownItems}
          onSelect={(item) => setDropdownSelect(item.value)}
          placeholder="Seleccione cerámica"
          selectedValue={dropdownSelect}
        />

        {/* Mostrar la tarjeta solo si hay una cerámica seleccionada */}
        {selectedCeramic && <CeramicCardInventory ceramic={selectedCeramic} />}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
        }}
      >
        <IconButton
          icon={<FontAwesome5 name="file-invoice" size={24} />}
          variant="RAISED"
          shape="square"
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 70,
        }}
      >
        <IconButton
          icon={<FontAwesome5 name="truck-loading" size={19} />}
          variant="RAISED"
          shape="square"
        />
      </View>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default StackInventory;
