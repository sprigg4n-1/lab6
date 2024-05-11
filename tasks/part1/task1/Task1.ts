class Account {
  private _balance: number;

  private _interstRate: number;

  public get balance(): number {
    return this._balance;
  }
  public set balance(value: number) {
    this._balance = value;
  }
  public get interstRate(): number {
    return this._interstRate;
  }
  public set interstRate(value: number) {
    this._interstRate = value;
  }
}

class Bank {
  private accounts: Account[] = [];

  public calulateInterest(acc: Account): void {
    const interest: number = (acc.balance * acc.interstRate) / 100;
    console.log(`Interest calculated: ${interest}`);
  }

  public processAccounts(): void {
    this.accounts.forEach((account) => {
      this.calulateInterest(account);
    });
  }
}
