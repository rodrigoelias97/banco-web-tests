# Banco Web Tests

## 📌 Introdução

Este projeto tem como objetivo exercitar a automação de testes
end-to-end utilizando Cypress e JavaScript, como parte da Mentoria 2.0
do Júlio de Lima.

Os testes foram desenvolvidos para validar o funcionamento da aplicação
web do projeto Banco, garantindo a qualidade das funcionalidades
principais através de cenários automatizados.

------------------------------------------------------------------------

## 🧱 Componentes do Projeto

Este projeto é composto pelos seguintes elementos:

-   **Cypress**: Framework principal para automação de testes E2E
-   **JavaScript**: Linguagem utilizada na implementação dos testes
-   **Custom Commands**: Abstrações criadas para reutilização de código
-   **cypress-mochawesome-reporter**: Geração de relatórios detalhados
    dos testes
-   **Estrutura de testes organizada**:
    -   `cypress/e2e`: Casos de teste
    -   `cypress/support`: Comandos customizados e configurações globais
    -   `cypress/fixtures`: Massa de dados para testes

------------------------------------------------------------------------

## ⚙️ Pré-requisitos

Antes de executar os testes, é necessário que os seguintes projetos
estejam em execução:

-   API: https://github.com/juliodelimas/banco-api
-   Aplicação Web: https://github.com/juliodelimas/banco-web

------------------------------------------------------------------------

## 🚀 Instalação

1.  Clone o repositório:

``` bash
git clone https://github.com/rodrigoelias97/banco-web-tests.git
```

2.  Acesse a pasta do projeto:

``` bash
cd banco-web-tests
```

3.  Instale as dependências:

``` bash
npm install
```

------------------------------------------------------------------------

## ▶️ Execução dos Testes

### Executar no modo interativo:

``` bash
npx cypress open
```

### Executar em modo headless:

``` bash
npx cypress run
```

------------------------------------------------------------------------

## 📊 Relatórios

Os relatórios são gerados utilizando o `cypress-mochawesome-reporter`.

Após a execução dos testes, os relatórios podem ser encontrados na
pasta:

    cypress/reports

Para abrir o relatório, basta acessar o arquivo `.html` gerado.

------------------------------------------------------------------------

## 🧪 Estrutura dos Testes

Os testes estão organizados por funcionalidades dentro da pasta
`cypress/e2e`.

Exemplo: - Login - Cadastro - Transferência - Extrato

Cada arquivo contém cenários escritos de forma clara, seguindo boas
práticas de automação.

------------------------------------------------------------------------

## 🔁 Custom Commands

Os custom commands foram criados para promover reutilização e
legibilidade do código.

Eles estão localizados em:

    cypress/support/commands

Exemplos de responsabilidades dos comandos: - Realizar login - Criar
usuários - Executar ações comuns da aplicação - Encapsular interações
complexas

------------------------------------------------------------------------

## 📌 Boas Práticas Aplicadas

-   Separação de responsabilidades
-   Reutilização de código com custom commands
-   Organização por domínio de negócio
-   Testes independentes e confiáveis
-   Uso de dados controlados (fixtures)

------------------------------------------------------------------------

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto.

------------------------------------------------------------------------

## 📎 Observações

Este projeto foi desenvolvido exclusivamente para fins de estudo e
prática de automação de testes com Cypress.
