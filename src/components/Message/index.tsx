import Animated, { Keyframe } from "react-native-reanimated";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const Message = () => {
  const enteringKeyFrame = new Keyframe({
    0: { opacity: 0, transform: [{ translateY: -100 }] },
    70: { opacity: 0.3 },
    100: { opacity: 1, transform: [{ translateY: 0 }] },
  });
  const exitingKeyFrame = new Keyframe({
    from: { opacity: 0.9, transform: [{ translateY: 0 }] },
    to: { opacity: 0, transform: [{ translateY: -100 }] },
  });

  return (
    <Animated.View
      style={styles.container}
      entering={enteringKeyFrame.duration(400)}
      exiting={exitingKeyFrame.duration(400)}

      //entering={FadeIn}
      //exiting={BounceOutRight}
    >
      <MaterialIcons name="notifications" color="#fff" size={18} />

      <Text style={styles.title}>teste</Text>
    </Animated.View>
  );
};
export default Message;
