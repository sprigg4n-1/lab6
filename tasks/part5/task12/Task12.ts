class Printer {
  print(document: string) {
    console.log(`Printing ${document}`);
  }
}

class SecurePrinter extends Printer {
  printSecurely(document: string) {
    console.log(`Printing securely ${document}`);
    this.print(document);
  }
}
