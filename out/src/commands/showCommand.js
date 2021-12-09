"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showCommand = void 0;
const LanguageEnum_1 = require("../model/LanguageEnum");
const rootCommand_1 = require("../program/rootCommand");
const showCommand = () => rootCommand_1.rootCommand
    .command("show langs")
    .description("Show Available languages")
    .action(() => {
    console.log(`Available languages : ${Object.values(LanguageEnum_1.LanguageEnum)}`);
});
exports.showCommand = showCommand;
