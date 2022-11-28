import { Input as InputNative, IInputProps, FormControl } from "native-base";

type InputProps = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, ...rest }: InputProps) {
  return (
    <FormControl>
      <InputNative
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        mb={4}
        placeholderTextColor="gray.300"
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
    </FormControl>
  );
}
