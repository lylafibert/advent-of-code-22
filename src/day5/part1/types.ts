export type Crates = Record<number, string[]>;

export interface Instruction {
  move: number;
  from: number;
  to: number;
}

export type RearrangementProcedure = Instruction[];
