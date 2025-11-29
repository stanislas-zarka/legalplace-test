import type { Drug } from '../drugs/types.ts';

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.update());
    return this.drugs;
  }
}
