import styled from 'styled-components'

import { colors } from '../../styles/globalStyles'

export const SingLink = styled.p`
  margin-top: 20px;
  font-weight: 700;
  color: ${colors.light};

  a {
    cursor: pointer;
    color: ${colors.light};
    margin-left: 20px;
    text-decoration: none;
    transition: 0.7s;
    &:hover {
      transition: 0.7s;
      color: ${colors.dark};
    }
  }
`
