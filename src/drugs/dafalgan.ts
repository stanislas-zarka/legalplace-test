import { Drug } from './drug.ts';

export class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Dafalgan', expiresIn, benefit);
  }

  update() {
    this.expiresIn -= 1;
    // Base degradation rate for a normal drug
    let degradation = 1;
    // If the drug is past its expiration date, double the degradation
    if (this.expiresIn < 0) {
      degradation *= 2;
    }
    // Dafalgan degrades twice as fast as a normal drug
    degradation *= 2;
    // Apply the calculated degradation to the benefit
    this.benefit -= degradation;
    this.clampBenefit();
  }
}
