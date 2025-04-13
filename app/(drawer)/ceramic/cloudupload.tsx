import LayoutScreen from "@/layouts/LayoutScreen";
import StackBar from "@/components/StackBar/StackBar";
import ScreenClouduploadCeramic from "@/core/ceramic/presentation/screens/ScreenClouduploadCeramic";

const StackCloudupload = () => {
  return (
    <LayoutScreen>
      <StackBar title="Administar Cerámicas" />
      <ScreenClouduploadCeramic />
    </LayoutScreen>
  );
};

export default StackCloudupload;
