import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, variant,...rest }: Props) {
  return (
    <ButtonNative
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : "green.700"}
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNative>
  );
}
