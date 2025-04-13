import LayoutScreen from "@/layouts/LayoutScreen";
import StackBar from "@/components/StackBar/StackBar";
import ScreenShowCeramic from "@/core/ceramic/presentation/screens/ScreenShowCeramic";

const StackShow = () => {
  return (
    <LayoutScreen>
      <StackBar title="Info Cerámica" />
      <ScreenShowCeramic />
    </LayoutScreen>
  );
};

export default StackShow;
