// Interface Logger
interface ILogger {
  log(message: string): void;
  reportToService(message: string): void;
}

// Base Class Logger
class Logger implements ILogger {
  log(message: string) {
    console.log(`[BASE LOG]: ${message}`);
  }
  reportToService(message: string) {
    console.log(`[BASE REPORT TO SERVICE]: ${message}`);
  }
}

// Development Logger
class DevelopmentLogger extends Logger {
  log(message: string) {
    console.log(`[DEVELOPMENT LOG]: ${message}`);
  }
  reportToService(message: string) {
    console.log(`[DEVELOPMENT REPORT TO SERVICE]: ${message}`);
  }
}

// Production Logger
class ProductionLogger extends Logger {
  log(message: string) {
    console.log(`[PRODUCTION LOG]: ${message}`);
  }
  reportToService(message: string) {
    console.log(`[PRODUCTION REPORT TO SERVICE]: ${message}`);
  }
}

/************   Factory    ************/
export enum LOGGER_TYPE {
  DEVELOPMENT,
  PRODUCTION,
}

// LoggerFactory
class LoggerFactory {
  public static createLogger(type: LOGGER_TYPE): Logger {
    switch (type) {
      case LOGGER_TYPE.DEVELOPMENT:
        return new DevelopmentLogger();
      case LOGGER_TYPE.PRODUCTION:
        return new ProductionLogger();
      default:
        return new Logger();
    }
  }
}

export default LoggerFactory;
