import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormData = {
  email: string;
  password: string;
};

const sigUpSchema = yup.object({
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido."),
  password: yup
    .string()
    .required("Informe uma senha.")
    .min(6, "Senha deve ter pelo menos 6 caracteres."),
});

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors }} = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate("signup");
  }

  function handleSignIn({ email, password }: FormData) {
   console.log(email, password)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} py={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Foto de pessoas treinando na academia"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" mb={6} fontFamily="heading">
            Acesse sua Conta
          </Heading>
          <Controller
            control={control}
            name="email"
            rules={{required: 'Informe o e-mail'}}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{required: 'Informe a senha'}}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
        </Center>
        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
