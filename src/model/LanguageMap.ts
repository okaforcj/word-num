
import { English } from "../config/English";
import { LanguageEnum } from "./LanguageEnum";
import { LanguageInterface } from "./LanguageInterface";



/** Cast to readonly map to ensure immutability  */
export const LanguageMap: ReadonlyMap<LanguageEnum, LanguageInterface> = new Map<LanguageEnum, LanguageInterface>([
    [LanguageEnum.ENGLISH, English]
  ]);

  export const shortLanguageCodeMapper: ReadonlyMap<string, LanguageEnum> = new Map<string, LanguageEnum>([
    [LanguageEnum.ENGLISH, LanguageEnum.ENGLISH],
    [LanguageEnum.FRENCH, LanguageEnum.FRENCH],
    [LanguageEnum.SPANISH, LanguageEnum.SPANISH]
  ]);