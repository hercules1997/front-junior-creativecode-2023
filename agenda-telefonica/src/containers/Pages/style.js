import styled from 'styled-components'

import { colors } from '../../styles/globalStyles'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${colors.secondary};

  @media screen and (max-width: 700px) {
    flex-direction: column;
    /* height: 20px; */
    width: 100%;
    height: 100%;
  }
`
export const ContainerItems = styled.div`
  padding: 10px 0px 10px 70px;
  width: calc(100vw - 200px);
  margin-left: 200px;

  @media screen and (max-width: 780px) {
    display: block;

    width: 100%;
    margin: 0px;
    padding: 0px;
    margin-top: 250px;
  }
`
