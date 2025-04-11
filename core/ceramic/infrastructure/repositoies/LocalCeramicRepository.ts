import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ceramic, CeramicRepository } from "../../domain/entities";

const STORAGE_KEY = '@ceramics_v1.0.0';

export default class LocalCeramicRepository implements CeramicRepository {
  async getAll(): Promise<Ceramic[]> {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      return json ? JSON.parse(json) : [];
    } catch (error) {
      console.error("Error reading from AsyncStorage:", error);
      return [];
    }
  }

  async getOne(code: string): Promise<Ceramic | null> {
    const data = await this.getAll();
    const ceramic = data.find(item => item.code === code);
    return ceramic || null;
  }

  async save(ceramic: Ceramic): Promise<void> {
    try {
      const current = await this.getAll();
      const index = current.findIndex(item => item.code === ceramic.code);

      let updated: Ceramic[];

      if (index !== -1) {
        // Ya existe: actualizar
        current[index] = ceramic;
        updated = [...current];
      } else {
        // No existe: agregar
        updated = [...current, ceramic];
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error("Error saving to AsyncStorage:", error);
      throw new Error("No se pudo guardar la cerámica localmente");
    }
  }
}
