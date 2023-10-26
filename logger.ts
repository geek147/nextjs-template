import pino from "pino";

const currentLevel = process.env.LOG_LEVEL || 'info';

const logger = pino({
    level: currentLevel
});

export default logger;
