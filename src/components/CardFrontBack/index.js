// Importa o módulo CardGame do diretório superior
import CardGame from "../CardGame";

// Importa o arquivo de estilo CSS associado ao componente
import "./style.css";

// Cria um objeto global para manipular eventos relacionados ao componente
window.cardFrontBack = {};

// Adiciona um método handleClick ao objeto global para ser usado como callback de evento
window.cardFrontBack.handleClick = (event) => {
    // Obtém o elemento que foi clicado
    const $origin = event.target;

    // Encontra o elemento pai mais próximo com a classe 'card-front-back'
    const $cardFrontBack = $origin.closest('.card-front-back');

    // Alterna a classe '-active' no elemento encontrado, adicionando ou removendo conforme necessário
    $cardFrontBack.classList.toggle('-active');
};

// Define uma função chamada CardFrontBack que retorna uma string HTML
function CardFrontBack(icon, altIcon) {
    return /*html*/ `
        <!-- Elemento principal que representa a parte frontal e traseira da carta -->
        <article class="card-front-back" onClick="window.cardFrontBack.handleClick(event)">
            <!-- Parte frontal da carta, contendo o conteúdo do CardGame -->
            <div class="card -front">
                ${CardGame()}
            </div>
            <!-- Parte traseira da carta, contendo o conteúdo do CardGame com ícones específicos -->
            <div class="card -back">
                ${CardGame(icon, altIcon)}
            </div>
        </article>
    `;
}

// Exporta a função CardFrontBack como o principal export do módulo
export default CardFrontBack;


/*Neste código, as principais ações são:

Importação do Módulo e Estilo:

Importa o módulo CardGame de um diretório superior.
Importa o estilo CSS associado ao componente.
Manipulação de Eventos Globais:

Cria um objeto global window.cardFrontBack para lidar com eventos relacionados ao componente.
Adiciona um método handleClick ao objeto global para ser usado como callback de evento de clique.
Função CardFrontBack:

Define uma função chamada CardFrontBack que retorna uma string HTML.
Cria um elemento <article> representando a parte frontal e traseira da carta.
Adiciona eventos de clique usando onClick para chamar a função global window.cardFrontBack.handleClick.
Utiliza o conteúdo do módulo CardGame para preencher as partes frontal e traseira da carta com os ícones adequados.
Exportação do Componente:

Exporta a função CardFrontBack como o principal export do módulo.*/