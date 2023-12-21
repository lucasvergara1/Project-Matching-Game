// Importa o estilo CSS associado ao tabuleiro do jogo
import "./style.css";

// Importa o componente CardFrontBack necessário para a construção do tabuleiro
import CardFrontBack from "../../components/CardFrontBack";

// Importa os dados dos cartões do arquivo data.js
import cards from "./data.js";

// Define uma função chamada BoardGame que retorna uma string HTML
function BoardGame(amountCards) {
    // Função interna para virar e esconder cartas ativas
    const flipAndHideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
    }

    // Função interna para trocar o jogador atual
    const swapPlayer = () => {
        // Obtém o elemento da seta para baixo
        const $arrowDown = document.querySelector('.arrow-down');
        // Obtém o jogador atual do atributo 'data-currentplayer'
        const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
            
        // Troca o jogador e atualiza o atributo 'data-currentplayer'
        $arrowDown.setAttribute('data-currentplayer', currentPlayer === '1' ? '2' : '1');
        console.log(currentPlayer);
    }

    // Cria um objeto global para manipular eventos relacionados ao tabuleiro do jogo
    window.boardGame = {};

    // Adiciona um método handleClick ao objeto global para ser usado como callback de evento de clique
    window.boardGame.handleClick = () => {
        // Obtém o elemento do tabuleiro do jogo
        const $boardGame = document.querySelector('.board-game');

        // Obtém os elementos das cartas que estão ativas
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');

        // Verifica se há duas cartas ativas
        if ($cardsActive.length === 2) {
            // Aguarda 1 segundo antes de virar e escon

            /*Importações e Estilo:

Importa o estilo CSS associado ao tabuleiro do jogo.
Importa o componente CardFrontBack necessário para a construção do tabuleiro.
Importa os dados dos cartões do arquivo data.js.
Função BoardGame:

Define uma função chamada BoardGame que retorna uma string HTML representando o componente do tabuleiro do jogo.
Funções Internas:

flipAndHideCards: Remove a classe -active de cartas ativas, virando e escondendo-as.
swapPlayer: Troca o jogador atual, atualizando o atributo data-currentplayer.
Objeto Global e Manipulação de Eventos:

Cria um objeto global window.boardGame para manipular eventos relacionados ao tabuleiro do jogo.
Adiciona um método handleClick ao objeto global para ser usado como callback de evento de clique.
Geração de Cartas HTML:

Mapeia os dados dos cartões para criar uma lista de strings HTML representando as cartas.
Junta as strings HTML da lista para formar o conteúdo do tabuleiro do jogo.
Retorno do Componente:

Retorna uma string HTML representando o componente do tabuleiro do jogo, incluindo as cartas geradas dinamicamente.*/