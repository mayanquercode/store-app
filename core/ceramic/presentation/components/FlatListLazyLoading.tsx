import { FlatList, FlatListProps, StyleSheet, ViewStyle } from 'react-native';
import React, { useCallback, useState } from 'react';

interface FlatListLazyLoadingProps<T> extends Omit<FlatListProps<T>, 'data' | 'renderItem'> {
  data: T[];
  renderItem: FlatListProps<T>['renderItem'];
  initialItemsToShow?: number;
  itemsPerBatch?: number;
  itemHeight?: number;
  listStyle?: ViewStyle;
  keyExtractor?: (item: T, index: number) => string;
}

const FlatListLazyLoading = <T,>({
  data,
  renderItem,
  initialItemsToShow = 15,
  itemsPerBatch = 10,
  itemHeight = 80,
  listStyle,
  keyExtractor,
  ...flatListProps
}: FlatListLazyLoadingProps<T>) => {
  const [visibleItems, setVisibleItems] = useState(initialItemsToShow);

  const loadMoreItems = useCallback(() => {
    setVisibleItems(prev => Math.min(prev + itemsPerBatch, data.length));
  }, [data.length, itemsPerBatch]);

  const getItemLayout = useCallback((
    _: ArrayLike<T> | null | undefined,
    index: number
  ) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  }), [itemHeight]);

  const defaultKeyExtractor = useCallback((item: any, index: number) => {
    if (item && typeof item === 'object') {
      return item.id ? String(item.id) : 
             item.code ? String(item.code) : 
             String(index);
    }
    return String(index);
  }, []);

  return (
    <FlatList
      data={data.slice(0, visibleItems)}
      renderItem={renderItem}
      keyExtractor={keyExtractor || defaultKeyExtractor}
      getItemLayout={getItemLayout}
      initialNumToRender={initialItemsToShow}
      maxToRenderPerBatch={15}
      updateCellsBatchingPeriod={50}
      windowSize={11}
      removeClippedSubviews={true}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0.3}
      style={[styles.container, listStyle]}
      {...flatListProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FlatListLazyLoading;