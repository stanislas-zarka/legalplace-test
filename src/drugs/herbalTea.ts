import { Drug } from './drug.ts';

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Herbal Tea', expiresIn, benefit);
  }

  update() {
    this.expiresIn -= 1;
    this.benefit += 1;
    this.clampBenefit();
  }
}
