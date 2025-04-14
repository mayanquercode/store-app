// useGetFormatsDropdownItems.ts
import { useEffect, useState } from "react";

interface FormatData {
  format: string;
  meterInventory: number;
  meterDispatch: number;
}

export function useGetFormatsDropdownItems() {
  const [dropdownItems, setDropdownItems] = useState<{label: string; value: string}[]>([]);

  useEffect(() => {
    const fetchFormats = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/mayanquercode/62c1554eb0422d49119beefc15732387/raw/8f87dba35507e9250acd56d23e9c8fc721d2dab3/gistfile1.txt"
        );
        
        if (!response.ok) return;
        
        const data: FormatData[] = await response.json();
        
        // Transformar los datos al formato necesario para el dropdown
        const items = data.map(item => ({
          label: item.format,
          value: item.format
        }));
        
        setDropdownItems(items);
      } catch (err) {
        console.error("Error fetching formats:", err);
        // En caso de error, dropdownItems permanece como array vacío
      }
    };

    fetchFormats();
  }, []);

  return {dropdownItems};
}