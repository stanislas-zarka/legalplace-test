import { Pharmacy } from '../../src/pharmacy/pharmacy.ts';
import { HerbalTea } from '../../src/drugs/herbalTea.ts';
import { Dafalgan } from '../../src/drugs/dafalgan.ts';
import { Drug } from '../../src/drugs/drug.ts';

describe('Pharmacy', () => {
  it('calls update() on each drug', () => {
    const doliprane = new Drug('Doliprane', 10, 20);
    const herbalTea = new HerbalTea(5, 10);

    // On spy sur update
    const spyDoliprane = jest.spyOn(doliprane, 'update');
    const spyHerbalTea = jest.spyOn(herbalTea, 'update');

    const pharmacy = new Pharmacy([doliprane, herbalTea]);

    pharmacy.updateBenefitValue();

    expect(spyDoliprane).toHaveBeenCalledTimes(1);
    expect(spyHerbalTea).toHaveBeenCalledTimes(1);
  });

  it('returns the updated drugs array', () => {
    const drug = new HerbalTea(5, 10); // vrai Drug

    const pharmacy = new Pharmacy([drug]);
    const result = pharmacy.updateBenefitValue();

    expect(result[0].expiresIn).toBe(4);
    expect(result[0].benefit).toBe(11);
  });

  it('works with an empty drug list', () => {
    const pharmacy = new Pharmacy([]);
    expect(pharmacy.updateBenefitValue()).toEqual([]);
  });

  it('updates Dafalgan correctly', () => {
    const dafalgan = new Dafalgan(1, 20);

    const pharmacy = new Pharmacy([dafalgan]);
    pharmacy.updateBenefitValue();

    // Dafalgan se dégrade deux fois plus vite
    expect(dafalgan.benefit).toBe(18);
    expect(dafalgan.expiresIn).toBe(0);
  });
});
