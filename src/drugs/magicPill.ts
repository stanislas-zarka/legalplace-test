import { Drug } from './drug.ts';

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Magic Pill', expiresIn, benefit);
  }

  update() {
    // Magic Pill does not age or lose benefit
  }
}
