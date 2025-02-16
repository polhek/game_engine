import { play } from "./play";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <dv class="game-container">
    <canvas id="game-canvas"></canvas>
  </div>
`;

play();
