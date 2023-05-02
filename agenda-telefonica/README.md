
# Aplicativo de agênda telefônica 
## Escop e objetivo


É um projeto desenvolvido para cadastrar contatos pessoais

## Iniciando...

Você poderá escolher como deseja usá-la:

- `git clone`
- `Download ZIP`
  
No link https://github.com/hercules1997/front-junior-creativecode-2023

*Nessessário o uso da API https://github.com/hercules1997/api-agenda-tel*

## Pré-requisitos

Instalação dos pacotes:
- `yarn`<br>
- `react-router-dom@5`<br>
- `Yup`<br>
- `axios`<br>
- `toast`<br>


- `Container Docker`<br>
É nessesário criar uma container para o uso do banco de dados




### Para criar o container utilize o código abaixo
*É necessário ter o docker instalado*
docker run --name agendaTel-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres



No backend é nessessário instalar os pacotes:

- `yup`<br>
- `sequelie / sequelize CLI`<br>
- `pg gg hsrore`<br>
- `sucrase -D`<br>

### Para criar as tabelas no banco de dados utilize o código abaixo

yarn sequelize db:migrate