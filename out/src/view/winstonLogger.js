"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logging = void 0;
const winston_1 = __importDefault(require("winston"));
const { combine, splat, simple, prettyPrint } = winston_1.default.format;
exports.logging = winston_1.default.createLogger({
    level: "info",
    format: combine(splat(), simple()),
    transports: [new winston_1.default.transports.Console()],
});
