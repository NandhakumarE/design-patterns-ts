import { Observer } from "./Observer";

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(message: string): void;
}

export default class ConcreteSubject implements Subject {
  private observers: Observer[];
  private state: string;

  constructor() {
    this.observers = [];
    this.state = "";
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(
      (eachObserver) => eachObserver !== observer
    );
  }

  public notifyObservers(message: string): void {
    this.observers.forEach((eachObserver: Observer) => {
      eachObserver.update(message);
    });
  }

  public setState(value: string): void {
    this.state = value;
    this.notifyObservers(`state updated as ${value}`);
  }

  public getState() {
    return this.state;
  }
}
