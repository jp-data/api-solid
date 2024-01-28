# App

GymPass style app.

## RF (requisitos funcionais)

- [] Será possível se cadastrar
- [] Será possível a autenticação do usuário
- [] Será possível obter o perfil de um usuário logado
- [] Será possível obter um balanço do total de check-ins realizados
- [] Será possível visualizar o histórico de check-ins
- [] Será possível a busca por academias + próximas do usuário 
- [] Será possível a busca de academias pelo nome 
- [] Será possível a realização do check-in
- [] Será possível a validação de check-in do usuário
- [] Será possível o cadastro de uma academia


## RNs (regras de negócio)
- [] O usuário não poderá se cadastrar com email duplicado
- [] O usuário não pode realizar dois check-ins no mesmo dia
- [] O usuário não poderá realizar check-in se não estiver a 100m de distância
- [] O check-in só pode ser validado em até 20 minutos após criado
- [] O check-in só pode ser validade por administradores
- [] A academia só pode ser cadastrada por administradores


## RNFS (requisitos não funcionais)
- [] Senha do usuário precisa estar criptografada
- [] Os dados da aplicação devem estar persistidos em um banco PostgreSQL
- [] Todas as listas de dados devem estar paginadas com 20 itens por página
- [] O usuário deve ser identificado por um JWT (JSON Web Token)