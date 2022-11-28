import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <ButtonNative
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "green.500" : "green.700",
      }}
      {...rest}
    >
      <Text 
        color={variant === "outline" ? "green.500" : "white"} 
        fontFamily="heading" 
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNative>
  );
}
