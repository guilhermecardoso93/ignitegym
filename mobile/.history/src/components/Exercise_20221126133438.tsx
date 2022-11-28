import { HStack, Image } from "native-base";
import {TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {

}

export function Exercise({...rest }: Props) {
  return (
    <TouchableOpacity
     {...rest}
    >
      <HStack>
        <Image 
          source={{uri:'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg'}}
          alt=''
        
        />
      </HStack>
     
    </TouchableOpacity>
  );
}
