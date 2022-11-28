import { Input as InputNative } from "native-base";


export function Input() {
  return (
    <InputNative 
      bg='gray.700'
      h={14}
      px={4}
      borderWidth={0}
      fontSize='md'
      color='white'
    />
  )
}