export interface Observer {
  update(message: string): void;
}

export default class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  public update(message: string): void {
    console.log(`${this.name} received an update: ${message}`);
  }
}
