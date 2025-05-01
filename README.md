FURIA CS:GO Fan Chat
Este é um projeto de um hub de fãs da FURIA focado em oferecer funcionalidades como notícias, estatísticas, calendário de partidas, quiz sobre CS:GO e chat com IA. O app foi criado utilizando React e várias bibliotecas para melhorar a experiência do usuário.


Índice
Tecnologias Usadas
Instalação
Estrutura de Diretórios
Funcionalidades
Página Principal
Notícias
Estatísticas
Calendário
Quiz
Observações Finais


Tecnologias Usadas
Este projeto foi construído utilizando as seguintes tecnologias:
React: Biblioteca JavaScript para construção da interface de usuário.
React Router DOM: Para a navegação entre páginas.
CSS/SCSS: Para o estilo visual das páginas.
Axios: Para fazer requisições HTTP (se necessário para buscar dados externos).
React State: Para gerenciar estados das páginas e componentes.


Instalação
Siga os passos abaixo para rodar o projeto localmente em sua máquina:
Clone o repositório:
git clone https://github.com/seu-usuario/furia-fan-chat.git
cd furia-fan-chat
Instale as dependências:
Caso ainda não tenha o Node.js e o npm instalados, faça o download e a instalação a partir do site oficial: Node.js.
Com o Node.js e npm instalados, execute:
npm install
Inicie o servidor de desenvolvimento:
npm start
Abra seu navegador e acesse http://localhost:3000.


Estrutura de Diretórios
A estrutura de diretórios do projeto é a seguinte:
furia-fan-chat
public                  # Arquivos estáticos (index.html, imagens)
src                     # Código fonte do projeto
/components          # Componentes React reutilizáveis
/pages               # Páginas do site (MainPage, QuizPage, etc)
/styles              # Arquivos CSS ou SCSS
App.js               # Componente principal do React
package.json             # Dependências e scripts do projeto
README.md                # Este arquivo de documentação

Funcionalidades
Página Principal
A página principal apresenta uma visão geral do app, com os seguintes elementos:
Calendário de jogos: Exibe as próximas partidas da FURIA, com a opção de visualizar detalhes de cada jogo.
Notícias da FURIA: Exibe notícias relevantes sobre a FURIA e CS:GO, com links para os artigos completos.
Estatísticas da equipe: Mostra dados relevantes sobre os jogadores da FURIA, como kills, mortes e K/D Ratio.
Notícias
Exibe uma lista de notícias relacionadas à FURIA e ao CS:GO. Cada notícia exibe o título, resumo e um link "Ler mais..." para acessar o artigo completo no site de origem.
Estatísticas
A página de Estatísticas mostra dados sobre os jogadores da FURIA, incluindo informações como kills, mortes e K/D Ratio. Essa seção também possui links para mais detalhes sobre o desempenho de cada jogador.
Calendário
O Calendário de jogos exibe as partidas da FURIA. Cada data de jogo é destacada, e ao clicar em uma data, o usuário pode visualizar informações adicionais sobre o jogo, como hora, adversário e outras informações relevantes.
Quiz
O quiz testa o conhecimento dos fãs sobre a FURIA no CS:GO. Ele possui perguntas com 4 alternativas e mostra a pontuação final do usuário ao final do quiz. As perguntas são baseadas em dados reais sobre a FURIA e o CS:GO.

Observações Finais
Este projeto foi feito com o objetivo de proporcionar uma experiência interativa e imersiva para os fãs da FURIA no CS:GO.
