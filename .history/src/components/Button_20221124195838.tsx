import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNative 
      w="full"
      h={14} 
      bg="green.700" 
      rounded="sm" 
      _pressed={{
        bg: 'gree.500'
      }}
      {...rest}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNative>
  );
}
