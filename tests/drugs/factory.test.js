import { createDrug } from "../../src/drugs/factory.js";
import { types } from "../../src/drugs/types.js";

describe("createDrug", () => {
  it("uses the matching strategy when the name exists in types", () => {
    const mockStrategy = jest.fn().mockReturnValue({ ok: true });
    types["TestDrug"] = mockStrategy;

    const drug = createDrug({ name: "TestDrug", expiresIn: 10, benefit: 5 });

    expect(mockStrategy).toHaveBeenCalledWith({
      name: "TestDrug",
      expiresIn: 10,
      benefit: 5,
    });
    expect(drug).toEqual({ ok: true });

    delete types["TestDrug"];
  });

  it("returns baseDrug instance when name is unknown", () => {
    const drug = createDrug({ name: "Unknown", expiresIn: 5, benefit: 10 });

    expect(drug.name).toBe("Unknown");
    expect(drug.expiresIn).toBe(5);
    expect(drug.benefit).toBe(10);
    expect(typeof drug.update).toBe("function");
  });

  it("baseDrug.update decreases expiresIn and benefit (min 0)", () => {
    const drug = createDrug({ name: "Unknown", expiresIn: 1, benefit: 2 });

    drug.update();

    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(1);
  });

  it("baseDrug.update never allows benefit to go below 0", () => {
    const drug = createDrug({ name: "Unknown", expiresIn: 2, benefit: 0 });

    drug.update();

    expect(drug.benefit).toBe(0);
    expect(drug.expiresIn).toBe(1);
  });
});
