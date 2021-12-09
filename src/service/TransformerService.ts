import { LanguageEnum } from "../model/LanguageEnum";
import { LanguageInterface } from "../model/LanguageInterface";
import { getLanguageConfig } from "./LangMapperService";


export const numToWords = (num: number, languageEnum: LanguageEnum) => {
  const language = getLanguageConfig(languageEnum);
  if (num == 0) {
    return language.zero;
  }
  return _numToWords(num, language);
};

/** Recursive function to break down numbers to their smallest unit */
const _numToWords = (num: number, language: LanguageInterface): string => {
  let word = "";

  if (num < 20) {
    return language.to19[num];
  } 
  /** ~~(arg1/arg2(10s)) to get integer divisor */
  else if (num < 100) {
    const ones = _numToWords(num % 10, language);
    const tens = language.tens[~~(num / 10) - 1];
    return ones ? tens.concat("-",ones) : tens;
  }
  else if (num < 1000) {
    const tens = _numToWords(num % 100, language);
    const hundreds = _numToWords(~~(num / 100), language);
    return tens
      ? hundreds.concat(` ${language.denom[0]} and `,tens)
      : hundreds.concat(` ${language.denom[0]}`);
  } else if (num < 1000000) {
    const hundreds = _numToWords(num % 1000, language);
    const thousands = _numToWords(~~(num / 1000), language);
    return hundreds
      ? thousands
          .concat(
            ` ${language.denom[1]} ${hundreds.includes("and") ? "" : "and "}`
          )
          .concat(hundreds)
      : thousands.concat(` ${language.denom[1]}`);
  }

  return word;
};
