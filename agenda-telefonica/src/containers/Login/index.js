import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button, ErrorMessage, ButtonLink } from '../../components'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  ContainerItens,
  Label,
  Input,
  BackgroundStyle,
  ContainerMaster
} from './style'

/*
ESTRUTURA DE LOGIN
*/

export function Login () {
  const { putUserData } = useUser()
  const history = useHistory()

  /*
   VALIDAÇÃO DO FORMULÁRIO COM YUP
  */
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor digite um e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(10, 'Senha deve ter no mínimo 10 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  /*
   CHAMADA A API E REALIZA O ACESSO
   */
  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('/sessao', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados...',
        success: 'Seja bem-vindo(a)!',
        error: 'Dados incorretos. Verifique, e tente novamente!'
      }
    )
    putUserData(data)

    setTimeout(() => {
      history.push(paths.List)
    }, 1200)
  }

  return (
    <ContainerMaster>
      <BackgroundStyle />
      <Container>
        <ContainerItens>
          {/* FORMULÁRIO */}
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>

            {/* E-MAIL */}
            <Label>E-mail</Label>
            <Input
              type="email"
              {...register('email')}
              placeholder='e-mail@email.com'
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            {/* SENHA */}
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder='1247x@$%87'
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            {/* BOTÃO DE ACESSO */}

            <Button type="submit">Entrar</Button>

            {/* BOTÃO DE CADASTRAR */}

            <ButtonLink>
              Não tem cadastro ainda?
              <Link to="/cadastro">Cadastre-se agora!</Link>
            </ButtonLink>
          </form>
        </ContainerItens>
      </Container>
    </ContainerMaster>
  )
}
