"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortLanguageCodeMapper = exports.LanguageMap = void 0;
const English_1 = require("../config/English");
const LanguageEnum_1 = require("./LanguageEnum");
/** Cast to readonly map to ensure immutability  */
exports.LanguageMap = new Map([
    [LanguageEnum_1.LanguageEnum.ENGLISH, English_1.English]
]);
exports.shortLanguageCodeMapper = new Map([
    [LanguageEnum_1.LanguageEnum.ENGLISH, LanguageEnum_1.LanguageEnum.ENGLISH],
    [LanguageEnum_1.LanguageEnum.FRENCH, LanguageEnum_1.LanguageEnum.FRENCH],
    [LanguageEnum_1.LanguageEnum.SPANISH, LanguageEnum_1.LanguageEnum.SPANISH]
]);
