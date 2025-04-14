import React, { forwardRef, useImperativeHandle } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  Easing,
} from "react-native-reanimated";

type DeleteAnimatedModalProps = {
  onConfirm?: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  modalStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  messageStyle?: StyleProp<TextStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  confirmButtonTextStyle?: StyleProp<TextStyle>;
  cancelButtonTextStyle?: StyleProp<TextStyle>;
};

export type DeleteAnimatedModalRef = {
  show: () => void;
  hide: (callback?: () => void) => void;
};

const DeleteAnimatedModal = forwardRef<
  DeleteAnimatedModalRef,
  DeleteAnimatedModalProps
>(
  (
    {
      onConfirm,
      title,
      message,
      confirmText = "Delete",
      cancelText = "Cancel",
      modalStyle,
      titleStyle,
      messageStyle,
      confirmButtonStyle,
      cancelButtonStyle,
      confirmButtonTextStyle,
      cancelButtonTextStyle,
    },
    ref
  ) => {
    const translateY = useSharedValue(-300);
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.9);
    const isVisible = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
      opacity: opacity.value,
    }));

    const backdropStyle = useAnimatedStyle(() => ({
      opacity: opacity.value * 0.5,
      display: isVisible.value ? "flex" : "none",
    }));

    const show = () => {
      isVisible.value = true;
      translateY.value = -300;
      opacity.value = 0;
      scale.value = 0.9;

      translateY.value = withSequence(
        withTiming(0, {
          duration: 500,
          easing: Easing.out(Easing.cubic),
        }),
        withTiming(-10, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );

      opacity.value = withTiming(1, { duration: 500 });
      scale.value = withSequence(
        withTiming(1.05, { duration: 500 }),
        withTiming(1, { duration: 100 })
      );
    };

    const hide = (callback?: () => void) => {
      translateY.value = withSequence(
        withTiming(-10, { duration: 100 }),
        withTiming(0, { duration: 100 }),
        withTiming(-300, {
          duration: 500,
          easing: Easing.in(Easing.cubic),
        })
      );

      opacity.value = withTiming(0, { duration: 500 });
      scale.value = withSequence(
        withTiming(1.05, { duration: 100 }),
        withTiming(0.9, { duration: 500 })
      );

      isVisible.value = false;

      if (callback) {
        setTimeout(() => {
          callback();
        }, 500);
      }
    };

    useImperativeHandle(ref, () => ({
      show,
      hide,
    }));

    const handleConfirm = () => {
      hide(() => {
        onConfirm?.();
      });
    };

    const handleCancel = () => {
      hide();
    };

    return (
      <>
        <Animated.View style={[styles.backdrop, backdropStyle]} />

        <Animated.View style={[styles.modal, modalStyle, animatedStyle]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text style={[styles.message, messageStyle]}>{message}</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, cancelButtonStyle]}
              onPress={handleCancel}
            >
              <Text style={[styles.cancelButtonText, cancelButtonTextStyle]}>
                {cancelText}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.confirmButton, confirmButtonStyle]}
              onPress={handleConfirm}
            >
              <Text style={[styles.confirmButtonText, confirmButtonTextStyle]}>
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </>
    );
  }
);

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    zIndex: 999,
  },
  modal: {
    position: "absolute",
    top: "30%",
    left: "10%",
    right: "10%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "poppins700",
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "poppins300",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cancelButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    minWidth: 100,
    alignItems: "center",
  },
  confirmButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ff4444",
    minWidth: 100,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#333",
    fontFamily: "poppins600",
  },
  confirmButtonText: {
    color: "white",
    fontFamily: "poppins600",
  },
});

export default DeleteAnimatedModal;
