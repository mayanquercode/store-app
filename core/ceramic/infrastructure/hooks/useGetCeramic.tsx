import { useEffect, useState } from "react";
import { getCeramicByCode } from "../../dependencies";
import { Ceramic } from "../../domain/entities";

export default function useGetCeramic(code: string) {
  const [ceramic, setCeramic] = useState<Ceramic>({
    code,
    name: "",
    box: {
      meterBox: 0,
      meterPiece: 0,
      numPieces: 0,
      format: "",
    },
    stock: {
      warehouse: 0,
      exhibition: 0,
      pending: 0,
    },
    dispatch: {
      meterPiece: 0,
    },
  });

  useEffect(() => {
    const func = async () => {
      const result = await getCeramicByCode.use(code);
      if (result) {
        setCeramic(result);
      }
    };

    func();
  }, [ceramic]);

  return { ceramic };
}
