// import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
// import Paper from '@mui/material/Paper'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import paths from '../../constants/paths'
import api from '../../services/api'
import {
  Container,
  ContainerItens,
  ContentContact,
  Phone,
  P,
  Ptel,
  Icons,
  Topo,
  Search,
  InputSearch,
  CardContact
} from './style'

export function ContactList () {
  const [contacts, setContact] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const { push } = useHistory()

  // ATUALIZA O ESTADO DA LISTA
  useEffect(() => {
    async function loadCtt () {
      const { data } = await api.get('contatos')
      setContact(data)
    }
    loadCtt()
  }, [])

  /*
CHAMADA A API PARA DELETAR CONTATO
*/
  const deleteContact = async (ctt) => {
    await toast.promise(api.delete(`contatos/${ctt.id}`), {
      pending: 'Deletando contato...',
      success: 'Contato deletado com sucesso!',
      error: 'Falha ao deletar produto, por favor tente novamente'
    })
  }

  /*
AÇÃO DO BOTÃO DE EDITAR E PASSANDO O OS DADOS PARA A TELA DE EDIÇÃO
*/
  function editContact (contact) {
    push(paths.Edit, { contact })
  }

  function handleSearch (e) {
    setSearchTerm(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

    const content = document.body.innerText
    const index = content.indexOf(searchTerm)

    if (index !== -1) {
      window.scrollTo(100, index)
    }
  }

  return (
    <Container>
      <Topo>
        <div>Meus contatos</div>
        <form onSubmit={handleSubmit}>
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
      <ContainerItens>
        {/* MAPEANDO OS CONTATOS */}
        {contacts &&
          contacts.map((ctt) => (
            <CardContact key={ctt}>
              <ContentContact>
                <P>
                  <span>Nome:</span> {ctt.name}
                </P>
                <Phone>
                  <span>Tel:</span>

                  <Ptel> ({ctt.ddd}) </Ptel>
                  <Ptel>{ctt.phone}</Ptel>
                </Phone>
                <P>
                  <span>E-mail: </span>
                  {ctt.email}
                </P>
                <P>
                  <span>Endereço: </span>
                  {ctt.address}
                </P>
              </ContentContact>
              <Icons>
                <ModeEditOutlineIcon
                  className="btn"
                  onClick={() => editContact(ctt)}
                />
                <DeleteForeverIcon
                  className="btn"
                  onClick={() => deleteContact(ctt)}
                />
              </Icons>
            </CardContact>
          ))}
      </ContainerItens>
    </Container>
  )
}
