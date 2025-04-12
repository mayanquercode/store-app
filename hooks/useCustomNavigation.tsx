import { ValidRoutes } from "@/types";
import { useRouter } from "expo-router";

type NavigationParams = {
  pathname: ValidRoutes;
  params?: Record<string, string>;
};

const useCustomNavigation = () => {
  const router = useRouter();

  const navigateTo = ({ pathname, params }: NavigationParams) => {
    router.push({ pathname, params });
  };

  return navigateTo;
};

export default useCustomNavigation;