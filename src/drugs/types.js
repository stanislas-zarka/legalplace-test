export const types = {
  "Herbal Tea": ({ name, expiresIn, benefit }) => ({
    name,
    expiresIn,
    benefit,
    update() {
      this.expiresIn -= 1;
      this.benefit = Math.min(50, this.benefit + 1);
    },
  }),

  Fervex: ({ name, expiresIn, benefit }) => ({
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

  "Magic Pill": ({ name, expiresIn, benefit }) => ({
    name,
    expiresIn,
    benefit,
    update() {
      /* does nothing */
    },
  }),
};
