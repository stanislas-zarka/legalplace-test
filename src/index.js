import fs from "fs/promises";
import { Pharmacy } from "./pharmacy/pharmacy.js";
import { createDrug } from "./drugs/factory.js";

async function simulate(days = 30) {
  const drugs = [
    createDrug({ name: "Doliprane", expiresIn: 20, benefit: 30 }),
    createDrug({ name: "Herbal Tea", expiresIn: 10, benefit: 5 }),
    createDrug({ name: "Fervex", expiresIn: 12, benefit: 35 }),
    createDrug({ name: "Magic Pill", expiresIn: 15, benefit: 40 }),
  ];

  const pharmacy = new Pharmacy(drugs);
  const log = [];

  for (let day = 0; day < days; day++) {
    const updated = pharmacy.updateBenefitValue();
    log.push(updated.map(drug => ({ ...drug })));
  }

  await fs.writeFile("./output.json", JSON.stringify({ result: log }, null, 2));
  console.log("Simulation complete");
}

simulate();
