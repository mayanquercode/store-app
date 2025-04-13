import DrawerBar from "@/components/DrawerBar/DrawerBar";
import LayoutScreen from "@/layouts/LayoutScreen";
import ScreenHomeCeramic from "@/core/ceramic/presentation/screens/ScreenHomeCeramic";

const StackIndex = () => {
  return (
    <LayoutScreen>
      <DrawerBar title="Ceramica" />
      <ScreenHomeCeramic />
    </LayoutScreen>
  );
};

export default StackIndex;
