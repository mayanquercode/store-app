import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useGetFormatsDropdownItems } from "../../infrastructure/hooks/useGetFormatsDropdownItems";

interface Props {
  onSelect: (item: { label: string; value: string }) => void;
  selectedValue?: string;
  label?: string;
  placeholder?: string;
}

const FormatsDropdownItems = ({
  onSelect,
  selectedValue = "",
  label = "Formato",
  placeholder = "Seleccione formato",
}: Props) => {
  const { dropdownItems } = useGetFormatsDropdownItems();
  const [internalValue, setInternalValue] = useState(selectedValue);

  const handleSelect = (item: { label: string; value: string }) => {
    setInternalValue(item.value);
    onSelect(item);
  };

  return (
    <Dropdown
      label={label}
      items={dropdownItems}
      onSelect={handleSelect}
      placeholder={placeholder}
      selectedValue={internalValue}
    />
  );
};

export default FormatsDropdownItems;
