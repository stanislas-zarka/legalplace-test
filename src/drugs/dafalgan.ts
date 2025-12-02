import { Drug } from './drug.ts';

export class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Dafalgan', expiresIn, benefit);
  }

  update() {
    this.expiresIn -= 1;

    // Dégradation normale
    let degradation = 1;

    // Si expire date passée, double la dégradation
    if (this.expiresIn < 0) {
      degradation *= 2;
    }

    // Comme Dafalgan se dégrade deux fois plus vite que normal
    degradation *= 2;

    this.benefit -= degradation;

    this.clampBenefit();
  }
}
