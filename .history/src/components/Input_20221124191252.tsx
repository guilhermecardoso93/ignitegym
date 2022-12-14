import { Input as InputNative, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <InputNative
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      mb={4}
      placeholderTextColor='gray.300'
      {...rest}
    />
  );
}
