class Client {
  public isWeekend(date: Date): boolean {
    const dayOfWeek = date.getDay();

    return dayOfWeek === 6 || dayOfWeek === 0;
  }

  public doSomething(): void {
    const date = new Date();

    if (this.isWeekend(date)) {
      console.log(`It is weekend`);
    } else {
      console.log(`It is not weekend`);
    }
  }
}
