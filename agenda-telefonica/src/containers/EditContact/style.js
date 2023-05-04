import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import styled from 'styled-components'

import { colors } from '../../styles/globalStyles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.secondary};
  align-items: center;

  margin-top: 150px;

  form {
    display: flex;
    flex-direction: column;
    background: ${colors.primary};
    padding: 35px;
    justify-content: space-around;
    border-radius: 18px;
    color: ${colors.light};
    width: 450px;
    height: 500px;
    gap: 20px;
  }
`

export const Label = styled.p`
  font-size: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${colors.secondary};
  color: ${colors.dark};
  font-size: 18px;
  padding: 12px;
  text-decoration: none;
  outline: none;
  border-radius: 10px;
  border: none;
   &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus-visible {
    background: ${colors.light};
  }
`

export const Closed = styled(HighlightOffTwoToneIcon)`
  color: ${colors.dark};
  display: flex;
  cursor: pointer;
  font-size: 50px !important;

  &:hover {
    color: gray;
  }
  &:active {
    opacity: 0.6;
  }
`
export const ContainerColsed = styled.div`
  display: flex;
  .closed {
    justify-content: end;
    position: absolute;
    margin: -16px -16px;
  }
`
