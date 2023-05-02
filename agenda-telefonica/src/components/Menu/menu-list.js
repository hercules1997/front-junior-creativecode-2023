import PersonAddIcon from '@mui/icons-material/PersonAdd'
import RecentActorsIcon from '@mui/icons-material/RecentActors'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Novo Contato',
    link: paths.NewCtt,
    icon: PersonAddIcon
  },
  {
    id: 2,
    label: 'Lista de Contatos',
    link: paths.List,
    icon: RecentActorsIcon
  }
]

export default listLinks
