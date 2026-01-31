import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    text: string;
}

const Tag = (props: Props) => {
    const { text } = props;
  return (
    <View style={{backgroundColor: 'white', borderRadius: 16, paddingHorizontal:10, paddingVertical:5}}>
          <Text style={{color: 'black', textAlign:'center', }}>{text}</Text>
    </View>
  )
}

export default Tag


