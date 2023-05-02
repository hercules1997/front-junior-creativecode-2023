import axios from 'axios'
// Exportação da API
const api = axios.create({
  baseURL: 'http://localhost:3008/'
})

// Verificação do token para o usuario acessar aplicação
api.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('agendaTel:users')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`

  return config
})

export default api
