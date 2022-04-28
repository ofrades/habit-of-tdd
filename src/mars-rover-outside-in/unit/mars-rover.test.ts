import { MarsRover } from "../mars-rover";

describe("[rotateLeft]", () => {
  describe.each`
    commands  | expectedPosition
    ${"L"}    | ${"0:0:W"}
    ${"LL"}   | ${"0:0:S"}
    ${"LLL"}  | ${"0:0:E"}
    ${"LLLL"} | ${"0:0:N"}
  `("when receive command $commands", ({ commands, expectedPosition }) => {
    it(`should move to ${expectedPosition}`, () => {
      const rover = new MarsRover();
      const run = rover.execute(commands);

      expect(run).toBe(expectedPosition);
    });
  });
});

describe("[rotateRight]", () => {
  describe.each`
    commands  | expectedPosition
    ${"R"}    | ${"0:0:E"}
    ${"RR"}   | ${"0:0:S"}
    ${"RRR"}  | ${"0:0:W"}
    ${"RRRR"} | ${"0:0:N"}
  `("when receive command $commands", ({ commands, expectedPosition }) => {
    it(`should move to ${expectedPosition}`, () => {
      const rover = new MarsRover();
      const run = rover.execute(commands);

      expect(run).toBe(expectedPosition);
    });
  });
});

describe("[move]", () => {
  describe.each`
    commands          | expectedPosition
    ${"M"}            | ${"0:1:N"}
    ${"MM"}           | ${"0:2:N"}
    ${"MMRM"}         | ${"1:2:E"}
    ${"MMRMLLM"}      | ${"0:2:W"}
    ${"MMRMLLMLMM"}   | ${"0:0:S"}
    ${"LM"}           | ${"9:0:W"}
    ${"LLM"}          | ${"0:9:S"}
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
