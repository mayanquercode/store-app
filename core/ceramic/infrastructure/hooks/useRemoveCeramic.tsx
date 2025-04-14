import { removeCeramicByCode } from "../../dependencies";

interface ResultPromise {
  message: string;
  remove: boolean;
}

export default function useRemoveCeramic() {
  return async (code: string): Promise<ResultPromise> => {
    const result = await removeCeramicByCode.use(code);

    if (!result) {
      return Promise.resolve({
        message: "No se pudo eliminar",
        remove: result,
      });
    }

    return Promise.resolve({
      message: "Eliminacion exitosa",
      remove: result,
    });
  };
}
