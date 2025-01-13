# App
GymPass style app developed with NodeJs using SOLID.

## RFs (Requisitos funcionais)
- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [X] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)
- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página

### RUNNING THE APP

- `npx prisma generate` - create the schema types

- `npx prisma migrate dev` - create migrations
- `npx prisma studio` - open db web
- 

### Docker
- `docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql`

- `docker compose stop`

## TDD
TDD (Test Driven Development) é uma abordagem de desenvolvimento de software em que os testes são escritos antes do código. Na aula, será explicado o conceito de TDD e aplicado no desenvolvimento da funcionalidade que valida se um usuário já realizou check-in no mesmo dia. Primeiramente, será criado o teste unitário e em seguida, o código será desenvolvido para que esse teste passe.

### Red, green and Refactor:
O conceito "red, green and refactor" é uma abordagem do TDD (Test-Driven Development) para desenvolvimento de software. Consiste em três etapas:

- **Red (Vermelho):** nesta fase, o desenvolvedor escreve um teste que deve falhar, ou seja, ele garante que o teste não passará sem implementar o código necessário.
- **Green (Verde):**  aqui, o desenvolvedor escreve a quantidade mínima de código necessária para fazer o teste passar.
- **Refactor (Refatorar):** após o teste passar, o desenvolvedor refatora o código para melhorar a qualidade, sem alterar seu comportamento.

Essa abordagem garante que o código seja desenvolvido com base em testes confiáveis, resultando em um código mais limpo, seguro e fácil de manter.