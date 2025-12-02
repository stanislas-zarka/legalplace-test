import { writeFile } from 'fs/promises';
import { Pharmacy } from './pharmacy/pharmacy.ts';
import { Drug } from './drugs/drug.ts';
import { HerbalTea } from './drugs/herbalTea.ts';
import { Fervex } from './drugs/fervex.ts';
import { MagicPill } from './drugs/magicPill.ts';

export async function simulate(days = 30) {
  const drugs = [
    new Drug('Doliprane', 20, 30),
    new HerbalTea(10, 5),
    new Fervex(12, 35),
    new MagicPill(15, 40),
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
