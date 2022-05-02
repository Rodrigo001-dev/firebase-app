import { Button } from '@components/Controllers/Button';
import { FooterButton } from '@components/Controllers/FooterButton';
import { Input } from '@components/Controllers/Input';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Footer, Form, Title } from './styles';



export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Logado com sucesso!");
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  function handleForgotPassword() {

  }

  return (
    <Form>
      <Title>Entrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

      <Footer>
        <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate('register')} />
        <FooterButton title="Esqueci senha" icon="email" onPress={handleForgotPassword} />
      </Footer>
    </Form>
  );
}