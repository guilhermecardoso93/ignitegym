import { VStack, Image} from 'native-base'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

export function SignIn() {
  return (
    <VStack flex={1} bg='gray.700'>
      <Image 
        source={BackgroundImg}
        alt='Foto de pessoas treinando na academia'
        resizeMode='contain'
        position='absolute'
      />
      <LogoSvg />
    </VStack>
  )
}