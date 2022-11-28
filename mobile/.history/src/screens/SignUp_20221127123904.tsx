import React, { useState } from "react";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [ userName, setUserName ] = useState('')
  const [ userEmail, setUserEmail ] = useState('')
  const [ userPassword, setUserPassword ] = useState('')
  const [ userPasswordConfirm, setUserPasswordConfirm ] = useState('')

 
  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp() {
    console.log(userName)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} py={16}>
        <Image
          source={BackgroundImg}
          alt="Foto de pessoas treinando na academia"
          resizeMode="contain"
          position="absolute"
          defaultSource={BackgroundImg}
        />
        <Center my={16}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" mb={6} fontFamily="heading">
            Criar sua Conta
          </Heading>
          <Input 
            placeholder="Nome" 
            onChangeText={setUserName}
          />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setUserEmail}
          />
          <Input placeholder="Senha" secureTextEntry  onChangeText={setUserPassword}/>
          <Input placeholder="Confirmar a Senha" secureTextEntry onChangeText={setUserPasswordConfirm}/>
          <Button 
            title="Criar e acessar" 
            onPress={handleSignUp}
          />
        </Center>
        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
