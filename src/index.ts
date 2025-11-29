import { writeFile } from 'fs/promises';
import { Pharmacy } from './pharmacy/pharmacy.ts';
import { createDrug } from './drugs/factory.ts';

export async function simulate(days = 30) {
  const drugs = [
    createDrug({ name: 'Doliprane', expiresIn: 20, benefit: 30 }),
    createDrug({ name: 'Herbal Tea', expiresIn: 10, benefit: 5 }),
    createDrug({ name: 'Fervex', expiresIn: 12, benefit: 35 }),
    createDrug({ name: 'Magic Pill', expiresIn: 15, benefit: 40 }),
  ];

  const pharmacy = new Pharmacy(drugs);
  const log: Array<Array<Record<string, unknown>>> = [];

  for (let day = 0; day < days; day++) {
    const updated = pharmacy.updateBenefitValue();
    log.push(updated.map((drug) => ({ ...drug })));
  }

  await writeFile('./output.json', JSON.stringify({ result: log }, null, 2));
  // eslint-disable-next-line no-console
  console.log('Simulation complete');
}

// eslint-disable-next-line no-console
console.log('Starting simulation for 30 days...');
simulate();
