export class Renderer {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    console.log("Renderer created");
    console.log("ctx", ctx);
    this.ctx = ctx;
    this.resizeCanvas();
  }

  public resizeCanvas() {
    this.ctx.canvas.width = window.innerWidth * window.devicePixelRatio;
    this.ctx.canvas.height = window.innerHeight * window.devicePixelRatio;
    this.ctx.canvas.style.width = `${window.innerWidth}px`;
    this.ctx.canvas.style.height = `${window.innerHeight}px`;
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  public render() {
    // Paint some random text
    console.log("Rendering...");
  }
}
