import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles/globalStyles'

export const ContainerMenu = styled.div`
  flex-direction: column;
  position: fixed;
  width: 270px;

  min-height: 100vh;
  padding: 40px 40px 70px 15px;
  background-color: ${colors.primary};
  box-shadow: 0px 0px 10px ${colors.dark};

  @media screen and (max-width: 780px) {
    display: flex;
    padding: 40px 60px 40px 60px;
    width: 100%;
    top: 0;
    margin-top: 50px;
    min-height: 10px;
  }
`
export const ContainerItems = styled.div`
  margin-top: 15px;
  height: 40px;

  margin-bottom: 20px;
`
export const P = styled.span`
  letter-spacing: 1px;
`
export const Avatar = styled(PersonIcon)`
  margin-right: 7px;
  font-size: 2rem;
`
export const Profile = styled.div`
  margin-bottom: 20px;
  color: ${colors.light};
  flex-direction: row;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
`

export const ContainerLogout = styled.button`
  position: fixed;
  bottom: 20px;
  background: transparent;
  border: none;
  font-size: 17px;

  @media screen and (max-width: 780px) {
    position: sticky;
    justify-content: end;
    margin: 0;
    bottom: 2px;
    padding: 0;
    top: 0;
  }

  .iconLogout {
    margin-right: 15px;
    color: ${colors.warning};
  }
`

export const ListLink = styled(Link)`
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 10px;
  color: ${(props) => (props.isActive ? 'black' : '#d6d6ba')};
  background-color: ${(props) =>
    props.isActive ? 'rgb(6, 169, 254)' : 'none'};
  transition: 0.6s;
  border-radius: 6px;

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .icon {
    margin-right: 15px;

    @media screen and (max-width: 700px) {
      margin: 0;
    }
  }

  &:hover {
    font-weight: 400;
    color: white;
    transition: 0.8s;
    background-color: ${colors.hover};
  }
`
