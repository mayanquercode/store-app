import Dropdown from "@/components/Dropdown/Dropdown";
import IconButton from "@/components/Buttons/IconButton";
import useListCeramic from "@/core/ceramic/infrastructure/hooks/useListCeramic";
import CeramicCardInventory from "@/core/ceramic/presentation/components/CeramicCardInventory";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Text from "@/components/Text/Text";
import { Voucher_Type } from "./ScreenShowCeramic";
import Input from "@/components/Input/Input";

interface DropdownItems {
  label: string;
  value: string;
}

const ScreenInventoryCeramic = () => {

  const [voucher, setVoucher] = useState<Voucher_Type | string>('')
  const [dropdownItems, _] = useState<{label: string; value: Voucher_Type}[]>([
    {
      label: 'Factura',
      value: 'INVOICE'
    },
    {
      label: 'Transferencia',
      value: 'TRANSFER'
    },
    {
      label: 'Nota Entrega',
      value: 'DELIVERY_NOTE'
    }
  ]);


  const onSelectVoucher = (item: { label: string; value: Voucher_Type }) => {
    setVoucher(item.value);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Dropdown
          items={dropdownItems}
          label="Comprobante"
          onSelect={onSelectVoucher as never}
          selectedValue={voucher}
        />
        <Input label="Numero Comprobante" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default ScreenInventoryCeramic;
