import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  selectedValue?: string | null;
  containerStyle?: object;
  dropdownStyle?: object;
}

const Dropdown: React.FC<DropdownProps> = ({ 
  label,
  items, 
  onSelect, 
  placeholder = 'Seleccionar', 
  selectedValue = null,
  containerStyle,
  dropdownStyle
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<View>(null);

  const selectedItem = items.find(item => item.value === selectedValue);

  const toggleDropdown = () => {
    if (!isOpen) {
      buttonRef.current?.measureInWindow((x, y, width, height) => {
        setDropdownPosition({
          top: y + height + 5,
          left: x,
          width: width
        });
        setIsOpen(true);
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      
      <View ref={buttonRef} collapsable={false}>
        <TouchableOpacity 
          style={[styles.dropdownButton, dropdownStyle]} 
          onPress={toggleDropdown}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialIcons 
            name={isOpen ? "arrow-drop-up" : "arrow-drop-down"} 
            size={24} 
            color="#555" 
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        
        <ScrollView style={[
          styles.dropdownList, 
          { 
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: dropdownPosition.width
          }
        ]}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.item}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.itemText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontFamily: 'poppins400',
    color: '#444',
    marginBottom: 8,
    marginLeft: 5,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    padding: 12,
    height:  45,
    fontSize: 15,
    backgroundColor: '#fff',
    color: '#333',
  },
  buttonText: {
    fontSize: 15,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dropdownList: {
    position: 'absolute',
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    padding: 12,
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 15,
    color: '#333',
  },
});

export default Dropdown;