class Printer {
  print(document: string) {
    console.log(`Printing ${document}`);
  }
}

class SecurePrinter {
  private readonly printer: Printer = new Printer();

  printSecurely(document: string) {
    console.log(`Printing securely ${document}`);
    this.printer.print(document);
  }
}
