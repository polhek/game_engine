import { GameClient } from "@game/game-client";

export function play() {
  const canvasEl = document.getElementById("game-canvas") as HTMLCanvasElement;
  const gameClient = new GameClient(canvasEl);
  gameClient.start();
}
