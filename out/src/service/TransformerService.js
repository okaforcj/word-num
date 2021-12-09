"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToWords = void 0;
const LangMapperService_1 = require("./LangMapperService");
const numToWords = (num, languageEnum) => {
    const language = (0, LangMapperService_1.getLanguageConfig)(languageEnum);
    if (num == 0) {
        return language.zero;
    }
    return _numToWords(num, language);
};
exports.numToWords = numToWords;
/** Recursive function to break down numbers to their smallest unit */
const _numToWords = (num, language) => {
    let word = "";
    if (num < 20) {
        return language.to19[num];
    }
    /** ~~(arg1/arg2(10s)) to get integer divisor */
    else if (num < 100) {
        const ones = _numToWords(num % 10, language);
        const tens = language.tens[~~(num / 10) - 1];
        return ones ? tens.concat("-", ones) : tens;
    }
    else if (num < 1000) {
        const tens = _numToWords(num % 100, language);
        const hundreds = _numToWords(~~(num / 100), language);
        return tens
            ? hundreds.concat(` ${language.denom[0]} and `, tens)
            : hundreds.concat(` ${language.denom[0]}`);
    }
    else if (num < 1000000) {
        const hundreds = _numToWords(num % 1000, language);
        const thousands = _numToWords(~~(num / 1000), language);
        return hundreds
            ? thousands
                .concat(` ${language.denom[1]} ${hundreds.includes("and") ? "" : "and "}`)
                .concat(hundreds)
            : thousands.concat(` ${language.denom[1]}`);
    }
    return word;
};
