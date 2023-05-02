import styled from 'styled-components'

import { colors } from '../../styles/globalStyles'

export const ComponentButton = styled.button`
  height: 45px;

  background-color: ${colors.button};

  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 700;

  outline: none;
  border: none;
  border-radius: 10px;
  color: ${colors.light};
   transition: 0.7s;
  cursor: pointer;
  box-shadow: 0px 12px 35px ${colors.dark};

  &:hover {
    transition: 0.7s;
    background-color: ${colors.hover};
  }

  &:active {
    opacity: 0.6;
  }
`
