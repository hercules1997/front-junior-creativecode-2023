import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const ContactContext = createContext({})

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])

  /*
   Adiciona contatos no localstorange
   */
  const updateLocalStorange = async (contacts) => {
    await localStorage.setItem('agendaTel:contacts', JSON.stringify(contacts))
  }

  const putContacts = async (contact) => {
    const cttIndex = contacts.findIndex((ctt) => ctt.id === contact.id)
    let newContacts = []
    newContacts = [...contacts, contact]
    if (cttIndex) {
      setContacts(newContacts)
    }
    await updateLocalStorange(newContacts)
  }

  useEffect(() => {
    const loadContactData = async () => {
      const userContactData = await localStorage.getItem('agendaTel:contacts')
      if (userContactData) {
        setContacts(JSON.parse(userContactData))
      }
    }
    loadContactData()
  }, [])

  return (
    <ContactContext.Provider
      value={{
        putContacts,
        contacts
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export const useContact = () => {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used with Usercontext')
  }

  return context
}

ContactProvider.propTypes = {
  children: PropTypes.node
}
