import { View, Image } from "react-native";
import React from 'react'
import Tag from "./Tag";
import { foodImages } from "@/assets/images/food/localImages";


type Props = {
  tag_text: string;
  local_image_name: string;
  width: number;
  height: number;
};

const ProductImage = (props: Props) => {
  const { tag_text, local_image_name, width, height } = props;

  
  return (
    <View>
      <Tag text={tag_text} />
      <Image
        source={foodImages[local_image_name as keyof typeof foodImages]}
        style={{
          width: width,
          height: height,
          borderRadius: 6000,
          position: "relative",
        }}
        resizeMode="center"
      />
    </View>
  );
}

export default ProductImage