# Flipper
This is my first web game


## Para criar esse jogo eu usei a seguinte estrutura:
1.  Arquitetura Monolítica - Como é um jogo de pequeno porte, não tem a necessidade de ser um outro tipo de arquitetura, como a de micro-services por exemplo.

2. O Padrão de arquitetura que eu utilizei, foi o ECM  (Entity-Component-Manager), pois vi que seria o melhor para essa finalidade, pois caso o jogue ganhe proporções maiores do que o esperado, eu tenha 
facilidade para fazer uma escala nele e também para que fique de fácil manutenção.

3. Utilizei a seguinte estrutura de diretórios:
│── /assets
│   ├── /images (Sprites e fundos)
│   ├── /sounds (Efeitos sonoros e música)
│── /src
│   ├── /js
│   │   ├── game.js (Loop principal do jogo)
│   │   ├── player.js (Lógica do pinguim)
│   │   ├── obstacles.js (Lógica dos obstáculos)
│   │   ├── input.js (Controles do jogador)
│   │   ├── utils.js (Funções auxiliares)
│   ├── /css
│   │   ├── styles.css (Estilos gerais)
│── index.html (Canvas e estrutura base)
│── README.md (Documentação)

4. Ainda estou vendo se vou fazer um back-end ou não.

Copyright (C) [2024] [Daniel Takeyama]

Todos os direitos reservados. Este código e seus assets são disponibilizados apenas para visualização e não podem ser copiados, modificados ou redistribuídos sem permissão do autor.
