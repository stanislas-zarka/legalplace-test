import { types } from './types.js';

export function createDrug(data) {
  return (types[data.name] ?? baseDrug)(data);
}

const baseDrug = ({ name, expiresIn, benefit }) => ({
  name,
  expiresIn,
  benefit,
  update() {
    this.expiresIn -= 1;
    this.benefit = Math.max(0, this.benefit - 1);
  },
});
