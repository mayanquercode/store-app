import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import Input from "@/components/Input/Input";
import StackBar from "@/components/StackBar/StackBar";
import LayoutScreen from "@/layouts/LayoutScreen";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

interface Ceramic {
  name: string;
  code: string;
  format: string;
  piece: string;
  pieces: string;
  box: string;
}

const initialFormData: Ceramic = {
  name: "",
  code: "",
  format: "",
  piece: "",
  pieces: "",
  box: ""
};

const StackNew = () => {
  const [formData, setFormData] = useState<Ceramic>(initialFormData);

  const dropdownItems = [
    { label: "60X120", value: "0.72" },
    { label: "60X60", value: "0.36" },
    { label: "30X60", value: "0.18" },
    { label: "45X45", value: "0.21" },
    { label: "30X30", value: "0.10" },
  ];

  const onCreateCeramic = () => {
    // Validación básica
    if (!formData.name.trim()) {
      Alert.alert("Error", "El nombre es requerido");
      return;
    }

    // Aquí iría la lógica para enviar los datos
    console.log("Datos a enviar:", formData);
    Alert.alert("Éxito", "Cerámica creada correctamente");

    // Limpiar formulario después de enviar
    setFormData(initialFormData);
  };

  return (
    <LayoutScreen>
      <StackBar title="Nueva Cerámica" />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            label="Código"
            value={formData.code}
            onChangeText={(text) => setFormData({ ...formData, code: text })}
            placeholder="Ingrese código"
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Nombre"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            placeholder="Ingrese nombre"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Input
              label="Caja"
              value={formData.box}
              onChangeText={(text) => setFormData({ ...formData, box: text })}
              placeholder="0.00"
              keyboardType="decimal-pad"
            />
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Dropdown
              label="Formato"
              items={dropdownItems}
              onSelect={(item) => setFormData({ ...formData, format: item.value })}
              placeholder="Seleccione formato"
              selectedValue={formData.format}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Input
              label="Pieza"
              value={formData.piece}
              onChangeText={(text) => setFormData({ ...formData, piece: text })}
              placeholder="0.00"
              keyboardType="decimal-pad"
            />
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Input
              label="# Piezas"
              value={formData.pieces}
              onChangeText={(text) => setFormData({ ...formData, pieces: text })}
              placeholder="0"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            text="Crear Cerámica" 
            onPress={onCreateCeramic} 
            style={styles.button}
          />
        </View>
      </View>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    backgroundColor: '#4a6da7',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StackNew;