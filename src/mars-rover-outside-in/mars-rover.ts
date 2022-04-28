interface Rover {
  x: number;
  y: number;
  direction: "N" | "E" | "S" | "W";
}

export class MarsRover {
  public execute(commands: string): string {
    let rover: Rover = {
      x: 0,
      y: 0,
      direction: "N"
    };
    commands.split("").forEach(command => {
      if (command === "L") rover = this.rotateLeft(rover);
      if (command === "R") rover = this.rotateRight(rover);
      if (command === "M") rover = this.move(rover);
    });
    return `${rover.x}:${rover.y}:${rover.direction}`;
  }

  private rotateLeft(rover: Rover): Rover {
    if (rover.direction === "N") return { ...rover, direction: "W" };
    if (rover.direction === "W") return { ...rover, direction: "S" };
    if (rover.direction === "S") return { ...rover, direction: "E" };
    return { ...rover, direction: "N" };
  }

  private rotateRight(rover: Rover): Rover {
    if (rover.direction === "N") return { ...rover, direction: "E" };
    if (rover.direction === "E") return { ...rover, direction: "S" };
    if (rover.direction === "S") return { ...rover, direction: "W" };
    return { ...rover, direction: "N" };
  }

  private move(rover: Rover): Rover {
    if (rover.direction === "N")
      return { ...rover, y: rover.y < 10 ? rover.y + 1 : 0 };
    if (rover.direction === "E")
      return { ...rover, x: rover.x < 10 ? rover.x + 1 : 0 };
    if (rover.direction === "W")
      return { ...rover, x: rover.x > 0 ? rover.x - 1 : 10 - 1 };
    return { ...rover, y: rover.y > 0 ? rover.y - 1 : 10 - 1 };
  }
}
