import type { Drug, DrugData } from './types.ts';
import { types } from './types.ts';

export function createDrug(data: DrugData): Drug {
  return (types[data.name] ?? baseDrug)(data);
}

const baseDrug = ({ name, expiresIn, benefit }: DrugData): Drug => ({
  name,
  expiresIn,
  benefit,
  update() {
    this.expiresIn -= 1;
    this.benefit = Math.max(0, this.benefit - 1);
  },
});
