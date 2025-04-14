import Button from "@/components/Buttons/Button";
import Input from "@/components/Input/Input";
import { Ceramic } from "@/core/ceramic/domain/entities";
import useUpdateCeramic from "@/core/ceramic/infrastructure/hooks/useUpdateCeramic";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import FormatsDropdownItems from "../components/FormatsDropdownItems";

type FormValues = {
  code: string;
  name: string;
  meterBox: string;
  meterPiece: string;
  numPieces: string;
  format: string;
};

const ScreenUpdateCeramic = () => {
  const { ceramic } = useLocalSearchParams<{ ceramic: string }>();
  const updateCeramic = useUpdateCeramic();

  const initialData: Ceramic = JSON.parse(ceramic);

  const [formValues, setFormValues] = useState<FormValues>({
    code: initialData.code || "",
    name: initialData.name || "",
    meterBox: initialData.box.meterBox.toString(),
    meterPiece: initialData.box.meterPiece.toString(),
    numPieces: initialData.box.numPieces.toString(),
    format: initialData.box.format || "",
  });

  const handleTextChange = (field: keyof FormValues) => (text: string) => {
    setFormValues((prev) => ({ ...prev, [field]: text }));
  };

  const handleNumberChange = (field: keyof FormValues) => (text: string) => {
    // Permitir vacío para borrado
    if (text === "") {
      setFormValues((prev) => ({ ...prev, [field]: "" }));
      return;
    }

    // Validar que sea número válido
    const numericValue = text.replace(",", ".");
    if (/^\d*\.?\d*$/.test(numericValue)) {
      setFormValues((prev) => ({ ...prev, [field]: numericValue }));
    }
  };

  const handleFormatChange = (item: { value: string }) => {
    setFormValues((prev) => ({ ...prev, format: item.value }));
  };

  const prepareCeramicData = (): Ceramic => {
    return {
      code: formValues.code,
      name: formValues.name,
      box: {
        meterBox: parseFloat(formValues.meterBox) || 0,
        meterPiece: parseFloat(formValues.meterPiece) || 0,
        numPieces: parseInt(formValues.numPieces) || 0,
        format: formValues.format,
      },
      stock: {
        warehouse: initialData.stock.warehouse,
        exhibition: initialData.stock.exhibition,
        pending: initialData.stock.pending,
      },
      dispatch: {
        meterPiece: initialData.dispatch.meterPiece,
      },
    };
  };

  const onUpdateCeramic = async () => {
    const ceramicData = prepareCeramicData();

    // Validaciones
    if (
      !ceramicData.code.trim() ||
      !ceramicData.name.trim() ||
      !ceramicData.box.format
    ) {
      Alert.alert("Error", "Por favor complete todos los campos requeridos");
      return;
    }

    if (
      isNaN(ceramicData.box.meterBox) ||
      isNaN(ceramicData.box.meterPiece) ||
      isNaN(ceramicData.box.numPieces)
    ) {
      Alert.alert("Error", "Los valores numéricos no son válidos");
      return;
    }

    updateCeramic(ceramicData).then((result) => {
      router.back();
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            label="Código"
            value={formValues.code}
            onChangeText={handleTextChange("code")}
            placeholder="Ingrese código"
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Nombre"
            value={formValues.name}
            onChangeText={handleTextChange("name")}
            placeholder="Ingrese nombre"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Input
              label="Caja (m²)"
              value={formValues.meterBox}
              onChangeText={handleNumberChange("meterBox")}
              placeholder="0.00"
              keyboardType="decimal-pad"
            />
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <FormatsDropdownItems
              onSelect={handleFormatChange}
              selectedValue={formValues.format}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Input
              label="Pieza (m²)"
              value={formValues.meterPiece}
              onChangeText={handleNumberChange("meterPiece")}
              placeholder="0.00"
              keyboardType="decimal-pad"
            />
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Input
              label="# Piezas"
              value={formValues.numPieces}
              onChangeText={handleNumberChange("numPieces")}
              placeholder="0"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text="Actualizar Cerámica"
            onPress={onUpdateCeramic}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    backgroundColor: "#4a6da7",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default ScreenUpdateCeramic;
