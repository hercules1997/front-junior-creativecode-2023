import styled from 'styled-components'

import { Background } from '../../components'
import { colors } from '../../styles/globalStyles'
export const ContainerMaster = styled.div`
  display: flex;
  @media (max-width: 1030px) {
    display: flex;
    flex-direction: column;
    height: 100vh;

    background-color: ${colors.primary};
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;

  background-color: ${colors.primary};
  justify-content: center;

  text-align: center;

  @media (max-width: 800px) {
    display: block;
  }
`
export const BackgroundStyle = styled(Background)``
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;

  background: ${colors.primary};
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 22px;

  form {
    display: flex;
    flex-direction: column;

    color: ${colors.light};
    gap: 5px;
    padding: 10px;
    @media (max-width: 1030px) {
      margin-top: 80px;
      padding: 20px;
    }
  }
`
export const Label = styled.p`
  text-align: start;
  margin: 10px 0px 4px 9px;
  font-weight: 700;
`
export const Input = styled.input`
  width: 400px;
  height: 42px;

  background-color: #${colors.secondary};
  align-items: center;
  padding: 10px;

  outline: none;
  border: ${(props) => (props.error ? '2px solid red' : 'none')};
  border-radius: 10px;
  font-size: 1.2rem;

  color: ${colors.dark};
  box-shadow: 0px 5px 30px ${colors.dark};
`
