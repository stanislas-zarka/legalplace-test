import { Pharmacy } from '../../src/pharmacy/pharmacy.ts';

describe('Pharmacy', () => {
  it('calls update() on each drug', () => {
    const drugA = { update: jest.fn() } as any;
    const drugB = { update: jest.fn() } as any;
    const pharmacy = new Pharmacy([drugA, drugB]);

    pharmacy.updateBenefitValue();

    expect(drugA.update).toHaveBeenCalledTimes(1);
    expect(drugB.update).toHaveBeenCalledTimes(1);
  });

  it('returns the updated drugs array', () => {
    const drug = {
      expiresIn: 5,
      benefit: 10,
      update() {
        this.expiresIn -= 1;
        this.benefit += 1;
      },
    } as any;

    const pharmacy = new Pharmacy([drug]);
    const result = pharmacy.updateBenefitValue();

    expect(result[0].expiresIn).toBe(4);
    expect(result[0].benefit).toBe(11);
  });

  it('works with an empty drug list', () => {
    const pharmacy = new Pharmacy([]);
    expect(pharmacy.updateBenefitValue()).toEqual([]);
  });
});
