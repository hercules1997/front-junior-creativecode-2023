import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../components'
import { Button } from '../../components/Button'
import paths from '../../constants/paths'
import api from '../../services/api'
import { InputSearch, Search, Topo } from '../ContactList/style'
import { Container, Label, Input, Closed, ContainerColsed } from './style'

/*
ESTRUTURA DE EDIÇÃO DO CONTATO
*/

export function EditContact () {
  const { setContacts } = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const {
    push,
    location: {
      state: { contact }
    }
  } = useHistory()

  const schema = Yup.object()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    const putContact = {
      name: data.name,
      ddd: data.ddd,
      phone: data.phone,
      email: data.email,
      address: data.address
    }

    await toast.promise(api.put(`contatos/${contact.id}`, putContact), {
      pending: 'Editando contato...',
      success: 'Contato editatdo com sucesso!',
      error: 'Falha ao editar o contato, por favor, tente novamente!'
    })

    setTimeout(() => {
      push(paths.List)
    }, 1000)
  }

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('contatos')
      setContacts(data)
    }
    loadCategories()
  }, [setContacts])

  function closeEdit () {
    push(paths.List)
  }

  function handleSearch (e) {
    setSearchTerm(e.target.value)
  }

  function handleSubmitSearch (e) {
    e.preventDefault()

    const content = document.body.innerText
    const index = content.indexOf(searchTerm)

    if (index !== -1) {
      window.scrollTo(100, index)
    }
  }

  return (
    <>
      <Topo>
        <div>Meus contatos</div>
        <form onSubmit={handleSubmitSearch}>
          <label htmlFor="search"></label>
          <div style={{ display: 'flex' }}>
            <InputSearch
              type="search"
              placeholder="Buscar contato"
              onChange={handleSearch}
            ></InputSearch>
            <Search type="submit" />
          </div>
        </form>
      </Topo>
      <Container>
        <ContainerColsed>
          <span className="closed">
            <Closed onClick={closeEdit} />
          </span>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label>Nome</Label>
              <Input
                type="text"
                {...register('name')}
                defaultValue={contact.name}
                error={errors.name?.message}
              />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </div>
            <span style={{ display: 'flex' }}>
              <div style={{ width: '20%', marginRight: '8px' }}>
                <Label>DDD</Label>
                <Input
                  type="number"
                  {...register('ddd')}
                  defaultValue={contact.ddd}
                  error={errors.ddd?.message}
                />
                <ErrorMessage>{errors?.message}</ErrorMessage>
              </div>
              <div style={{ width: '80%' }}>
                <Label>N° Telefone</Label>
                <Input
                  type="number"
                  {...register('phone')}
                  defaultValue={contact.phone}
                  error={errors.phone?.message}
                />
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              </div>
            </span>
            <div>
              <Label>E-mali</Label>
              <Input
                type="email"
                {...register('email')}
                defaultValue={contact.email}
                error={errors.email?.message}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </div>
            <div>
              <Label>Endereço</Label>
              <Input
                type="text"
                {...register('address')}
                defaultValue={contact.address}
                error={errors.address?.message}
              />
              <ErrorMessage>{errors.address?.message}</ErrorMessage>
            </div>
            <Button>Editar contato</Button>
          </form>
        </ContainerColsed>
      </Container>
    </>
  )
}
