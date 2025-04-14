import IconButton from "@/components/Buttons/IconButton";
import IconButtonRouter from "@/components/Buttons/IconButtonRouter";
import useGetCeramic from "@/core/ceramic/infrastructure/hooks/useGetCeramic";
import CeramicInfoItem from "@/core/ceramic/presentation/components/CeramicInfoItem";
import ContainerCeramicInfo from "@/core/ceramic/presentation/components/ContainerCeramicInfo";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useRef } from "react";
import { View, Text as RText, StyleSheet } from "react-native";
import DeleteAnimatedModal, {
  DeleteAnimatedModalRef,
} from "../components/DeleteAnimatedModal";
import useRemoveCeramic from "../../infrastructure/hooks/useRemoveCeramic";
import Text from "@/components/Text/Text";
import FlatListLazyLoading from "../components/FlatListLazyLoading";
import { formatToDDMMYYYY } from "@/libs/date";
import Icon from "@/components/Icon/Icon";

export type Voucher_Type = "TRANSFER" | "INVOICE" | "DELIVERY_NOTE";
export type Report_Type = "INGRESS" | "EGRESS";

interface VoucherInfo {
  description: string;
  prefix: string;
}

interface ReportInfo {
  description: string;
  prefix: string;
}

interface Inventory {
  ceramicCode: string;
  vaucher: Voucher_Type;
  vaucherNum: string;
  amount: number;
  origin: string;
  report: Report_Type;
  date: string;
}

const inventory: Inventory[] = [
  {
    ceramicCode: "DOCMDVD",
    origin: "SantoDomingo - Quininde",
    report: "INGRESS",
    vaucher: "TRANSFER",
    vaucherNum: "006-001-2345",
    amount: 20.34,
    date: new Date().toISOString(),
  },
  {
    ceramicCode: "DOCMDedfVD",
    origin: "SantoDomingo - Quininde",
    report: "EGRESS",
    vaucher: "INVOICE",
    vaucherNum: "006-001-5245",
    amount: 22.34,
    date: new Date().toISOString(),
  },
];

const VOUCHERS_CONFIG: Record<Voucher_Type, VoucherInfo> = {
  TRANSFER: {
    description: "Transferencia entre almacenes",
    prefix: "TR-",
  },
  INVOICE: {
    description: "Factura de venta",
    prefix: "FAC-",
  },
  DELIVERY_NOTE: {
    description: "Nota de entrega",
    prefix: "DN-",
  },
};

const REPORT_CONFIG: Record<Report_Type, ReportInfo> = {
  INGRESS: {
    description: "Ingreso de mercadería",
    prefix: "ING-", // Prefijo en español para ingresos
  },
  EGRESS: {
    description: "Salida de mercadería",
    prefix: "SAL-", // Prefijo en español para salidas
  },
};

const ScreenShowCeramic = () => {
  const { code } = useLocalSearchParams<{ code: string }>();
  const { ceramic } = useGetCeramic(code);
  const removeCeramic = useRemoveCeramic();
  const modalRef = useRef<DeleteAnimatedModalRef>(null);

  const handleDelete = () => {
    removeCeramic(ceramic.code).then((res) => {
      if (res.remove) {
        router.push("/(drawer)/ceramic");
      }
    });
  };

  const renderItem = useCallback(
    ({ item }: { item: Inventory }) => (
      <View style={{ marginBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text weight="900" size="xs">
              {VOUCHERS_CONFIG[item.vaucher].prefix}
            </Text>
            <Text weight="400" size="xs">
              {item.vaucherNum}
            </Text>
          </View>
          <Text weight="400" size="xs">
            {formatToDDMMYYYY(item.date)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text weight="900" size="xs">
              {REPORT_CONFIG[item.report].prefix}
            </Text>
            <Text weight="400" size="xs">
              {item.amount}m²
            </Text>
          </View>
          <Text weight="400" size="xs">
            {item.origin}
          </Text>
        </View>
      </View>
    ),
    []
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <RText style={[styles.name, { fontFamily: "poppins700" }]}>
          {ceramic.name}
        </RText>
        <RText style={styles.code}>{ceramic.code}</RText>

        <ContainerCeramicInfo ceramic={ceramic} />

        <View>
          <Text size="xl" weight="700" color="#343a40">
            Transferencia
          </Text>

          <View style={{ height: 400 }}>
            <FlatListLazyLoading<Inventory>
              data={inventory}
              renderItem={renderItem}
              itemHeight={90}
              initialItemsToShow={20}
              itemsPerBatch={15}
              listStyle={{ paddingVertical: 10 }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <IconButton
          iconName="delete"
          variant="RAISED"
          shape="square"
          type="ATTENTION"
          onPress={() => modalRef.current?.show()}
        />
        <IconButtonRouter
          iconName="edit"
          variant="RAISED"
          shape="square"
          pathname="/ceramic/update"
          params={{ ceramic: JSON.stringify(ceramic) }}
        />
        <IconButtonRouter
          icon={<Icon name={{ materialCommunity: "clipboard-edit-outline" }} />}
          variant="RAISED"
          shape="square"
          pathname="/ceramic/inventory"
          params={{ ceramic: JSON.stringify(ceramic) }}
        />
      </View>
      <DeleteAnimatedModal
        ref={modalRef}
        onConfirm={handleDelete}
        title={"Eliminar Ceramica"}
        message="Esta accion borrara toda la informacion asosiada al producto"
        confirmText="Eliminar"
        cancelText="Cancelar"
        modalStyle={styles.customModal}
        titleStyle={styles.customTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "light",
    marginBottom: 5,
  },
  code: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#44475a75",
    marginBottom: 15,
  },
  customModal: {
    backgroundColor: "#f8f8f8",
  },
  customTitle: {
    color: "#ff4444",
  },
});

export default ScreenShowCeramic;
