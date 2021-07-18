import { Flex, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import nookies from 'nookies';
import { Api } from '../data/api';
import { Link } from '../lib/alurakut-common/custom-link';
import {
  ClassBox,
  ClassBoxText,
  FooterArea,
  FooterLink,
  FormArea,
  FormButton,
  FormInput,
  LoginScreen,
  LogoArea,
  LogoAreaText,
  LogoAreaTextBold,
  LogoImage,
} from '../styles/login-styles';

export default function Login() {
  const router = useRouter();
  const { error } = router.query;
  const [userName, setUserName] = useState('');
  const toast = useToast();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const api = new Api();
    try {
      const response = await api.signIn(userName);
      nookies.set(null, 'USER_TOKEN', response.token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 2,
      });
      router.push('/');
    } catch (e) {
      const error = e as Error;
      toast({ title: error.name, description: error.message, status: 'error' });
    }
  };

  useEffect(() => {
    if (error) {
      toast({
        title: 'Erro durante a autenticação',
        description: error,
        status: 'error',
        isClosable: true,
      });
    }
  }, [error, toast]);

  return (
    <Flex as="main" flex="1" alignItems="center" justifyContent="center">
      <LoginScreen>
        <LogoArea>
          <LogoImage />

          <LogoAreaText>
            <LogoAreaTextBold>Conecte-se</LogoAreaTextBold> aos seus amigos e
            familiares usando recados e mensagens instantâneas
          </LogoAreaText>
          <LogoAreaText>
            <LogoAreaTextBold>Conheça</LogoAreaTextBold> novas pessoas através
            de amigos de seus amigos e comunidades
          </LogoAreaText>
          <LogoAreaText>
            <LogoAreaTextBold>Compartilhe</LogoAreaTextBold> seus vídeos, fotos
            e paixões em um só lugar
          </LogoAreaText>
        </LogoArea>

        <FormArea onSubmit={handleFormSubmit}>
          <ClassBox
            as="form"
            minHeight={{ base: '224px', lg: '282px' }}
            marginBottom="3"
          >
            <ClassBoxText>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>
            </ClassBoxText>
            <FormInput
              placeholder="Usuário"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            {userName.length === 0 ? 'Preencha o campo' : ''}

            <FormButton type="submit">Login</FormButton>
          </ClassBox>

          <ClassBox as="footer">
            <ClassBoxText>
              Ainda não é membro? <br />
              <Link
                href="/login"
                textDecoration="none"
                color="customColor.primary"
              >
                <strong>ENTRAR JÁ</strong>
              </Link>
            </ClassBoxText>
          </ClassBox>
        </FormArea>

        <FooterArea>
          <Text fontSize="xs" textAlign="center">
            © 2021 alura.com.br -{' '}
            <FooterLink href="/">Sobre o Orkut.br</FooterLink> -{' '}
            <FooterLink href="/">Centro de segurança</FooterLink> -{' '}
            <FooterLink href="/">Privacidade</FooterLink> -{' '}
            <FooterLink href="/">Termos</FooterLink> -{' '}
            <FooterLink href="/">Contato</FooterLink>
          </Text>
        </FooterArea>
      </LoginScreen>
    </Flex>
  );
}
