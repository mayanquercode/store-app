import StackBar from "@/components/StackBar/StackBar";
import ScreenUpdateCeramic from "@/core/ceramic/presentation/screens/ScreenUpdateCeramic";
import LayoutScreen from "@/layouts/LayoutScreen";

const StackUpdate = () => {
  return (
    <LayoutScreen>
      <StackBar title="Actualizar Cerámica" />
      <ScreenUpdateCeramic />
    </LayoutScreen>
  );
};

export default StackUpdate;
