import { Text } from "react-native";
import React from "react";

type Props = {
  text: string;
};

const Tag = (props: Props) => {
  const { text } = props;
  return (
    <Text
      style={{
        position: "absolute",
        top: 1,
        left: 2,
        zIndex: 1000,
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: "white",
        borderRadius: 20,
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {text}
    </Text>
  );
};

export default Tag;
