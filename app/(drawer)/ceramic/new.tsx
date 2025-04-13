import LayoutScreen from "@/layouts/LayoutScreen";
import StackBar from "@/components/StackBar/StackBar";
import ScreenNewCeramic from "@/core/ceramic/presentation/screens/ScreenNewCeramic";

const StackNew = () => {
  return (
    <LayoutScreen>
      <StackBar title="Nueva Cerámica" />
      <ScreenNewCeramic />
    </LayoutScreen>
  );
};

export default StackNew;
