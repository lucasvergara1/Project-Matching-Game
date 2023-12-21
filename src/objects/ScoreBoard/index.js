// Importa componentes necessários para a construção do placar
import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore/Index";
import VsPlayer from "../../components/VSPlayer";

// Importa o estilo CSS associado ao placar
import "./style.css";

// Define uma função chamada ScoreBoard que retorna uma string HTML
function ScoreBoard() {
    // Retorna uma estrutura HTML representando o placar do jogo
    return /*html*/ `
        <header class="score-board">
            ${(ArrowDown(2))}  <!-- Inclui uma seta para baixo com a quantidade '2' como argumento -->
            ${PlayerName("Player1")}  <!-- Inclui o nome do jogador "Player1" -->
            ${PlayerScore(2)}  <!-- Inclui o componente de pontuação do jogador com a pontuação '2' -->
            ${VsPlayer()}  <!-- Inclui um componente indicando "vs" entre os jogadores -->
            ${PlayerScore(3)}  <!-- Inclui o componente de pontuação do jogador com a pontuação '3' -->
            ${PlayerName("Player2")}  <!-- Inclui o nome do jogador "Player2" -->
        </header>
    `;
}

// Exporta a função ScoreBoard como o principal export do módulo
export default ScoreBoard;


/*Importações de Componentes:

Importa os componentes necessários para construir o placar do jogo, como seta para baixo (ArrowDown), nomes de jogador (PlayerName), pontuação de jogador (PlayerScore), e indicador "vs" (VsPlayer).
Importação de Estilo:

Importa o estilo CSS associado ao componente de placar.
Função ScoreBoard:

Define uma função chamada ScoreBoard que retorna uma string HTML representando o componente do placar do jogo.
Estrutura do Placar:

Utiliza os componentes importados para construir a estrutura do placar.
Inclui uma seta para baixo com a quantidade '2' como argumento (ArrowDown(2)).
Adiciona os nomes dos jogadores ("Player1" e "Player2") e suas respectivas pontuações.
Insere um componente indicando "vs" entre os jogadores (VsPlayer()).
Exportação do Componente:

Exporta a função ScoreBoard como o principal export do módulo para ser usado em outros lugares do projeto.*/