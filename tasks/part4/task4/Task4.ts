class Account {
  private balance: number;

  public getBalance(): number {
    const commission = 0.05;

    this.balance -= this.balance * commission;

    return this.balance;
  }
}
