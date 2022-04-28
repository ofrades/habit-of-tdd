import { MarsRover } from "../mars-rover";

describe("[mars-rover]", () => {
  describe.each`
    commands          | expectedPosition
    ${"MMRMMLM"}      | ${"2:3:N"}
    ${"RMMMMMMMMMMM"} | ${"0:0:E"}
    ${"MMMMMMMMMMM"}  | ${"0:0:N"}
  `("when receive command $commands", ({ commands, expectedPosition }) => {
    it(`should move to ${expectedPosition}`, () => {
      const rover = new MarsRover();
      const run = rover.execute(commands);

      expect(run).toBe(expectedPosition);
    });
  });
});
