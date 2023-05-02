import styled from 'styled-components'

import { Button } from '../../components/Button'

export const Container = styled.div`
  display: flex;
  background-color: #d6d6ba;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: flex;

    width: 100%;
    margin: 0;
    margin-top: 150px;
    padding: 0;
    justify-content: center;
    height: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    background: #1c417c;
    padding: 35px;
    justify-content: space-around;
    border-radius: 18px;
    color: white;
    margin-top: 112px;

    width: 450px;
    height: 500px;
    gap: 20px;

    @media screen and (max-width: 700px) {
      margin: 0;
    }
  }
`
export const Label = styled.p`
  font-size: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #d6d6ba;
  color: black;
  font-size: 17px;
  padding: 12px;
  outline: none;
  border-radius: 10px;
  border: none;
  border: ${(props) => (props.error ? '2px solid red' : 'none')};
  &:focus-visible {
    background: white;
  }
`
export const ButtonStyle = styled(Button)`
  font-size: 16px;
  padding: 10px;
  width: 100%;
  margin-top: 0;
`
