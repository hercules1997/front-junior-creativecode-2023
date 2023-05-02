import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }`

export const colors = {
  primary: '#1c417c',
  secondary: ' #d6d6ba',
  success: '#28a745',
  error: 'red',
  warning: '#ffc107',
  info: '#17a2b8',
  light: 'white',
  button: '#544f4f',
  dark: 'black',
  hover: 'rgb(6, 049, 384)'
}
