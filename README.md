# gRPC-Node

Crud de usuários REST que se comunica via gRPC com microsserviço de usuários criado com gRPC

### Pré-requisitos

O que você precisa para instalar o software

```
Docker
```
```
Docker Compose
```

### Instalação

```
git clone https://github.com/alessandroprudencio/gRPC-Node.git
```

```
cd gRPC-Node
```

```
docker-compose up -d
```

Pronto sua aplicação estará rodando no endereço http://localhost:3000 .

### API endpoints

LISTAR USUÁRIOS

GET `/users`

BUSCAR USUÁRIO POR ID

GET `/users/:id`

CRIAR USUÁRIO

POST `/users/`

`
{
"username": "alemao",
"email": "alemao@gmail.com",
"password": "123123"
}
`

ATULIZAR USUÁRIO

PUT `users/:id`

`
{
"username": "alemao",
"email": "alemao@gmail.com",
"password": "123123"
}`

EXCLUIR USUÁRIO

DELETE `/users/:id`

## Construído com

* [Node JS](https://nodejs.org/)
* [Sequelize](https://sequelize.org/)
* [gRPC](https://grpc.io/)
* [Protocol Buffers](https://developers.google.com/protocol-buffers)

## Contribuição

Faça um Fork do projeto Crie uma Branch para sua Feature (git checkout -b feature/FeatureIncrivel)
Adicione suas mudanças (git add .)
Comite suas mudanças (git commit -m 'Adicionando uma Feature incrível!)
Faça o Push da Branch (git push origin feature/FeatureIncrivel)
Abra um Pull Request

## Author

* Alessandro Prudencio
* alessandroconectado@gmail.com
* +55 (67) 99269-6705
* [Linkedin](https://www.linkedin.com/in/alessandro-prudencio/)


