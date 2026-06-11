# Automação Amazon com Playwright

Projeto de automação para testar a pesquisa de produto no site da Amazon Brasil usando Playwright Test.

## Descrição

Este repositório contém testes Playwright em JavaScript para validar a pesquisa de um produto (`monitor 24 polegadas`) na Amazon Brasil. O projeto usa uma estrutura simples de testes e um arquivo de page object para centralizar locators.

## Estrutura do projeto

- `tests/` - pasta com os arquivos de teste e page object
- `playwright.config.js` - configuração do Playwright Test
- `package.json` - dependências e meta informações do projeto
- `playwright-report/` - resultados de relatórios HTML do Playwright
- `test-results/` - resultados de execução de testes

## Dependências

- Node.js
- Playwright Test

Instalação das dependências:

```bash
npm install
```

## Como rodar os testes

Executar todos os testes:

```bash
npx playwright test
```

Executar um teste específico:

```bash
npx playwright test tests/teste_plane.spec.js
```

## Configuração Playwright

Principais configurações em `playwright.config.js`:

- `testDir: './tests'`
- `fullyParallel: true`
- `forbidOnly: !!process.env.CI`
- `retries: process.env.CI ? 2 : 0`
- `reporter: 'html'`
- `use.headless: false`
- `use.trace: 'on-first-retry'`
- `projects`: atualmente apenas `chromium` está habilitado

## Observações

- A execução padrão abre o navegador em modo visível (`headless: false`).
- Relatórios HTML são gerados em `playwright-report/`.
- O arquivo `.gitignore` deve excluir diretórios como `node_modules/`, `playwright-report/` e `test-results/`.
