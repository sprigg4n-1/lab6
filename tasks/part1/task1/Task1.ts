class Account {
  private balance: number;
  private interstRate: number;

  public calculateInterst(): void {
    const interest: number = (this.balance * this.interstRate) / 100;
    console.log(`Interest calculated: ${interest}`);
  }
}

class Bank {
  private accounts: Account[] = [];

  public processAccounts(): void {
    this.accounts.forEach((account) => {
      account.calculateInterst();
    });
  }
}
