import LayoutScreen from "@/layouts/LayoutScreen";
import StackBar from "@/components/StackBar/StackBar";
import ScreenInventoryCeramic from "@/core/ceramic/presentation/screens/ScreenInventoryCeramic";

const StackInventory = () => {
  return (
    <LayoutScreen>
      <StackBar title="Inventario Cerámica" />
      <ScreenInventoryCeramic />
    </LayoutScreen>
  );
};

export default StackInventory;
