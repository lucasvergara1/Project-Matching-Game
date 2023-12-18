import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore/Index";
import VsPlayer from "../../components/VSPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${ArrowDown()}
            ${PlayerName("Player1")}
            ${PlayerScore(2)}
            ${VsPlayer()}
            ${PlayerScore(1)}
            ${PlayerName("Player2")}
        </header>
    `;

}

export default ScoreBoard;