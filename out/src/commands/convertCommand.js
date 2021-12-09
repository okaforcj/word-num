"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCommand = void 0;
const LanguageEnum_1 = require("../model/LanguageEnum");
const rootCommand_1 = require("../program/rootCommand");
const TransformerService_1 = require("../service/TransformerService");
const CustomParser_1 = require("../util/CustomParser");
const convertCommand = () => rootCommand_1.rootCommand
    .command("convert")
    .option("-l, --lang <lang>", "Language to convert number to", CustomParser_1.languageParser)
    .argument("<number>", "Number to Convert", CustomParser_1.allowedIntParser)
    .description("Convert Numbers to Words")
    .action((num, lang) => {
    if (JSON.stringify(lang) === "{}") {
        console.log((0, TransformerService_1.numToWords)(num, LanguageEnum_1.LanguageEnum.ENGLISH));
        return;
    }
    console.log((0, TransformerService_1.numToWords)(num, lang.lang));
});
exports.convertCommand = convertCommand;
