import LoggerFactory, { LOGGER_TYPE } from "./FactoryClass";

const logger1 = LoggerFactory.createLogger(LOGGER_TYPE.DEVELOPMENT);
const logger2 = LoggerFactory.createLogger(LOGGER_TYPE.PRODUCTION);

logger1.log("Server ON");
//[DEVELOPMENT LOG]: Server ON
logger2.log("Server ON");
//[PRODUCTION LOG]: Server ON

logger1.reportToService("Error!");
//[DEVELOPMENT REPORT TO SERVICE]: Error!
logger2.reportToService("Performance Issue!");
//[PRODUCTION REPORT TO SERVICE]: Performance Issue!
if (Number(process.env.NODE_ENV) === LOGGER_TYPE.DEVELOPMENT) {
}
