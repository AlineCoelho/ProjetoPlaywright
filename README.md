# ProjetoPlaywright
É uma ferramenta Open Source desenvolvida em NodeJS e mantida pela Microsoft para a realização de testes automatizados de ponta a ponta(e2e) com ela é possível criar ou gravar script’s em várias linguagens de programação como Python, C#, Java, NodeJS (Javascript e Typescript), executando nos principais navegadores atuais como, Chrome, Firefox, Webkit (Safari) e Edge.
## Configurando o Ambiente
Passo a passo:

1.Instalar Node.js: acesse o site oficial, baixe e instale a versão para seu computador.

2. Escolher uma IDE de JavaScript para programar: usaremos o VS Code neste tutorial.

3. Crie uma pasta onde ficarão os arquivos do seu projeto. Abra o terminal e acesse essa mesma pasta com o seguinte comando:

cd /seu/projeto/caminho
4. Instalação Yarn no terminal digite o seguinte comando:

npm install --global yarn
5. Instalação Playwright no terminal digite o seguinte comando:

yarn create playwright
4.1 Configure com a linguagem desejada no caso as opções serão JS e TS, para passar para Java Script basta clicar Tab;

4.2 No nome da pasta há a opção e2e e tests, fica ao teu critério qual padrão escolher

## Estrutura do projeto
Provavelmente após a instalação sua pasta principal estará dessa forma:

![image](https://user-images.githubusercontent.com/85312548/195852325-480e972d-b5f6-46c6-81c6-7e7cb103cd18.png)

**node_modules**: contém todas as dependências instaladas para o seu projeto.

**package.json**: é a “receita” do projeto nele fica basicamente a configuração dos pacotes necessários para executar o projeto e os scripts automatizados.

**yarn.lock**: costumo chamar de “guarda” do projeto, pois ele bloqueia as dependências baixadas em uma versão especifica, o que da segurança para o projeto mesmo em um ambiente diferente.

**playwright.config.js**: neste arquivo podemos realizar configurações globais do nosso projeto. Ex.: configurar timeout , definir resolução do navegador, setar uma URL padrão, entre outros.

##### tests: pasta onde ficarão os testes.

**tests-examples**: pasta exemplos de testes.

Pasta pode ser apagada

**gitignore**: ficam as pastas que o git deverá ignorar antes de subir o repositório.

**playwright-report**: pasta onde há reports do teste.
