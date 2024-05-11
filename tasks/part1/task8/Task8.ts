class DateHelper {
  public static addDays(date: Date, days: number): Date {
    return date;
  }
}

class DataHelperExtended extends DateHelper {
  public static differenceInDays(startDate: Date, endDate: Date): number {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    return Math.round(differenceInMilliseconds / millisecondsPerDay);
  }
}
