import { VStack, Image} from 'native-base'

import BackgroundImg from '@assets/background.png'

export function SignIn() {
  return (
    <VStack flex={1} bg='coolGray.700'>
      <Image 
        source={BackgroundImg}
        alt='Foto de pessoas treinando na academia'
        resizeMode='contain'
      />
    </VStack>
  )
}