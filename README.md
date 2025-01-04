# Design Patterns in TypeScript

Welcome to the Design Patterns in TypeScript repository! 🎨 This collection showcases common design patterns in TypeScript, helping developers learn and build better, more scalable applications.

## About This Repository

Design patterns are proven solutions to common software design problems. This repository covers a variety of patterns categorised into **Creational**, **Structural**, and **Behavioural** types, with real-world examples written in TypeScript.

Each pattern includes:

* A concise explanation.
* TypeScript implementation.
* Use cases and benefits.

## Patterns Included

### 1. Creational Patterns
* **[Factory Pattern](https://github.com/NandhakumarE/design-patterns-ts/tree/main/src/factory-pattern)**: Encapsulate object creation logic for better scalability.
* **[Builder Pattern](https://github.com/NandhakumarE/design-patterns-ts/tree/main/src/builder-pattern)**: Construct complex objects step-by-step.
* **Singleton Pattern**: Ensure a class has only one instance.

### 2. Structural Patterns
* **Adapter Pattern**: Bridge mismatched interfaces to ensure compatibility.
* **Decorator Pattern**: Dynamically add behavior to objects.
* **Facade Pattern**: Simplify complex subsystems with a unified interface.

### 3. Behavioural Patterns
* **[Observer Pattern](https://github.com/NandhakumarE/design-patterns-ts/tree/main/src/observer-pattern)**: Establish a publisher-subscriber relationship between objects.
* **Strategy Pattern**: Define interchangeable algorithms for runtime flexibility.

## **Getting Started**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/) (v4.0 or higher)

### **Installation**
1. Clone the repository:
   ```bash
    git clone https://github.com/NandhakumarE/design-patterns-ts.git
   ```

2. Navigate to the project folder:
   ```bash
    cd design-patterns-ts
   ```

3. Install dependencies:
   ```bash
    npm install
   ```
  
### Run Examples
Every design pattern folder includes a test runner file to execute its implementation.
To run an example:

1. Use `npx ts-node` to execute the test file from the src directory:
   ```bash
    npx ts-node src/<pattern-folder>/<PatternTestFile>.ts
   ```
   Replace `<pattern-folder>` with the specific pattern folder (e.g., `builder-pattern`) and `<PatternTestFile>` with the test file name (e.g., `BuilderPatternTest.ts`).

   Example:
   ```bash
     npx ts-node src/builder-pattern/BuilderPatternTest.ts
   ```
  
### Connect With Me
💼 [LinkedIn - Nandhakumar Eswaran](https://www.linkedin.com/in/nandhakumar-eswaran-dev)
