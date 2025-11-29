export interface DrugData {
  name: string;
  expiresIn: number;
  benefit: number;
}

export interface Drug {
  name: string;
  expiresIn: number;
  benefit: number;
  update(): void;
}

export const types: Record<string, (data: DrugData) => Drug> = {
  'Herbal Tea': ({ name, expiresIn, benefit }: DrugData) => ({
    name,
    expiresIn,
    benefit,
    update() {
      this.expiresIn -= 1;
      this.benefit = Math.min(50, this.benefit + 1);
    },
  }),

  Fervex: ({ name, expiresIn, benefit }: DrugData) => ({
    name,
    expiresIn,
    benefit,
    update() {
      this.expiresIn -= 1;
      if (this.expiresIn < 0) {
        this.benefit = 0;
      } else if (this.expiresIn <= 5) {
        this.benefit += 3;
      } else if (this.expiresIn <= 10) {
        this.benefit += 2;
      } else {
        this.benefit += 1;
      }
      this.benefit = Math.min(50, this.benefit);
    },
  }),

  'Magic Pill': ({ name, expiresIn, benefit }: DrugData) => ({
    name,
    expiresIn,
    benefit,
    update() {
      /* does nothing */
    },
  }),
};
