"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageConfig = void 0;
const LanguageMap_1 = require("../model/LanguageMap");
const getLanguageConfig = (language) => {
    const languageInterface = LanguageMap_1.LanguageMap.get(language);
    if (!languageInterface) {
        throw new Error("Unimplemented Languaguage");
    }
    return languageInterface;
};
exports.getLanguageConfig = getLanguageConfig;
