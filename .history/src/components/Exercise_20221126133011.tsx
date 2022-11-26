import {TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {

}

export function Exercise({...rest }: Props) {
  return (
    <TouchableOpacity
     {...rest}
    >
     
    </TouchableOpacity>
  );
}
