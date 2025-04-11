import { CeramicValidator } from "../../domain/services/CeramicValidator";
import { NewCeramic } from "../../domain/entities";
import { addNewCeramic } from "../../dependencies";

export default function useCreateNewCeramic() {
  return async (ceramic: NewCeramic): Promise<{
    success: boolean;
    message: string;
    error?: string;
  }> => {
    try {
      CeramicValidator.validate(ceramic);
      await addNewCeramic.use(ceramic);

      return { success: true, message: "Cerámica creada correctamente" };
    } catch (e: any) {
      return {
        success: false,
        message: e.message || "Error desconocido",
        error: e.name || "ValidationError"
      };
    }
  };
}
