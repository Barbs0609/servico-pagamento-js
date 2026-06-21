# Trabalho de Conclusão de Disciplina: Pipeline de CI com GitHub Actions

## 📋 Descrição do Projeto
Este repositório contém a implementação de uma pipeline de Integração Contínua (CI) utilizando **GitHub Actions**. O projeto base utilizado é o **servico-pagamento-js**, um microsserviço desenvolvido em JavaScript (Node.js) utilizando o framework de testes **Mocha**.

---

## 🚀 Conceitos de CI/CD Aplicados

* **Integração Contínua (CI):** Prática de automatizar a integração e validação de alterações de código. Garante que erros de sintaxe ou testes quebrados sejam detetados de forma imediata a cada modificação.
* **Triggers (Gatilhos):** Eventos configurados para disparar a automação:
    * **Push:** Dispara o workflow sempre que um novo código é enviado para as branches principais (`main`/`master`).
    * **Workflow Dispatch:** Habilita um botão na interface do GitHub para permitir execuções manuais sob demanda.
    * **Schedule (Agendado):** Configura execuções periódicas usando a sintaxe *cron* (definido para rodar toda segunda-feira às 09:00 UTC).
* **Artifacts (Artefatos):** Arquivos resultantes do processo de build ou testes (como relatórios de cobertura) que ficam armazenados na própria infraestrutura do GitHub Actions e disponíveis para download.

---

## ⚙️ Arquitetura da Pipeline

O arquivo de configuração `.github/workflows/main.yml` cria um ambiente isolado (`ubuntu-latest`) que executa os seguintes passos ordenados:

1. **Checkout do código:** Baixa a versão mais recente do projeto.
2. **Configuração do Node.js:** Instala o runtime do Node.js (versão 20) com suporte a cache de dependências.
3. **Instalação de Dependências:** Executa o gerenciador de pacotes via `npm install`.
4. **Execução de Testes:** Roda a suíte de testes automatizados integrada com o Mocha.
5. **Upload de Artefatos:** Coleta e armazena os relatórios gerados na aba de execuções da pipeline.

---

## 📦 Como Executar Localmente

### Pré-requisitos
* Node.js (versão 20 ou superior)
* NPM (gerenciador de pacotes)

### Instalação e Testes
1. Clone o repositório:
   ```bash
   git clone [https://github.com/Barbs0609/servico-pagamento-js.git](https://github.com/Barbs0609/servico-pagamento-js.git)
