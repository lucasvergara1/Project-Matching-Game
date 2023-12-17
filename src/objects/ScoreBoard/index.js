import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore/Index";
import VsPlayer from "../../components/VSPlayer";
import "./style.css";

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Player2")}
        </header>
    `;

}

export default ScoreBoard;