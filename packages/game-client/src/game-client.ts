import { Renderer } from "./renderer";

export class GameClient {
  private #ctx: CanvasRenderingContext2D;

  // Rendering
  private #renderer: Renderer;
  private #animationFrameId: number;

  constructor(htmlCanvas: HTMLCanvasElement) {
    console.log("GameClient created");
    console.log("htmlCanvas", htmlCanvas);
    this.#ctx = htmlCanvas.getContext("2d")!;

    this.#renderer = new Renderer(this.#ctx);
  }

  public start() {
    const tick = () => {
      this.update();
      this.#renderer.render();
      this.#animationFrameId = requestAnimationFrame(tick);
    };
    tick();
  }

  public stop() {}

  private update() {
    console.log("update");
  }
}
