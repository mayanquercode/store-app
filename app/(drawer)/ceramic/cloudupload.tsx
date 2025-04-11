import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import StackBar from "@/components/StackBar/StackBar";
import LayoutScreen from "@/layouts/LayoutScreen";
import { Ceramic } from "@/core/ceramic/domain/entities";
import { localRepository } from "@/core/ceramic/dependencies";
import IconButton from "@/components/IconButton/IconButton";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const ceramicRepository = localRepository;

const StackCloudupload = () => {
  const [outputText, setOutputText] = useState("");

  const handlePaste = async () => {
    setOutputText("");
    const text = await Clipboard.getStringAsync();
    setOutputText(text);
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(outputText);
    Alert.alert("Copiado al portapapeles");
  };

  const handleClear = () => {
    setOutputText("");
  };

  const handleSave = async () => {
    try {
      const parsed: Ceramic[] = JSON.parse(outputText);

      // Validar duplicados en el input
      const codes = parsed.map((c) => c.code);
      const duplicateCodes = codes.filter(
        (code, index) => codes.indexOf(code) !== index
      );
      if (duplicateCodes.length > 0) {
        Alert.alert(
          "Error",
          `Códigos duplicados en el input: ${[...new Set(duplicateCodes)].join(
            ", "
          )}`
        );
        return;
      }

      // Obtener los ya guardados
      const saved = await ceramicRepository.getAll();
      const savedCodes = saved.map((c) => c.code);

      // Filtrar solo los que no están repetidos
      const newCeramics = parsed.filter((c) => !savedCodes.includes(c.code));
      const repeated = parsed.filter((c) => savedCodes.includes(c.code));

      if (repeated.length > 0) {
        Alert.alert(
          "Error",
          `Los siguientes códigos ya existen en la base de datos:\n${repeated
            .map((c) => c.code)
            .join(", ")}`
        );
        return;
      }

      for (const ceramic of newCeramics) {
        await ceramicRepository.save(ceramic);
      }

      Alert.alert("Éxito", "Datos guardados correctamente");
      setOutputText("");
      handleShowDatabase();
    } catch (error) {
      Alert.alert("Error", "Formato JSON inválido");
    }
  };

  const handleShowDatabase = async () => {
    setOutputText("");
    const data = await ceramicRepository.getAll();
    setOutputText(JSON.stringify(data, null, 2));
  };

  return (
    <LayoutScreen>
      <StackBar title="Administar Cerámicas" />
      <View style={styles.container}>
        <ScrollView style={styles.outputBox}>
          <Text style={styles.outputText}>{outputText}</Text>
        </ScrollView>
        <View style={styles.buttonRow}>
          <IconButton
            iconName="copy1"
            variant="RAISED"
            shape="square"
            onPress={handleCopy}
          />
          <IconButton
            icon={<Feather name="clipboard" size={20} />}
            variant="RAISED"
            shape="square"
            onPress={handlePaste}
          />
          <IconButton
            icon={<MaterialCommunityIcons name="brush-variant" size={20} />}
            variant="RAISED"
            shape="square"
            onPress={handleClear}
          />
          <IconButton
            icon={
              <MaterialCommunityIcons
                name="database-arrow-up-outline"
                size={20}
              />
            }
            variant="RAISED"
            shape="square"
            onPress={handleSave}
          />
          <IconButton
            icon={
              <MaterialCommunityIcons name="database-eye-outline" size={20} />
            }
            variant="RAISED"
            shape="square"
            onPress={handleShowDatabase}
          />
        </View>
      </View>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    gap: 12,
    backgroundColor: "#fff",
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 6,
  },
  inputBox: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#f9f9f9",
  },
  textInput: {
    minHeight: 120,
    fontSize: 14,
  },
  outputBox: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#efefef",
  },
  outputText: {
    fontSize: 13,
    fontFamily: "monospace",
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default StackCloudupload;
