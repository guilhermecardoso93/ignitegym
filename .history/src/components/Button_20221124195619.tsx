import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNative 
      w='full'
      h={14}
      bg='green.700'
      {...rest}
    >
      <Text>{title}</Text>
    </ButtonNative>
  );
}
