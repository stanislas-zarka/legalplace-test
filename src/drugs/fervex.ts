import { Drug } from './drug.ts';

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Fervex', expiresIn, benefit);
  }
  update() {
    this.expiresIn -= 1;
    if (this.expiresIn < 0) {
      this.benefit = 0;
      return;
    }
    if (this.expiresIn <= 5) {
      this.benefit += 3;
    } else if (this.expiresIn <= 10) {
      this.benefit += 2;
    } else {
      this.benefit += 1;
    }
    this.clampBenefit();
  }
}
