import { Button, View } from "react-native";
import { styles } from "./styles";
import Message from "./src/components/Message";
import { useState } from "react";

export default function App() {
  const [isShowMessage, setIsShowMessage] = useState(false);

  return (
    <View style={styles.container}>
      {isShowMessage && <Message />}

      <Button
        title={`${isShowMessage ? "Não " : ""}mostrar mensagem`}
        onPress={() => setIsShowMessage((prevState) => !prevState)}
      />
    </View>
  );
}
