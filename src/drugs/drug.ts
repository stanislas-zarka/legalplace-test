export class Drug {
  public name: string;
  public expiresIn: number;
  public benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  update() {
    this.expiresIn -= 1;
    if (this.benefit > 0) {
      this.benefit -= 1;
    }
    if (this.expiresIn < 0 && this.benefit > 0) {
      this.benefit -= 1;
    }
  }

  protected clampBenefit() {
    this.benefit = Math.max(0, Math.min(50, this.benefit));
  }
}
