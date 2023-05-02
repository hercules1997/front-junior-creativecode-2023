import { yupResolver } from '@hookform/resolvers/yup'
// import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../components'
import paths from '../../constants/paths'
import { useContact } from '../../hooks/ContactContext'
import api from '../../services/api'
import { InputSearch, Search, Topo } from '../ContactList/style'
import { Container, Label, Input, ButtonStyle } from './style'

/*
ESTRUTURA DE CRIAÇÃO DE UM NOVO CONTATO
*/
export function NewContact () {
  const [contacts, setContacts] = useState([])
  const { putContacts } = useContact({})
  const [searchTerm, setSearchTerm] = useState('')

  const history = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    ddd: Yup.number().required('DDD obrigatório').min(2),
    phone: Yup.number().required('Telefone obrigatório').min(9),
    email: Yup.string().email().required('E-mail obrigatório'),
    address: Yup.string().required('Endereço obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    const addNewContact = {
      name: data.name,
      ddd: data.ddd,
      phone: data.phone,
      email: data.email,
      address: data.address
    }

    await toast.promise(api.post('contatos', addNewContact), {
      pending: 'Criando novo contato...',
      success: 'Contato criado com sucesso!',
      error: 'Falha ao criar o contato, tente novamente!'
    })
    putContacts(contacts)

    setTimeout(() => {
      history.push(paths.List)
    }, 2000)
  }
  useEffect(() => {
    async function loadContact () {
      const { data } = await api.get('contatos')
      setContacts(data)
    }
    loadContact()
  }, [setContacts])

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
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
              placeholder='Gabriel Silva'
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>
          <span style={{ display: 'flex' }}>
            <div style={{ width: '20%', marginRight: '8px' }}>
              <Label>DDD</Label>
              <Input type="number" {...register('ddd')} required placeholder='11' />
            </div>
            <div style={{ width: '80%' }}>
              <Label>N° Telefone</Label>
              <Input type="number" {...register('phone')} required placeholder='958478801' />
            </div>
          </span>
          <div>
            <Label>E-mal</Label>
            <Input
              type="email"
              {...register('email')}
              placeholder = 'email@email.com'

              error={errors.email?.message}
              required
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Endereço</Label>
            <Input
              type="text"
              {...register('address')}
              placeholder='Rua Tamandaré, 258 - SP'
              required
              error={errors.address?.message}
            />
            <ErrorMessage>{errors.address?.message}</ErrorMessage>
          </div>

          <ButtonStyle>Adiconar contato</ButtonStyle>
        </form>
      </Container>
    </>
  )
}
