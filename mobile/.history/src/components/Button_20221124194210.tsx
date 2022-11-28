import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNative {...rest}>
      <Text>{title}</Text>
    </ButtonNative>
  );
}
