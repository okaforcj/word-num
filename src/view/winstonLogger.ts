import winston from "winston";
const { combine, splat, simple, prettyPrint } = winston.format;

export const logging = winston.createLogger({
  level: "info",
  format: combine(splat(), simple()),
  transports: [new winston.transports.Console()],
});
