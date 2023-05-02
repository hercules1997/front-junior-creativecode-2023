
# Aplicativo de agênda telefônica 
## Escopo e objetivo


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

Tecnologias utilizadas:

- `ReactJs`<br>
- `JavaScript`<br>
- `Styled Components`<br>
- `NodeJs`<br>
- `Docker`<br>
- `PostgreSQL`<br>
- `JWT`<br>

# Imagens da aplicação

## Tela de Login
![image](https://user-images.githubusercontent.com/109186074/235692862-c068ce17-8bf4-4cf7-9517-4ed841d0f1b4.png)

## Tela de cadastrar um novo contato
![image](https://user-images.githubusercontent.com/109186074/235693031-7773e8dc-6308-4064-b70e-1d50808f1752.png)
## Tela de listagem de todos os contatos
![image](https://user-images.githubusercontent.com/109186074/235692965-d80922d4-8c61-4ef1-a30a-a455d9725877.png)
## Tela de Edição do contato
![image](https://user-images.githubusercontent.com/109186074/235693084-07d74836-ab0a-46b4-b304-42c5709ce756.png)

## Telas responsivas em disposivivos menores
![image](https://user-images.githubusercontent.com/109186074/235693066-88dc3dd0-7595-41d6-99a0-e123e0c09467.png)
![image](https://user-images.githubusercontent.com/109186074/235692924-00fd4776-c737-4eb9-8e03-5bb9eb7693c2.png)








