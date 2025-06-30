import { useKeyboardHandler } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export default function useGradualAnimation () {
  const height = useSharedValue(0);

  useKeyboardHandler(
    {
      onMove: event => {
        'worklet';
        height.value = Math.max(event.height, 0);
      },
    },
    []
  );
  return { height };
};