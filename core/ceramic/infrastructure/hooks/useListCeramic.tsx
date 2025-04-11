import { useEffect, useState } from "react";
import { getAllCeramics } from "../../dependencies";
import { Ceramic } from "../../domain/entities";

export default function useListCeramic() {
  const [ceramics, setCeramics] = useState<Ceramic[]>([]);

  useEffect(() => {
    const setData = async () => {
      const data = await getAllCeramics.use();
      setCeramics(data);
    };

    setData();
  }, [ceramics]);

  return { ceramics };
}
