"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageParser = exports.allowedIntParser = void 0;
const commander_1 = require("commander");
const LanguageMap_1 = require("../model/LanguageMap");
const allowedIntParser = (value) => {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
        throw new commander_1.InvalidArgumentError("Not a valid integer number.");
    }
    else if (parsedValue < 0 || parsedValue > 100000) {
        throw new commander_1.InvalidArgumentError("Number must be within the 0 and 100000 range");
    }
    return parsedValue;
};
exports.allowedIntParser = allowedIntParser;
const languageParser = (shortcode) => {
    const languageEnum = LanguageMap_1.shortLanguageCodeMapper.get(shortcode);
    if (languageEnum) {
        return languageEnum;
    }
    throw new commander_1.InvalidArgumentError("Invalid Language; \n\n Use `show langs` or `help` command for more info\n");
};
exports.languageParser = languageParser;
