import ConcreteObserver from "./Observer";
import ConcreteSubject from "./Subject";

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver("Nandha");
const observer2 = new ConcreteObserver("Kumar");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState("observer");
// Output:
// Nandha received an update: state updated as observer
// Kumar received an update: state updated as observer

subject.removeObserver(observer1);
subject.setState("pattern");
// Output:
// Kumar received an update: state updated as pattern
