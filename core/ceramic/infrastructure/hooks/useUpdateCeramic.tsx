import { updateCeramicByCode } from "../../dependencies";
import { NewCeramic } from "../../domain/entities";

export default function useUpdateCeramic() {
  return async (ceramicData: NewCeramic): Promise<boolean> => {
    const result = await updateCeramicByCode.use(ceramicData);

    return Promise.resolve(result);
  };
}
