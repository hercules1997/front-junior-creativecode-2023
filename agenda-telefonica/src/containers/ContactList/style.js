import PersonSearchSharpIcon from '@mui/icons-material/PersonSearchSharp'
import styled from 'styled-components'

import { colors } from '../../styles/globalStyles'

export const Container = styled.div``
export const Topo = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 3px;
  text-shadow: 0px 2px 2px black;

  position: fixed;
  top: 0px;
  width: 100%;

  padding: 20px;

  color: ${colors.light};

  background: ${colors.primary};
  box-shadow: 7px 0px 8px ${colors.dark};

  @media screen and (max-width: 780px) {
    position: absolute;
    width: 100%;
  }

  form {
    display: flex;
    position: sticky;
    right: 0px;
    margin-right: 12px;
    @media screen and (max-width: 780px) {
    }
  }
`
export const Search = styled(PersonSearchSharpIcon)`
  margin-left: 10px;
  transition: 0.7;
  cursor: pointer;
  font-size: 32px !important;
  &:hover {
    color: ${colors.dark};
    transition: 0.7;
  }
`
export const InputSearch = styled.input`
  border-radius: 14px;
  padding: 5px 5px 5px 8px;
  outline: none;
  border: none;
  width: 300px;

  @media screen and (min-width: 934px) {
    width: 200px;
  }
  @media screen and (min-width: 1270px) {
    width: 600px;
  }
  @media screen and (max-width: 1270px) {
    width: 200px;
  }

  ::placeholder {
    font-style: italic;
  }
  font-size: 18px;
  &:hover {
    color: ${colors.dark};
    transition: 0.7;
  }
`

export const ContainerItens = styled.div`
  display: grid;
  flex-direction: column;

  width: 100%;
  margin-top: 40px;
  grid-template-columns: repeat(1, 1fr);
  padding: 40px;
  gap: 2px;
  justify-items: center;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    display: block;
    flex-direction: column;
    width: 100%;
    margin: 0;
    margin-top: 150px;
    padding: 0;
    height: 100%;
  }
`
export const CardContact = styled.div`
  display: flex;
  width: 100%;
  min-height: min-content;
  background: ${colors.primary};
  margin: 10px;
  letter-spacing: 1px;
  padding: 30px;
  font-size: 17px;
  color: ${colors.light};
  border-radius: 15px;
  box-shadow: 0px 0px 8px ${colors.dark};
`
export const P = styled.p`
  color: ${colors.light};
  font-size: 18px;
`
export const Ptel = styled.span`
  font-size: 16px;
  color: ${colors.light} !important;
  text-shadow: none;
`
export const ContentContact = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.light};
  gap: 10px;
  font-size: 22px;
  width: 100%;

  span {
    color: ${colors.secondary};
    text-shadow: 0px 2px 2px black;
  }
`
export const Phone = styled.div`
  font-size: 16px;
`
export const Icons = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: ${colors.light};
  .btn {
    cursor: pointer;
    &:hover {
      color: gray;
    }
    &:active {
      opacity: 0.6;
    }
  }
`
