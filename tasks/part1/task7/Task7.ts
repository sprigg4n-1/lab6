class DateUtils {
  public static isWeekend(date: Date): boolean {
    const dayOfWeek = date.getDay();

    return dayOfWeek === 7 || dayOfWeek === 0;
  }
}

class Client {
  public doSomething(): void {
    const date = new Date();

    if (DateUtils.isWeekend(date)) {
      console.log(`It is weekend`);
    } else {
      console.log(`It is not weekend`);
    }
  }
}
