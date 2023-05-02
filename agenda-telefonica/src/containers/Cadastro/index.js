import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button, ErrorMessage, ButtonLink } from '../../components'
import { Background } from '../../components/Background'
import paths from '../../constants/paths'
import api from '../../services/api'
import {
  Container,
  ContainerItens,
  Label,
  Input,
  ContainerMaster
} from '../Login/style'

/*
   ESTRUTURA DE CADASTRO DE USUÁRIO
  */

export function Cadastro () {
  const history = useHistory()
  /*
   VALIDAÇÃO DO FORMULÁRIO COM YUP
  */

  const schema = Yup.object().shape({
    name: Yup.string().required('Seu nome é obrigatório'),
    email: Yup.string()
      .email('Por favor digite um e-mail válido!')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha obrigatória!')
      .min(10, 'Senha deve ter no mínimo 10 digitos'),
    confirmPassword: Yup.string()
      .required('Comfime sua senha')
      .oneOf([Yup.ref('password')], 'Semhas diferentes')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  /*
   CHAMADA DA API E REALIZANDO CADASTRO DO USUÁRIO
  */

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        'usuarios',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Seu cadastro foi realizado com sucesso!')
        setTimeout(() => {
          if (status === 201 || status === 200) {
            history.push(paths.List)
          } else {
            history.push(paths.Register)
          }
        }, 1000)
      } else if (status === 409) {
        toast.warning('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Sistema fora do ar, tente novamente mais tarde')
    }
  }

  return (
    <ContainerMaster>
      <Background />
      <Container>
        <ContainerItens>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre-se</h1>

            <Label>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              placeholder = 'Carlos Antônio'

              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Label>E-mail</Label>
            <Input
              type="email"
              {...register('email')}
              placeholder="e-mail@email.com"
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              placeholder="1247x@$%87"
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              placeholder="1247x@$%87"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button type="submit">Cadastrar</Button>
            <ButtonLink>
              Já possui conta? <Link to={paths.List}>Acesse!</Link>
            </ButtonLink>
          </form>
        </ContainerItens>
      </Container>
    </ContainerMaster>
  )
}
