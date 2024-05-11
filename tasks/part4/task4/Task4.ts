class Account {
  private balance: number;

  public getBalance(): number {
    return this.balance;
  }

  public applyCommission(): void {
    const commission = 0.05;
    this.balance -= this.balance * commission;
  }
}
