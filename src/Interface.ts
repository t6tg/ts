interface SquareConfig {
  readonly color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 200,
  };
}

console.log(createSquare({ color: "pink" }));
