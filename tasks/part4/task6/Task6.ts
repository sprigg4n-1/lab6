class Printer {
  public printDocument(type: string, content: string): void {
    if ('text' === type) {
      console.log(`Printing text document: ${content}`);
    } else if ('image' === type) {
      console.log(`Printing image document: ${content}`);
    } else {
      console.log(`Unknown document type: ${type}`);
    }
  }
}
