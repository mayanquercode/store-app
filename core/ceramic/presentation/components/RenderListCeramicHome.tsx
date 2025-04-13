import React, { useCallback } from "react";
import { Ceramic } from "../../domain/entities";
import CeramicCardHome from "./CeramicCardHome";
import useListCeramic from "../../infrastructure/hooks/useListCeramic";
import FlatListLazyLoading from "./FlatListLazyLoading";

const RenderListCeramicHome = () => {
  const { ceramics } = useListCeramic();

  const renderItem = useCallback(
    ({ item }: { item: Ceramic }) => <CeramicCardHome ceramic={item} />,
    []
  );

  return (
    <FlatListLazyLoading<Ceramic>
      data={ceramics}
      renderItem={renderItem}
      itemHeight={90}
      initialItemsToShow={20}
      itemsPerBatch={15}
      listStyle={{ paddingVertical: 10 }}
    />
  );
};

export default RenderListCeramicHome;
